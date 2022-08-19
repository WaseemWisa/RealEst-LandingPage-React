import React from 'react';
import './scss/main.scss';
import Home from './componates/Home';
import Features from './componates/Features';
import Blog from './componates/Blog';
import Companies from './componates/Companies';
import Contact from './componates/Contact';
import Trending from './componates/Ternding';
import Testimonial from './componates/Testimonial';
import Info from './componates/Info';
import Footer from './componates/Footer';

function App() {
  return (
    <>
      <Home/>
      <Features/>
      <Blog/>
      <Companies/>
      <Contact/>
      <Trending/>
      <Testimonial/>
      <Info/>
      <Footer/>
    </>
  );
}

export default App;
