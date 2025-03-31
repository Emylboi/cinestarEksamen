import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoReviewsForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the reviews, addReview and updateReview from the context.
  const [reviews, addReview, updateReview] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of a review. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the review.
  const [review, setReview] = useState(
    // If we have an id, we filter the reviews and get the first one. Otherwise we set it to null.
    id ? reviews?.filter((p) => p._id === id)[0] : null
  );

  useEffect(() => {
    //If we have an id, we find the review with that id, otherwise we set it to null.
    const foundReview = id ? reviews.find((p) => p._id === id) : null;

    // We set the review to the foundReview.
    setReview(foundReview);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or reviews change.
  }, [id, reviews]);

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the title, teaser and description to the formData.
    formData.append("name", review.name);
    formData.append("position", review.position);
    formData.append("text", review.text);
    formData.append("rating", review.rating);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", review?._id);

    // If we're in editMode, we update the review, otherwise we add the review.
    editMode ? updateReview({...review, id: review._id}) : addReview({...review});
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Anmeldelse" : "Opret Anmeldelse"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          {" "}
          Name
          <input
            className={styles.input}
            type="text"
            value={review?.name || ""}
            onChange={(e) =>
              setReview({ ...review, name: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Position
          <input
            className={styles.input}
            type="text"
            value={review?.position || ""}
            onChange={(e) =>
              setReview({ ...review, position: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Text
          <input
            className={styles.input}
            type="text"
            value={review?.text || ""}
            onChange={(e) =>
              setReview({ ...review, text: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Rating
          <input
            className={styles.input}
            type="number"
            value={review?.rating || ""}
            onChange={(e) =>
              setReview({ ...review, rating: parseInt(e.target.value) })
            }
          ></input>
        </label>
      
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Anmeldelse" : "Opret Anmeldelse"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoReviewsForm;
