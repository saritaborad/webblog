import { markdownify } from "/lib/utils/textConverter";
import shortcodes from "/layouts/shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./components/Baseof";
import Social from "./components/Social";
import { parseMDX } from "/lib/utils/textConverter";
import { useEffect, useState } from "react";

const AuthorSingle = ({ author }) => {
 const { description, social, name, about, image } = author[0];
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(about));
  }
  fetchMdx();
 }, []);

 return (
  <Base title={name} description={description ? description : about.slice(0, 120)}>
   <section className="section">
    <div className="container">
     <div className="mb-4 text-center md:px-24">
      {image && (
       <div className="mb-8">
        <Image src={"http:127.0.0.1:1337" + image.url} className="mx-auto rounded-lg" height="150" width="150" alt={name} />
       </div>
      )}
      {markdownify(name, "h1", "h2 mb-8")}
      <Social source={social} className="social-icons-simple" />
      {mdxContent && (
       <div className="content">
        <MDXRemote {...mdxContent} components={shortcodes} />
       </div>
      )}
     </div>
    </div>
   </section>
  </Base>
 );
};

export default AuthorSingle;
