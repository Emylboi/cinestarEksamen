import TextArea from "../../../commonComp/TextArea/TextArea";
import styles from "./homePortfolio.module.css";
import SwiperPortfolio from "./SwiperPortfolio/SwiperPortfolio";

const HomePortfolio = () => {
  return (
    <section className={styles.container}>
      <TextArea
        subTitle="Portfolio"
        title={
          <>
            UDVALGTE <br/> PROJEKTER
          </>
        }
      />
      <SwiperPortfolio
        images={[
          "/school_life.jpg",
          "/into_your_heart.jpg",
          "/daughter_mom.jpg",
        ]}
      />
      <div className={styles.texts}>
        <p>Her præsenterer vi et udvalg af de produktioner, vi er stolte af at have skabt.</p>
        <p>Hvert projekt fortæller sin unikke historie og illustrerer vores ambition om at levere høj kvalitet, originalitet og visuel gennemslagskraft.</p>
        <p>Gå på opdagelse, og lad dig inspirere af vores arbejde.</p>
      </div>

    </section>
  );
};

export default HomePortfolio;
