import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Alert } from 'react-native'
import { color, image } from '../themes'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

const UpdateScreen = () => {
    const navigation = useNavigation()
    const routes = useRoute()
    const item = routes.params?.item
    const title = item ? 'Salvar' : 'Adicionar'

    function handleBackButton() {
        navigation.goBack()
    }

    function handleUpdate() {
        if (item) {
            Alert.alert('Alerta', 'Atualizou')
            return
        }
        Alert.alert('Alerta', 'Adicionou')
    }

    function handleDelete() {
        Alert.alert('Alerta', 'Deletou')
    }    

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButton}  onPress={handleBackButton}>
                <Image source={image.arrowLeft}/>
            </TouchableOpacity>
            <View style={styles.content} >
                <Image source={image.itemBig} style={styles.image} />
                <Input placeholder='Nome da Música' />
                <Input placeholder='Duração' />
                <Button backgroundColor={color.roxoClaro}  title={title} onPress={handleUpdate} />
                {item && <Button backgroundColor={color.rosa} title='Deletar' onPress={handleDelete} />}               
            </View>
        </View>
    )
}

export default UpdateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.roxo,
    },
    backButton: {
        padding: 15
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },    
    image: {
        width: 170,
        height: 170,
        marginBottom: 20
    }    
})
