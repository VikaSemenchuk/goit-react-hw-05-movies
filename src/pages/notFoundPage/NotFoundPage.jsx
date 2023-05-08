import Loader from 'components/loader/Loader';
import { Container } from 'layout/layout/Layout.styled';
import React, { Suspense } from 'react';
import { StyledNotFoundPage, StyledLink } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <StyledNotFoundPage>
          This page was not found. You can try to come back to the
          <StyledLink to={'/'}>Home page</StyledLink>
        </StyledNotFoundPage>
      </Container>
    </Suspense>
  );
};

export default NotFoundPage;
