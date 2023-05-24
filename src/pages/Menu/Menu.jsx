import Cover from "../Shared/Cover";
import banner from "../../assets/menu/banner3.jpg";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizaaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu([]);
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover
        img={banner}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
        top_margin={0}
      />
      <div className="mt-24">
        <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
      </div>
      <MenuCategory items={offered} />

      <MenuCategory
        items={dessert}
        img={dessertCover}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <MenuCategory
        items={pizza}
        img={pizaaCover}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <MenuCategory
        items={salad}
        img={saladCover}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      <MenuCategory
        items={soup}
        img={soupCover}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="mb-12"></div>
    </>
  );
};

export default Menu;
