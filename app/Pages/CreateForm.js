"use client"
import { useState } from 'react'

  const CreateForm = ({ onCreate }) => {
  const [location, setlocation] = useState('');
  const [owner, setowner] = useState('');
  const [description, setdescription] = useState('');
  const [maximumCustomersPerHour,setmaximumCustomersPerHour]=useState(0);
  const [minimumCustomersPerHour,setminimumCustomersPerHour]=useState(0);
  const [averageCookiesPerSale,setaverageCookiesPerSale]=useState(0);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
        location,
      description,
      maximumCustomersPerHour: parseInt(maximumCustomersPerHour),
      minimumCustomersPerHour: parseInt(minimumCustomersPerHour),
      averageCookiesPerSale: parseFloat(averageCookiesPerSale),
    owner,
    };
    onCreate(newCookieStand);

  };

  return (
<div>  <div className="flex justify-center items-center pt-12">
        <form className="w-4/6 rounded-lg  bg-emerald-300 flex content-box flex-col items-center  p-5" onSubmit={handleSubmit} >
        <p className='text-2xl font-bold  '>Create Cookie stand</p>
            <div className="flex flex-wrap -mx-3 mb-6 w-full ">
                <div className="w-full">
                    <label className="block uppercase tracking-wide  text-gray-700 text-xs  font-bold mb-2" htmlFor="grid-password "  >
                     Location
                    </label>
                    <input required onChange={(e)=>setlocation(e.target.value)} value={location} className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={location}>
                    </input>
                </div>
            </div>
        
           
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Min. Customer per Hour
                    </label>
                    <input required onChange={(e)=>setminimumCustomersPerHour(e.target.value)} value={minimumCustomersPerHour}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder={minimumCustomersPerHour}>
                    </input></div>

                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Max. Customer per Hour
                    </label>
                    <input required onChange={(e)=>setmaximumCustomersPerHour(e.target.value)} value={maximumCustomersPerHour}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={maximumCustomersPerHour}>
                    </input>  </div>  
                        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Avg. Cookie per  Sales
                    </label>
                    <input  required  onChange={(e)=>setaverageCookiesPerSale(e.target.value)} value={averageCookiesPerSale}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={averageCookiesPerSale}>
                    </input>
                    
                   </div>   
                   <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    owner
                    </label>
                    <input required   onChange={(e)=>setowner(e.target.value)} value={owner}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={owner}>
                    </input>
                    
                   </div>  
                   <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    description
                    </label>
                    <input  required  onChange={(e)=>setdescription(e.target.value)} value={description}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={description}>
                    </input>
                    
                   </div>  
                    <div className="w-full md:w-1/6  px-3 mb-6 md:mb-0">
                   <button className=' bg-emerald-400 font-bold text-2xl min-h-full min-w-full rounded-lg' type="submit"  > Create</button>
                   </div>   
            </div>
        </form></div>
  </div>
    
  );
};

export default CreateForm;