import imageRM from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Personajes from './components/personajes';



function App() {
  const [personajes, setPersonajes] = useState(null); // declaro el userState personajes vacío
  const requestApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const personajeApi = await api.json();

    setPersonajes(personajeApi.results); //seteo a personajes los resultados (obj json-> results) [datos personajes]
    // console.log(personajes);
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className='title'> Rick & Morty </h1>
          {personajes ?( //if
            <Personajes personajes={personajes} setPersonajes={setPersonajes} />
          ):( //else
            //encapsular en fragment
            <>
              <img src={imageRM} alt="Rick & Morty" className="img-home" />
              <button onClick={requestApi} className="btn-search">Buscar Personajes</button>
            </>
          )}

      
      </header>
    </div>
  );
}

export default App;
