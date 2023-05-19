// import BlogPagination, { getStaticProps } from "./page/[slug]";
// export { getStaticProps };
// export default BlogPagination;
import { GET_ALL_POST } from "@/query/strapiQuery";
import axios from "axios";
import React from "react";

const Home = ({ posts }) => {
 console.log(posts);
 //  posts.map((item) => console.log(item.attributes.author.data.attributes));
 return <div></div>;
};

export default Home;
export const getStaticProps = async () => {
 const { data } = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_POST);

 return {
  props: {
   posts: data.data,
  },
 };
};
