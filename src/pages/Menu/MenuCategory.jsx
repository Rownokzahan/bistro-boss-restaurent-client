import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <section className="mt-24">
      {title && <Cover img={img} title={title} description={description} />}

      <div className="grid md:grid-cols-2 gap-6 mt-24">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {title && (
        <div className="text-center mt-16 font-semibold font-inter">
          <Link
            to={`/order/${title}`}
            className="py-3 px-6 border-b-2 rounded-lg border-b-black"
          >
            Order Now
          </Link>
        </div>
      )}
    </section>
  );
};


export default MenuCategory;