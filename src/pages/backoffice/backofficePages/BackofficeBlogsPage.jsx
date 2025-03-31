import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoBlogList from "../../../components/backofficeComp/Blogs/lists/BoBlogList";


const BackofficeBlogsPage = () => {
    const [blogs, setBlogs] = useState([]); // State for blogs, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/blogs"); //Fetches blogs from the /blogs endpoint.
    }, []);
  
    useEffect(() => {
      setBlogs(data); // Sets the blogs to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new blog to the database.
    const addBlog = (formData) => {
      const addNewBlog = async (formData) => {
        let response = await fetch("http://localhost:3042/blog", {
          // Fetches the data from the API server with the /employee endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: formData, // We are posting data from a form.
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/blogs page.
        if (response.ok) {
          fetchData("/blogs");
          navigate(`/backoffice/blogs`);
        }
      };
  
      addNewBlog(formData);
    };
  
    // Function that deletes a blog from the database.
    const deleteBlog = (id) => {
      const delBlog = async () => {
        // Fetches the data from the API server with the /blog/:id endpoint.
        await fetch(`http://localhost:3042/blog/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/blogs"); // Fetches the data again, to update the list of blogs.
      };
  
      delBlog(id);
    };
  
    // Function that updates a blog in the database.
    const updateBlog = (formData) => {
      const editBlog = async (formData) => {
        let response = await fetch("http://localhost:3042/blog", {
          // Fetches the data from the API server with the /blog endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: formData, // We are updating data from a form.
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/blogs page.
        if ((res.status = "ok")) {
          fetchData("/blogs");
          navigate(`/backoffice/blogs`);
        }
      };
  
      editBlog(formData);
    };

  return (
    <div>
      <BoBlogList
        blogs={blogs}
        deleteBlog={deleteBlog}
      ></BoBlogList>
      <br />
      <br />
      <Outlet context={[blogs, addBlog, updateBlog]}></Outlet>
    </div>
  );
}

export default BackofficeBlogsPage;