import React, { useState } from "react";
import { Alert } from "react-native";
import AuthContext from "../contexts/AuthContext";
import Api, { api } from "../services/api";

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const [email, setEmail] = useState(null);

  async function login({ email, password }) {
    setFetching(true);
    const response = await Api.login({ email, password });
    if (!response.ok) {
      Alert.alert("Ops!", "Aconteceu algum erro ao conectar a Api");
      setFetching(false);
      return;
    }
    api.addRequestTransform((request) => {
      const { token } = response.data;
      request.headers["Authorization"] = `Bearer ${token}`;
    });
    setEmail(email);
    setLogged(true);
    setFetching(false);
  }

  function logout() {
    setLogged(false);
  }

  return (
    <Provider value={{ email, isLogged, fetching, login, logout }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
