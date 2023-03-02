import Container from 'react-bootstrap/Container'
import { Link, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'

import { CharacterTile } from '../components/CharacterTile'
import { Episode } from '../providers/api/models/Episode'
import { Character, Page } from '../providers/api/models'
import { ApiRoutes, useAxios } from '../providers/api'
import { Header } from '../components/Header'

export function EpisodeDetail() {
	const { id } = useParams()

	const [{ data: episode, loading, error }] = useAxios<Episode>({
		url: ApiRoutes.episodeById(id!),
	})

	const [
		{ data: dataCharacters, loading: landingCharacter, error: errorCharacter },
	] = useAxios<Character[]>({
		url: ApiRoutes.characterById(
			episode?.characters.map((item) => {
				const data = item.split('/')
				return +data[data.length - 1]
			}) as number[]
		),
	})

	return (
		<div className='EpisodesDetail'>
			<Header page='Characters' />
			<Container>
				<Link to='/episodes'>
					<span>⟵ Back</span>
				</Link>
				<div className='episode-details'>
					<span>Episode: {episode?.name}</span>
				</div>
				<Row>
					{dataCharacters?.map((character) => CharacterTile(character))}
				</Row>
			</Container>
		</div>
	)
}
