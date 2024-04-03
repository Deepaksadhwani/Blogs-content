import React, { useContext, useEffect } from "react";
import Header from "./layout/Header";
import Blogs from "./pages/Blogs";
import Pagination from "./layout/Pagination";
import { AppContext } from "./Context/AppContext";


const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=> {
    fetchBlogPosts();
  },[])
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
