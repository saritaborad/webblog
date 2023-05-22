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
import { GET_ALL_POST, GET_ALL_SLUGS } from "@/query/strapiQuery";

const RegularPages = ({ slug, data, posts, postSlug }) => {
 return <Base>{postSlug.includes(slug) ? <PostSingle slug={slug} post={data} posts={posts} /> : slug === "404" ? <NotFound data={data} /> : slug === "about" ? <About data={data} /> : slug === "contact" ? <Contact data={data} /> : <Default data={data} />}</Base>;
};

export default RegularPages;

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

export const getStaticProps = async ({ params }) => {
 const { regular } = params;
 const postBySlug = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?[populate][image][fields][0]=url&filters[slug][$eq]=${regular}&populate[categories][fields][0]=name&populate[author][populate][image][fields][0]=url&populate[tags][fields][0]=name`);
 const posts = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);
 const postSlug = await posts.data.data.map((item) => item.slug);

 return {
  props: {
   slug: regular,
   data: postBySlug.data.data,
   postSlug: postSlug,
   posts: posts.data.data,
  },
 };
};
