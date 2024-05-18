import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Componants/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();

    // console.log(category);

    const offered = menu.filter(items => items.category === 'offered');
    const dessert = menu.filter(items => items.category === 'dessert');
    const soup = menu.filter(items => items.category === 'soup');
    const salad = menu.filter(items => items.category === 'salad');
    const pizza = menu.filter(items => items.category === 'pizza');

    return (
        <div>
            <Cover menuImg={orderCoverImg} title="ORDER FOOD"></Cover>

            <div className='my-12'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;