import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import Header from '@/components/Header'
import Main from '@/components/Main'
import QuemSomos from '@/components/QuemSomos'
import Produtos from '@/components/Produtos'
import Contato from '@/components/Contato'
import GlobalLayout from '@/components/GlobalLayout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() :ReactElement {
  return (
    <div className='w-screen'>
      <GlobalLayout >
        
        <Main/>
        <div className='w-screen flex justify-center'>
          <div className='h-1 bg-[#fbd45d] mt-10 w-2/3 rounded-3xl'></div>
        </div>
        
        <QuemSomos/>
        <Produtos/>
        <Contato/>
      </GlobalLayout>
      

      
    </div>
  )
}
