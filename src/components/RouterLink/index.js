import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import baseStyle from '../Text/baseStyle'
import { bool } from 'prop-types'

const RouterLink = styled(Link)`
  ${baseStyle};
  text-decoration: none;
  line-height: 72px;
  padding-left: 24px;
  opacity: ${props => props.opacity}
`

RouterLink.propTypes = {
    active: bool
}

export default ({ name, path, active }) => <RouterLink to={path} opacity={active ? 1 : 0.6}> {name} </RouterLink>
