import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Label } from '../Text'
import Arrow from '../../assets/svg/Arrow'

const Wrapper = styled('div')`
  display: inline-block;
  cursor: pointer; 
  position: relative;
  box-sizing: border-box;
  height: 40px;
  line-height: 39px;
  transition: ${props => props.theme.animation.create()};
  border-radius: 4px;
  
  ${({type, arrow, controlled}) => {
    if (type  === 'outline') { return css`
         border: 1px solid hsl(${props => props.theme.color.interface.primary});
         padding: 0 24px;
         & :hover {
           background-color: hsla(${props => props.theme.color.interface.primary}, 0.1);
         }
    `}
    if (type !== 'outline' && !controlled) {
        return css`
          & :hover {
            & > span {
              padding-left: 12px;
            }
          }
        `
    }
}
    }
`

const ArrowWrapper = styled('div')`
  display: inline-block;
  transform: translateX(0px);
  transition: ${props => props.theme.animation.create()};
  svg path {
     transition: ${props => props.theme.animation.create()};
     d: path('M16.58,5l-2.5,3a.76.76,0,0,1-.58.27A.78.78,0,0,1,13,8.08.76.76,0,0,1,12.92,7L14.4,5.25H.75a.75.75,0,0,1,0-1.5H14.4L12.92,2a.75.75,0,0,1,1.16-1l2.5,3A.75.75,0,0,1,16.58,5Z')
  }
  ${({ controlled, hovered }) => {
    if (controlled && hovered) return css`
        transform: translateX(4px);
        d: path('M23.83,5l-2.5,3a.76.76,0,0,1-.58.27.78.78,0,0,1-.48-.17A.76.76,0,0,1,20.17,7l1.48-1.77H.75a.75.75,0,0,1,0-1.5h20.9L20.17,2a.75.75,0,1,1,1.16-1l2.5,3A.75.75,0,0,1,23.83,5Z');
    `
    else return css`
      ${Wrapper}:hover & {
         transform: translateX(4px);
         svg path {
          d: path('M23.83,5l-2.5,3a.76.76,0,0,1-.58.27.78.78,0,0,1-.48-.17A.76.76,0,0,1,20.17,7l1.48-1.77H.75a.75.75,0,0,1,0-1.5h20.9L20.17,2a.75.75,0,1,1,1.16-1l2.5,3A.75.75,0,0,1,23.83,5Z');
         }
      }
    `
}} 
`

const ArrowButton = ({ onClick, disabled, type, uppercase, arrow, children, hovered, controlled }) => {
    return (
        <Wrapper onClick={onClick} type={type} controlled={controlled}>
            <Label accent uppercase={uppercase}> {children} </Label>
            {arrow && <ArrowWrapper>
                <Arrow style={{marginLeft: '12px' }}/>
            </ArrowWrapper>}
        </Wrapper>
    )
}

ArrowButton.defaultProps = {
    onClick: () => { console.log('Clicked') },
    disabled: false,
    type: 'default',
    uppercase: false,
    arrow: true
}

export default ArrowButton