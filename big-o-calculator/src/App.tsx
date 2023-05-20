/* eslint-disable @typescript-eslint/no-misused-promises */
import './App.css'
import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import AboutBigO from './pages/AboutBigO'
import Header from './components/Header'

function App () {
  return (
    <div className="flex flex-col align-middle w-screen bg-background">
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/big-o' component={AboutBigO} />
      </Switch>

    </div>
  )
}

export default App
