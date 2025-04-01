import { useState } from "react";
import styles from "./contactForm.module.css"
import ContactSuccess from "../ContactSuccess/ContactSuccess";


const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const messageData = {
            name,
            subject,
            description,
        };

        try{
            const res = await fetch("http://localhost:3042/message", {
                method: "POST",
                body: JSON.stringify(messageData),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (res.ok) {
                setIsSubmitted(true);
            } else{
                console.error("Error", res.statusText)
            }
        } catch (error){
            console.log("Error", error)
        }
    }

    const handleReset = () => {
        setIsSubmitted(false);
        setName("");
        setSubject("");
        setDescription("");
    };

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {isSubmitted ? (
                    <div className={styles.successMessage}>
                        <ContactSuccess name={name} onClose={handleReset}/>
                    </div>
                    ) : (
                    <section>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Navn"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                name="emne"
                                placeholder="Emne"
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Besked"
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                            <div className={styles.center}>
                                <button className={styles.sendContact} type="submit">Send Besked</button>
                            </div>
                        </form>
                    </section>
            
            )}
            </div>
        </div>
    )
}

export default ContactForm;