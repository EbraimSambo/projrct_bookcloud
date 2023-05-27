import React from 'react'
import Button from '../Global/Button'
import Image from 'next/image'
const Banner = () => {
  return (
    <section className='bannerHome'>
        <div className='content'>
            <h1>Ola, somos a Book Cloud</h1>
            <p>A plataforma de arquivos mais amada do mundo</p>
            <p>O Wattpad conecta uma comunidade global de 85 milhões de leitores e escritores através do poder das histórias.</p>
            <div className='containerbutton'>
                <Button desc={"Baixar Livros"} type={"link"} link={"/"} />
                <Button desc={"Publicar meu livro"} type={"link"} link={"/"} />
            </div>
        </div>
        <div className='img'>
           <Image src={"/img/hero-devices.png"} width={400} alt='banner' height={400} />
        </div>
    </section>
  )
}

export default Banner