import Social from "/layouts/components/Social";
import { markdownify } from "/lib/utils/textConverter";
import shortcodes from "/layouts/shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useEffect, useState } from "react";
import { parseMDX } from "/lib/utils/textConverter";

const About = ({ data }) => {
 const { content, title, social, image } = data[0];
 const [mdxContent, setMdxContent] = useState();

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <section className="section">
   <div className="container text-center">
    {image && (
     <div className="img-cover mb-8">
      <Image src={"http://127.0.0.1:1337" + image.url} width={920} height={515} alt={title} className="rounded-lg" />
     </div>
    )}
    {markdownify(title, "h1", "h2")}
    <Social source={social} className="social-icons-simple my-8" />

    {mdxContent && (
     <div className="content">
      <MDXRemote {...mdxContent} components={shortcodes} />
     </div>
    )}
   </div>
  </section>
 );
};

export default About;
