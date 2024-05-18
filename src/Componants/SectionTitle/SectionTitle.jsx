
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-12">
            <p className="text-[#D99904] text-xl font-normal border-b-4  md:w-[350px] mx-auto mb-4 pb-2 text-center ">{subHeading}</p>
            <h2 className="text-[40px] font-normal border-b-4 text-center md:w-[400px] mx-auto  pb-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;