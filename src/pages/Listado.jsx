import { useState, useEffect } from 'react'
import Tarjeta from '../components/Tarjeta' 



function Listado() {

  const [pokemones, setPokemones] = useState([])

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pokemones.length}`)
      .then(res => res.json())
      .then(data => { 
          Promise.all(data.results.map(pokemon => 
          fetch(pokemon.url)
            .then(res => res.json())
            .then(details => ({ ...pokemon, id: details.id, types: details.types, sprites: details.sprites , stats: details.stats, moves: details.moves }))
        )).then(pokemonesConId => setPokemones(pokemonesConId))
      })
  }, [])

  const cargarPokemones = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pokemones.length}`)
      .then(res => res.json())
      .then(data => { 
                Promise.all(data.results.map(pokemon => 
          fetch(pokemon.url)
            .then(res => res.json())
            .then(details => ({ ...pokemon, id: details.id, types: details.types, sprites: details.sprites , stats: details.stats, moves: details.moves }))
        )).then(pokemonesConId => setPokemones([...pokemones, ...pokemonesConId]))
      })
  }


  if (!pokemones) return <p>Cargando...</p>

  return (
    <>
      <div className='titulo'>Listado de Pokémons</div>
      <div className='pokemon-card-box'>        
        {pokemones.map(pokemon => (
          <Tarjeta key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <button className='btn-cargar-mas' onClick={cargarPokemones}>Cargar Más</button>
    </>
  )
}

export default Listado;