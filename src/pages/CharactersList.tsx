import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import { CharacterTile } from '../components/CharacterTile'
import { Character, Page } from '../providers/api/models'
import { ApiRoutes, useAxios } from '../providers/api'
import { Header } from '../components/Header'

export function CharactersList() {
	const [pagination, setPagination] = useState<{ page: number }>({ page: 1 })

	const [{ data: charactersPage, loading, error }, refetch] = useAxios<
		Page<Character>
	>({
		url: ApiRoutes.characters(),
		params: { ...pagination },
	})

	const nextPage = async () => {
		console.log(pagination.page)
		setPagination({ page: pagination.page + 1 })
		console.log(pagination.page)

		try {
			await refetch()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className='CharactersList'>
			<Header page='CharactersList' />
			<Container>
				<Button onClick={nextPage}>Navigate to episodes</Button>

				{loading && <p className='text-info'>...loading</p>}
				<Row>
					{charactersPage?.results.map((character) => CharacterTile(character))}
				</Row>
				<Button onClick={nextPage}>Next page</Button>
			</Container>
		</div>
	)
}
