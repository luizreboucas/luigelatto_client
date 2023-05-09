import React from 'react'
import GlobalLayout from '@/components/GlobalLayout'
import Image from 'next/image'
import Link from 'next/link'

const Lista = () => {
  return (
    <GlobalLayout>
       <div className='w-full flex  flex-col items-center'>
        <Image
        src={"/images/lista.jpeg"}
        alt='lista de produtos'
        height={0}
        width={600}
        className='mt-10 drop-shadow-xl mb-10'/>
        <button className='text-2xl text-slate-500 font-bold hover:cursor-pointer mb-10' >
            <Link href='/#produtos'>Voltar</Link> 
            </button>
        
       </div>
       
      
    </GlobalLayout>
  )
}

export default Lista
