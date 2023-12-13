import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { StyledAddPageMobile } from './StyledAddPageMobile'
import FormAddBook from 'components/common/formAddBook/FormAddBook';
import MainModal from 'components/common/mainModal';
import EmptySteps from 'components/common/EmptySteps';

const AddPageMobile = props => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const book = false;

  useEffect(() => {
    if (!book) {
      setOpen(true)
    }
  }, [book])
  

  return (
    <StyledAddPageMobile>
      <FormAddBook />
      {book ? (<FormAddBook />) :
        (<MainModal component={<EmptySteps handleClose={handleClose} />}
        handleClose={handleClose}
        handleOpen={handleOpen} 
        open={open} />)}
    </StyledAddPageMobile>
  )
}

AddPageMobile.propTypes = {}

export default AddPageMobile