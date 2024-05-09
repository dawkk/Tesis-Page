import React from 'react';

const ServiceCard = ({ number, text }: { number: number, text: string }) => {
  return (
    <div className='relative w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
      <div className='gradient-purple-background-inverted rounded-full h-24 w-24 flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -mt-12 '>
        <p className='text-white text-4xl'>{number}</p>
      </div>
      <p className='text-center font-medium py-2 mx-8 mt-8'>{text}</p>
    </div>
  );
};

export default ServiceCard;
