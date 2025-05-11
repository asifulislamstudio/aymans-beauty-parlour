import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import StarRatings from "./StarRatings";

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/testimonials.js')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="py-32">
            <h2 className="font-bold text-4xl text-center  my-8">Testimonials</h2>
            <div className="max-w-screen-xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="!px-12 "
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <div>
                                <div className="my-4">
                                    {/* add User Image here */}
                                    <h2 className="font-extrabold text-xl">{review.name}</h2>
                                    <h3>{review.title}</h3>
                                </div>
                                <p>{review.testimonial}</p>

                                <StarRatings rating={review.rating}></StarRatings>

                            </div>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default HomeReview;