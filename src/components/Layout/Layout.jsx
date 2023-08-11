import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledList, StyledOutlet } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const pages = [
    { title: 'Home', src: '/' },
    { title: 'Movies', src: '/movies' },
  ];
  return (
    <>
      <nav>
        <StyledList>
          {pages.map(page => (
            <li key={page.title}>
              <StyledLink to={page.src}>{page.title}</StyledLink>
            </li>
          ))}
        </StyledList>
      </nav>
      <StyledOutlet>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledOutlet>
    </>
  );
};
