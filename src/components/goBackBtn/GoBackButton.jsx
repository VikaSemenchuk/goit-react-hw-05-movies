import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledBackBtn } from './GoBackBtn.styled';

const GoBackButton = () => {
  const location = useLocation();

  return (
    <StyledBackBtn to={location.state?.from ?? '/'} type="button">
      Go Back
    </StyledBackBtn>
  );
};

export default GoBackButton;
