import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='bg-white py-20 sm:py-24 relative'>
      <div className='bg-articBlue flex flex-col p-6 relative'>

        {/* Title */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex justify-center font-bold text-darkPurple text-xl sm:text-2xl'>
            <h3>
              SERVIÇOS
            </h3>
          </div>
        </div>

        {/* Services */}
        <div className='flex flex-wrap justify-around gap-20 md:gap-24 lg:justify-evenly py-20 md:py-28'>
          <ServiceCard number={1} text='Prover suporte para a avaliação de novos produtos e tecnologias' />
          <ServiceCard number={2} text='Reduzir riscos na utilização de novos produtos e tecnologias' />
          <ServiceCard number={3} text='Orientar o mercado na escolha de novos produtos e tecnologias' />
          <ServiceCard number={4} text='Estimular o processo de inovação tecnológica' />
          <ServiceCard number={5} text='Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica' />
        </div>

        {/* Button */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-full'>
          <div className='flex justify-center font-bold text-darkPurple'>
            <button type="submit" className="submit-button bg-amberYellow w-[350px] p-4 mt-4 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-300 hover:shadow-md hover:scale-110">
              Fale com um especialista
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services