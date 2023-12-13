import React from 'react'
import PropTypes from 'prop-types'

import ChapterLibrary from '../chapterLibrary/ChapterLibrary'

import {
    StyledCategotyLibrary,
    StyledCategoryTitle,
    StyledCategoryItemBox
} from './StyledCategoryLibrary'

const CategoryLibrary = ({isReadingBooks, isReadBooks, isWantReadToBooks }) => {
  return (
      <StyledCategotyLibrary>
          <StyledCategoryItemBox>
              <StyledCategoryTitle>Вже прочитано</StyledCategoryTitle>
              <ChapterLibrary title="Вже прочитано" books={isReadingBooks} flags={true} />
          </StyledCategoryItemBox>
        
          <StyledCategoryItemBox>
              <StyledCategoryTitle>Читаю</StyledCategoryTitle>
              <ChapterLibrary title="Читаю" books={isReadBooks} />
          </StyledCategoryItemBox>

          <StyledCategoryItemBox>
              <StyledCategoryTitle>Маю намір прочитати</StyledCategoryTitle>
              <ChapterLibrary title="Маю намір прочитати" books={isWantReadToBooks} />
          </StyledCategoryItemBox>
    </StyledCategotyLibrary>
  )
}

CategoryLibrary.propTypes = {}

export default CategoryLibrary