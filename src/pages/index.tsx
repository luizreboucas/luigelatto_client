import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import Header from '@/components/Header'
import Main from '@/components/Main'
import QuemSomos from '@/components/QuemSomos'
import Produtos from '@/components/Produtos'
import Contato from '@/components/Contato'


const inter = Inter({ subsets: ['latin'] })

export default function Home() :ReactElement {
  return (
    <div >
      <div >
        <Header color='#00FFFF' title='Título está aqui'></Header>
        <Main/>
        <div className='w-screen flex justify-center'>
          <div className='h-1 bg-[#fbd45d] mt-10 w-2/3 rounded-3xl'></div>
        </div>
        
        <QuemSomos/>
        <Produtos/>
        <Contato/>
      </div>
      

      
    </div>
  )
}
