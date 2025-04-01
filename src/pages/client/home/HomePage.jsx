import styles from "./homePage.module.css";


import HomeAwards from "../../../components/pageComp/HomePageComps/HomeAwards/HomeAwards";
import HomeHero from "../../../components/pageComp/HomePageComps/HomeHero/HomeHero";
import HomePortfolio from "../../../components/pageComp/HomePageComps/HomePortfolio/HomePortfolio";
import HomeVideo from "../../../components/pageComp/HomePageComps/HomeVideo/HomeVideo";
import HomeService from "../../../components/pageComp/HomePageComps/HomeService/HomeService";
import TextArea from "../../../components/commonComp/TextArea/TextArea";
import HomeReviews from "../../../components/pageComp/HomePageComps/HomeReviews/HomeReviews";

const HomePage = () => {
    return(
        <>
            <HomeHero/>
            <HomeAwards/>
            <TextArea backgroundColor="black" subTitle="CINESTAR STUDIO" title="HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT?" text="Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion."/>
            <HomeVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
            <HomePortfolio/>
            <HomeService/>
            <TextArea backgroundColor="black" subTitle="HISTORIEN" title="HISTORIEN BAG CINESTAR" text="Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold."/>
            <TextArea backgroundColor="black" subTitle="DYAS KARDINAL" title="CEO AF CINESTAR" imgSrc="/filming.jpg"/>
            <HomeReviews/>
            
        </>
    )
}

export default HomePage;