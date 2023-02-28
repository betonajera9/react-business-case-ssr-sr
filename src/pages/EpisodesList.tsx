import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { ApiRoutes, useAxios } from '../providers/api'
import { Character, Page } from "../providers/api/models";
import { Link } from 'react-router-dom';

export function EpisodesList() {
  const [pagination, setPagination] = useState<{ page: number }>({ page: 1 })

  const [{ data: episodesPage, loading, error }] = useAxios<Page<Character>>({ url: ApiRoutes.episodes() })

  const nextPage = () => {
    setPagination({ page: pagination.page++ })
  }

  return (
    <div className="EpisodesList">
      <Container>
        <Button onClick={nextPage}>
          <Link to="characters" style={{color: "white"}}>Navigate to characters</Link>
        </Button>
        {loading && <p className='text-info'>...loading</p>}
        {error && <p className='text-danger'>{error.toString()}</p>}
        <Button onClick={nextPage}>Next page</Button>
      </Container>
    </div>
  )
}
