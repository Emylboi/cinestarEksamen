import styles from "./homeService.module.css";

import TextArea from "../../../commonComp/TextArea/TextArea";

import { FaRegImages, FaTape } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";


const HomeService = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <TextArea subTitle="SERVICE" title="HVILKEN SERVICE TILBYDER VI?" />
        <div className={styles.serviceContainer}>
          <div className={styles.service}>
            <div className={styles.iconContainer}>
              <FaTape className={styles.icon} />
            </div>
            <div className={styles.flex}>
              <h4>FILM PRODUKTION</h4>
              <p>
                Vi skaber professionelle filmproduktioner, der formidler dit
                budskab klart, engagerende og visuelt overbevisende.
              </p>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.iconContainer}>
              <FaRegImages className={styles.icon} />
            </div>
            <div className={styles.flex}>
              <h4>EN KREATIV RETNING</h4>
              <p>
                Vi sikrer en kreativ retning, der løfter dit projekt fra
                almindeligt til uforglemmeligt.
              </p>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.iconContainer}>
              <BsFillCameraVideoFill className={styles.icon} />
            </div>
            <div className={styles.flex}>
              <h4>TV PRODUKTION</h4>
              <p>
                Vi leverer komplette løsninger inden for formatudvikling,
                optagelse og redigering.
              </p>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.iconContainer}><IoMdMusicalNote className={styles.icon} /></div>
            <div className={styles.flex}>
              <h4>MUSIK VIDEO</h4>
              <p>
                Lad din musik træde frem i et visuelt univers, der forstærker
                din lyd og dit budskab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
