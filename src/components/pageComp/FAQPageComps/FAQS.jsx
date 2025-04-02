import { useEffect, useState } from "react";
import styles from "./faqs.module.css"
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import FAQ from "./FAQ/FAQ";

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
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {faqs.length > 0 &&
        faqs.map((faq) => (
          <FAQ key={faq._id} faq={faq} />
        ))}
    </div>
  );
}

export default FAQS;