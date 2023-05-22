// similer products
const similerItems = (currentPost, allPost, slug) => {
 let categories = [];
 let tags = [];

 // set categories
 if (currentPost.categories.length > 0) {
  categories = currentPost.categories.map((item) => item.name);
 }
 // set tags
 if (currentPost.tags.length > 0) {
  tags = currentPost.tags.map((item) => item.name);
 }

 // filter by categories
 const filterByCategories = allPost.filter((item) => categories.find((category) => item.categories.map((item1) => item1.name).includes(category)));

 // filter by tags
 const filterByTags = allPost.filter((item) => tags.find((tag) => item.tags.map((item1) => item1.name).includes(tag)));

 // merged after filter
 const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

 // filter by slugclg

 const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

 return filterBySlug;
};

export default similerItems;
