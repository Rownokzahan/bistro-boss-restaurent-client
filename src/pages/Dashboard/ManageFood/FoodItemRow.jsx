import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FoodItemRow = ({ foodItem, index, refetch }) => {
  const { _id, name, image, price } = foodItem;
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this food item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Food item has been deleted.", "success");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <tr>
      <th className="px-6 py-8">{index}</th>
      <td className="px-6 py-8">
        <img src={image} className="h-12 w-12 object-cover" alt="" />
      </td>
      <td className="px-6 py-8">{name}</td>
      <td className="px-6 py-8">${price}</td>

      <td className="px-8 py-8">
        <div className="flex gap-4">
          <Link
            to={`/dashboard/update-food/${_id}`}
            className="bg-[#D1A054] p-2 w-min rounded"
          >
            <FiEdit className="text-xl text-white" />
          </Link>
          <button
            onClick={() => handleDelete()}
            className="bg-red-600 p-2 w-min rounded"
          >
            <BiTrash className="text-xl text-white" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FoodItemRow;
