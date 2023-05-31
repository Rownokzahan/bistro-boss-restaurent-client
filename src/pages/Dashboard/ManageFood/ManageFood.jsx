import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import FoodItemRow from "./FoodItemRow";
import useMenu from "../../../hooks/useMenu";
import Spinner from "../../../components/Spinner";

const ManageFood = () => {
  const [menu, loading, refetch] = useMenu();

  if (loading) {
    return <Spinner />;
  }
  
  return (
    <>
      <Helmet>
        <title>Bistro | Users</title>
      </Helmet>

      <div className="bg-[#F6F6F6] flex-grow py-12">
        <SectionTitle
          heading={"MANAGE ALL Food Items"}
          subHeading={"Hurry Up!"}
        />

        <div className="bg-white w-max mx-auto p-12">
          <div className="flex items-center justify-between text-xl font-bold font-cinzel">
            <h3>Total Users: {menu.length}</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="relative overflow-x-auto w-full text-[#727272] rounded-md my-10">
              <thead className="font-inter text-sm uppercase tracking-wide text-white font-medium">
                <tr>
                  <td className="rounded-tl-lg bg-[#D1A054] text-left py-5 px-8">
                    {""}
                  </td>
                  <td className="bg-[#D1A054] text-left py-5 px-6">
                    ITEM IMAGE
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">
                    ITEM NAME
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">PRICE</td>
                  <td className="rounded-tr-lg bg-[#D1A054] py-5 px-6 text-left">
                    Action
                  </td>
                </tr>
              </thead>

              <tbody className="divide-y-2">
                {menu?.map((foodItem, index) => (
                  <FoodItemRow
                    key={foodItem._id}
                    foodItem={foodItem}
                    index={index + 1}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageFood;
