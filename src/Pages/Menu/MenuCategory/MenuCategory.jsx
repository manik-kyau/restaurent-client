import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover menuImg={img} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-5 mb-12 mt-16">
                {
                    items.map((item, idx) => <MenuItems
                        key={idx}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn border-b-4 border-0 border-[#1F2937] bg-none btn-outline hover:text-white">ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;