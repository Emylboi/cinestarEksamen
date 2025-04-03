import styles from "./blogs.module.css";

import { useEffect, useState } from "react";

import Blog from "./Blog/Blog";
import useTinyFetch from "../../../../hooks/tinyFetch.hook";


//All Blogs
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/blogs");
  }, []);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <div className={styles.blogs}>
      {loading && <p className={styles.white}>Loading...</p>}

      {noDataMessage && <p className={styles.white}>{noDataMessage}</p>}

      {blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
    </div>
  );
};

export default Blogs;
