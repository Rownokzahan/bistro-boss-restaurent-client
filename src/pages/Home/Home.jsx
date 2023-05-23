import Banner from "./Banner";
import Category from "./Category";
import img from "../../assets/home/chef-service.jpg";
import PopularManu from "./PopularManu";
import ChefRecomends from "./ChefRecomends";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />

      <div
        className="mt-24 relative h-[456px] p-24 bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-white p-24 text-center pb-2">
          <h3 className="text-2xl font-cinzel font-semibold">Bistro Boss</h3>
          <p className="pb-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>

      <PopularManu />

      <section className="bg-black p-24 mt-24">
        <h3 className="text-white text-5xl font-semibold text-center">
          Call Us: +88 0192345678910
        </h3>
      </section>

      <ChefRecomends />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
