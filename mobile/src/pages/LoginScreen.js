import React, { useMemo } from 'react'
import { StyleSheet, KeyboardAvoidingView, Image, Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { color, image } from '../themes'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'


const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required("Campo vazio"),
  password: yup.string().required('Campo vazio'),
})

const LoginScreen = () => {
  const navigation = useNavigation()
  const { formState, control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    Alert.alert("form", data.email + ' ' + data.password)
    navigation.navigate('HomeScreen')
  }

  const enabledButton = useMemo(() => {
    const dirtyKeys = Object.keys(formState.dirtyFields)
    const errorKeys = Object.keys(formState.errors)

    const allFieldsFilled = dirtyKeys.length === 2 && formState.isDirty
    const noError = errorKeys.length === 0

    return allFieldsFilled && noError 
  }, [formState])

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <Image source={image.logo} style={styles.logo} />
      <Controller
        as={Input} 
        name='email'
        control={control}
        onChange={(args) => args[0].nativeEvent.text}
        defaultValue=''
        placeholder='E-mail' 
        keyboardType='email-address'
        error={errors.email?.message} />
      <Controller 
        as={Input} 
        name='password'
        control={control}
        onChange={(args) => args[0].nativeEvent.text}
        defaultValue=''
        placeholder='Senha' 
        secureTextEntry
        error={errors.password?.message} />
      <Button 
        title='Entrar' 
        disabled={!enabledButton} 
        backgroundColor={color.rosa} 
        onPress={handleSubmit(onSubmit)} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.roxo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
      width: 150,
      height: 150,
      marginBottom: 50
  }
})
