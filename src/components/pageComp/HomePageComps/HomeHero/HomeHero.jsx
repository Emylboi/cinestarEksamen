import styles from "./homeHero.module.css";

const HomeHero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h4>CINESTAR STUDIO</h4>
          <h2>FILM & TV</h2>
          <h2 className={styles.orangeText}>PRODUKTION</h2>
          <p>
            Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
            færdigt produkt leverer vi professionelle film- og tv- løsninger,
            der gør din historie uforglemmelig.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
