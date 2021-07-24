import React from 'react'
import './App.css'

import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const hats = () => {
  return <div>asdfs</div>
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/hats" component={hats} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
