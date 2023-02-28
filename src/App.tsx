import { RouterProvider } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import './styles/App.scss'

import { router } from "./router";

function App() {
  return (
    <div className="App">
      <Container>
        <Container fluid={true}>
          <RouterProvider router={router} />
        </Container>
      </Container>
    </div>
  )
}

export default App
