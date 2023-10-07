import React from 'react';


const Footer = (props) => {
  return (
    <div style={{position:"relative",bottom:0,marginTop:"15px",width:"100%",textAlign:'center'}}>
    <div style={{ backgroundColor: '#15b981' , padding: '10px', color:'black',fontSize:'25px'}} class="w-screen">
    <p>Total Locations Added: {props.locationCount}</p>
   </div>
  </div>
  );
};

export default Footer;
