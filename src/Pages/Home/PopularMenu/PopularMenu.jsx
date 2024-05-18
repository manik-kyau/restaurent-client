// import { useEffect, useState } from "react";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popularItems = menu.filter(items=> items.category === 'popular');
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(items=> items.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <div>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid grid-cols-2 gap-5 mb-12">
                {
                    popularItems.map((item,idx)=><MenuItems key={idx} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center mb-14">
                <button className="btn text-lg font-semibold bg-[#D99904] text-white btn-outline">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;