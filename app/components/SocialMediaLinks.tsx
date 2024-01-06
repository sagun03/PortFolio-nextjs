import React from 'react';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <a href="mailto:sagunsaluja13@gmail.com" className='text-sm' target="_blank" rel="noopener noreferrer">
        <Email />
        {" "}
        sagunsaluja13@gmail.com
      </a>
      <a href="https://github.com/sagun03" className='text-sm' target="_blank" rel="noopener noreferrer">
        <GitHub />
        {" "}
        sagun03
      </a>
      <a href="https://www.linkedin.com/in/sagun-saluja-018772159/" className='text-sm' target="_blank" rel="noopener noreferrer">
        <LinkedIn />
        {" "}
        sagun-saluja
      </a>
      <a href="https://twitter.com/sagun_saluja" target="_blank" className='text-sm' rel="noopener noreferrer">
        <Twitter />
        {" "}
        sagun_saluja
      </a>
    </div>
  );
};

export default SocialMediaLinks;
