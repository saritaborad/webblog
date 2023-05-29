import Base from "/layouts/components/Baseof";
import Posts from "/layouts/components/Posts";
import { slugify } from "/lib/utils/textConverter";
import { useSearchContext } from "/context/state";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = ({ authors }) => {
 const router = useRouter();
 const [keyword, setKeyword] = useState();
 const { posts } = useSearchContext();

 useEffect(() => {
  setKeyword(slugify(router.query.key));
 }, [router.query.key]);

 const searchResults =
  posts &&
  posts.filter((product) => {
   if (slugify(product.title).includes(keyword)) {
    return product;
   } else if (product.categories.find((category) => slugify(category.name).includes(keyword))) {
    return product;
   } else if (product.tags.find((tag) => slugify(tag.name).includes(keyword))) {
    return product;
   } else if (slugify(product.content).includes(keyword)) {
    return product;
   }
  });

 return (
  <Base title={`Search results for ${router.query.key}`}>
   <div className="section">
    <div className="container">
     <h1 className="h2 mb-8 text-center">
      Search results for <span className="text-primary">{router.query.key}</span>
     </h1>
     {searchResults?.length > 0 ? <Posts posts={searchResults} /> : <div className="py-24 text-center text-h3 shadow">No Search Found</div>}
    </div>
   </div>
  </Base>
 );
};

export default SearchPage;
