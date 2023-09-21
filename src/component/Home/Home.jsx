import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Homes from './Homes';

const Home = () => {
    const [value, setValue] = useState(false)

    function handleClick() {
        setValue(true)
    }

    const data = useLoaderData()
    const mainData = data.data;
    return (

        <>
         <div onClick={()=>{handleClick()}} className='flex justify-center'>
         <button className="btn btn-secondary text-center my-8 ">Show All Phone</button>
         </div>
                {
                    value

                    &&

                    <div className='grid grid-cols-3 lg:w-[70%] mx-auto gap-4 mt-10'>
                        {
                            mainData.map(data => <Homes data={data}></Homes>)
                        }
                    </div>
                }
               
           

        </>

    );
};

export default Home;