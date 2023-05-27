import Link from 'next/link'
import React from 'react'

const Button = ({desc, type,link}) => {
    if (type === "link") {
        return( <Link className='btn' href={link}> {desc} </Link> )
    } else { 
        return ( <Button className='btn'> {desc} </Button> )  
    }

}

export default Button