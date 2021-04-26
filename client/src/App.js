import React from 'react'
import NavigationBar  from './components/NavigationBar'
import DataTable from './components/DataTable'
import DataModal from './components/DataModal'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const App = () => {

  return (
    <div>
      <NavigationBar/>
      <Container>
        <Row>
          <Col>
            <DataModal/>
            <DataTable></DataTable>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
