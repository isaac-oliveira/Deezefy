import React, { useMemo } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Text,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { color, image } from "../themes";
import Input from "../components/Input";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'

const RegisterListenerScreen = () => {
  const { fetching, login } = useAuth();
  const { formState, control, handleSubmit, errors } = useForm();
  const navigation = useNavigation()

  const onSubmit = ({ email, password }) => {
    login({ email, password });
  };

  function handleCancel() {
    navigation.navigate('LoginScreen')
  }

  // const enabledButton = useMemo(() => {
  //   const dirtyKeys = Object.keys(formState.dirtyFields);
  //   const errorKeys = Object.keys(formState.errors);

  //   const allFieldsFilled = dirtyKeys.length === 2 && formState.isDirty;
  //   const noError = errorKeys.length === 0;

  //   return allFieldsFilled && noError;
  // });

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ android: "height", ios: "padding" })}
      >
        <Image source={image.logo} style={styles.logo} />

        <Text style={styles.text}>Ouvinte</Text>

        <Controller
          as={Input}
          name="Telefone"
          control={control}
          defaultValue=""
          placeholder="Telefone"
          keyboardType="email-address"
          error={errors.email?.message}
        />

        <Controller
          as={Input}
          name="primeiroNome"
          control={control}
          defaultValue=""
          placeholder="Primeiro Nome"
          error={errors.password?.message}
        />

        <Controller
          as={Input}
          name="sobrenome"
          control={control}
          defaultValue=""
          placeholder="Sobrenome"
          keyboardType="email-address"
          error={errors.email?.message}
          style={styles.input}
        />

        <Button
          loading={fetching}
          title="Cadastrar"
          backgroundColor={color.rosa}
          onPress={handleSubmit(onSubmit)}
        />

        <Button
          loading={fetching}
          title="Cancelar"
          textColor={color.rosa}
          backgroundColor={color.branco}
          onPress={handleCancel}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterListenerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.roxo,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: color.branco
  },
  input: {
    width: 295,
    height:224
  }
});