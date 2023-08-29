import React, {useState} from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import {hours, homeObjTwo, contactUs} from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar';
import Gallery from '../Components/Gallery';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Gallery />
      <InfoSection {...hours} />
      <InfoSection {...contactUs} />
      <Footer />
    </>
  );
};

export default Home;
