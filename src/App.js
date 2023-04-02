import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Originals,actions,Comedy,Horror,Action,romantic} from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={Originals}  title = 'Netflix Originals'  />
      <RowPost url={actions} title = 'Action Movies' isSmall  />
      <RowPost url={Comedy} title = 'Comedy Movies' isSmall  />
      <RowPost url={Horror} title = 'Horror Movies' isSmall  />
      <RowPost url={Action} title = 'Action Movies' isSmall  />
      <RowPost url={romantic} title = 'Romantic Movies' isSmall  />
    </div>
  )
}

export default App