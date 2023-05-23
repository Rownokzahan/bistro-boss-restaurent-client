import SectionTitle from "../../components/SectionTitle";
import image from "../../assets/home/slide1.jpg";

const ChefRecomends = () => {
    return (
        <section className="mt-24">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
            
            <div className="grid md:grid-cols-3 gap-6 font-inter">
                <div className="bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <div className="mt-52 bg-[#F3F3F3] p-8 text-center">
                        <h4 className="text-2xl font-semibold mb-2">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase px-6 py-3 border-b-2 border-[#BB8506] rounded-md my-6 text-[#BB8506] bg-[#E8E8E8]">add to cart</button>
                    </div>
                </div>
                <div className="bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <div className="mt-52 bg-[#F3F3F3] p-8 text-center">
                        <h4 className="text-2xl font-semibold mb-2">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase px-6 py-3 border-b-2 border-[#BB8506] rounded-md my-6 text-[#BB8506] bg-[#1F2937]">add to cart</button>
                    </div>
                </div>
                <div className="bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <div className="mt-52 bg-[#F3F3F3] p-8 text-center">
                        <h4 className="text-2xl font-semibold mb-2">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase px-6 py-3 border-b-2 border-[#BB8506] rounded-md my-6 text-[#BB8506] bg-[#E8E8E8]">add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecomends;