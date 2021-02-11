import React, { useState } from 'react'
import { Alert } from 'react-native'
import AuthContext from '../contexts/AuthContext'
import Api from '../services/api'

const { Provider }  = AuthContext

const AuthProvider = ({ children }) => {
    const [fetching, setFetching] = useState(false)
    const [isLogged, setLogged] = useState(false)
    const [token, setToken] = useState(null)

    async function login ({ email, password }) {
        setFetching(true)
        const response = await Api.login({ email, password })
        if (!response.ok) {
            Alert.alert('Ops!', 'Aconteceu algum erro ao conectar a Api')
            setFetching(false)
            return    
        }
        setToken(response.data.token)
        setLogged(true)
        setFetching(false)
    }
    
    function logout() {
        setLogged(false)
    }

    return (
        <Provider value={{ isLogged, fetching, login, logout, token }}>
            {children}
        </Provider>
    )
}

export default AuthProvider