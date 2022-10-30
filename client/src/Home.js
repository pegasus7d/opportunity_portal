import React from 'react';
import './Home.css';
import Nav from './Components/Navbar/navbar';
import Content from './Pages/home/Content';
import Cards from './Pages/home/Cards';
import Footer from './Components/Footer/footer';
import Contentmain from './Pages/home/carousel';
function Home() {
  return (
  <React.Fragment>
    <Nav />
    <Contentmain />
    <Content />
    <Cards />
    <Footer/>
  </React.Fragment>
  );
}

export default Home;