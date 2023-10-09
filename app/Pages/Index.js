"use client"
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReportTable from './ReportTable'
import CreateForm from './CreateForm'
import { timeSlots } from './data'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import React from 'react'
const Index = () => {
  // State to manage cookie stands
  const [cookieStands, setCookieStands] = useState([]);
    const [Loc, setLoc] = useState('');


    
  
  
    // Function to create a new cookie stand
    const handleCreateCookieStand = (newCookieStand) => {
      axios.post('https://salmon-cookies20231009150542.azurewebsites.net/CookieStand', newCookieStand)
        .then((response) => {
          setCookieStands([...cookieStands, response.data]);
          fetchData();

        })
        .catch((error) => {
          console.error('Error creating cookie stand:', error);
        });
    };
  
    // Function to delete a cookie stand
    const handleDeleteCookieStand = (id) => {
      axios.delete(`https://salmon-cookies20231009150542.azurewebsites.net/CookieStand/${id}`)
        .then(() => {
          if (Array.isArray(cookieStands)) {
            setCookieStands(cookieStands.filter((stand) => stand.id !== id));
          } 
        })
        .catch((error) => {
          console.error('Error deleting cookie stand:', error);
        });
    };
  
    useEffect(() => {
      // Fetch data again whenever handleCreateCookieStand or handleDeleteCookieStand is called
      fetchData();
    },  [cookieStands]);
 
    const fetchData = () => {
      // Call the API to fetch data
      axios
        .get('https://salmon-cookies20231009150542.azurewebsites.net/CookieStand')
        .then((response) => {
          setCookieStands(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
  
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title> 
      </Head>
<Header></Header>
      <main>
     <CreateForm onCreate={handleCreateCookieStand}/>
     
      <ReportTable  hours={timeSlots}  onDelete={handleDeleteCookieStand} />
      </main>

 <Footer></Footer> 

    </div>
  );
};

export default Index;