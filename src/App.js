import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Raza from './Raza';
import Imagenes from './Imagenes';
import './App.css';

/**
 * Componente principal de la aplicación.
 * @component
 * @return {JSX.Element} El componente de la aplicación.
 */
const App = () => {
  /**
   * Estado que almacena la lista de razas de perros.
   * @type {Array<string>}
   */
  const [razas, setRazas] = useState([]);

  /**
   * Estado que almacena la raza de perro seleccionada.
   * @type {string}
   */
  const [selectedRaza, setSelectedRaza] = useState('');

  /**
   * Estado que almacena la lista de imágenes de la raza seleccionada.
   * @type {Array<string>}
   */
  const [imagenes, setImagenes] = useState([]);

  /**
   * Efecto que se ejecuta al montar el componente para obtener la lista de razas de perros.
   * @function
   * @async
   * @return {Promise<void>}
   */
  useEffect(() => {
    const fetchRazas = async () => {
      try {
        // Solicita la lista de razas desde el API
        const result = await axios.get('https://dog.ceo/api/breeds/list/all');
        // Actualiza el estado con la lista de razas
        setRazas(Object.keys(result.data.message));
      } catch (error) {
        console.error('Error al obtener las razas:', error);
      }
    };

    fetchRazas();
  }, []);

  /**
   * Efecto que se ejecuta cuando cambia la raza seleccionada para obtener las imágenes de la raza seleccionada.
   * @function
   * @async
   * @return {Promise<void>}
   */
  useEffect(() => {
    const fetchImagenes = async () => {
      if (selectedRaza) {
        try {
          // Solicita las imágenes de la raza seleccionada desde el API
          const result = await axios.get(`https://dog.ceo/api/breed/${selectedRaza}/images`);
          // Actualiza el estado con las imágenes de la raza seleccionada
          setImagenes(result.data.message);
        } catch (error) {
          console.error('Error al obtener las imágenes:', error);
        }
      }
    };

    fetchImagenes();
  }, [selectedRaza]);

  /**
   * Renderiza el componente.
   * @return {JSX.Element} El JSX del componente.
   */
  return (
    <div className="App">
      <h1>¡Descubre Tu Raza Favorita!</h1>
      <Raza razas={razas} onRazaSelect={setSelectedRaza} />
      <div>
        <Imagenes imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
