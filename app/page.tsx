import client from "@/lib/contentful";

const getBlogEntries = async() => {
  const entries = await client.getEntries({ content_type: 'title' });
  return entries;
}

export default async function Home() {
  const blogEntries = await getBlogEntries();

  return (
    <>
      <h1>Testing</h1>
      {blogEntries.items.map((blog, index) => (
        <div key={index}>
          <h1>{blog.fields.title}</h1>
          {Array.isArray(blog.fields.images) && blog.fields.images?.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img.fields.file.url}
              alt={img.fields.title || 'Image'}
            />
          ))}
        </div>
      ))}
    </>
  );
}
