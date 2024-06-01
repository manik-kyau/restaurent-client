import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hostion_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hostion_key}`;

const UpdateItem = () => {
    const {_id, name, category, image, recipe,price} = useLoaderData();
    
    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hostion_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            // now
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup 
                reset();
                toast.success(`${data.name} Update Successfully Done.`);
            }
        }
        console.log('With image url', res.data);
    };


    return (
        <div>
            <SectionTitle
            subHeading={'--Refresh Info--'}
                heading={'UPDATE ITEM'}
            ></SectionTitle>

            <div>
                <section className="p-6 dark:text-gray-800 bg-[#F3F3F3]">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe name*</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                defaultValue={name}
                                placeholder="Recipe name"
                                className="input input-bordered w-full "
                            />
                        </label>
                        <div className="flex flex-col md:flex-row gap-5 my-3">
                            {/* Category */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select defaultValue={category} {...register("category", { required: true })}
                                    className="select select-bordered w-full ">
                                    <option disabled value="default">Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </label>

                            {/* Price */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    {...register("price", { required: true })}
                                    type="number"
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        <label className="form-control w-full mb-8">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea
                                {...register("recipe", { required: true })}
                                type="text"
                                defaultValue={recipe}
                                placeholder="Recipe Details*..."
                                className="input input-bordered w-full h-[150px]"
                            ></textarea>
                        </label>

                        <div>
                            <input
                                {...register("image", { required: true })}
                                type="file"
                                // defaultValue={image}
                                className="file-input file-input-bordered w-full"
                            />
                        </div>

                        <div>
                            <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-2 text-white text-lg font-semibold mt-7 rounded-md">
                                Update Recipe Details
                                {/* <FaUtensils></FaUtensils> */}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateItem;