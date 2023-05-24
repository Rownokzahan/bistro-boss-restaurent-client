
const Cover = ({ img, title, description, top_margin = 24 }) => {
  return (
    <div
      className={`relative h-[600px] p-24 bg-cover mt-${top_margin}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-gray-800 bg-opacity-70 p-24 text-center text-white absolute top-1/2 -translate-y-1/2 w-10/12">
        <h3 className="text-5xl font-cinzel font-semibold pb-8">{title}</h3>
        <p className="font-inter">{description}</p>
      </div>
    </div>
  );
};

export default Cover;
