import React from 'react'
import PropTypes from 'prop-types'
import SwitchBase from '../internal/SwitchBase'
import styled, { css } from 'styled-components'

const CheckedIconWrapper = styled('svg')`
    width: 24px;
    height: 24px;
    display: inline-block;
    flex-shrink: 0;
`

const CheckboxIcon = styled('span')`
    width: 1em;
    height: 1em;
    display: inline-block;
    position: absolute;
    border: 2px solid ${props => props.theme.color.ui.seperator};
`

const CheckedIcon = () =>
        <CheckedIconWrapper width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polyline id="Path-131" stroke="#fff" stroke-width="2" fill-rule="nonzero" points="7 11.5 11 15.25 17 7.5"></polyline>
            </g>
        </CheckedIconWrapper>


const checkedStyle = css`
  background-color: red;
`

const rootStyle = css`
  background-color: blue;
  width: 24px;
`

const Checkbox = (props) => {
    const {
        checkedIcon,
        icon,
        checked,
        onChange,
        ...other
    } = props

    return (
        <div style={{ maxWidth: '24px', maxHeight: '24px'}}>
            <SwitchBase
                type={'checkbox'}
                checkedIcon={<CheckedIcon />}
                onChange={onChange}
                icon={<CheckboxIcon />}
                checked={checked}
                classes={{
                    checked: checkedStyle,
                    root: rootStyle
                }}
            />
        </div>
    )
}

export default Checkbox
