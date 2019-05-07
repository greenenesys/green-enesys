import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import baseStyle from '../Text/baseStyle'
import { bool } from 'prop-types'

const RouterLink = styled(NavLink)`
  ${baseStyle};
  text-decoration: none;
  margin-bottom: 53px;
  font-size: 25px;
  font-weight: 700;
  &.active{
    color: #23b893;

    ${media.tablet(css`
      opacity: 1;
      color: inherit;
    `)};
  }

  ${media.tablet(css`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
    padding-left: 18px;
    opacity: .6;
    font-weight: 400;
    opacity: ${props => props.opacity}
   
  `)};
  
  ${media.desktop(css`
    font-size: 18px;
    padding-left: 24px;
`)};
`


function handleClickClose(e){
  let $this = e.currentTarget;
  let allLink = $this.parentNode.childNodes;
  $this.parentNode.parentNode.classList.remove('open');
}

export default ({ name, path, active }) => <RouterLink exact={active} data-active={active?'true':'false'}   onClick={handleClickClose} to={path}> {name} </RouterLink>
