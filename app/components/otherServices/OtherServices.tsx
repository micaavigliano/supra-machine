import Link from 'next/link';
import React from 'react';

const OtherServices = () => {
    const otherServices = [
        {title: 'Mantenimiento de infraestructura'},
        {title: 'Mantenimiento ediliciio'},
        {title: "Desarollos y consultoría"},
    ];

    return (
        <div>
            <h2 className='text-xl font-bold mt-8 flex justify-center'>Otros servicios</h2>
            <div className='flex justify-around mt-4'>
                {otherServices.map((service, index) => (
                    <div key={index} className='text-center'>
                        <p>{service.title}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <Link href="/contacto" passHref>
                    <button className='bg-yellow-500 text-black p-2 rounded'>Contáctanos</button>
                </Link>
            </div>
        </div>
    );
};

export default OtherServices;