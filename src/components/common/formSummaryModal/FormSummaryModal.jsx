import React from 'react'
import PropTypes from 'prop-types'

import StarRating from '../starRating/StarRating'
import SummaryBtn from '../SummaryBtn'

import {
  StyledFormSummaryModal,
  StyledTextSummaryModal,
  StyledInputSummaryModal,
  StyledStarRating,
  StyledButtonBox,
  StyledFormSummaryModalBox,
    
} from './StyledFormSummaryModal';

const FormSummaryModal = ({handleOpen}) => {
  return (
      <StyledFormSummaryModal>
        <StyledFormSummaryModalBox>
            <StyledTextSummaryModal>Обрати рейтинг книги</StyledTextSummaryModal>
            <StyledStarRating>
            <StarRating />
            </StyledStarRating>
            <StyledTextSummaryModal>Резюме</StyledTextSummaryModal>
            <StyledInputSummaryModal type="text" />
            <StyledButtonBox>
                <SummaryBtn style={{ marginRight: '15px' }} text='Назад' btnAction={handleOpen} />
                <SummaryBtn style={{background: '#FF6B08', color: '#fff'}} text='Зберегти'/>
            </StyledButtonBox>
        </StyledFormSummaryModalBox>
    </StyledFormSummaryModal>
  )
}

FormSummaryModal.propTypes = {}

export default FormSummaryModal