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
    <p className={` ${fredoka.className} ${styles.moviment} w-1/2  mt-6 text-2xl text-slate-600 ${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    <div className='w-1/2 flex items-center justify-end'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={` ${styles.moviment} ${show? "": "opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    
</div>):
    (<div className={`flex justify-between items-center mx-24 `}>
    <div className='w-1/2 flex items-center justify-start'>
    <Image
        src={caminho}
        height={0}
        width={500}
        alt='desenho de pessoas cozinhando'
        className={` ${styles.moviment} ${show? "": "opacity-0 translate-x-1/3"}`}
        
    />
    </div>
    <p className={` ${fredoka.className} ${styles.moviment} flex justify-end w-1/2  mt-6 text-2xl text-slate-600 ${show? "": 'opacity-0 -translate-x-1/3' }`} ref={refTexto}>{texto}</p>
    
    
</div>)}
    </div>
    
    
  )
}

export default QuemSomosCard
