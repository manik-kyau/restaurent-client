
const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex gap-4">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[110px] h-[95px]" src={image} alt="" />
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-normal uppercase">{name}----------------</h2>
                    <p className="text-[#D99904]">${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItems;