const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-max text-center mb-12">
            <p className="text-[#D99904] mb-4 font-inter italic">--- {subHeading} ---</p>
            <div className="border-b-2 border-[#E8E8E8] mb-6"></div>
            <h3 className="text-2xl mb-4 uppercase">{heading}</h3>
            <div className="border-b-2 border-[#E8E8E8]"></div>
        </div>
    );
};

export default SectionTitle;