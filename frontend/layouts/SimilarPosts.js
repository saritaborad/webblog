import dateFormat from "/lib/utils/dateFormat";
import { humanize, slugify } from "/lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const SimilarPosts = ({ posts }) => {
 return (
  <div className="row justify-center">
   {posts.map((post, i) => (
    <div key={`key-${i}`} className={"col-12 mb-4 sm:col-4"}>
     {post.image && <Image className="rounded-lg" src={"http://127.0.0.1:1337" + post.image.url} alt={post.title} width={"445"} height={"230"} />}
     <ul className="mt-4 text-text">
      <li className="mb-2 mr-4 inline-block">{dateFormat(post.createdAt)}</li>
      <li className="mb-2 mr-4 inline-block">
       <ul>
        {post.categories?.map((category, i) => (
         <li className="inline-block" key={`category-${i}`}>
          <Link href={`/categories/${slugify(category.name)}`} className="mr-3 hover:text-primary">
           &#9635; {humanize(category.name)}
          </Link>
         </li>
        ))}
       </ul>
      </li>
     </ul>
     <h3 className="h4">
      <Link href={`/${post.slug}`} className="block hover:text-primary">
       {post.title}
      </Link>
     </h3>
    </div>
   ))}
  </div>
 );
};

export default SimilarPosts;
