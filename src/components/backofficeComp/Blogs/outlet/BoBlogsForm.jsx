import styles from "../../boForm.module.css";

import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";


const BoBlogsForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the blogs, addBlog and updateBlog from the context.
  const [blogs, addBlog, updateBlog] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of a blog. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the blog.
  const [blog, setBlog] = useState(
    // If we have an id, we filter the blogs and get the first one. Otherwise we set it to null.
    id ? blogs?.filter((p) => p._id === id)[0] : null
  );

  // useState for the image, null as default value.
  const [image, setImage] = useState();

  useEffect(() => {
    //If we have an id, we find the blog with that id, otherwise we set it to null.
    const foundBlog = id ? blogs.find((p) => p._id === id) : null;

    // We set the blog to the foundBlog.
    setBlog(foundBlog);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or blogs change.
  }, [id, blogs]);

  // Function that handles the change of the image.
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the title, teaser and description to the formData.
    formData.append("title", blog.title);
    formData.append("teaser", blog.teaser);
    formData.append("description", blog.description);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", blog?._id);

    // If we have an image, we append the image to the formData.
    image && formData.append("file", image);

    // If we're in editMode, we update the blog, otherwise we add the blog.
    editMode ? updateBlog(formData) : addBlog(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Blog" : "Opret Blog"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "http://localhost:3042/blogs/no-blog.jpg"
            }
            width={200}
          ></img>
          <input
            className={styles.input}
            type="file"
            name={"file"}
            onChange={onImageChange}
          ></input>
        </label>
        <label>
          {" "}
          Title
          <input
            className={styles.input}
            type="text"
            value={blog?.title || ""}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Teaser
          <input
            className={styles.input}
            type="text"
            value={blog?.teaser || ""}
            onChange={(e) => setBlog({ ...blog, teaser: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Description
          <input
            className={styles.input}
            type="text"
            value={blog?.description || ""}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          ></input>
        </label>

        <div className={styles.buttons}>
          <button className={styles.button}>
            {editMode ? "Redigér Blog" : "Opret Blog"}
          </button>{" "}
          <button className={styles.button} type="reset">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};
export default BoBlogsForm;
