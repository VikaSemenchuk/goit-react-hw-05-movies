import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styled';
import { ToastContainerEl } from 'components/toast/ToastContainer';
import Loader from 'components/loader/Loader';
import { Header } from 'layout/header/Header';
import { Footer } from 'layout/footer/Footer';

export const Layout = () => {
  return (
    <>
      <ToastContainerEl />
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
