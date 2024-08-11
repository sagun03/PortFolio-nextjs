import React from 'react';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col gap-3">
      <a href="mailto:sagunsaluja13@gmail.com" className='text-sm' >
        <Email sx={{ color: '#ff5733' }} />
        {" "}
        sagunsaluja13@gmail.com
      </a>
      <a href="https://github.com/sagun03" className='text-sm' target="_blank" rel="noopener noreferrer">
        <GitHub />
        {" "}
        sagun03
      </a>
      <a href="https://www.linkedin.com/in/sagun-saluja-018772159/" className='text-sm' target="_blank" rel="noopener noreferrer">
        <LinkedIn sx={{ color: '#0A66C2' }} />
        {" "}
        sagun-saluja
      </a>
      <a href="https://twitter.com/sagun_saluja" target="_blank" className='text-sm' rel="noopener noreferrer">
        <Twitter sx={{ color: '#1DA1F2' }} />
        {" "}
        sagun_saluja
      </a>
      <a href="https://leetcode.com/sagun03/" target="_blank" className='text-sm flex justify' rel="noopener noreferrer">
        <img src='/LeetCode_logo.png' alt="LeetCode Profile" style={{ width: '20px', height: '20px', marginRight: '5px' }} /> LeetCode Profile
      </a>
    </div>
  );
};

export default SocialMediaLinks;
