import styles from "./boReviewList.module.css";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


// This component shows the list of all our reviews in the backoffice section.
const BoReviewList = ({ reviews, deleteReview }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the review
  const editReview = (id) => {
    navigate(`/backoffice/reviews/edit/${id}`);
  };

  const createReview = () => {
    navigate(`/backoffice/reviews/add`);
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Vil du slette, "${name}"?, fra databasen?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet anmeldelsen!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview(id);
        Swal.fire("Slettet!", "Anmeldelsen er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>position</th>
            <th>text</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody className={styles.backofficeList}>
          {reviews.map((review) => {
            let { _id, name, position, text, rating } = review;

            // Lists the information of each review in the backoffice section, based on id's
            return (
              <tr key={_id} className={styles.item}>
                <td>{name}</td>
                <td>{position}</td>
                <td>{text}</td>
                <td>{rating}</td>
                <td className={styles.actions}>
                  <button className={styles.action} onClick={() => editReview(_id)}>REDIGÈR</button>{" "}
                  {/* Clicking the button, runs the editReview function above. */}
                  <button className={styles.action} onClick={() => handleDelete(_id, name)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteReview function that we get as a prop from BackofficeReviewsPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={styles.action} onClick={createReview}>OPRET</button>{" "}
      {/* Clicking the button, runs the createReview function above. */}
    </div>
  );
};
export default BoReviewList;
