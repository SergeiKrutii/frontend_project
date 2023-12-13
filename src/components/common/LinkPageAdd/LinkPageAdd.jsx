import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyledLinkPageAdd } from './StyledLinkPageAdd'
import SpriteIcon from '../spriteIcon/SpriteIcon'

const LinkPageAdd = props => {
    return (
    <StyledLinkPageAdd>
        <Link to='/addbook'>
            <SpriteIcon width='52' height='52' name={'icon-more'} />    
        </Link>
    </StyledLinkPageAdd>
  )
}

LinkPageAdd.propTypes = {}

export default LinkPageAdd