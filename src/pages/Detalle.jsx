import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Detalle() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  // Llamada a la API cuando name cambia
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <>
      
      <Container className="mi-grid">
        <Row>
          <Col xs={4}>
            <Row>
              <Col>
                <div className="pokemon-detalle">
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                  />

                  <div className="title">
                    {pokemon.name} -{" "}
                    <span className="pokemon-id">#{pokemon.id}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={4}>
            {" "}
            <div className="pokemon-detalle-info">
              <h3 className="pokemon-detalle-info-titulo">
                <div className="titulo-vertical">Movimientos</div>
              </h3>
              <div className="pokemon-detalle-info-valor">
                <div className="listBox">
                  {pokemon.moves.map((move) => (
                    <div className="listItem" key={move.move.name}>
                      {move.move.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="pokemon-detalle-info">
              <h3 className="pokemon-detalle-info-titulo">Tipos</h3>
              <div className="pokemon-detalle-info-valor tagBox">
                {pokemon.types.map((type) => (
                  <div className="tagTipo" key={type.type.name}>
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="pokemon-detalle-info">
              <h3 className="pokemon-detalle-info-titulo">Habilidades</h3>
              <div className="pokemon-detalle-info-valor">
                <div className="listBox">
                  {pokemon.abilities.map((ability) => (
                    <div className="listItem" key={ability.ability.name}>
                      {ability.ability.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pokemon-detalle-info">
              <h3 className="pokemon-detalle-info-titulo">Estadísticas</h3>
              <div className="pokemon-detalle-info-valor">
                <div className="listBox">
                  {pokemon.stats.map((stat) => (
                    <div className="listItem" key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        
      </Container>
<button className="btn-volver">
        <Link to="/pokemon"> ← Listado</Link>
      </button>
          </>
  );
}

export default Detalle;
import { Link } from "react-router-dom";
