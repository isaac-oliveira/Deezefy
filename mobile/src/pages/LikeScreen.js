import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { color, image } from "../themes";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import TextFindQuery from "../components/TextFindQuery";
import Api from "../services/api";

function secondsToTime(secs) {
  var hours = Math.floor(secs / (60 * 60));
  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);
  return minutes + ":" + seconds;
}

const LikeScreen = () => {
  const navigation = useNavigation();
  const { email, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [musics, setMusics] = useState([]);
  const [data, setData] = useState(musics);

  useEffect(() => {
    return navigation.addListener("focus", () => {
      Api.getLikeMusics(email).then((response) => {
        setMusics(response.data);
      });
    });
  }, []);

  useEffect(() => {
    setData(
      musics.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, musics]);

  function handleLogout() {
    logout();
  }

  const renderItem = ({ item, index }) => {
    function handleItem() {
      navigation.navigate("PlayScreen", {
        index,
        data,
      });
    }
    function handleEdit() {
      navigation.navigate("UpdateScreen", {
        item,
      });
    }
    return (
      <TouchableOpacity style={styles.item} onPress={handleItem}>
        <Image source={image.itemSmall} />
        <View style={styles.textContainer}>
          <TextFindQuery style={styles.name} query={query}>
            {item.nome}
          </TextFindQuery>
          <Text style={styles.duration}>
            {secondsToTime(item.duracao / 1000)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={image.search} />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar"
          placeholderTextColor="silver"
        />
        <TouchableOpacity onPress={handleLogout}>
          <Image source={image.logout} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Curte</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 86, paddingTop: 20 }}
      />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.roxo,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: color.branco,
    alignItems: "center",
    justifyContent: "center",
    width: "92%",
    height: 73,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 30,
    paddingLeft: 15,
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  item: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    color: color.branco,
    fontSize: 20,
  },
  duration: {
    color: color.cinza,
    fontSize: 16,
  },
  fab: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: color.rosa,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  title: {
    color: color.branco,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
});
