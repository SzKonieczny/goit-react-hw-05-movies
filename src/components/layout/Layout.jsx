import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarDiv, BoxLayout } from './layout.styled';

export const Layout = () => {
  return (
    <BoxLayout>
      <AppBarDiv>
        <AppBar />
      </AppBarDiv>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </BoxLayout>
  );
};
