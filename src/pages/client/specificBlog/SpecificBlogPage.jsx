import styles from "./specificBlogPage.module.css"

import { useLocation } from "react-router-dom";

import Hero from "../../../components/commonComp/Hero/Hero";


const SpecificBlogPage = () => {
    const { state: blog } = useLocation();

    if (!blog) {
        return <div>Error: No data found for this blog.</div>;
    }

    const { title, description, image, created } = blog;

    const sentences = description.split(".").map((sentence, index) => {
        return sentence.trim() ? <p key={index} className={styles.sentence}>{sentence.trim()}.</p> : null;
    });


    return(
        <section className={styles.container}>
            <Hero title="BLOG ARKIV" bc1="Forside" bc1Link="/" bc2="BLOG ARKIV" bc2Link="/blog" bc3="BLOG"/>
            <div className={styles.blog}>
              <div className={styles.content}>
                <img src={image} className={styles.image} alt="" />
                <div className={styles.text}>
                    <div>
                        <h3 className={styles.title}>{title.toUpperCase()}</h3>
                        <p className={styles.created}><span>Oprettet d.</span> {new Date(blog.created).toLocaleDateString()}</p>
                    </div>
                    <div className={styles.description}>{sentences}</div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default SpecificBlogPage;