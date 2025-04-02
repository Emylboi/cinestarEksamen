import { useEffect, useState } from "react";
import styles from "./blogs.module.css";
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
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
    </div>
  );
};

export default Blogs;
