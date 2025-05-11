import React, { useEffect, useState } from 'react';
import { RiBrushAiFill } from "react-icons/ri";
import { data } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.js')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex flex-col items-center justify-center my-16' >
            <h2 className='font-bold md:text-4xl my-12'>Our Awesome <span className='text-pink-600'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-x-4  max-w-screen-xl'>
                {
                    services.map(service => <div key={service.id}>
                        <div 
                        className=' border-2 border-pink-600 lg: border-none lg:hover:shadow-2xl mx-4  flex flex-col items-center justify-center min-h-96 py-8 px-8  rounded-2xl'>
                            <img className='h-16 ' src={service.icon} alt="" />
                            <h3 className='font-semibold text-2xl my-4 text-center'>{service.service}</h3>
                            <p className='font-semibold text-xl text-pink-600
                            '>${service.price}</p>
                            <p className='text-center'>{service.description}</p>

                        </div>
                    </div>)
                }



            </div>
            <div className='flex items-center justify-center my-12'>
                <button className='btn btn-wide text-white bg-pink-600 rounded-xl '>Explore More</button>
            </div>
        </div>
    );
};

export default HomeServices;