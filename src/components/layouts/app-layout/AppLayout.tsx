import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import { Footer } from '../../blocks/footer/Footer';
import { Header } from '../../blocks/header/Header';
import { AuthStatus } from '../../auth-status/AuthStatus';
import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <>
      <AuthStatus />
      <Header />
      <Suspense fallback={<h1>Something went wrong...</h1>}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
