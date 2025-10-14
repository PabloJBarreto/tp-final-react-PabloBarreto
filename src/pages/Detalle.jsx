import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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
      <Container>
        <Row className="mt-4">
           <Col md={6}>
                <div className="pokemon-detalle">
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                  />

                  <div className="title" class="text-capitalize">
                    {pokemon.name} -{" "}
                    <span className="pokemon-id">#{pokemon.id}</span>
                  </div>
                </div>
          </Col>
          <Col md={6}>
                    
                    <Card className="h-100">
                      <Card.Header className="bg-dark text-white">
                        Tipos
                      </Card.Header>
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <Card.Text>
                          <div className="pokemon-detalle">
                            <div className="pokemon-detalle-info-valor tagBox">
                              {pokemon.types.map((type) => (
                                <div className="tagTipo" key={type.type.name}>
                                  {type.type.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
        </Row> 
        <Row className="mt-4">
          <Col md={6}>
                                        <Card>
                      <Card.Header className="bg-dark text-white">
                        Estadísticas
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <div className="pokemon-detalle">
                            <div className="pokemon-detalle-info-valor">
                              <div className="listBox">
                                {pokemon.stats.map((stat) => (
                                  <div
                                    className="listItem"
                                    key={stat.stat.name}
                                  >
                                    {stat.stat.name}: {stat.base_stat}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

           
                             
                  
          <Col md={6}>
                    
                    <Card className="h-100">
                      <Card.Header className="bg-dark text-white">
                        Habilidades
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <div className="pokemon-detalle">
                            <div className="pokemon-detalle-info-valor">
                              <div className="listBox">
                                {pokemon.abilities.map((ability) => (
                                  <div
                                    className="listItem"
                                    key={ability.ability.name}
                                  >
                                    {ability.ability.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
          </Col>                
                     </Row>         
        
        
        <Row className="mt-4">
                    <Col md={12}>
                                          
                    <Card>
                      <Card.Header className="bg-dark text-white">
                        Movimientos
                      </Card.Header>
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <Card.Text>
                          <div className="pokemon-detalle">
                            <div className="pokemon-detalle-info-valor">
                              <div className="listBox">
                                {pokemon.moves.map((move) => (
                                  <div
                                    className="listItem"
                                    key={move.move.name}
                                  >
                                    {move.move.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
