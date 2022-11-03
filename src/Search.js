import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
const Search = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&q=${match.params.imgname}&image_type=all&page=1&per_page=50`
      );
      setPosts(res.data.hits);
      console.log(res.data.hits);
      setLoading(false);
    };
    fetchPost();
  }, []);
  const indexofLastPage = currentPage * postPerPage;
  const indexofFirstPage = indexofLastPage - postPerPage;
  const currentPost = posts.slice(indexofFirstPage, indexofLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <div className="search">
        <Posts posts={currentPost} loading={loading} />
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Search;
