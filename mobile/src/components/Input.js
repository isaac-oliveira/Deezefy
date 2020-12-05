import React, { useState, forwardRef } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, LayoutAnimation } from 'react-native'
import { color, image } from '../themes'

const Input = ({ secureTextEntry, error, onChange, ...props }, ref) => {
    const [show, setShow] = useState(false || !secureTextEntry)
    const [focused, setFocused] = useState(false)

    const icon = !show ? image.eye : image.eyeOff
    const styles = getStyles({ focused, error })

    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

    function handleEye() {
        setShow(!show) 
    }

    function onFocus() {
        setFocused(true)
    }

    function onBlur() {
        setFocused(false)
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput 
                    ref={ref}
                    {...props} 
                    style={styles.input} 
                    secureTextEntry={!show}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={onChange} />
                {secureTextEntry &&
                    <TouchableOpacity onPress={handleEye}>
                        <Image source={icon}/>
                    </TouchableOpacity>
                }
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const getStyles = ({ focused, error }) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: color.branco,
        borderWidth: 4,
        borderColor: error ? color.vermelho : focused ? color.rosa : color.branco,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 10
    },
    input: {
        flex: 1,
        height: 30
    },
    error: {
        alignSelf: 'flex-end',
        color: color.vermelho,
        paddingRight: 5
    }
})

export default forwardRef(Input)