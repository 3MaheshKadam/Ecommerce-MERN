import React from 'react';
import { RiYoutubeFill, RiInstagramFill, RiTwitterFill, RiLinkedinFill, RiGithubFill, RiDribbbleFill } from 'react-icons/ri';

const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-red-400 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiYoutubeFill />
      </a>
      <a href="https://www.instagram.com/maheshkadam_2524/?igsh=Y3BsMGszb3VqcmFt" target="_blank" rel="noopener noreferrer" className='text-purple-400 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiInstagramFill />
      </a>
      <a href="https://twitter.com/maheshkadam2524?t=MAJAs_qfmFiRiwLbuc6k7Q&s=09" target="_blank" rel="noopener noreferrer" className='text-neutral-600 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiTwitterFill />
      </a>
      <a href="https://www.linkedin.com/in/mahesh-kadam-6a9b13219/" target="_blank" rel="noopener noreferrer" className='text-blue-400 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiLinkedinFill />
      </a>
      <a href="https://github.com/3MaheshKadam" target="_blank" rel="noopener noreferrer" className='text-purple-500 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiGithubFill />
      </a>
      <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer" className='text-pink-400 text-2xl hover:-translate-y-1 transition-all duration-500'>
        <RiDribbbleFill />
      </a>
    </div>
  );
};

export default SocialIcons;
