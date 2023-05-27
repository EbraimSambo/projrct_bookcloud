import React from 'react'
import Head from 'next/head'
import Header from '../Global/Header'
import Footer from '../Global/Footer'


const Layout = ({ title ,children}) => {

  return (
    <>
     <Head>
          <title> {title ? title + " - Book Cloud":"Book Cloud" } </title>
          <meta name="description" content="Ecommerce Website" />
          <link rel="icon" href="/favicon.ico" />
      </Head>    
      <Header />
        <main className='main'> {children} </main>
      <Footer />
    </>
  )
}

export default Layout