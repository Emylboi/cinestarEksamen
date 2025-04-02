import { useEffect, useState } from "react";
import useTinyFetch from "./tinyFetch.hook";

const useBlog = (created) => {
  const [blog, setBlog] = useState(null);
  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/blogs");
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const latestBlog = [...data].sort((a, b) => new Date(b.created) - new Date(a.created))[0];
      setBlog(latestBlog);
    }
  }, [data]);

  return { blog, loading, error, noDataMessage };
};

export default useBlog;
