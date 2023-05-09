import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Fredoka } from '@next/font/google'
import styles from "./styles.module.css"

const fredoka = Fredoka({
    subsets: ['latin'],
    weight: ['500']
})

interface QuemSomosCardProps{
    caminho: string,
    texto: string,
    show: boolean,
    inverse: boolean   
}


const QuemSomosCard = ({caminho,texto,show,inverse}: QuemSomosCardProps) => {
    

    const refTexto = React.useRef<HTMLInputElement>(null)
    
    
  return (
    <div>
        {!inverse
    ? (<div className={`flex justify-between items-center mx-24 `}>
    <p className={` ${fredoka.className} ${styles.moviment}  md:w-1/2 sm:w-screen sm:mt-12 mt-6 text-2xl text-slate-600 sm:bg-blue-100 sm:p-10 rounded-lg sm:drop-shadow-lg md:p-0 md:bg-inherit ${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    <div className='sm:hidden md:w-1/2 md:flex items-center justify-end'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={` lg:${styles.moviment} sm:hidden md:block ${show? "": "opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    
</div>):
    (<div className={`flex justify-between items-center mx-24 `}>
    <div className='sm:hidden md:w-1/2 md:flex  items-center justify-start'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={`${styles.moviment} ${show? "": "opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    <p className={` ${fredoka.className} ${styles.moviment} md:w-1/2 sm:w-screen sm:mt-12 flex justify-end mt-6 text-2xl text-slate-600 sm:bg-yellow-100 sm:p-10 rounded-lg sm:drop-shadow-lg md:p-0 md:bg-inherit${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    
    
</div>)}
    </div>
    
    
  )
}

export default QuemSomosCard
