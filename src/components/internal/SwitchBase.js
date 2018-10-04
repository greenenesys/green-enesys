import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled('span')`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.color.ui.seperator};
    background-color: rgba(0,0,0,0.02);
    &:hover {
      border: 1px solid #B9B9B9;
    }
    border-radius: 4px;
    transition: ${props => props.theme.animation.create()};
    ${props => props.active && props.activeStyle}
`

const IconWrapper = styled('span').attrs({
    style: ({active}) => {
        return {
            opacity: active ? 1 : 0
        }
    }
})`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled('span')`
  background-color: ${props => props.theme.color.ui.primary};
  width: 16px;
  height: 16px;
  position: absolute;
  z-index: -1;
  padding: 2px;
  border-radius: 2px;
`

const Input = styled('input')`
    top: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
`

export default class SwitchBase extends React.Component {
    constructor (props) {
        super (props)
        this.state = {}

        this.isControlled = props.checked != null
        if (!this.isControlled) {
            this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false
        }
    }

    handleFocus = event => { if (this.props.onFocus) this.props.onFocus(event) }

    handleBlur = event => { if (this.props.onBlur) this.props.onBlur(event) }

    handleInputChange = event => {
        const checked = event.target.checked
        if (!this.isControlled) {
            this.setState({ checked })
        }

        if (this.props.onChange) {
            this.props.onChange(event, checked)
        }
    }

    render () {
        const {
            checked: checkedProp,
            disabled,
            autoFocus,
            onBlur,
            onChange,
            onFocus,
            checkedIcon,
            icon,
            styles,
            type
        } = this.props

        const checked = this.isControlled ? checkedProp : this.state.checked

        return (
            <Wrapper activeStyle={styles.activeStyle}>
                <IconWrapper active={checked}>
                    {checkedIcon}
                    <Background />
                </IconWrapper>
                <Input
                    type={type}
                    checked={checked}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    id={'checkbox'}
                    onChange={this.handleInputChange}
                />
            </Wrapper>
        )
    }
}

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
SwitchBase.propTypes = {
    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: PropTypes.bool,
    /**
     * If `true`, the component is checked.
     */
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: PropTypes.node.isRequired,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * @ignore
     */
    defaultChecked: PropTypes.bool,
    /**
     * If `true`, the switch will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The icon to display when the component is unchecked.
     */
    icon: PropTypes.node.isRequired,
    /**
     * @ignore
     */
    onBlur: PropTypes.func,
    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.checked`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: PropTypes.func,
    /**
     * @ignore
     */
    onFocus: PropTypes.func,
    /**
     * It prevents the user from changing the value of the field
     * (not from interacting with the field).
     */
    readOnly: PropTypes.bool,
    styles: PropTypes.object
};

const activeStyles = css`
  
`

SwitchBase.defaultProps = {
    styles: {
        active: css``
    }
}