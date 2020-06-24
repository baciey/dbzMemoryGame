import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OnePlayer from './OnePlayer'
import TwoPlayers from './TwoPlayers'
import Home from './Home'


function App() {
  return (
    // basename={process.env.PUBLIC_URL}
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <section>
          <Switch>
            <Route path="/" exact ><Home /></Route>
            <Route path="/1gracz" ><OnePlayer /></Route>
            <Route path="/2graczy"><TwoPlayers /></Route>
          </Switch>
        </section>
      </>
    </Router>
  )
}



export default App;

