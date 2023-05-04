import React from 'react'
import Image from 'next/image'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({
    subsets : ['latin'],
    weight :['700', '500']
})

const Main = () => {
  return (
    <main className='bg-[#ffffff] pt-24 border-b-[#2E99B2]  px-24 '>
        <div className='flex  justify-between'>
          <div className={`w-1/2 mt-14 ${fredoka.className}`}>
              <h4 className={` text-xl text-slate-600 `}>Conheça o</h4>
             <h2 className={`text-7xl text-[#2E99B2]`}>gelato artesanal de verdade</h2>
              <h4 className={` text-xl text-slate-600 mt-6`}>preparado com ingredientes frescos e selecionados, para você sentir o sabor da <span className='text-[#2E99B2]'>tradição italiana</span> em cada colherada!</h4>
          </div>
           
            <Image
                src={'/images/people.jpg'}
                alt='pessoas tomando sorvete'
                height={3200}
                width={400}
                
            />
        </div>
        
      
    </main>
  )
}

export default Main