import Link from 'next/link'
import React from 'react'
import FormSearchTop from '../utils/FormSearchTop'

const Header = () => {
  return (
    <header className='header-top'>
      <nav className='top-navbar'>
        <div id='logo'>
        <li> <Link href={"/"}>Book Cloud</Link> </li>
        </div>

        <ul className='navLinks'>
          <div className='block-one'>
            <li> <Link href={"/"}>Home</Link> </li>
            <li> <Link href={"/books"}>Livros</Link> </li>
            <li className='dropdwon'> Categorias 
              <ul>
                <li> <Link href={"/bouks"}>Romances</Link> </li>
                <li> <Link href={"/bouks"}>Aventura</Link> </li>
                <li> <Link href={"/bouks"}>Distopia</Link> </li>
              </ul>
            </li>
            <FormSearchTop />
          </div>

          <div className='block-two'>
            <li> <Link href={"/"}>Iniciar Sessão</Link> </li>
            <li> <Link href={"/bouks"}>Lingua</Link> </li>
          </div>
        </ul>

      </nav>
    </header>
  )
}

export default Header