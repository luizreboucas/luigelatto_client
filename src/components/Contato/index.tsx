import React, { useEffect, useState } from 'react'
import { Fredoka } from '@next/font/google'
const fredoka = Fredoka({
    subsets: ['latin'],
    weight: ['700', '500']
})

import { FaIceCream } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'
import axios from 'axios'



const Contato = () => {

    interface ContatosInterface {
        nome?: string,
        email?: string,
        telefone?: string,
        mensagem?: string
    }


    const [contato, setContato] = useState<ContatosInterface>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })
   

    //useEffect(()=>{
    //    console.log(contato)

    //  },[contato])


    const enviou = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            
            await axios.post("https://luigelatto.onrender.com/contato",contato)

            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='w-screen'>
            <div className={` flex justify-center `} id='quem-somos'>
                <button className={`text-4xl text-[#2E99B2] ${fredoka.className}  mt-16 pb-3 drop-shadow-lg border-b-4  border-solid  px-8  rounded-lg`}>Contato</button>
            </div>
            <div className=' md:flex-row sm:flex sm:flex-col mt-10 mb-20 bg-yellow-200 pb-6 pt-6 rounded-xl mx-24'>
                <div className='sm:w-auto md:w-1/2  ml-3'>
                    <form className={`flex flex-col gap-5 ${fredoka.className} text-xl mr-2`}>
                        <input placeholder='Nome' className='border-[#2E99B2] border-solid border-4 rounded-md p-3'
                            value={contato.nome}
                            onChange={(e) => setContato({...contato, nome: e.target.value})} />
                        <input placeholder='telefone (com DDD)' className='border-[#2E99B2] border-solid border-4 rounded-md p-3'
                            value={contato.telefone}
                            onChange={(e) => setContato({...contato, telefone: e.target.value})} />
                        <input placeholder='email' className='border-[#2E99B2] border-solid border-4 rounded-md p-3'
                            value={contato.email}
                            onChange={(e) => setContato({...contato, email: e.target.value})} />
                        <textarea placeholder='Digite sua Mensagem (opcional)' className='h-48 border-[#2E99B2] border-solid border-4 rounded-md p-3'
                            value={contato.mensagem}
                            onChange={(e) => setContato({...contato, mensagem: e.target.value})} />
                        <button className='p-3 sm:mb-12 md:mb-0 bg-blue-400 text-yellow-300 rounded-xl drop-shadow-lg' onClick={(e) => enviou(e)}>Enviar</button>
                    </form>
                </div>
                <div className={`flex flex-col gap-5 ${fredoka.className} text-xl w-auto  md:w-1/2 mx-3 bg-blue-400 rounded-2xl pt-2 justify-center items-start text-slate-700 drop-shadow-lg`}>

                    <h3 className='border-[#2E99B2] border-none bg-slate-50 p-3 w-fit rounded-md ml-2 flex items-center'><FaIceCream className='mr-2' />Luigelatto</h3>
                    <h3 className='border-[#2E99B2] border-none bg-slate-50 p-3 w-fit rounded-md ml-2 flex items-center'><MdEmail className='mr-2' />primoneto@gmail.com</h3>
                    <h3 className='border-[#2E99B2] border-none bg-slate-50 p-3 w-fit rounded-md ml-2 flex items-center'><AiFillPhone className='mr-2' /> (85) 998432975</h3>
                    <h3 className='border-[#2E99B2] border-none bg-slate-50 p-3 w-fit rounded-md ml-2 flex items-center'><IoLogoWhatsapp className='mr-2' />(85) 986656268</h3>
                    <h3 className='border-[#2E99B2] border-none bg-slate-50 p-3 w-fit rounded-md ml-2 flex items-center'><ImLocation2 className='mr-2' /> Avenida Silas Munguba 1000A - Itapery - Fortaleza</h3>



                </div>
            </div>


        </section>
    )
}

export default Contato

//adicionar mapa e email