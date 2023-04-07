import React from 'react';

function Header() {
  return <div>헤더</div>;
}

function Footer() {
  return <div>푸터</div>;
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
