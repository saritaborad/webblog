import AuthorSingle from "@/layouts/AuthorSingle";
import { slugify } from "@/lib/utils/textConverter";
import { GET_ALL_AUTHORS } from "@/query/strapiQuery";
import axios from "axios";
import React from "react";

const Author = ({ author }) => {
 return <AuthorSingle author={author} />;
};

export default Author;

export const getStaticPaths = async () => {
 const allAuthor = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_AUTHORS);
 const paths = await allAuthor.data.data.map((item) => ({ params: { single: slugify(item.name) } }));
 return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
 const { single } = params;
 const allAuthor = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_AUTHORS);
 const authorFil = allAuthor.data.data?.filter((item) => slugify(item.name) === single);
 const author = await axios.get(process.env.NEXT_STRAPI_API + `api/authors?[populate][image][fields][0]=url&filters[name][$eq]=${authorFil[0]?.name}`);

 return {
  props: {
   author: author.data.data,
   single: single,
  },
 };
};
