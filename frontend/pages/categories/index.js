import Link from "next/link";
import Base from "/layouts/components/Baseof";
import { markdownify } from "/lib/utils/textConverter";
import { GET_ALL_CATEGORY } from "/query/strapiQuery";
import axios from "axios";
import React from "react";
import { humanize, slugify } from "@/lib/utils/textConverter";

const Categories = ({ categories }) => {
 return (
  <Base title={"categories"}>
   <section className="section">
    <div className="container text-center">
     {markdownify("Categories", "h1", "h2 mb-16")}
     <ul className="space-x-4">
      {categories.map((category, i) => (
       <li key={`category-${i}`} className="inline-block">
        <Link href={`/categories/${slugify(category.name)}`} className="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white">
         &#8226; {humanize(category.name)}
        </Link>
       </li>
      ))}
     </ul>
    </div>
   </section>
  </Base>
 );
};

export default Categories;

export const getStaticProps = async () => {
 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);

 return {
  props: {
   categories: categories.data.data,
  },
 };
};
