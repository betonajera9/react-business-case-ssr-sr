import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination'
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
		setPagination({ page: pagination.page + 1 })

		try {
			await refetch()
		} catch (err) {
			console.error(err)
		}
	}

	let items = []

	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === pagination.page}>
				{number}
			</Pagination.Item>
		)
	}

	return (
		<div className='CharactersList'>
			<Header page='Characters' />
			<Container>
				{loading && <p className='text-info'>...loading</p>}
				{error && <p className='text-danger'>{error.toString()}</p>}
				<Row>
					{charactersPage?.results.map((character) => CharacterTile(character))}
				</Row>
				<div className='pag'>
					<Pagination>
						<Pagination.Prev
							onClick={() => {
								if (pagination.page > 1) {
									setPagination({ page: pagination.page - 1 })
								}
							}}
						/>
						{items}
						<Pagination.Next
							onClick={() => {
								if (charactersPage?.info.pages)
									if (pagination.page < charactersPage?.info.pages) {
										setPagination({ page: pagination.page + 1 })
									}
							}}
						/>
					</Pagination>
				</div>
			</Container>
		</div>
	)
}
