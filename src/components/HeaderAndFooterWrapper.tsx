import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function HeaderAndFooterWrapper(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
