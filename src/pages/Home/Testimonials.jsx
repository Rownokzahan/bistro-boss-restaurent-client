import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="my-24">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />

      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-16 text-center space-y-8 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 250}}
                  value={review?.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl"/>
                <div>
                  <p>{review?.details}</p>
                  <h4 className="uppercase text-[#CD9003] text-2xl mt-2">
                    {review?.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
