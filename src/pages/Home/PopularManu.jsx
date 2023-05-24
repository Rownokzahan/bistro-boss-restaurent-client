import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularManu = () => {
  const [menu] = useMenu([]);
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section className="mt-24">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />

      <div className="grid md:grid-cols-2 gap-6">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-16 font-semibold font-inter">
        <button className="py-3 px-6 border-b-2 rounded-lg border-b-black">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularManu;
