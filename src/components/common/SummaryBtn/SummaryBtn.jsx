import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './StyledSummaryButton'

const SummaryBtn = ({text, style, btnAction}) => {
  return (
      <StyledButton type='button' style={{...style}} onClick={btnAction}>{text}</StyledButton>
  )
}

SummaryBtn.propTypes = {}

export default SummaryBtn