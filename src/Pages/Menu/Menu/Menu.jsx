import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import DessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] =UseMenu();
    const offered = menu.filter(items=> items.category === 'offered');
    const dessert = menu.filter(items=> items.category === 'dessert');
    const soup = menu.filter(items=> items.category === 'soup');
    const salad = menu.filter(items=> items.category === 'salad');
    const pizza = menu.filter(items=> items.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <div>
                {/* Main Cover */}
                <Cover menuImg={menuImg} title='our menu'></Cover>
                <SectionTitle
                subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                >
                </SectionTitle>

                {/* Offered menu items */}
                <MenuCategory items={offered}></MenuCategory>

                {/* Dessert menu items */}
                <MenuCategory items={dessert} img={DessertImg} title='dessert'></MenuCategory>

                {/* Soup menu items */}
                <MenuCategory items={soup} img={soupImg} title='soup'></MenuCategory>

                {/* Salad menu items */}
                <MenuCategory items={salad} img={saladImg} title='salad'></MenuCategory>

                {/* Pizza menu items */}
                <MenuCategory items={pizza} img={pizzaImg} title='pizza'></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;