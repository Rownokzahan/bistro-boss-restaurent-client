import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../components/SectionTitle"

const Category = () => {
    return (
        <section className="mt-24">
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="-mt-6 text-center font-cinzel text-xl text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="-mt-6 text-center font-cinzel text-xl text-white">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="-mt-6 text-center font-cinzel text-xl text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="-mt-6 text-center font-cinzel text-xl text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="-mt-6 text-center font-cinzel text-xl text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;