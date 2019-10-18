import React from 'react'
import CounterContainer from '../containers/CounterContainer'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import ApplicantContainer from '../containers/ApplicantContainer'

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Header />
        <Switch>
          <Route path="/counter" component={CounterContainer} />
          <Route path="/" component={ApplicantContainer} />
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
