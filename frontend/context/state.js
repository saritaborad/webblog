import { GET_ALL_POST } from "@/query/strapiQuery";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const JsonContext = ({ children }) => {
 const [posts, setPosts] = useState();

 useEffect(() => {
  if (!posts) getPostData();
 }, []);

 const getPostData = async () => {
  const posts = await axios.get("http://127.0.0.1:1337/" + GET_ALL_POST);
  setPosts(posts.data.data);
 };

 return <SearchContext.Provider value={{ posts }}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => {
 return useContext(SearchContext);
};
