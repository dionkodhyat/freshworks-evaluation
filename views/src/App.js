import React from 'react'
import NavigationBar from './components/NavigationBar'
import DataTable from './components/DataTable'
import DataModal from './components/DataModal'

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DataModal></DataModal>
      <DataTable></DataTable>
    </div>
  )
}

export default App
