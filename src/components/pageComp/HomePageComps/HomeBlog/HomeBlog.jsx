import useBlog from "../../../../hooks/useBlog";
import TextArea from "../../../commonComp/TextArea/TextArea";
import styles from "./homeBlog.module.css"

const HomeBlog = () => {
    const { blog, loading, error, noDataMessage } = useBlog();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!blog) return <p>{noDataMessage || "No recent blogs available."}</p>;

    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <TextArea backgroundColor="#212121" subTitle="BLOG" title="VORES SENESTE BLOG" text="Hold dig opdateret med de seneste nyheder, indblik og historier fra Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores spændende projekter og produktioner."/>
          <div className={styles.blogContainer}>
            <img className={styles.image} src={blog.image} alt={blog.title} />
            <div className={styles.textContainer}>
              <h3 className={styles.title}>{blog?.title?.toUpperCase()}</h3>
              <p className={styles.teaser}>{blog.teaser}</p>
              <p className={styles.created}><span>Oprettet d.</span> {new Date(blog.created).toLocaleDateString()}</p>
            </div>
          
          </div>
        </div>
      </section>
      );
}

export default HomeBlog;