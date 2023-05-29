import Share from "/layouts/components/Share";
import dateFormat from "/lib/utils/dateFormat";
import similerItems from "/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "/lib/utils/textConverter";
import SimilarPosts from "/layouts/SimilarPosts";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import shortcodes from "../shortcodes/all";
import { parseMDX } from "@/lib/utils/textConverter";
import Link from "next/link";

const PostSingle = ({ post, posts, slug }) => {
 let { content, description, title, createdAt, image, author, categories, tags } = post[0];
 let Author = Array.isArray(author) ? author : Array(author);
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 const similarPosts = similerItems(post[0], posts, slug);
 description = description ? description : content.slice(0, 120);

 return (
  <>
   <section className="section">
    <div className="container">
     <article className="text-center">
      {markdownify(title, "h1", "h2")}

      <ul className="mb-8 mt-4 flex flex-wrap items-center justify-center space-x-3 text-text">
       <li>
        {Author.map((item, i) => (
         <Link href={`/authors/${slugify(item.name)}`} key={`author-${i}`} className="flex items-center hover:text-primary">
          {item.image && <Image src={"http://127.0.0.1:1337" + item.image?.url} alt={item.title} height={50} width={50} className="mr-2 h-6 w-6 rounded-full" />}
          <span>{item.name}</span>
         </Link>
        ))}
       </li>
       <li>{dateFormat(createdAt)}</li>
       <li>
        <ul>
         {categories.map((category, i) => (
          <li className="inline-block" key={`category-${i}`}>
           <Link href={`/categories/${slugify(category.name)}`} className="mr-3 hover:text-primary">
            &#9635; {humanize(category.name)}
           </Link>
          </li>
         ))}
        </ul>
       </li>
      </ul>
      {image && <Image src={"http://127.0.0.1:1337" + image.url} height="500" width="1000" alt={title} className="rounded-lg" />}
      {mdxContent && (
       <div className="content mb-16 text-left">
        <MDXRemote {...mdxContent} components={shortcodes} />
       </div>
      )}
      <div className="flex flex-wrap items-center justify-between">
       <ul className="mb-4 mr-4 space-x-3">
        {tags.map((tag, i) => (
         <li className="inline-block" key={`tag-${i}`}>
          <Link href={`/tags/${slugify(tag.name)}`} className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:text-primary">
           #{humanize(tag.name)}
          </Link>
         </li>
        ))}
       </ul>
       <Share className="social-share mb-4" title={title} description={description} slug={slug} />
      </div>
     </article>
    </div>
   </section>
   <section className="section">
    <div className="container">
     <h2 className="mb-8 text-center">Similar Posts</h2>
     <SimilarPosts posts={similarPosts.slice(0, 3)} />
    </div>
   </section>
  </>
 );
};

export default PostSingle;
