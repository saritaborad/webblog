import { GET_ALL_CATEGORY } from "@/query/strapiQuery";
import Base from "/layouts/components/Baseof";
import Posts from "/layouts/components/Posts";
import { slugify } from "/lib/utils/textConverter";
import axios from "axios";

const Category = ({ category, posts }) => {
 return (
  <Base title={category}>
   <div className="section">
    <div className="container">
     <h1 className="h2 mb-8 text-center">
      Showing posts from <span className="text-primary">{category}</span> category
     </h1>
     <Posts posts={posts} />
    </div>
   </div>
  </Base>
 );
};

export default Category;

export const getStaticPaths = async () => {
 const allCategory = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);
 const paths = await allCategory.data.data.map((item) => ({ params: { category: slugify(item.name) } }));

 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async ({ params }) => {
 const { category } = params;
 const categories = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_CATEGORY);
 const matched = await categories.data.data.filter((item) => slugify(item.name) === category);
 const posts = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?populate[image][fields][0]=url&filters[categories][name][$eq]=${matched[0]?.name}&populate[author][populate][image][fields][0]=url&populate[tags][fields][0]=name&populate[categories][[fields][0]=name`);
 return {
  props: {
   posts: posts.data.data,
   category: category,
  },
 };
};
