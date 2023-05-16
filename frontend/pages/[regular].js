import Base from "@/layouts/Baseof";
import { getRegularPage, getSinglePage } from "@/lib/contentParser";
import React from "react";
const { blog_folder } = config.settings;

const RegularPages = ({ slug, data, posts, authors, postSlug }) => {
 return <Base></Base>;
};

export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
 const regularSlugs = getSinglePage("content");
 const postSlugs = getSinglePage(`content/${blog_folder}`);
 const allSlugs = [...regularSlugs, ...postSlugs];
 const paths = allSlugs.map((item) => ({
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
 const allPages = await getRegularPage(regular);

 // get posts folder slug for filtering
 const getPostSlug = getSinglePage(`content/${blog_folder}`);
 const postSlug = getPostSlug.map((item) => item.slug);
 // aughor data
 const authors = getSinglePage("content/authors");
 // all single pages
 const posts = getSinglePage(`content/${blog_folder}`);

 return {
  props: {
   slug: regular,
   data: allPages,
   postSlug: postSlug,
   authors: authors,
   posts: posts,
  },
 };
};
