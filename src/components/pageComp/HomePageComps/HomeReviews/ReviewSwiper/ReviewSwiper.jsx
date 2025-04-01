import useTinyFetch from "../../../../../hooks/tinyFetch.hook";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import styles from "./reviewSwiper.module.css";

const ReviewSwiper = () => {
    const [reviews, setReviews] = useState([]);

    const { data, fetchData } = useTinyFetch();

    useEffect(() => {
        fetchData("/reviews");
      }, []);

      useEffect(() => {
        setReviews(data);
      }, [data]);

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                loop={reviews.length > 1}
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
