import UseTimeoutExample from './examples/UseTimeoutExample'
import UseStateWithHistoryExample from './examples/UseStateWithHistoryExample'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css'
import UseNextExample from './examples/UseNextExample'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='menu'>
          <h1>my hooks</h1>

          <NavLink className='item' to='/useStateWithHistory'>
            useStateWithHistory
          </NavLink>

          <NavLink className='item' to='/useTimeout'>
            useTimeout
          </NavLink>

          <NavLink className='item' to='/useNext'>
            useNext
          </NavLink>

          <NavLink className='item' to='/useArray'>
            useArray
          </NavLink>
        </div>

        <div className='content'>
          <Switch>
            <Route path='/useStateWithHistory' component={() => <UseStateWithHistoryExample />} />
            <Route path='/useNext' component={() => <UseNextExample />} />
            <Route path='/useTimeout' component={() => <UseTimeoutExample />} />
            <Route path='/useArray' component={() => <p>Work in progress...</p>} />
            <Redirect to='/useStateWithHistory' />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
