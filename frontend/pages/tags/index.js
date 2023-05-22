import { markdownify, humanize } from "/lib/utils/textConverter";
import Base from "/layouts/components/Baseof";
import { GETALLTAGS } from "/query/strapiQuery";
import axios from "axios";
import Link from "next/link";

const Tags = ({ tags }) => {
 return (
  <Base title={"tags"}>
   <section className="section">
    <div className="container text-center">
     {markdownify("Tags", "h1", "h2 mb-16")}
     <ul className="space-x-4">
      {tags.map((tag, i) => (
       <li key={`tag-${i}`} className="inline-block">
        <Link href={`/tags/${tag.name}`} className="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white">
         &#8226; {humanize(tag.name)}
        </Link>
       </li>
      ))}
     </ul>
    </div>
   </section>
  </Base>
 );
};

export default Tags;

export const getStaticProps = async () => {
 const tags = await axios.get(process.env.NEXT_STRAPI_API + GETALLTAGS);
 return {
  props: {
   tags: tags.data.data,
  },
 };
};
