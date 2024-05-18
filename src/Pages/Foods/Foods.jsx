import SectionTitle from '../../Componants/SectionTitle/SectionTitle';
import food from '../../assets/home/slide1.jpg'
const Foods = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-10 mb-24 mt-5'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <img className='h-[280px]' src={food} alt="Shoes" />
                    <div className="card-body text-center">
                        <h2 className=" text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="my-4">
                            <button className="btn text-base text-[#D99904] font-semibold border-0 border-b-4 border-[#D99904] ">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <img className='h-[280px]' src={food} alt="Shoes" />
                    <div className="card-body text-center">
                        <h2 className=" text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="my-4">
                            <button className="btn text-base text-[#D99904] font-semibold btn-neutral">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <img className='h-[280px]' src={food} alt="Shoes" />
                    <div className="card-body text-center">
                        <h2 className=" text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="my-4">
                            <button className="btn text-[#D99904] text-base font-semibold border-0 border-b-4 border-[#D99904]">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;