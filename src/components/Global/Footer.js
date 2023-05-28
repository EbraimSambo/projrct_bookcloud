import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWindows, FaLinux } from "react-icons/fa";
import { SiWattpad, SiGmail, SiAndroid, SiApple} from "react-icons/si";
const Footer = () => {
  return (
        <footer className='footer'>

          <ul className='maplinks'>
            <li> <Link href={"/about"}>Sobre Nos</Link> </li>
            <li> <Link href={"/apps"}>Aplicativos</Link> </li>
            <li> <Link href={"/terms"}>Termos</Link> </li>
            <li> <Link href={"/privacy"}>Privacidade</Link> </li>
            <li> <Link href={"/politcs"}>Politicas</Link> </li>
            <li> <Link href={"/acessiblity"}>Acessibilidade</Link> </li>
            <li> <Link href={"/help"}>Ajuda</Link> </li>
            <li> <Link href={"/help"}>Blog</Link> </li>
            <li> 2023 &copy; Book Cloud</li>
          </ul>
      
          <ul className='midiasocial'>
            <li> <Link href={"/about"} > <FaFacebook /> </Link> </li>
            <li> <Link href={"/about"}> <FaInstagram /> </Link> </li>
            <li> <Link href={"/about"}> <SiGmail /> </Link> </li>
            <li> <Link href={"/about"}> <SiWattpad /> </Link> </li>            
            <li>  </li>
            <li> <Link href={"/about"}> <SiAndroid /> </Link> </li>
            <li> <Link href={"/about"}> <FaWindows /> </Link> </li>
            <li> <Link href={"/about"}> <FaLinux /> </Link> </li>
            <li> <Link href={"/about"}> <SiApple /> </Link> </li>
          </ul>

        </footer>
  )
}

export default Footer