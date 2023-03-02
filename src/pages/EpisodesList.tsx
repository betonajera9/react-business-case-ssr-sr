import { useState } from 'react'

import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { Character, Episode, Page } from '../providers/api/models'
import { ApiRoutes, useAxios } from '../providers/api'
import { EpisodeTile } from '../components/EpisodeTile'
import { Header } from '../components/Header'

export function EpisodesList() {
	const [pagination, setPagination] = useState<{ page: number }>({ page: 1 })

	const [{ data: episodesPage, loading, error }, refetch] = useAxios<
		Page<Episode>
	>({
		url: ApiRoutes.episodes(),
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
		<div className='EpisodesList'>
			<Header page='Episodes' />
			<Container>
				{loading && <p className='text-info'>...loading</p>}
				{error && <p className='text-danger'>{error.toString()}</p>}
				<Row>
					{episodesPage?.results.map((episode) => EpisodeTile(episode))}
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
								if (episodesPage?.info.pages)
									if (pagination.page < episodesPage?.info.pages) {
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
