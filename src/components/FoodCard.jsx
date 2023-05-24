const FoodCard = ({ item }) => {
  
  const { image, name, recipe, price } = item;

  return (
    <div className="bg-cover font-inter relative h-full bg-[#F3F3F3] pb-16">
      <img src={image} className="h-52 w-full" alt="" />
      <div className="absolute top-2 right-2 bg-[#1F2937] py-1 px-4 rounded text-white">
        ${price}
      </div>
      <div className="p-8 text-center">
        <h4 className="text-2xl font-semibold mb-2">{name}</h4>
        <p>{recipe}</p>
      </div>
      <div className="my-4">
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 uppercase px-6 py-3 border-b-2 border-[#BB8506] rounded-md my-6 text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
