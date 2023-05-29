import { markdownify } from "/lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import { parseMDX } from "/lib/utils/textConverter";
import { useEffect, useState } from "react";

const Default = ({ data }) => {
 const { title, content } = data[0];
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <section className="section">
   <div className="container">
    {markdownify(title, "h1", "h2 mb-8 text-center")}
    {mdxContent && (
     <div className="content">
      <MDXRemote {...mdxContent} components={shortcodes} />
     </div>
    )}
   </div>
  </section>
 );
};

export default Default;
