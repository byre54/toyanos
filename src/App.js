import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Profile from './components/Profile'
import Create from './components/CreateProfile'
import Edit from './components/EditProfile'
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <AppBar />
      <Container maxWidth='sm'>
        <Box my={4}>
          <Switch>
            <Route path='/' exact component={Create} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/edit' exact component={Edit} />
          </Switch>
        </Box>
      </Container>
    </Router>
  )
}
