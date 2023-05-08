import Loader from 'components/loader/Loader';
import { Footer } from 'layout/footer/Footer';
import { Header } from 'layout/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
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
