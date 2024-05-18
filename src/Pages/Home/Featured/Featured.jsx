import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-Items bg-fixed text-white mb-14 ">
            <div className="border border-red-600 bg-black bg-opacity-70 px-24">
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className="flex justify-center items-center gap-12 pb-12 pt-5 mb-12">
                    <div>
                        <img className="w-[950px]" src={featured} alt="" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-base ">March 20, 2023</p>
                        <h2 className="text-xl ">WHERE CAN I GET SOME?</h2>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn border-b-4 border-0 border-[#1F2937] bg-none btn-outline text-white">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;