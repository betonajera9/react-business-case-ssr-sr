import Container from 'react-bootstrap/Container';

import { Episode } from '../providers/api/models/Episode';

export function EpisodeDetail(episode: Episode) {
  return (
    <div className="EpisodesList">
      <Container>
        <h1>Episode: {episode.name}</h1>
      </Container>
    </div>
  )
}
