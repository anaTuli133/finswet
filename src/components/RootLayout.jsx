import React from 'react';
import Menu from './Menu/Menu';
import ContactFooter from './ContactFooter/ContactFooter';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
   <>
   <Menu/>
   <Outlet/>
   <ContactFooter/>
   </>
  );
};

export default RootLayout;