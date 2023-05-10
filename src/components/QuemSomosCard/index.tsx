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
    ? (<div className={`flex justify-between items-center md:mx-24 mx-4`}>
    <p className={` ${fredoka.className} ${styles.moviment}  md:w-1/2 w-screen mt-12 md:mt-6 text-2xl text-slate-600 bg-blue-100 p-10 rounded-lg drop-shadow-lg md:p-0 md:bg-inherit ${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    <div className='hidden md:w-1/2 md:flex items-center justify-end'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={`${styles.moviment} hidden md:block ${show? "": "hidden opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    
</div>):
    (<div className={`flex justify-between items-center md:mx-24 mx-4`}>
    <div className='hidden md:w-1/2 md:flex  items-center justify-start'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={`${styles.moviment} ${show? "": " hidden opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    <p className={` ${fredoka.className} ${styles.moviment} md:w-1/2 w-screen mt-12 flex justify-end md:mt-6 text-2xl text-slate-600 bg-yellow-100 p-10 rounded-lg drop-shadow-lg md:p-0 md:bg-inherit${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    
    
</div>)}
    </div>
    
    
  )
}

export default QuemSomosCard
