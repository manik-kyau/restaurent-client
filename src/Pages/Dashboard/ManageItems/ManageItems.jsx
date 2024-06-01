import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, , refetch] = UseMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle
                subHeading="---Hurry Up!---"
                heading="MANAGE ALL ITEMS"
            >
            </SectionTitle>

            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white text-xl font-bold ">
                            <tr className="">
                                <th></th>
                                {/* <th>User Image</th> */}
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) => <tr key={idx}>
                                    <th className="text-lg font-semibold">{idx + 1}</th>

                                    <td className="">
                                        <img className="w-[50px] h-[50px] " src={item.image} alt="" />
                                    </td>
                                    <td className="text-lg font-semibold">{item.name}</td>
                                    <td className="text-lg font-semibold">${item.price}</td>
                                    {/* <td></td> */}
                                    <td className="">
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="flex items-center justify-center text-center btn-xs py-4 bg-[#D1A054] text-white rounded-lg"><FiEdit className="text-xl "></FiEdit></button>
                                        </Link>
                                    </td>
                                    <th className="">
                                        <button onClick={() => handleDeleteItem(item)} className="flex items-center justify-center text-center btn-xs py-4 bg-red-700 text-white rounded-lg"><RiDeleteBin6Line className="text-xl "></RiDeleteBin6Line></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;