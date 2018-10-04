import React, { Component } from 'react'
import withTheme from './theme'
import './globalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import styled, { injectGlobal } from 'styled-components'

import HomePage from './pages/home'
import MapPage from './pages/map'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'

injectGlobal`.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */`


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
