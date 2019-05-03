import { css } from 'styled-components'
import { space } from 'styled-system'

export default css`
  font-size: 1.1em;
  font-family: 'Fira Sans','GT America', 'Fira Sans','Acumin Pro', -apple-system, Roboto, sans-serif;
  font-weight: 400;
  color: ${props => props.theme.color.text.primary};
  text-align: ${props => (props.align ? props.align : 'left')};
  ${props =>
      props.strip &&
      css`
          margin: 0;
      `}
  font-style: ${props => (props.fontStyle ? props.fontStyle : 'inherit')};

  ${space};
`
