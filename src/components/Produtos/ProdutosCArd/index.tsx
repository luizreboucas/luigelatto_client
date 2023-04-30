import React from 'react'
import Image from 'next/image'
import { Fredoka } from '@next/font/google'
import styles from "./styles.module.css"

const fredoka = Fredoka({
    subsets : ['latin'],
    weight: ['700','500']
})

interface ProdutosCardProps {
    descricao: string,
    imagem: string,
    titulo: string,
    corFundo :string,
    corTexto: string,
    direction?: string,
    isVisible: boolean
}

const ProdutosCard = ({descricao,imagem,titulo,corFundo,corTexto,direction = "-translate-x-14",isVisible}: ProdutosCardProps) => {
  
  return (
    <div className={`${styles.transicao} flex mx-24 justify-between ${corFundo} rounded-3xl py-10 mt-10 ${isVisible? "": `opacity-0 ${direction}`}`}>
        <div className='w-1/2 flex flex-col items-star'>
            <h3 className={` ${fredoka.className}  flex justify-endmt-6 text-4xl text-slate-50 mx-10 drop-shadow-2xl`}>{titulo}</h3>
            <p className={` ${fredoka.className}  flex justify-end mt-6 text-2xl ${corTexto} mx-10`} >{descricao}</p>
        </div>
      <div className='w-1/2 flex justify-end mr-10'>
      <Image
        src={imagem}
        height={0}
        width={400}
        alt='foto de sorvete'
        className='rounded-2xl  drop-shadow-lg '
      />
      </div>
      
    </div>
  )
}

export default ProdutosCard
