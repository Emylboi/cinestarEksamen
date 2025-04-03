import Contact from "../../../components/commonComp/Contact/Contact";
import Hero from "../../../components/commonComp/Hero/Hero";
import TextArea from "../../../components/commonComp/TextArea/TextArea";

const ContactPage = () => {
    return(
        <>
            <Hero title="KONTAKT" bc1="Forside" bc1Link="/" bc2="KONTAKT"/>
            <TextArea backgroundColor="black" subTitle="KONTAKT" title="TØV IKKE MED AT TAGE KONTAKT" text="Har du spørgsmål eller brug for mere information om vores tjenester og prcesser? Vores  team står klar til at hjælpe dig. Kontakt os, og lad os tage en uforpligtende samtale om dine behov og idéer."/>
            <Contact background="black"/>
        </>
    )
}

export default ContactPage;