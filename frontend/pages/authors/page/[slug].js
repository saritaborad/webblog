import Authors from "/layouts/components/Authors";
import Pagination from "/layouts/components/Pagination";
import { GET_ALL_AUTHORS } from "/query/strapiQuery";
import axios from "axios";
import config from "/config/config.json";
import Base from "/layouts/components/Baseof";
import { markdownify } from "/lib/utils/textConverter";

const AuthorPagination = ({ authors, currentPage, pagination }) => {
 const indexOfLastAuthor = currentPage * pagination;
 const indexOfFirstAuthor = indexOfLastAuthor - pagination;
 const totalPages = Math.ceil(authors.length / pagination);
 const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);

 return (
  <Base title={"author"}>
   <section className="section">
    <div className="container text-center">
     {markdownify("authors", "h1", "h2 mb-16")}
     <Authors authors={currentAuthors} />
     <Pagination section="authors" totalPages={totalPages} currentPage={currentPage} />
    </div>
   </section>
  </Base>
 );
};

export default AuthorPagination;

export const getStaticPaths = async () => {
 const authors = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_AUTHORS);
 const allSlug = await authors.map((item) => item.name);
 const { pagination } = config.settings; //size per page
 const totalPages = Math.ceil(allSlug.length / pagination);
 let paths = [];
 for (let i = 1; i < totalPages.length; i++) {
  paths.push({
   params: {
    slug: (i + 1).toString(),
   },
  });
 }
 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async ({ params }) => {
 const currentPage = parseInt((params && params.slug) || 1);
 const { pagination } = config.settings;
 const authors = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_AUTHORS);

 return {
  props: {
   authors: authors.data.data,
   pagination: pagination,
   currentPage: currentPage,
  },
 };
};
