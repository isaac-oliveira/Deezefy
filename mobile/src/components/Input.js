import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color, image } from '../themes'


const Input = ({ secureTextEntry, ...props }) => {
    const [show, setShow] = useState(false)
    const icon = !show ? image.eye : image.eyeOff

    function handleEye() {
        setShow(!show) 
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} secureTextEntry={!show} />
            {secureTextEntry &&
                <TouchableOpacity onPress={handleEye}>
                    <Image source={icon}/>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: color.branco,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 10
    },
    input: {
        flex: 1
    }
})

export default Input