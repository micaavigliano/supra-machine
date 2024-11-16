import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="bg-[#F2F2F2] py-6 px-8">
            <div className="flex justify-between items-center">
                <div className="text-left">
                    <h4 className="font-bold text-[#444444]">CONTACTO</h4>
                    <p className="text-sm text-[#444444] flex items-center">
                        <FaWhatsapp className="text-[#444444] mr-2" />
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
                        <FaEnvelope className="text-[#444444] mr-2" />
                        <a
                            href="mailto:obras@supra-machine.com"
                            className="hover:underline text-[#444444]"
                        >
                            obras@supra-machine.com
                        </a>
                    </p>
                </div>

                <div className="text-right">
                    <p className="font-bold text-sm text-[#444444]">RAZON SOCIAL REAL S.R.L.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;