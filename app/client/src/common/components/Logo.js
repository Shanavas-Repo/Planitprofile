/**
 * @flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../theme'
import { lighten } from 'polished'

const Text = styled.h1`
  font-family: NexaBold;
  font-size: ${props => (props.big ? 4 : 2.5)}em;
  margin: 0;
  color: ${lighten(0.15, colors.foreground)};
`

const StyledLink = styled(Link)`
  text-transform: lowercase;
  text-decoration: none;
  color: white;
`

const Accent = styled.em`
  font-style: normal;
  color: ${colors.primary};
`

type Props = {
  big?: boolean
}

function Logo({ big }: Props) {
  return (
    <Text big={big}>
    Create New Resume
    </Text>
  )
}

export default Logo