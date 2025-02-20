import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// Crear el contexto
export const CountrieContext = createContext();

// Crear el proveedor del contexto
export function CountriesProvider({ children }) {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [nextFlag, setNextFlag] = useState(false); // Estado para el siguiente juego
  const [countrieNameSelect, setCountrieNameSelect] = useState(null); //Estado para guardar el pais seleccionado
  const [countrieKeySelect, setCountrieKeySelect] = useState(null); //Estado para guardar la clave del pais seleccionado
  const [coutriesRandom, setCoutriesRandom] = useState([]); //Estado para guardar los paises aleatorios
  const [optionsFlag, setOptionsFlag] = useState([]); //Estado para guardar las opciones de banderas
  const [live, setLive] = useState(5); //Estado para guardar las vidas

  const navigate = useNavigate();
  // Función para obtener datos de la API
  const nameCountries = async () => {
    try {
      const res = await axios.get("https://flagcdn.com/es/codes.json");
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const randomCountry = () => {
    if (data) {
      const keys = Object.keys(data);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];

      setCountrieNameSelect(data[randomKey]);
      setCountrieKeySelect(randomKey);

      for (let i = 0; i < 3; i++) {
        const flag =
          keys[Math.floor(Math.random() * keys.length)] != randomKey &&
          keys[Math.floor(Math.random() * keys.length)];
        setCoutriesRandom((prevState) => [...prevState, data[flag]]);
      }
    }
  };

  const clear = () => {
    setCountrieNameSelect(null);
    setCountrieKeySelect(null);
    setCoutriesRandom([]);
    randomCountry();
  };

  const validFlag = (flag) => {
    if (flag === countrieNameSelect) {
      setNextFlag(true);
    } else {
      setLive(live - 1);
      setError(true);
    }
  };

  useEffect(() => {
    nameCountries();
  }, []);

  useEffect(() => {
    randomCountry();
  }, [data]);

  useEffect(() => {
    function fisherYatesShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Intercambia los elementos
      }
      return array;
    }

    setOptionsFlag(fisherYatesShuffle([countrieNameSelect, ...coutriesRandom]));
  }, [countrieNameSelect, coutriesRandom]);

  useEffect(() => {
    if (live === 0) {
      navigate("/lose");
      setLive(5);
    }
  }, [live]);


  return (
    <CountrieContext.Provider
      value={{
        loading,
        error,
        setError,
        countrieKeySelect,
        optionsFlag,
        validFlag,
        countrieNameSelect,
        randomCountry,
        clear,
        live,
        nextFlag,
        setNextFlag,
      }}
    >
      {children}
    </CountrieContext.Provider>
  );
}
