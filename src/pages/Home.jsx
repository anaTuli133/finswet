import React from 'react';
import Menu from '../components/Menu/Menu';
import Banner from '../components/Menu/banner/Banner';
import Work from '../components/Menu/work/Work'
import Project from '../components/project/Project'
import Client from '../components/Client/Client';
import Features from '../components/features/Features';
import Acc from '../components/acc/Acc';
import Contactform from '../components/Contactform/Contactform';
import Blog from '../components/blog/Blog';
import ContactFooter from '../components/ContactFooter/ContactFooter';



const Home = () => {
  return (
    <>

       <Banner/>
       <Work/>
       <Project/>
       <Features/>
       <Client/>
       <Acc/> 
       <Contactform/>
       <Blog/>
     </>

  );
};

export default Home;