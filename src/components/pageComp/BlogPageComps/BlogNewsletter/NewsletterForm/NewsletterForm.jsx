import styles from "./newsletterForm.module.css"

import { useState } from "react";

import NewsletterSuccess from "./NewsletterSuccess/NewsletterSuccess";


const NewsletterForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newsletterData = {
          email,
        };
    
        try {
          const res = await fetch("http://localhost:3042/subscription", {
            method: "POST",
            body: JSON.stringify(newsletterData),
            headers: {
              "Content-Type": "application/json", // Tell the server we are sending raw JSON
            },
          });
    
          if (res.ok) {
            setIsSubmitted(true); // Show success message if the request was successful
          } else {
            console.error("Error:", res.statusText); // Handle error
          }
        } catch (error) {
          console.log("Error:", error); // Handle network error
        }
      };

    return isSubmitted ? (
    <NewsletterSuccess email={email} />
  ) : (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button}>
                    TILMELD NU
                </button>
            </form>
        </div>
  );
}

export default NewsletterForm;