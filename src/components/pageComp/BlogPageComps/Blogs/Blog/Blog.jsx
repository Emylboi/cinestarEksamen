import { useNavigate } from "react-router-dom";
import styles from "./blog.module.css";

/* Single Blog component for single view */
const Blog = ({ blog }) => {
  const { title, teaser, description, image, created } = blog;
  //Splits our description property into an array "descriptions", and each description segment up until an "." becomes an element in the array.
  const descriptions = description.split(".");
  //Takes the first 2 description segments from our new array and joins them back together, and we then display it in our return.
  const displayedDescription = descriptions.slice(0, 2).join(".") + ".";

  const navigate = useNavigate(); // Hook to navigate to a different route

  const handleClick = () => {
    navigate(`/blog/${blog._id}`, { state: blog }); // Pass the stay data through state
  };

  return (
    <div className={styles.blog}>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{displayedDescription}</p>
        <button className={styles.button} onClick={handleClick}>LÆS MERE</button>
      </div>
    </div>
  );
};

export default Blog;
