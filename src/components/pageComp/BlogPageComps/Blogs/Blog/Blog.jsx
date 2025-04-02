import styles from "./blog.module.css";

/* Single Blog component for single view */
const Blog = ({ blog }) => {
  const { title, teaser, description, image, created } = blog;

  return (
    <div className={styles.blog}>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button>LÆS MERE</button>
      </div>
    </div>
  );
};

export default Blog;
