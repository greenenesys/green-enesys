import React, { Component } from 'react'
import withTheme from './theme'
import './globalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import styled from 'styled-components'

import HomePage from './pages/home'
import MapPage from './pages/map'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'

const Container = styled('div')`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Content = styled('div')`
  flex: 1 0 auto;
`

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'Home',
        exact: true
    },
    {
        path: '/map',
        component: MapPage,
        name: 'Map',
        exact: true
    },
    {
        path: '/projects',
        component: ProjectPage,
        name: 'Projects',
        exact: false
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'About',
        exact: true
    }
]

class App extends Component {

    renderRoutes = (routes) => {
        return [ routes.map(route => <Route exact={route.exact} key={route.path} path={route.path} match={route} component={route.component}/>) ]
    }

    render() {
        return (
            <Router>
                <Container>
                    <Navigation routes={routes}/>
                    <Content>
                        {this.renderRoutes(routes)}
                    </Content>
                    <Footer />
                </Container>
            </Router>
        )
    }
}

export default withTheme(App)
