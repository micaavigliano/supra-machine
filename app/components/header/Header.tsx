import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (

        <header className=" flex justify-between items-center bg-white py-4 px-8 shadow border-b-2 border-[#D2CECE]">
            <div className="flex items-center">
                <Link href='/'>
                    <Image src="supra-logo.jpeg" alt="Supra Machine Logo" className="h-20" />
                </Link>
            </div>

            <nav className="ml-auto flex space-x-6 text-sm font-medium text-[#444444]">
                <Link href="/#quienes-somos" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">QUIENES SOMOS</Link>
                <Link href="/#obras" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">OBRAS</Link>
                <Link href="/#contacto" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">CONTACTO</Link>
                <Link href="#esp" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">ESP</Link>
                <Link href="#eng" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">ENG</Link>
            </nav>
        </header>

    );
}

export default Header