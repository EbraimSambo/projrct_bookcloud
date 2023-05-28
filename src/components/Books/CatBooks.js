import Link from 'next/link'
import React from 'react'

const CatBooks = () => {
  return (
    <ul className='cat'>
        <li className='titlecat' >Categorias: </li>
        <li> <Link href={"romance"}>Romance</Link> </li>
        <li> <Link href={"romance"}>Aventura</Link> </li>
        <li> <Link href={"romance"}>Distopias</Link> </li>
        <li> <Link href={"romance"}>Distopias</Link> </li>
        <li> <Link href={"romance"}>Distopias</Link> </li>
            
    </ul>
  )
}

export default CatBooks