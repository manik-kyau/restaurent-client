
const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    return (
        <div>
            <div className=" bg-base-100 border hover:shadow-xl mt-8 relative ">
                <img className='h-[280px]' src={image} alt="Shoes" />
                <p className="bg-slate-900 text-white absolute right-6 top-6 px-5 py-2 rounded-md">${price}</p>
                <div className="card-body text-center">
                    <h2 className=" text-2xl font-semibold">{name}</h2>
                    <p className="text-base">{recipe.slice(0,66)}</p>
                    <div className="my-4">
                        <button className="btn text-base text-[#D99904] font-semibold border-0 border-b-4 border-[#D99904] ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;