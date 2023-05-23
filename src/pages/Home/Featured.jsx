import SectionTitle from "../../components/SectionTitle";
import image from "../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section
            className="mt-24 bg-zinc-800 bg-blend-overlay bg-fixed"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="py-24 text-white">
                <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
                <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl mx-auto p-10">
                    <img src={image} className="w-full" alt="" />
                    <div className="space-y-1">
                        <h5>March 20, 2023</h5>
                        <h5>WHERE CAN I GET SOME?</h5>
                        <p>
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Error voluptate facere, deserunt
                            dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                            ad laudantium tempore consequatur consequuntur omnis ullam maxime
                            tenetur.
                        </p>
                        <button className="py-3 px-6 border-b-2 rounded-lg border-b-white uppercase">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
