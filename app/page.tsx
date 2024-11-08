import client from "@/lib/contentful";

const getBlogEntries = async() => {
  const entries = await client.getEntries({ content_type: 'title' })
  return entries
}

export default async function Home() {
  const blogEntries = await getBlogEntries()
  console.log(blogEntries)
  return (<>
    <h1>testing</h1>
    {blogEntries.items.map(blog => {
      return (
        <div>
          <h1>{blog.fields.title}</h1>
          <img src={blog.fields.images.fields.file.url} />
        </div>
      )
    })}
    </>
  );
}
