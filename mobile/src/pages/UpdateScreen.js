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
import Input from "../components/Input";
import Button from "../components/Button";

const schema = yup.object().shape({
  name: yup.string().required("Campo vazio"),
  duration: yup
    .string()
    .trim()
    .min(5, "Tamanho inválido")
    .matches(/[0-5][0-9]:[0-5][0-9]/g, "Formato inválido (mm:ss)")
    .required("Campo vazio"),
});

const UpdateScreen = () => {
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

  function onSubmit() {
    if (item) {
      Alert.alert("Alerta", "Atualizou");
      return;
    }
    Alert.alert("Alerta", "Adicionou");
  }

  function handleDelete() {
    Alert.alert("Alerta", "Deletou");
  }

  const renderDurationInput = ({ onChange, ...rest }) => {
    return (
      <Input
        {...rest}
        placeholder="Duração"
        keyboardType="number-pad"
        error={errors.duration?.message}
        onChangeText={(text) => {
          const duration = text
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{2})/, "$1:$2");
          onChange(duration);
        }}
        maxLength={5}
      />
    );
  };

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
          placeholder="Nome da Música"
          defaultValue={item?.name || ""}
          error={errors.name?.message}
        />
        <Controller
          name="duration"
          control={control}
          defaultValue={item?.duration || ""}
          render={renderDurationInput}
        />
        <Button
          disabled={!enabledButton}
          backgroundColor={color.roxoClaro}
          title={title}
          onPress={handleSubmit(onSubmit)}
        />
        {item && (
          <Button
            backgroundColor={color.rosa}
            title="Deletar"
            onPress={handleDelete}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default UpdateScreen;

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
