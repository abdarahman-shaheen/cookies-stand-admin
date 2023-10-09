

import Link from 'next/link'
import React from 'react'

function Header(){
    return(
       <div style={{display:"flex",justifyContent:"space-between"}} className=' bg-emerald-400 font-bold'> <p className='text-2xl  bg-emerald-400 font-bold'>Cookie Stand Admin </p>
<Link href='/Overview'>Overview</Link>
   </div> )
}
export default Header