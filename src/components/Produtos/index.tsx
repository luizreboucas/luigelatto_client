import React,{ useRef, useState,useEffect } from 'react'
import { Fredoka } from '@next/font/google'
import ProdutosCard from './ProdutosCArd'
import Link from 'next/link'



const fredoka = Fredoka({
    subsets : ['latin'],
    weight: ['700','500']
})

const Produtos = () => {


  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 1500 && window.scrollY < 2008
      ? setIsVisible1(true)
      : window.scrollY > 2100 && window.scrollY < 2400
        ? setIsVisible2(true)
        : window.scrollY > 2484 && window.scrollY < 2830
          ? setIsVisible3(true)
          : window.scrollY > 2922 && window.scrollY < 3247
            ? setIsVisible4(true)
            : ""
    })

  },[])

  

  return (
    <section >
        <div className={` flex justify-center `} id='produtos'>
         <button className={`text-4xl text-[#2E99B2] ${fredoka.className}  mt-16 pb-3 drop-shadow-lg border-b-4  border-solid  px-8  rounded-lg`}>Sabores</button>
        </div>
        <div >
        <ProdutosCard
        titulo='Chocolate'
            descricao = "Feito com o pretigiado chocolate Belga Callebaut.O cacau é cozido cuidadosamente para que suas melhores características sejam realçadas, resultando, assim, em um gelato com um sabor inigualável."
            imagem='/images/sorvetes/chocolate.jpg'
            corFundo = "bg-[#2e99b2]"
            corTexto='text-yellow-300'
            isVisible={isVisible1}
        />
        </div>
        <div >
        <ProdutosCard
        titulo='Paçoquinha'
            descricao = "Gelato feito com o tradicional doce brasileiro de amendoim com farinha de mandioca e açúcar. O amendoim, por ter gorduras naturais e boas, deixa o gelato com uma textura lisa e perfeita."
            imagem='/images/sorvetes/pacoquita.jpg'
            corFundo = "bg-yellow-300 "
            corTexto='text-[#2e99b2]'
            
            isVisible={isVisible2}
        />
        </div>
        <div >
        <ProdutosCard
        titulo='Ninho Trufado'
            descricao = "Gelato feito com o genuíno Ninho Nestlé. Acompanhado de ganache de chocolate feito com chocolates finos de melhor qualidade."
            imagem='/images/sorvetes/ninho.jpg'
            corFundo = "bg-[#2e99b2]"
            corTexto='text-yellow-300'
            isVisible={isVisible3}
        />
        </div>
        <div >
        <ProdutosCard
        titulo='Crocante'
            descricao = "Gelato a base de creme com muitos fios de caramelo e pedaços de castanha de qualidade caramelizada artesanalmente conferindo assim uma crocância sem igual, como o nome já sugere."
            imagem='/images/sorvetes/crocante.jpg'
            corFundo = "bg-yellow-300 "
            corTexto='text-[#2e99b2]'
            
            isVisible={isVisible4}
        />
        </div>
        <div className='flex justify-center mt-10'>
          <button className='text-2xl text-slate-500 font-bold hover:cursor-pointer mb-10' >
            <Link href='/produtos'>ver todos os sabores</Link> 
            </button>
        </div>
        
        
        
        


    </section>
  )
}

export default Produtos
