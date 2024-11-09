import client from "@/lib/contentful";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const getBlogEntries = async() => {
  const entries = await client.getEntries({ content_type: 'title' });
  return entries;
}

export default async function Home() {
  const blogEntries = await getBlogEntries();

  return (
    <>
      <Header />
      <h1></h1>
      {blogEntries.items.map((blog, index) => (
        <div key={index}>
          <h1></h1>
          {Array.isArray(blog.fields.images) && blog.fields.images?.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img.fields.file.url}
              alt={img.fields.title || 'Image'}
            />
          ))}
        </div>
      ))}
      <Footer />
    </>

  );
}
