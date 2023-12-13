import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useMatchMedia } from 'helpers/mediaQuery'
import {
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledFormBtn,
  StyledInputName,
  StyledInputAuthor,
  StyledInputYear,
  StyledInputPages,
  StyledFormMobileBox,
  StyledInputWrapperBoxMobile,
  StyledFormDestopBox,
} from './StyledFormAddBook'

const FormAddBook = props => {
  const { isMobile, isDesktop } = useMatchMedia()
  
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      year: "",
      pages: "",
    }
  })

  return isMobile ? (
      <>
      <StyledForm>
          <StyledInputWrapper>
              <StyledInputName
                  id='name'
                  name='name'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
              <StyledLabel htmlFor="name">Назва книги</StyledLabel>
          </StyledInputWrapper>

          <StyledInputWrapper>
              <StyledInputAuthor
                  id='author'
                  name='author'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
              <StyledLabel htmlFor="author">Автор книги</StyledLabel>
          </StyledInputWrapper>

          <StyledInputWrapper>
              <StyledInputYear
                  id='year'
                  name='year'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
              <StyledLabel htmlFor="year">Рік випуску</StyledLabel>
          </StyledInputWrapper>

          <StyledInputWrapper>
              <StyledInputPages
                  id='pages'
                  name='pages'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
              <StyledLabel htmlFor="pages">Кількість сторінок</StyledLabel>
          </StyledInputWrapper>
        </StyledForm>
          <StyledFormBtn type='button'>Додати</StyledFormBtn>
      </>
      
  ) : (
      <StyledFormMobileBox>
      <StyledForm>
          <StyledInputWrapper>
              <StyledLabel htmlFor="name">Назва книги</StyledLabel>
              <StyledInputName
                  id='name'
                  name='name'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
          </StyledInputWrapper>
<StyledInputWrapperBoxMobile>
          <StyledInputWrapper>
              <StyledLabel htmlFor="author">Автор книги</StyledLabel>
              <StyledInputAuthor
                  id='author'
                  name='author'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
          </StyledInputWrapper>

          <StyledInputWrapper>
              <StyledLabel htmlFor="year">Рік випуску</StyledLabel>
              <StyledInputYear
                  id='year'
                  name='year'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
          </StyledInputWrapper>

          <StyledInputWrapper>
              <StyledLabel htmlFor="pages">Кількість сторінок</StyledLabel>
              <StyledInputPages
                  id='pages'
                  name='pages'
                  type="text"
                  placeholder='...'
                //   onChange={''}
                //   value={''}
              />
            </StyledInputWrapper>
            </StyledInputWrapperBoxMobile>
        </StyledForm>
          <StyledFormBtn type='button'>Додати</StyledFormBtn>
      </StyledFormMobileBox>)
}

FormAddBook.propTypes = {}

export default FormAddBook