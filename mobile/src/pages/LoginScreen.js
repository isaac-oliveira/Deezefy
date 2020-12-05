import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { color, image } from '../themes'
import Input from '../components/Input'
import Button from '../components/Button'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image.logo} style={styles.logo} />
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha' secureTextEntry/>
      <Button backgroundColor={color.rosa} title='Entrar' />
    </View>
  )
}

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
