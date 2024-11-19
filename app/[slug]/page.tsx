import React from 'react';
import client from '@/lib/contentful';
import { Asset, AssetFields, Entry, EntrySkeletonType } from 'contentful';
import { GrFormPrevious } from "react-icons/gr";
import Link from 'next/link';
import CarouselList from '../components/cardslist/CarouselList';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CarouselVentilacion from '../components/cardslist/CarouselVentilacion';

const getGastronomicalImg = async () => {
    const imgs = await client.getEntries({ content_type: 'gastronomica' })
    return imgs.items
}

const getIndustrialImg = async () => {
    const imgs = await client.getEntries({ content_type: 'industrial' });
    return imgs.items
}

interface CardContentFields extends EntrySkeletonType {
    title: string;
    description?: Document;
    slug: string;
    images: Asset[];
    imagesArray: Asset[];
}

interface Params {
    slug: string;
}

interface Context {
    params: Params;
    searchParams: { tab?: string };
}

const DynamicPage = async ({ params, searchParams }: Context) => {
    const { slug } = await params;

    const response = await client.getEntries<CardContentFields>({
        content_type: 'cards',
        'fields.slug': slug,
        limit: 1,
    });

    const entry = response.items[0] as Entry<CardContentFields> | undefined;

    if (!entry?.fields) {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>No content available for the provided slug.</p>
            </div>
        );
    }

    const { fields } = entry;

    const safeImages: Asset[] = Array.isArray(fields.images)
        ? fields.images.filter((img): img is Asset => {
            return (
                typeof img === "object" &&
                img !== null &&
                'fields' in img &&
                img.fields !== undefined &&
                (img.fields as AssetFields).file !== undefined &&
                typeof (img.fields as AssetFields).file?.url === "string"
            );
        })
        : [];

    let selectedTab = 'industrial';
    const tabSearchParams = await searchParams;
    let gastronomicaImages = await getIndustrialImg()
    if (slug === 'ventilacion' && tabSearchParams.tab) {
        const tab = await tabSearchParams.tab;

        if (tab === 'industrial') {
            gastronomicaImages = await getIndustrialImg()
        } else if (tab === 'gastronomica') {
            gastronomicaImages = await getGastronomicalImg()
        }
        selectedTab = tab;
    }


    return (
        <div className="py-10 px-20">
            <nav>
                <Link href="/" className='flex flex-row items-center'>
                    <GrFormPrevious /> Volver atrás
                </Link>
            </nav>
            <h1 className="text-center font-bold text-2xl">
                {(fields.title as string).toUpperCase()}
            </h1>

            {slug === 'ventilacion' && (
                <>
                    <div className="mt-6 flex space-x-4 justify-center gap-52">
                        <Link href="?tab=industrial">
                            <button
                                className={`px-4 py-2 ${selectedTab === 'industrial' ? 'border-b-2 border-yellow-500' : ''
                                    }`}
                            >
                                INDUSTRIAL
                            </button>
                        </Link>
                        <Link href="?tab=gastronomica">
                            <button
                                className={`px-4 py-2 ${selectedTab === 'gastronomica' ? 'border-b-2 border-yellow-500' : ''
                                    }`}
                            >
                                GASTRONÓMICA
                            </button>
                        </Link>
                    </div>

                    {selectedTab === 'industrial' && (
                        <div className="mt-6 flex flex-col items-center justify-center">
                            <CarouselVentilacion images={gastronomicaImages} />
                            <section className='px-52 pt-20 pb-10'>
                                <p>
                                    Proyectos completos, <strong>memorias de cálculo, venta e instalación de ventiladores centrífugos y axiales.</strong>
                                    <br />
                                    <br />
                                    Fabricamos cabinas, campanas, conductos de ventilación según normas americanas ASHRAE, extracción de humos de soldadura y gases tóxicos, instalaciones en altura.
                                    <br />
                                    <br />
                                    Realizamos <strong>conductos de acero de gran espesor, bridados</strong>, con tapas de inspección para altas temperatura, conductos de acero inoxidable y también de chapa galvanizada para <strong>ventilación de fábricas y oficinas.</strong>
                                </p>
                            </section>
                            <Link
                                href="/#obras"
                                className='bg-[#FEC002] py-2 px-5'
                            >
                                Conocé otras obras y servicios
                            </Link>
                        </div>
                    )}

                    {selectedTab === 'gastronomica' && (
                        <div className="mt-6 flex flex-col items-center justify-center">
                            <CarouselVentilacion images={gastronomicaImages} />
                            <section className='px-52 pt-20 pb-10'>
                                <p>
                                    Fabricación e instalación de <strong>campanas gastronomía profesional</strong>, campanas compensadas a medida con filtros metálicos, acero inoxidable, <strong>conductos antiflama</strong> aptos para habilitación de gas, con persianas cortallama y conductos de chapa de acero con soldadura integra en todas sus uniones, juntas bridadas, tapas de inspección abulonadas para limpieza periódica, íntegro sellado apto para temperatura, ventiladores aptos para trabajar con temperatura y grasa.
                                    <br />
                                    <br />
                                    Inyección de aire filtrado para compensar el aire extraído por las campanas dando de esta forma mejor funcionamiento al sistema, mayor bienestar para el personal de cocina y de esta manera no extraer aire del salón enfriado por los aires acondicionados.
                                    <br />
                                    <br />
                                    Realizamos la <strong>instalación integral, campanas, ventiladores, chimeneas</strong>, provisión de todo tipo de filtros, estructuras y entrepisos para los ventiladores, conductos, instalación eléctrica, memoria de cálculo, etc.
                                </p>
                            </section>
                            <Link
                                href="/#obras"
                                className='bg-[#FEC002] py-2 px-5'
                            >
                                Conocé otras obras y servicios
                            </Link>
                        </div>
                    )}
                </>
            )}

            {slug !== 'ventilacion' && (
                <div className="mt-6 flex flex-col items-center justify-center">
                    {safeImages && safeImages.length > 0 ? (
                        <CarouselList images={safeImages} />
                    ) : (
                        <p>No images available.</p>
                    )}
                    <section className='px-52 py-20'>
                        {fields.description && isDocument(fields.description) ? (
                            documentToReactComponents(fields.description)
                        ) : (
                            <p>No description available.</p>
                        )}
                    </section>
                    <Link
                        href="/#obras"
                        className='bg-[#FEC002] py-2 px-5'
                    >
                        Conocé otras obras y servicios
                    </Link>
                </div>
            )}
        </div>
    );
};

function isDocument(value: any): value is Document {
    return value && typeof value === 'object' && 'content' in value;
}

export default DynamicPage;
