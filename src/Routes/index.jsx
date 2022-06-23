import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import { useEffect, useState } from 'react'

export function Routes () {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('@KenzieHub:token');

    if(token) {
      return setAuthenticated(true)
    }

  }, [authenticated], [user])

  return (
    <Switch>
      <Route exact path='/'>
        <Home authenticated={authenticated}/>
      </Route>
      <Route path='/login'>
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated} user={user}/>
      </Route>
      <Route path='/signup'>
        <SignUp authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser}/>
      </Route>
      <Route path='/dashboard'>
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
    </Switch>
  )
}