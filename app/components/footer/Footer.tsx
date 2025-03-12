const Footer = () => {
    return (
        <footer className="bg-[#F2F2F2] py-6 px-8" id='contacto'>
            <div className="flex justify-between items-center">
                <div className="text-left flex flex-col gap-3">
                    <h4 className="font-bold text-[#444444]">CONTACTO</h4>
                    <p className='text-sm text-[#444444]'>Viamonte 1560, Banfield</p>
                    <p className="text-sm text-[#444444] flex items-center">
                        <a
                            href="https://wa.me/5491154898455"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-[#444444]"
                        >
                            Whatsapp: +54 9 11 5489 8455
                        </a>
                    </p>
                    <p className="text-sm text-[#444444] flex items-center">
                        <a
                            href="mailto:obras@supra-machine.com"
                            className="hover:underline text-[#444444]"
                        >
                            obras@supra-machine.com
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;