import { slugify } from "/lib/utils/textConverter";
import { GETALLTAGS } from "/query/strapiQuery";
import axios from "axios";
import Posts from "/layouts/components/Posts";
import Base from "/layouts/components/Baseof";

const Tag = ({ tag, posts }) => {
 return (
  <Base title={tag}>
   <div className="section">
    <div className="container">
     <h1 className="h2 mb-8 text-center">
      Showing posts from <span className="text-primary">{tag}</span> tag
     </h1>
     <Posts posts={posts} />
    </div>
   </div>
  </Base>
 );
};

export default Tag;

export const getStaticPaths = async () => {
 const tags = await axios.get(process.env.NEXT_STRAPI_API + GETALLTAGS);
 const paths = await tags.data.data.map((item) => ({ params: { tag: slugify(item.name) } }));
 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async ({ params }) => {
 const { tag } = params;
 const tags = await axios.get(process.env.NEXT_STRAPI_API + GETALLTAGS);
 const filtered = await tags.data.data.filter((item) => slugify(item.name) === tag);
 const tagData = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?populate[image][fields][0]=url&filters[tags][name][$eq]=${filtered[0]?.name}&populate[tags][fields][0]=name&populate[categories][fields][0]=name&populate[author][populate][image][fields][0]=url`);
 return {
  props: {
   posts: tagData.data.data,
   tag: tag,
  },
 };
};
