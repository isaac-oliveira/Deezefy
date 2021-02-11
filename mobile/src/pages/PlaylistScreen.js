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

const PlaylistScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [query, setQuery] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [data, setData] = useState(playlists);

  useEffect(() => {
    return navigation.addListener("focus", () => {
      Api.getPlaylists().then((response) => {
        setPlaylists(response.data);
      });
    });
  }, []);

  useEffect(() => {
    if (playlists) {
      setData(
        playlists.filter((item) =>
          item.nome.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, playlists]);

  function handleAdd() {
    navigation.navigate("CreatePlaylistScreen");
  }

  function handleLogout() {
    logout();
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={image.itemSmall} />
        <View style={styles.textContainer}>
          <TextFindQuery style={styles.name} query={query}>
            {item.nome}
          </TextFindQuery>
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
      <Text style={styles.title}>Playlist</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.nome)}
        renderItem={renderItem}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 86, paddingTop: 20 }}
      />
      <TouchableOpacity style={styles.fab} onPress={handleAdd}>
        <Image source={image.plus} />
      </TouchableOpacity>
    </View>
  );
};

export default PlaylistScreen;

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
