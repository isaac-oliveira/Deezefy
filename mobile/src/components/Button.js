import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { color } from '../themes'

const Button = ({ backgroundColor , title }) => {
    const styles = getStyles({ backgroundColor })
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const getStyles = ({ backgroundColor }) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10
    },
    text: {
        color: color.branco,
        fontSize: 20,
        fontWeight: 'bold' 
    }
})

export default Button