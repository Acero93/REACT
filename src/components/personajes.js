export default function Personajes(props) {
    const { personajes, setPersonajes }=props
    const resetPersonajes = ()=>{
            setPersonajes(null)
    }
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetPersonajes}>Volver al Inicio</span>
        <div className="container-characters">
            {personajes.map((personaje,index)=>( //return implícito - no se puede colocar un return dentro de otro return
                <div className="character-container" key={index}>
                    <div>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                    
                    <div>
                        <h3>{personaje.name}</h3>
                        <h6>
                            {personaje.status === "Alive" ? (
                                <> 
                                    <span className="alive"/> Vivo 
                                </>
                            ):(
                                <>
                                    <span className="dead" /> Muerto
                                </>
                            )} 
                        </h6>
                        <p>
                            <span className="text-grey">Capítulos :</span>
                            <span>{personaje.episode.length}</span>  {/*obtengo el largo(lista) [cantidad] de los episodios donde aparece el PJ */}                                   {/*  */}
                        </p>
                        <p>
                            <span className="text-grey">Raza :</span>
                            <span>{personaje.species}</span>
                        </p>
                        <p>
                            <span className="text-grey">Sexo :</span>
                            <span>{personaje.gender}</span>
                        </p>
                        <p>
                            <span className="text-grey">Ubicación :</span>
                            <span>{personaje.location.name}</span>
                        </p>
                    </div>  
                </div>
            ))}
        </div>
        <span className="back-home"  onClick={resetPersonajes}>Volver al Inicio</span>

    </div>
  );
}
