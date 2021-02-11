import React, { useMemo } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { color, image } from "../themes";
import useAuth from "../hooks/useAuth";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../services/api";

const schema = yup.object().shape({
  name: yup.string().required("Campo vazio"),
  status: yup.string().required("Campo vazio"),
});

const CreatePlaylistScreen = () => {
  const { email } = useAuth();
  const navigation = useNavigation();
  const routes = useRoute();
  const item = routes.params?.item;
  const title = item ? "Salvar" : "Adicionar";

  const { formState, control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function handleBackButton() {
    navigation.goBack();
  }

  async function onSubmit(data) {
    const response = await api.createPlaylist({
      name: data.name,
      status: data.status,
      email,
    });

    if (!response.ok) {
      Alert.alert("Opa!", "Nome já existe");
      return;
    }
    Alert.alert("Sucesso!", response.data.message);
  }

  const enabledButton = useMemo(() => {
    const dirtyKeys = Object.keys(formState.dirtyFields);
    const errorKeys = Object.keys(formState.errors);

    const allFieldsFilled = dirtyKeys.length === 2 && formState.isDirty;
    const noError = errorKeys.length === 0;

    return (allFieldsFilled && noError) || item;
  }, [formState]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: "height", ios: "padding" })}
    >
      <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
        <Image source={image.arrowLeft} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={image.itemBig} style={styles.image} />
        <Controller
          name="name"
          as={Input}
          control={control}
          placeholder="Nome da Playlist"
          defaultValue={""}
          error={errors.name?.message}
        />
        <Controller
          name="status"
          as={Input}
          control={control}
          placeholder="Status"
          defaultValue={""}
          error={errors.status?.message}
        />
        <Button
          disabled={!enabledButton}
          backgroundColor={color.roxoClaro}
          title={title}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.roxo,
    paddingBottom: 20,
  },
  backButton: {
    padding: 15,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
});
