
import React from 'react';
import './App.css';
import ModeloLista from './components/ModeloLista';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <div className='App'>
      <h1>Galería de Perritos Aleatorios</h1>
      <ModeloLista />
    </div>
  );
}

export default App;
