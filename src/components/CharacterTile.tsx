import Col from "react-bootstrap/Col";
import { Character } from "../providers/api/models";

export function CharacterTile(character: Character) {
    return (
        <Col md="6" className="character-tile" key={character.id}>
            <div className="container">
                <img src={character.image}></img>
                <div className="info">
                    <p>Id: <small>{character.id}</small></p>
                    <p>Name: <small>{character.name}</small></p>
                </div>
            </div>
        </Col>
    )
}