import FoodCard from "../../../Componants/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                items.map((item, idx) => <FoodCard 
                key={idx} 
                item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;