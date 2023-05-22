const GET_ALL_POST = `api/posts?populate[image][fields][0]=url&populate[categories][fields][0]=name&populate[author][populate][image][fields][0]=url&populate[tags][fields][0]=name`;

// const GET_SINGLE_POST = `api/posts/${params.id}?[populate][image][fields][0]=url`;

// const GET_POSTBY_SLUG = `api/articles?filters[slug][$eq]=${slug}`;

// const GET_POSTBY_CATEGORY = `api/posts?filters[categories][name][$eq]=${category}`;

// const GET_POSTBY_TAG = `api/posts?filters[tags][name][$eq]=${tag}`;

const GET_ALL_SLUGS = `api/posts?[fields][0]=slug`;

// const GET_AUTHORBY_NAME = `api/posts?filters[author][name][$eq]=${author}`;

// const GET_POST_AUTHOR = `api/posts?populate[author]=*`;

const GET_ALL_AUTHORS = `api/authors?[populate][image][fields][0]=url`;

// const GET_ALLPOSTBY_TAG = `api/posts?fields[0]=author&populate[author]=*&[populate][[image][fields][0]=url`;

// const GET_AUTHOR_BY_SLUG = `api/authors?[populate][image][fields][0]=url&filters[name][$eq]=${slug}`;

// const GET_AUTHOR = `api/authors/${params.id}?[populate][image][fields][0]=url`;

const GETALLTAGS = `api/tags?[fields][0]=name`;

const GET_ALL_CATEGORY = `api/categories?[fields][0]=name`;

export {
 GET_ALL_POST,
 // GET_SINGLE_POST, GET_POSTBY_SLUG, GET_POSTBY_CATEGORY, GET_POSTBY_TAG, GET_ALL_SLUGS, GET_AUTHORBY_NAME, GET_POST_AUTHOR, GET_ALL_AUTHORS, GET_ALLPOSTBY_TAG, GET_AUTHOR_BY_SLUG, GET_AUTHOR,
 GETALLTAGS,
 GET_ALL_CATEGORY,
 GET_ALL_SLUGS,
 GET_ALL_AUTHORS,
};
