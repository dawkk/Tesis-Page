import React from 'react';

const ServiceCard = ({ number, text }: { number: number, text: string }) => {
  return (
    <div className='relative flex items-center justify-center w-[350px] h-[140px] shadow-xl bg-gray-100  p-6 rounded-lg hover:scale-105 duration-300'>
      <div className='gradient-purple-background-inverted rounded-full h-24 w-24 flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -mt-12 '>
        <p className='text-white text-4xl'>{number}</p>
      </div>
      <p className='text-center text-sm lg:font-md pt-8 '>{text}</p>
    </div>
  );
};

export default ServiceCard;
