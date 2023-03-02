import Col from 'react-bootstrap/Col'

import { Character } from '../providers/api/models'

export function CharacterTile(character: Character) {
	return (
		<Col md='6' className='character-tile' key={character.id}>
			<div className='container'>
				<img src={character.image}></img>
				<div className='info'>
					<span>
						<big>{character.name}</big>
					</span>
					<span>
						<span className={`dot ${character.status.toLowerCase()}`} />

						<small>
							{character.status} - {character.species}
						</small>
					</span>

					<span className='title'>
						<small>Las known location:</small>
					</span>
					<span className='data'>{character.location.name}</span>

					<span className='title'>
						<small>Firs seen in:</small>
					</span>
					<span className='data'>{character.origin.name}</span>
				</div>
			</div>
		</Col>
	)
}
