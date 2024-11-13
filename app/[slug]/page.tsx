import client from '@/lib/contentful';
import Image from 'next/image';
import React from 'react';

const DynamicPage = async ({params}) => {
    const response = await client.getEntries({
        content_type: 'cards',
        'fields.slug': params.slug,
        limit: 1
    })
    console.log(response, 'response')
    return (
        <div>
            <h1>Dynamic Page for: </h1>
            <p>Display content dynamically based on the slug: </p>
            <Image
                src={
                    response?.includes?.Asset[0]?.fields.file?.url.startsWith("//")
                    ? `https:${response.includes.Asset[0].fields.file.url}`
                    : response.includes.Asset[0].fields.file.url
                }
                width={500}
                height={500}
                alt="prueba"
                />
        </div>
    );
};

export default DynamicPage;
