import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
`;

const StarItem = styled.div`
  color: ${(props) =>
    props.active ? 'rgb(255, 195, 48)' : 'rgb(255, 202, 117)'};
  margin: 2px;
  cursor: ${(props) => (props.disabled ? 'disabled' : 'pointer')};
  font-size: ${(props) => props.size || '14px'};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.disabled ? '' : 'rgb(255, 195, 48)')};
  }

  &.star__item_select {
    color: ${(props) => (props.disabled ? '' : 'rgb(255, 134, 0)')};
  }
`;

const StarRating = ({ starSize, readOnly }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    if (!readOnly) {
      setRating(value);
    }
  };

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <StarItem
          key={value}
          active={value.toString()}
          value={value}
          onClick={() => handleStarClick(value)}
          className={value <= rating ? 'star__item_select' : ''}
          size={starSize}
          disabled={readOnly}
        >
          <FaStar />
        </StarItem>
      ))}
    </StarContainer>
  );
};

export default StarRating;