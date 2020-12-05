import React, { useState } from 'react'
import AuthContext from '../contexts/AuthContext'

const { Provider }  = AuthContext

const AuthProvider = ({ children }) => {
    const [isLogged, setLogged] = useState(false)

    function login () {
        setLogged(true)
    }

    function logout() {
        setLogged(false)
    }

    return (
        <Provider value={{ isLogged, login, logout }}>
            {children}
        </Provider>
    )
}

export default AuthProvider