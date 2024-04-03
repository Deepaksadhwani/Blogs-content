import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrls";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);



  const fetchBlogPosts = async (page = 1) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data ");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogPosts(page);
  };

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    loading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
