import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddFood = () => {
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // upload image
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageUrl = imgResponse.data.display_url;
          const food = data;
          food.image = imageUrl;
          food.price = parseFloat(food.price);
          axiosSecure.post(`/menu`, food).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("Food Item Added Successfuly !");
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Add Food</title>
      </Helmet>
      <div className="flex-grow py-12">
        <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto space-y-6 bg-[#F6F6F6] p-12"
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="name">
              Recipe name*
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              name="name"
              id="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                defaultValue={""}
                {...register("category", { required: true })}
                id="category"
                className="select select-bordered"
                required
              >
                <option disabled value={""}>
                  --Choose An Category--
                </option>
                <option value={"pizza"}>Pizza</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"soup"}>Soup</option>
                <option value={"salad"}>Salad</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="price">
                Price*
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price")}
                name="price"
                id="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="details">
              Recipe Details*
            </label>
            <textarea
              className="textarea input-bordered"
              placeholder="Recipe Details"
              {...register("recipe")}
              name="recipe"
              id="recipe"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              {...register("image", { required: true })}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#D1A054] text-white p-3 rounded-md flex items-center gap-1"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFood;
