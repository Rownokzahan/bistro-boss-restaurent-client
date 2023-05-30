import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import { BsPersonFill, BsPersonFillLock } from "react-icons/bs";
import { toast } from "react-hot-toast";

const UserRow = ({ user, index, refetch }) => {
  const { _id, name, email, role } = user;

  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("User admin created successfully!");
        }
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <tr>
      <th className="px-6 py-8">{index}</th>
      <td className="px-6 py-8">{name}</td>
      <td className="px-6 py-8">{email}</td>
      <td className="px-6 py-8">
        <div className="flex flex-col items-center text-[#D1A054]">
          {role === "admin" ? (
            <>
              <BsPersonFillLock className="text-xl" />
              <span className="text-[8px]">Admin</span>
            </>
          ) : (
            <>
              <BsPersonFill className="text-xl" />
              <span className="text-[8px]">User</span>
            </>
          )}
        </div>
      </td>

      <td className="px-8 py-8">
        <div className="flex gap-2">
          <button
            onClick={() => handleMakeAdmin()}
            className="px-2 py-1 rounded border text-sm text-[#D1A054] border-[#D1A054] hover:text-white hover:bg-[#D1A054] transform duration-100"
            disabled={role === "admin" ? true : false}
          >
            Make Admin
          </button>
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

export default UserRow;
