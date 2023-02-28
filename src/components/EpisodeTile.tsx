import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Episode } from "../providers/api/models/Episode";

export function EpisodeTile(episode: Episode) {
    return (
        <Col md="6" className="episode-tile" key={episode.id}>
            <div className="container">
                <div className="info">
                    <p>Id: <small>{episode.id}</small></p>
                    <p>Name: <small>{episode.name}</small></p>
                </div>
            </div>
        </Col>
    )
}