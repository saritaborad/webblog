import { marked } from "marked";

export const markdownify = (content, tag, className) => {
 if (!content) return null;
 const Tag = tag;
 return tag ? (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: tag === "div" ? marked.parse(content) : marked.parseInline(content) }} />
 ) : (
  <span
   className={className}
   dangerouslySetInnerHTML={{
    __html: marked.parseInline(content),
   }}
  />
 );
};
