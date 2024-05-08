import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '../styles/styles.module.css'

const Hero = () => {
  return (
    <div className={styles['gradient-background']}>
      <div className='flex flex-col gap-12 px-6 py-10 md:p-10'>
        {/* Content */}
        <div className='text-white flex flex-col gap-4'>
          <div className='mb-4'>
            <h2 className='text-xl'>Desenvolvimento e gestão de
              serviços tecnológicos!</h2>
          </div>

          <div className='flex gap-2'>
            <FaArrowRightLong className='text-green-500 h-4 w-4 mt-0.5' />
            <p className='text-sm'>Gestão técnica de Programas Setoriais da Qualidade</p>
          </div>
          <div className='flex gap-2'>
            <FaArrowRightLong className='text-green-500 h-4 w-4 mt-0.5' />
            <p className='text-sm'>Avaliação de produtos inovadores para construção civil</p>
          </div>
          <div className='flex gap-2'>
            <FaArrowRightLong className='text-green-500 h-4 w-4 mt-0.5' />
            <p className='text-sm'>Realização de ensaios de materiais de construção</p>
          </div>
        </div>

        {/* Form */}

      </div>
    </div>
  )
}

export default Hero