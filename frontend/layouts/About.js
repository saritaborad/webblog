import { markdownify } from "@/lib/utils/textConverter";
import React from "react";
import Social from "./components/Social";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "../layouts/shortcodes/all";
import Image from "next/image";
const About = ({ data }) => {
 const { frontmatter, mdxContent } = data;
 const { title, image, social } = frontmatter;

 return (
  <section className="section">
   <div className="container text-center">
    {image && (
     <div className="img-cover mb-8">
      <Image src={image} width={920} height={515} alt={title} className="rounded-lg" />
     </div>
    )}
    {markdownify(title, "h1", "h2")}
    <Social source={social} className="social-icons-simple my-8" />

    <div className="content">
     <MDXRemote {...mdxContent} components={shortcodes} />
    </div>
   </div>
  </section>
 );
};

export default About;
