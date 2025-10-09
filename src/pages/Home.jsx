import log from "../images/pikachu.svg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import goo from "../images/go2.svg";
import './Home.css'

function 
Home() {
  return (
    <div className='home'>
      <div className='titulo'><img
                                  src={log}
                                  width="95"
                                  height="95"
                                  className="d-inline-block align-top"
                                  alt="Pokemon logo"></img>Bienvenidos a Pokepedia</div>
<p class='subtitulo'>La guía definitiva para entrenadores y fans Pokémon</p> 

<Card className="mi-card">
              <Card.Img variant="top" src={goo} className="mx-auto d-block" style={{ maxWidth: '200px', height: 'auto' }} />
      <Card.Body>
        <Card.Title>Atrapalos ya!</Card.Title>
        <Card.Text>
                      Explorá la mejor enciclopedia sobre Pokémons. 
                      Vas a poder visualizar imágenes, características únicas y mucho más. 
        </Card.Text>
        <Button variant="dark">Comenzar</Button>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Home
import { Link } from 'react-router-dom'