import PropTypes from 'prop-types'
import { useState } from 'react'
import { useMatchMedia } from 'helpers/mediaQuery'

import LibraryBookItemMob from '../LibraryBookItemMob'
import LibraryBookItemDesk from 'components/LibraryBookItemDesk'

const LibraryBookItem = ({ book, ifResTrue }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {isMobile} = useMatchMedia()
  
  return isMobile ? (
    <LibraryBookItemMob
    open={open}
    handleOpen={handleOpen}
    handleClose={handleClose}
    book={book} />)
    :
    (<LibraryBookItemDesk ifResTrue={ifResTrue} open={open}
    handleOpen={handleOpen}
    handleClose={handleClose}
    book={book} />)
}

LibraryBookItem.propTypes = {}

export default LibraryBookItem