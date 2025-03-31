import styles from "./homePage.module.css";

import TextArea from "../../../components/commonComp/TextArea/TextArea";
import HomeAwards from "../../../components/pageComp/HomePageComps/HomeAwards/HomeAwards";
import HomeHero from "../../../components/pageComp/HomePageComps/HomeHero/HomeHero";
import HomePortfolio from "../../../components/pageComp/HomePageComps/HomePortfolio/HomePortfolio";
import HomeVideo from "../../../components/pageComp/HomePageComps/HomeVideo/HomeVideo";
import HomeService from "../../../components/pageComp/HomePageComps/HomeService/HomeService";

const HomePage = () => {
    return(
        <>
            <HomeHero/>
            <HomeAwards/>
            <div className={styles.background}>
                <TextArea subTitle={"CINESTAR STUDIO"} title={"HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT?"} text={"Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion."}/>
            </div>
            <HomeVideo src={"https://www.youtube.com/embed/dQw4w9WgXcQ"} />
            <HomePortfolio/>
            <HomeService/>
        </>
    )
}

export default HomePage;