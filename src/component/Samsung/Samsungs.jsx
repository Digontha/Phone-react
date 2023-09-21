import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Samsung from './Samsung';

const Samsungs = () => {
     
    const data = useLoaderData()
   const mainData = data.data

    return (
        <div  className="grid grid-cols-3 lg:w-[70%] mx-auto gap-4 mt-10">
            
            {
                mainData.map(phone=><Samsung key={phone.slug} phone={phone}></Samsung>)
            }
        </div>
    );
};

export default Samsungs;