import FAQS from "../../../components/pageComp/FAQPageComps/FAQS";
import FooterInfo from "../../../components/commonComp/Footer/FooterInfo/FooterInfo";
import Hero from "../../../components/commonComp/Hero/Hero";
import TextArea from "../../../components/commonComp/TextArea/TextArea";


const FAQPage = () => {
    return(
        <>
            <Hero title="FAQ" bc1="Forside" bc1Link="/" bc2="FAQ"/>
            <TextArea backgroundColor="black" subTitle="OFTE STILLEDE SPØRGSMÅL" title="DE MEST ALMINDELIGE SPØRGSMÅL VI FÅR" text="Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores processer, tjenester og produktioner. Har du brug for yderligere information? Tøv ikke med at kontakte os!"/>
            <FAQS/>
            <FooterInfo/>
        </>
    )
}

export default FAQPage;