import React from 'react'
import type { ReactNode } from 'react'
import Header from '@/components/Header'

interface LayoutProps{
    children: ReactNode
}


const GlobalLayout = ({children}: LayoutProps) => {
  return (
    <div className='w-screen'>
      <Header color='#00FFFF' title='Título está aqui'></Header>
      {children}
    </div>
  )
}

export default GlobalLayout