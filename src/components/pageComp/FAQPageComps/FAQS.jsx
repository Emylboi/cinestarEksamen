import styles from "./faqs.module.css";

import { useEffect, useState } from "react";

import FAQ from "./FAQ/FAQ";
import useTinyFetch from "../../../hooks/tinyFetch.hook";


const FAQS = () => {
  const [faqs, setFaqs] = useState([]);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/faqs");
  }, []);

  useEffect(() => {
    setFaqs(data);
  }, [data]);

  return (
    <div className={styles.faqs}>
      {loading && <p className={styles.white}>Loading...</p>}

      {noDataMessage && <p className={styles.white}>{noDataMessage}</p>}

      {faqs.length > 0 && faqs.map((faq) => <FAQ key={faq._id} faq={faq} />)}
    </div>
  );
};

export default FAQS;
