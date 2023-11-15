import { Suspense } from 'react';
import { Container, HeadContainer } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <header>
        <HeadContainer>
          <Navigation />
          <AuthNav />
          <UserMenu />
        </HeadContainer>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </div>
  );
};
