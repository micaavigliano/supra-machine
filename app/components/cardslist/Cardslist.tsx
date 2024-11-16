import Link from 'next/link';
import React from 'react';
import { FaCogs, FaTools, FaFan, FaBuilding, FaPencilRuler } from 'react-icons/fa';
import { GiProtectionGlasses } from 'react-icons/gi';



const Cardslist = () => {
    const cards = [
        { title: 'ESTRUCTURAS Y MONTAJES', icon: <FaCogs />, href: 'estructuras-y-montajes' },
        { title: 'RACKS Y DISPOSITIVOS', icon: <FaTools />, href: 'racks-dispositivos' },
        { title: 'TUBERIAS', icon: <FaPencilRuler />, href: 'tuberias' },
        { title: 'VENTILACION', icon: <FaFan />, href: 'ventilacion' },
        { title: 'PROTECCIONES Y BARANDAS', icon: <GiProtectionGlasses />, href: 'protecciones-barandas' },
        { title: 'CIVIL', icon: <FaBuilding />, href: 'civil' },
    ];

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4 flex justify-center '>OBRAS</h1>
            <div className='grid grid-cols-2 gap-4 py-[10%] px-[15%]'>
                {cards.map((card, index) => (
                    <Link href={`/${card.href}`} passHref key={index}>
                        <div className='bg-gray-400 py-[10%] px-[15%] flex items-center cursor-pointer '>
                            <span className='mr-2 text-lg'>{card.icon}</span>
                            <h2 className="text-black">{card.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cardslist;


