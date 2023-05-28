import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";

const CartItemRow = ({ item, index, refetch }) => {
  const { image, name, price } = item?.food || {};

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
        <img
          className="w-16 h-16 bg-slate-100 object-contain rounded-md"
          src={image}
          alt=""
        />
      </td>
      <td className="px-6 py-8">{name}</td>
      <td className="px-6 py-8 text-end">${price}</td>
      <td className="px-8 py-8">
        <button
          onClick={() => handleDelete()}
          className="bg-red-600 p-2 w-min rounded"
        >
          <BiTrash className="text-xl text-white" />
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;
