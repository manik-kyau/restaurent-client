import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="">
            <div className="flex justify-between">
                <h2 className="text-3xl font-semibold">Items: {cart.length}</h2>
                <h2 className="text-3xl font-semibold">Total Price: {totalPrice}</h2>
                <h2 className="text-3xl font-semibold bg-[#D1A054] p-2 rounded-lg text-white">Pay</h2>
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-xl font-bold ">
                        <tr className="">
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) => <tr key={idx}>
                                <th className="text-lg font-semibold">{idx + 1}</th>
                                <td>
                                    <img className="w-[80px] rounded-lg" src={item.image} />
                                </td>
                                <td className="text-lg font-semibold">{item.name}</td>
                                <td className="text-lg font-semibold">${item.price}</td>
                                <th className="">
                                    <button onClick={() => handleDelete(item._id)} className="flex items-center justify-center text-center btn-xs py-4 bg-red-700 text-white rounded-lg"><RiDeleteBin6Line className="text-xl "></RiDeleteBin6Line></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;