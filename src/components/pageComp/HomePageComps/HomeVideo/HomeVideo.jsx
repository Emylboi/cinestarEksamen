import styles from "./homeVideo.module.css";


const HomeVideo = ({ src }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <iframe
          className={styles.video}
          src={src}
          allowFullScreen
          title="Embedded Video"
        ></iframe>
        <p className={styles.titleFont}>TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT</p>
        <p>
          Hos Cinestar kombinerer vi vores passion for historiefortælling med et
          skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer
          vi, at din produktion løfter sig fra skitse til strålende slutresultat -
          hver gang.
        </p>
        <div className={styles.experienceContainer}>
          <div className={styles.experience}>
            <h3>250+</h3>
            <h4>FILM PRODUKTION</h4>
          </div>
          <div className={styles.experience}>
            <h3>78+</h3>
            <h4>MUSIK VIDEO</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
