import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import baseStyle from '../Text/baseStyle'

const Wrapper = styled('div')`
  background-color: white;
  padding: 0px 24px;
  border-radius: 24px;
  box-shadow: ${props => props.theme.shadow[6]};
`

const TabWrapper = styled('div')`
  ${baseStyle};
  display: inline-block;
  padding: 10px 12px 12px;
  cursor: pointer;
  opacity: 0.5;
  transition: ${props => props.theme.animation.create(['opacity'])};
  ${props => props.active && css`
    opacity: 1;
  `}
`

export default class Tab extends React.Component {
    state = {
        active: this.props.options[0]
    }

    static propTypes = {
        options: PropTypes.array,
        handleClick: PropTypes.func
    }

    static defaultProps = {
        options: ['World', 'Europe', 'Africa', 'Asia'],
        handleClick: (option) => {console.log(option)}
    }

    handleClick = (option) => {
        this.props.handleClick(option)
        // this.setState({ active: option })
    }

    renderTabs = () => {
        const options = this.props.options
        return (
            this.props.options.map(option => {
                return <TabWrapper key={option} active={this.props.active === option} onClick={() => this.handleClick(option)}> {option} </TabWrapper>
            })
        )
    }
    render () {
        return (
            <Wrapper>
                { this.renderTabs() }
            </Wrapper>
        )
    }
}