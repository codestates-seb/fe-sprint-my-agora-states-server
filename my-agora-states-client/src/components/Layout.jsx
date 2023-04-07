import React from 'react';

function Header() {
  return (
    <section className='navigation'>
      <h1>Agora States</h1>
      <nav>
        <a href='https://www.codestates.com'>codestates</a>
        <a href='https://urclass.codestates.com'>UR CLASS</a>
      </nav>
    </section>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
