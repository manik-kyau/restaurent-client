import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const { name, image, recipe, price, _id } = item;

    const handleAddToCard = () => {
        // console.log(item);
        if (user && user.email) {
            // Send card item to the data base
            // console.log(user.email, food);

            const cartItem = {
                menuId: _id,
                email:user.email,
                name,
                image,
                price,
            }
            // axios.post('http://localhost:5000/carts',cartItem)
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    toast.success(`${name} added to your cart.`)
                    // refetch the cart to update the cart items count
                    refetch()
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    // send the user to the log in page.
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div className=" bg-base-100 border hover:shadow-xl mt-8 relative ">
                <img className='h-[280px]' src={image} alt="Shoes" />
                <p className="bg-slate-900 text-white absolute right-6 top-6 px-5 py-2 rounded-md">${price}</p>
                <div className="card-body text-center">
                    <h2 className=" text-2xl font-semibold">{name}</h2>
                    <p className="text-base">{recipe.slice(0, 66)}</p>
                    <div className="my-4">
                        <button 
                        // onClick={() => handleAddToCard(item)} 
                        onClick={handleAddToCard} 
                        className="btn text-base text-[#D99904] font-semibold border-0 border-b-4 border-[#D99904] ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;