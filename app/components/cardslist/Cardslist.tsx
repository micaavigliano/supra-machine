import client from '@/lib/contentful';
import { Asset, Entry, EntrySkeletonType } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaCogs, FaTools, FaFan, FaBuilding, FaPencilRuler } from 'react-icons/fa';
import { GiProtectionGlasses } from 'react-icons/gi';

export interface CardFields extends EntrySkeletonType {
    fields: {
        title: string;
        slug: string;
        images?: Array<Asset>;
    };
}

export interface IconMapping {
    icon: ReactNode;
    text: string
}

export type CardEntry = Entry<CardFields>;

const getCardsData = async (): Promise<CardEntry[]> => {
    const data = await client.getEntries<CardFields>({ content_type: 'cards' });
    return data.items;
};

const Cardslist = async () => {
    const data = await getCardsData();

    const iconMapping: Record<string, IconMapping> = {
        'estructuras-y-montajes': {
            icon: <FaCogs />,
            text: 'Montajes electromecánicos, estructuras, trabajos por planos o desarrollo de diseño. Rieles, carros transportadores, fabricación de cabinas, asesoramiento y proyectos.'
        },
        'racks-dispositivos': {
            icon: <FaTools />,
            text: 'Fabricamos Racks para fábricas, trabajos a medida o desarrollo propio según las necesidades del cliente.'
        },
        'tuberias': {
            icon: <FaPencilRuler />,
            text: 'Montaje y diseño de tuberías soldadas. Conductos de vapor, producto, efluentes, instalación de bombas, fabricación de manifolds, tuberías en altura, etc.'
        },
        'ventilacion': {
            icon: <FaFan />,
            text: 'Proyectos completos, memorias de cálculo, venta e instalación de ventiladores centrífugos y axiales. Fabricamos cabinas, campanas, conductos de ventilación, etc.'
        },
        'protecciones-barandas': {
            icon: <GiProtectionGlasses />,
            text: 'Adecuamos instalaciones y máquinas acorde a las normas actuales de seguridad e higiene. Realizamos plataformas para mantenimiento, barandas, etc.'
        },
        'civil': {
            icon: <FaBuilding />,
            text: 'Proyecto, diseño y construcción de galpones, techos metálicos, bases de máquinas, entrepisos, losas, plateas, fundaciones, etc.'
        },
    };

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h1 className='text-2xl font-bold mb-4 text-center'>OBRAS Y SERVICIOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((card, index) => {
                    const slug = card.fields.slug as unknown as string;
                    const title = card.fields.title as unknown as string;
                    const icon = iconMapping[slug] || null;

                    if (Array.isArray(card.fields.images) && card.fields.images.length > 0) {
                        const imageAsset = card.fields.images[0];

                        if ('fields' in imageAsset && imageAsset.fields.file && imageAsset.fields.file.url) {
                            const imageUrl = imageAsset.fields.file.url;

                            return (
                                <div key={index} className="rounded-lg shadow-lg overflow-hidden relative flex flex-col h-full" id="obras">
                                    <div className="relative">
                                        <Image
                                            src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
                                            alt={title}
                                            width={500}
                                            height={300}
                                            className="w-full h-60 object-cover"
                                        />
                                        <div className="absolute right-4 -bottom-6">
                                            <div className="bg-white p-3 rounded-full shadow-md">
                                                <span className="text-2xl text-gray-700">{icon.icon}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 md:p-6 flex flex-col gap-2 bg-[#F2F2F2] h-full flex-1">
                                        <h2 className="text-lg md:text-xl text-black mb-2 font-bold">{title.toUpperCase()}</h2>
                                        <p className="text-sm md:text-base">{icon?.text}</p>
                                        <Link
                                            href={`/${slug}`}
                                            passHref
                                            className='mt-auto pt-4 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-gray-700 transition-colors'
                                        >
                                            Leer más
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        </div>
    );
};

export default Cardslist;