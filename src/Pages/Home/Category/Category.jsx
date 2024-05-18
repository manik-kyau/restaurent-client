import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-14'>
            <SectionTitle
                subHeading = {'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                // freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-white text-center -mt-14'>SALADS</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-white text-center -mt-14'>PIZZAS</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl text-white text-center -mt-14'>SOUPS</h2>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <img src={slide4} alt="" />
                    <h2 className=' text-3xl text-white text-center -mt-14 uppercase'>desserts</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-3xl text-white text-center -mt-14'>SALADS</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;