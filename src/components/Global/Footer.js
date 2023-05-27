import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiWattpad, SiGmail} from "react-icons/si";
const Footer = () => {
  return (
        <footer className='footer'>
          
          <ul className='maplinks'>
            <li> <Link href={"/about"}>Sobre Nos</Link> </li>
            <li> <Link href={"/about"}>Termos</Link> </li>
            <li> <Link href={"/about"}>Privacidade</Link> </li>
            <li> <Link href={"/about"}>Politicas</Link> </li>
            <li> <Link href={"/about"}>Acessibilidade</Link> </li>
            <li> <Link href={"/about"}>Ajuda</Link> </li>
            <li> 2023 &copy; Book Cloud</li>
          </ul>
      
          <ul className='midiasocial'>
            <li> <Link href={"/about"} > <FaFacebook /> </Link> </li>
            <li> <Link href={"/about"}> <FaInstagram /> </Link> </li>
            <li> <Link href={"/about"}> <SiGmail /> </Link> </li>
            <li> <Link href={"/about"}> <SiWattpad /> </Link> </li>
          </ul>

        </footer>
  )
}

export default Footer