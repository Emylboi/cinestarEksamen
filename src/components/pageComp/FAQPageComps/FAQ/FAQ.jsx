import styles from "./faq.module.css"

import { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const FAQ = ({faq}) => {
    const { question, answer } = faq;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faq}>
            <div className={`${styles.questionContainer} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <p className={styles.question}>{question.toUpperCase()}</p>
                <div className={`${styles.accordionIcon} ${isOpen ? styles.active : ''}`}>
                    {!isOpen ? (
                        <IoIosArrowDown/>
                    ) : (
                        <IoIosArrowUp/>
                    )}
                </div>
            </div>
            {isOpen && <p className={styles.answer}>{answer}</p>}
        </div>
    );
}

export default FAQ;