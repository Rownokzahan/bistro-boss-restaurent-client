
const MenuItem = ({ item }) => {

    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-8">
            <div>
                <img src={image} className="bg-[#D9D9D9] w-28 h-28" style={{ borderRadius: "0px 200px 200px 200px" }}/>
            </div>
            <div className="flex gap-1">
                <div>
                    <h5 className="text-xl font-cinzel">{name} ------------------</h5>
                    <p>{recipe}</p>
                </div>
                <p className="text-[#BB8506] font-inter">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;