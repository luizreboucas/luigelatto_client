import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto,Fredoka } from "@next/font/google"

interface HeaderProps{
    title: string,
    color?: string
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500','700']
})


const fredoka = Fredoka({
    subsets : ['latin'],
    weight :['700', '500']
})



const Header = ({title, color = "#fff"}: HeaderProps) => {
  return (
    <header className=' flex items-center justify-between drop-shadow-xl bg-yellow-200 w-screen'>
      <Image 
        src="/images/logo-luigelatto.png" 
        alt={'logo luigelatto'}
        width={200}
        height={0}
        className='mt-4 ml-24'
        />
      <nav className='h-full  mr-24'>
        <ul className={` hidden gap-9 font-bold h-full text-xl items-center  ${fredoka.className}  lg:flex`}>
          <li className='px-4 py-2 bg-[#2E99B2] text-slate-50 rounded-md drop-shadow-lg'>
            <Link href={"/"} scroll={true}>home</Link>
          </li>
          <li className='px-4 py-2 bg-[#2E99B2] text-slate-50 rounded-md drop-shadow-lg'>
            <Link href={"#quem-somos"}>quem somos</Link>
          </li>
          <li className='px-4 py-2 bg-[#2E99B2] text-slate-50 rounded-md drop-shadow-lg'>
            <Link href={"#produtos"}>produtos</Link>
          </li>
          <li className='px-4 py-2 bg-[#2E99B2] text-slate-50 rounded-md drop-shadow-lg'>
            <Link href={"#contato"}>contato</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
