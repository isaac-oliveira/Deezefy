import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { color, image } from "../themes";
import Input from "../components/Input";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import useAuth from "../hooks/useAuth";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const { fetching, login } = useAuth();
  const { formState, control, handleSubmit, errors } = useForm();
  const navigation = useNavigation()
  const [ isArtist, setIsArtist ] = useState();

  const onSubmit = ({ email, password }) => {
    login({ email, password });
  };

  function handleBack() {
    navigation.navigate('LoginScreen')
  }

  function handleNext() {
    if (isArtist) {
      navigation.navigate('RegisterArtistScreen')
    }
    else {
      navigation.navigate('RegisterListenerScreen')
    }
    
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
        <Controller
          as={Input}
          name="email"
          control={control}
          defaultValue=""
          placeholder="E-mail"
          keyboardType="email-address"
          error={errors.email?.message}
        />

        <Controller
          as={Input}
          name="password"
          control={control}
          defaultValue=""
          placeholder="Senha"
          secureTextEntry
          error={errors.password?.message}
        />

        <Controller
          as={Input}
          name="data"
          control={control}
          defaultValue=""
          placeholder="Data"
          keyboardType="email-address"
          error={errors.email?.message}
        />

        <CheckBox 
          title="Artista"
          onChange={setIsArtist} />

        <Button
          loading={fetching}
          title="Próximo"
          backgroundColor={color.rosa}
          onPress={handleNext}
        />

        <Button
          loading={fetching}
          title="Voltar"
          textColor={color.rosa}
          backgroundColor={color.branco}
          onPress={handleBack}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegisterScreen;

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
});