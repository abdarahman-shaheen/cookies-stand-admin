import Link from 'next/link';
import React from 'react';

function Headers() {
  return (
    <div>
      <div style={{ display:'flex',justifyContent:"space-between", backgroundColor: '#15b981' , padding: '15px', color:'black',fontSize:'25px',fontWeight: 'bold' }} class="w-screen">
     Cookie Stand Admin 
      
      <Link style={{textDecoration:"none",color:"black"}} href="/OverView">
               Overview
              </Link>  
         </div>
     
     
    </div>
  );
}

export default Headers;