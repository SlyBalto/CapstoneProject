import React from 'react';
import Specials from './specials.js';
import Hero from './hero.js';
import Testimonials from './testimonials.js';

function Main() {
  return (
    <main className="vertical-stack" id="main-container">
      <Hero/ >
      <Specials/ >
      <Testimonials/ >
    </main>
  );
}

export default Main;
