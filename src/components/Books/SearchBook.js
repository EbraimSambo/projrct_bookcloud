import React from 'react'

const SearchBook = () => {
  return (
    <div className='searchBook'>
        <input type='text' placeholder='Pesquisar por: titulo, isbn, autor...' />
        <button >Pesquisar</button>            
    </div>
  )
}

export default SearchBook