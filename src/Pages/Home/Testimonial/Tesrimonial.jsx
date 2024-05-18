import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Tesrimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="my-14">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review, idx) => <SwiperSlide key={idx}>
                        <div className="flex flex-col items-center gap-3 mx-12">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-xl text-center">{review.details}</p>
                            <h1 className="text-[32px] text-[#D99904] text-center">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Tesrimonial;