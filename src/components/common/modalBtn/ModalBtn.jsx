import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledModalBtn } from './StyledModalBtn'

import MainModal from '../mainModal/MainModal'

const ModalBtn = ({text, component, handleClose, handleOpen, open, style}) => {
  
  return (
    <>
      <StyledModalBtn style={{...style}} type='button' onClick={handleOpen}>{text}</StyledModalBtn>
      <MainModal
        component={component}
        handleClose={handleClose}
        handleOpen={handleOpen} 
        open={open} />
    </>
  )
}

ModalBtn.propTypes = {}

export default ModalBtn