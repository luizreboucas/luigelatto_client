import React, { useRef,useEffect,useState } from 'react'
import { Fredoka } from '@next/font/google'
import QuemSomosCard from '../QuemSomosCard'

const fredoka = Fredoka({
    subsets: ['latin'],
    weight: ['700','500']
})

const QuemSomos = () => {
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    useEffect(()=>{

       
        window.addEventListener("scroll",()=>{

           window.scrollY > 304 && window.scrollY < 699
           ?    setShow1(true)
           :    window.scrollY > 700 && window.scrollY < 1000
                ?   setShow2(true)
                :   window.scrollY > 1222 && window.scrollY < 1293
                    ?   setShow3(true)
                    :   ""

            console.log(window.scrollY)
        })
        
        
},[])

    
  return (
    <section >
        <div className={` flex justify-center`} id='quem-somos'>
         <button className={`text-4xl text-[#2E99B2] ${fredoka.className}  mt-16 pb-3 drop-shadow-lg border-b-4  border-solid  px-8  rounded-lg`}>Quem Somos</button>
        </div>
        <div className='mt-10'>
            
            <QuemSomosCard
            texto="Nós somos a Luigelatto, uma empresa familiar com sede em Fortaleza, Ceará. Cada gelato que fazemos é uma receita de família, resgatada a mais de 20 anos,  que foi melhorada e modernizada ao longo dos anos com as mais recentes técnicas de criação de gelato italiano."
            caminho="/images/pessoas-cozinhando.jpg"
            show={show1}
            inverse={false}
           />
            <QuemSomosCard
            texto="O que nos diferencia é a nossa dedicação à qualidade. Usamos apenas ingredientes autênticos e de alta qualidade em nossos sorvetes, o que significa que nossos clientes experimentam um sabor excepcional em cada colherada. Mas não é só isso. Nossa equipe é apaixonada pelo que faz e isso se reflete em cada sorvete que produzimos."
            caminho="/images/ice-cream.jpg"
            show={show2}
            inverse
           />
           <QuemSomosCard
            texto="Para nós, a Luigelatto não é apenas um negócio. É uma tradição familiar que passamos de geração em geração, e estamos felizes em compartilhar com nossos clientes em cada mordida de um saboroso gelato italiano"
            caminho="/images/familia.jpg"
            show={show3}
            inverse={false}
           />

        </div>
        
        
        
       
      
    </section>
  )
}

export default QuemSomos
