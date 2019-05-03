import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getPosition } from './util'
import { position } from '../../lib/util'

const tooltipRoot = document.getElementById('tooltip')

const Wrapper = styled('div').attrs({
    style: ({ x, y, visible }) => ({
        transform: `translate(${x}px, ${y}px)`,
        opacity: visible ? 1 : 0,
    })
})`
  transition: ${props => props.theme.animation.create(['opacity'])};
  position: absolute;
  pointer-events:none;
`

class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
        this.state = {
            offset: { left: 0, top: 0 }, 
            visible: false
        }
    }

    static defaultProps = {
        position: document.getElementById('root')
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        tooltipRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        tooltipRoot.removeChild(this.el)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.position === null && prevProps.position !== null) {
            this.setState({
                visible: false,
                offset: getPosition(this.nodeWrapper, prevProps.position)
            })
            return
        }

        if (position(prevProps.position).left !== position(this.props.position).left) {
            this.setState({
                visible: true,
                offset: getPosition(this.nodeWrapper, this.props.position)
            })
        }
    }

    render() {
        return ReactDOM.createPortal(
            <Wrapper innerRef={el => this.nodeWrapper = el} x={this.state.offset.left} y={this.state.offset.top} visible={this.state.visible}>
                {this.props.children}
            </Wrapper>,
            this.el,
        )
    }
}

export default Tooltip