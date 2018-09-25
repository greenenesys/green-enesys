import React from 'react'
import PropTypes from 'prop-types'
import { duration } from '../styles/transitions'
import { getTransitionProps } from '../transitions/utils'

class Collapse extends React.Component {
    wrapper = null
    autoTransitionDuration = null
    timer = null


    componentWillMount() {
        clearTimeout(this.timer)
    }

    handleEnter = node => {
        node.style.height = this.props.collapsedHeight

        if (this.props.onEntered) {
            this.props.onEntered(node)
        }
    }

    handleExit = node => {
        const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0
        node.style.height = `${wrapperHeight}px`

        if (this.props.onExit) {
            this.props.onExit(node)
        }
    }

    handleExiting = node => {
        const { timeout, theme } = this.props
        // const wrapperHeight = this.wrapperRef ? this.wrapperRef.clientHeight : 0

        const { duration: transitionDuration } = getTransitionProps(this.props, {
            mode: 'exit',
        })

        if (timeout === 'auto') {
            const duration2 = 200 // theme.transitions.getAutoHeightDuration(wrapperHeight)
            node.style.transitionDuration = `${duration2}ms`
            this.autoTransitionDuration = duration2
        } else {
            node.style.transitionDuration =
                typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`
        }

        node.style.height = this.props.collapsedHeight

        if (this.props.onExiting) {
            this.props.onExiting(node)
        }
    }

}

Collapse.propTypes = {
    /**
     * The content node to be collapsed.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object.isRequired,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The height of the container when collapsed.
     */
    collapsedHeight: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    /**
     * If `true`, the component will transition in.
     */
    in: PropTypes.bool,
    /**
     * @ignore
     */
    onEnter: PropTypes.func,
    /**
     * @ignore
     */
    onEntered: PropTypes.func,
    /**
     * @ignore
     */
    onEntering: PropTypes.func,
    /**
     * @ignore
     */
    onExit: PropTypes.func,
    /**
     * @ignore
     */
    onExiting: PropTypes.func,
    /**
     * @ignore
     */
    style: PropTypes.object,
    /**
     * @ignore
     */
    theme: PropTypes.object.isRequired,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
        PropTypes.oneOf(['auto']),
    ]),
}

Collapse.defaultProps = {
    collapsedHeight: '0px',
    component: 'div',
    timeout: duration.standard,
}