import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { color } from '../themes'

const Button = ({ loading, disabled, backgroundColor, title, onPress }) => {
    const styles = getStyles({ backgroundColor, disabled })
    return (
        <TouchableOpacity disabled={disabled || loading} style={styles.container} onPress={onPress}>
            {loading && <ActivityIndicator style={styles.loading} color={color.branco} size="small" />}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const getStyles = ({ backgroundColor, disabled }) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 10,
        opacity: disabled ? .5 : 1
    },
    text: {
        color: color.branco,
        fontSize: 20,
        fontWeight: 'bold' 
    },
    loading: {
        position: 'absolute',
        left: 20
    }
})

export default Button