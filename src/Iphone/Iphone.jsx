import React from 'react';
import { Link } from 'react-router-dom';

const Iphone = ({ iphone }) => {
    console.log(iphone);
    const {brand,image,phone_name,slug}=iphone
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{phone_name}</p>
                <p>Model: {slug}</p>
                <div className="card-actions justify-end">
                   <Link to={`/iphone/${slug}`}> <button className="btn btn-primary">Show</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Iphone;