import styles from "./reviewSwiper.module.css";
import 'swiper/css';

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import useTinyFetch from "../../../../../hooks/tinyFetch.hook";


const ReviewSwiper = () => {
    const [reviews, setReviews] = useState([]);

    const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

    useEffect(() => {
        fetchData("/reviews");
      }, []);

      useEffect(() => {
        setReviews(data);
      }, [data]);

        if (loading) return <p  className={styles.white}>Loading...</p>;
        if (error) return <p className={styles.white}>{noDataMessage}</p>;

    return (
        <div className={styles.swiperContainer}>
            
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={reviews.length > 3}
                centeredSlides={true}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id} className={styles.swiperSlide} >
                        <div className={styles.review}>
                            <div className={styles.rating}>
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p className={styles.text}>{review.text}</p>
                            <div className={styles.sender}>
                                <p className={styles.name}>{review.name}</p>
                                <p className={styles.position}>{review.position}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReviewSwiper;
