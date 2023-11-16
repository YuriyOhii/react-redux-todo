import { Suspense } from 'react';
import { Container, HeadContainer } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const SharedLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div>
      <header>
        <HeadContainer>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}              
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
