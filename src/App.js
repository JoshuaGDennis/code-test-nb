import React from 'react'
import ListPage from './pages/ListPage'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/" component={ListPage} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App;
