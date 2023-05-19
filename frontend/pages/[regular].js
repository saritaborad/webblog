import Base from "@/layouts/components/Baseof";
import { getRegularPage, getSinglePage } from "@/lib/contentParser";
import config from "../config/config.json";
import React from "react";
import Contact from "@/layouts/Contact";
import About from "@/layouts/About";
import Default from "@/layouts/Default";
import NotFound from "@/layouts/404";
import PostSingle from "@/layouts/components/PostSingle";
import axios from "axios";
import { GET_ALL_AUTHORS, GET_ALL_POST, GET_ALL_SLUGS } from "@/query/strapiQuery";

const RegularPages = ({ slug, data, posts, authors, postSlug }) => {
 return (
  <>
   <Base>
    <PostSingle slug={slug} post={data} authors={authors} posts={posts} />
   </Base>
  </>
 );
 //  return <Base>{postSlug.includes(slug) ? <PostSingle slug={slug} post={data} authors={authors} posts={posts} /> : layout === "404" ? <NotFound data={data} /> : layout === "about" ? <About data={data} /> : layout === "contact" ? <Contact data={data} /> : <Default data={data} />}</Base>;
};

export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
 const { data } = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_SLUGS);

 const paths = data.data.map((item) => ({
  params: {
   regular: item.slug,
  },
 }));

 return {
  paths,
  fallback: false,
 };
};

//for regular page data
export const getStaticProps = async ({ params }) => {
 const { regular } = params;
 const postBySlug = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?[populate][image][fields][0]=url&filters[slug][$eq]=${regular}`);
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const postSlug = posts.data.data.map((item) => item.slug);
 const authors = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_AUTHORS);

 return {
  props: {
   slug: regular,
   data: postBySlug.data.data,
   postSlug: postSlug,
   authors: authors.data.data,
   posts: posts.data.data,
  },
 };
};
