import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import UserRow from "./UserRow";

const Users = () => {
  const { refetch, data: users = [] } = useQuery(['users'],async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });

  return (
    <>
      <Helmet>
        <title>Bistro | Users</title>
      </Helmet>

      <div className="bg-[#F6F6F6] flex-grow py-12">
        <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How Many"} />

        <div className="bg-white w-max mx-auto p-12">
          <div className="flex items-center justify-between text-xl font-bold font-cinzel">
            <h3>Total Users: {users.length}</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="relative overflow-x-auto w-full text-[#727272] rounded-md my-10">
              <thead className="font-inter text-sm uppercase tracking-wide text-white font-medium">
                <tr>
                  <td className="rounded-tl-lg bg-[#D1A054] text-left py-5 px-8">
                    {""}
                  </td>
                  <td className="bg-[#D1A054] text-left py-5 px-6">
                    Name
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">
                    Email
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">Role</td>
                  <td className="rounded-tr-lg bg-[#D1A054] py-5 px-6 text-left">
                    Action
                  </td>
                </tr>
              </thead>

              <tbody className="divide-y-2">
                {users?.map((user, index) => (
                  <UserRow
                    key={user._id}
                    user={user}
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

export default Users;
