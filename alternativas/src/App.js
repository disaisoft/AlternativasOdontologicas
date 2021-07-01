import React from 'react';
import Header from './components/HeaderComponent/Header';
import AboutMe from './components/AboutMeComponent/AboutMe';
import Footer from './components/FooterComponent/Footer';
import Portfolio from './components/ServicesComponent/Services';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />      
      <Portfolio />
      <Footer />

    </React.Fragment>
  );
}
export default App;

