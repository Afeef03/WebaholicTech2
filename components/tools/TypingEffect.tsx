import React from 'react';
import {ReactTyped} from 'react-typed';

const TypingEffect = () => {
    const strings = [
      '<span class="text-primary">Odoo Software</span>',
        '<span class="text-primary">Websites</span>',
        '<span class="text-primary">Web-Apps</span>',
        '<span class="text-primary">Mobile-Applications</span>',
        '<span class="text-primary">E-Commerce Stores</span>',
      ];
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={50}
      backSpeed={30}
      backDelay={1000}
      loop
    />
  );
};

export default TypingEffect;
