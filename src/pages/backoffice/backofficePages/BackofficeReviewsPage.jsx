import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoReviewList from "../../../components/backofficeComp/Reviews/lists/BoReviewList";


const BackofficeReviewsPage = () => {
    const [reviews, setReviews] = useState([]); // State for reviews, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      "Content-Type": "application/json", // Set content type to JSON.
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/reviews"); //Fetches reviews from the /reviews endpoint.
    }, []);
  
    useEffect(() => {
      setReviews(data); // Sets the reviews to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new review to the database.
    const addReview = (formData) => {
      const addNewReview = async (formData) => {
        let response = await fetch("http://localhost:3042/review", {
          // Fetches the data from the API server with the /employee endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: JSON.stringify(formData),
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/reviews page.
        if (response.ok) {
          fetchData("/reviews");
          navigate(`/backoffice/reviews`);
        }
      };
  
      addNewReview(formData);
    };
  
    // Function that deletes a review from the database.
    const deleteReview = (id) => {
      const delReview = async () => {
        // Fetches the data from the API server with the /review/:id endpoint.
        await fetch(`http://localhost:3042/review/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/reviews"); // Fetches the data again, to update the list of reviews.
      };
  
      delReview(id);
    };
  
    // Function that updates a review in the database.
    const updateReview = (formData) => {
      const editReview = async (formData) => {
        let response = await fetch("http://localhost:3042/review", {
          // Fetches the data from the API server with the /review endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: JSON.stringify(formData),
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/reviews page.
        if ((res.status = "ok")) {
          fetchData("/reviews");
          navigate(`/backoffice/reviews`);
        }
      };
  
      editReview(formData);
    };

  return (
    <div>
      <BoReviewList
        reviews={reviews}
        deleteReview={deleteReview}
      ></BoReviewList>
      <br />
      <br />
      <Outlet context={[reviews, addReview, updateReview]}></Outlet>
    </div>
  );
}

export default BackofficeReviewsPage;