import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

//  used for parsing MDX (Markdown with JSX)
const parseMDX = async (content) => {
 const options = {
  mdxOptions: {
   rehypePlugins: [rehypeSlug], // plugin that generates unique slugs for headings in the generated HTML output
   remarkPlugins: [remarkGfm], // plugin that adds support for GitHub-flavored Markdown extensions, such as tables
  },
 };

 return await serialize(content, options); //responsible for converting MDX content into serialized data that can be consumed by Next.js.
};

export default parseMDX;
