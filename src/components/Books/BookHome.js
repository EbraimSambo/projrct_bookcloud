import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBook from './SearchBook'
import CatBooks from './CatBooks'
import { CiCircleMore } from "react-icons/ci";
const BookHome = () => {
  return (
    <section className='bookhome'>
        <h2>Recomendações para si!</h2>
        <SearchBook />
         <CatBooks />
       <div className='container'>
           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>

           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>

           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>
    
           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>

           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>

           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>

           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>
           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>
           <Link href={"/bboks"} className='bookcard'>
             <Image  src={"/img/Covers/domilhao.jpg"} width={400} height={400} alt='adsdd' />
           </Link>
       </div>
    <Link className='seemoreBtn' href={"books"}>Ver Mais <CiCircleMore /> </Link>
    </section>
  )
}

export default BookHome