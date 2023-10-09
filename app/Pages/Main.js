"use client"
import React, { useState } from 'react'
function Main  ()  {
    const [Location,setLocation]=useState("Barcleona");
    const [Min,setMin]=useState(0);
    const [Max,setMax]=useState(0);
    const [Avg,setAvg]=useState(0);
    const [cookieStandData, setCookieStandData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCookieStand = {
            Location,
            Min: parseInt(Min),
            Max: parseInt(Max),
            Avg: parseFloat(Avg)
        };


        setCookieStandData([cookieStandData, newCookieStand]);
  
    }
    return(
        <div>  <div className="flex justify-center items-center pt-12">
        <form className="w-4/6 rounded-lg  bg-emerald-300 flex content-box flex-col items-center  p-5" onSubmit={handleSubmit} >
        <p className='text-2xl font-bold '>Create Cookie stand</p>
            <div className="flex flex-wrap -mx-3 mb-6 w-full ">
                <div className="w-full">
                    <label className="block uppercase tracking-wide  text-gray-700 text-xs  font-bold mb-2" htmlFor="grid-password "  >
                     Location
                    </label>
                    <input  onChange={(e)=>setLocation(e.target.value)} value={Location} className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={Location}>
                    </input>
                </div>
            </div>
        
           
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Min. Customer per Hour
                    </label>
                    <input onChange={(e)=>setMin(e.target.value)} value={Min}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder={Min}>
                    </input></div>

                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Max. Customer per Hour
                    </label>
                    <input  onChange={(e)=>setMax(e.target.value)} value={Max}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={Max}>
                    </input>  </div>  
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Avg. Cookie per  Sales
                    </label>
                    <input    onChange={(e)=>setAvg(e.target.value)} value={Avg}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={Avg}>
                    </input>
                   </div>    <div className="w-full md:w-1/4  px-3 mb-6 md:mb-0">
                   <button className=' bg-emerald-400 font-bold text-2xl min-h-full min-w-full rounded-lg' type="submit"  > Create</button>
                   </div>   
            </div>
        </form></div>
<p className='flex justify-center items-center'>Report table comming soon...</p>  <div className="flex justify-center items-center">
                <pre>{JSON.stringify(cookieStandData[cookieStandData.length - 1], null, 2)}</pre>

            </div></div>
 
    )
}
export default Main