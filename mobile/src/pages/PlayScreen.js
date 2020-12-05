import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import { color, image } from '../themes'

const PlayScreen = () => {
    const navigation = useNavigation()

    function handleBackButton() {
        navigation.goBack()
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
                <Image source={image.arrowLeft}/>
            </TouchableOpacity>
            <View style={styles.content} >
                <Image source={image.itemBig} style={styles.image} />
                <Text style={styles.name} >Admirável Chip Novo</Text>
                <View style={styles.sliderContainer}>
                    <View style={styles.slider} />
                </View>
                <View style={styles.timeContainer} >
                    <Text style={{color: color.branco}} >00:00</Text>
                    <Text style={{color: color.cinza}} >03:42</Text>
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.skip} >
                        <Image source={image.skipBack}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.fab} >
                        <Image source={image.play}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skip} >
                        <Image source={image.skipForward}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PlayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.roxo,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        justifyContent: 'space-between'
    },
    backButton: {
        padding: 15
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    fab: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: color.rosa,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    skip: {
        padding: 10
    },
    image: {
        width: 220,
        height: 220,
        marginVertical: 50
    },
    name: {
        fontSize: 22,
        color: color.branco
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        padding: 10
    },
    sliderContainer: {
        width: '80%',
        backgroundColor: '#4B2560',
        marginTop: 40,
        overflow: 'hidden',
        borderRadius: 7
    },
    slider: {
        backgroundColor: color.roxoClaro,
        padding: 10,
        width: '23%'
    },
})
