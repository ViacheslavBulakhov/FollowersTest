import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainWrap, StyledLink, StyledNav } from './sharedLayout.styled';

export default function SharedLayout() {
  return (
    <div style={{ backgroundColor: '#ebd8ff' }}>
      <header>
        <StyledNav>
          <StyledLink to={'/'}>Go Home</StyledLink>

          <StyledLink to={'/tweets'}>Tweets</StyledLink>
        </StyledNav>
      </header>

      <main>
        <MainWrap>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainWrap>
      </main>
    </div>
  );
}
