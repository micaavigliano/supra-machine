import Link from 'next/link';

const OtherServices = () => {
    const otherServices = [
        {
            line1: 'Mantenimiento de',
            line2: 'infraestructura'
        },
        {
            line1: 'Mantenimiento',
            line2: 'edilicio'
        },
        {
            line1: 'Desarrollos y',
            line2: 'consultoría'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className='text-3xl text-gray-800 text-center py-16 font-bold'>OTROS SERVICIOS</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
                {otherServices.map((service, index) => (
                    <div key={index} className="flex flex-col items-center lg:items-center">
                        <div className="flex flex-row items-center lg:items-start">
                            <div className="text-center lg:text-right text-gray-700 text-xl">
                                <p>{service.line1}</p>
                                <p>{service.line2}</p>
                            </div>
                            <div className="hidden lg:block w-[3px] h-16 bg-yellow-500 ml-4"></div>
                        </div>
                        <div className="w-full h-[3px] bg-yellow-500 mt-4 lg:hidden"></div>
                    </div>
                ))}
            </div>
            <div className='text-center py-16 pb-52'>
                <Link href="#contacto" passHref>
                    <button className='bg-yellow-500 text-black px-12 py-2 rounded'>
                        Contáctanos
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OtherServices;
