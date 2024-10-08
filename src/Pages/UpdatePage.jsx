import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {

    const artsItem = useLoaderData();
    const { _id, email, name, item, description, price, rating, photo, selectedCustom, selectedStock, selectedSubcategory, selectedProcessing } = artsItem;


    const handleUpdateArtCraft = event => {
        event.preventDefault();

        const form = event.target;
        // const email = form.email.value;
        const name = form.name.value;
        const item = form.item.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const subcategorySelect = form.querySelector('.select');
        const selectedSubcategory = subcategorySelect.value;


        const custom = document.getElementById('custom');
        const selectedCustom = custom.value;

        const stock = document.getElementById('stock');
        const selectedStock = stock.value;

        const processing = document.getElementById('processing');
        const selectedProcessing = processing.value;

        const updateArtCraft = { email, name, item, description, price, rating, photo, selectedCustom, selectedStock, selectedSubcategory, selectedProcessing };

        console.log(updateArtCraft);


        // send data to the server
        fetch(`https://ak-art-server.vercel.app/arts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArtCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Item Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="  bg-[#F4F3F0] p-24">
            <h2 className="text-center text-3xl font-extrabold">Update Art And Craft : {item}</h2>
            <form onSubmit={handleUpdateArtCraft} className="card-body">
                {/* form row User email and name*/}
                {/* <div className="md:flex gap-2 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email} placeholder="Enter Your Email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter Your Name" className="input input-bordered w-full" required />
                    </div>
                </div> */}
                {/* Subcategory name */}
                <div className="md:flex gap-2 mb-5 ">
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Subcategory name</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </div>
                            <select defaultValue={selectedSubcategory} className="select select-bordered">
                                <option disabled selected>Select Subcategory</option>
                                <option>Landscape Painting</option>
                                <option>Portrait Drawing</option>
                                <option>Watercolour Painting</option>
                                <option>Oil Painting</option>
                                <option>Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </label>
                    </div>
                    {/* another */}
                    <div className="md:w-1/2  ">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="item" defaultValue={item} placeholder="Item Name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                {/* --------------------------------------------------------- */}
                {/* --------------------------------------------------------- */}
                {/* form row  name and quantity row*/}
                {/* description */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="Write Description" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/*  */}
                <div className="md:flex gap-2 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" defaultValue={rating} placeholder="Rating" min="1" max="5" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* customization and processing time */}
                <div className="md:flex gap-2 mb-5 ">
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Customization</span>

                            </div>
                            <select defaultValue={selectedCustom} id="custom" className="select select-bordered customization">
                                <option disabled selected>Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                    </div>
                    {/* another */}
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">StockStatus </span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </div>
                            <select defaultValue={selectedStock} id="stock" className="select select-bordered stockStatus">
                                <option disabled selected>StockStatus</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/*  */}
                <div className="md:w-full">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Processing Time </span>
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </div>
                        <select defaultValue={selectedProcessing} id="processing" className="select select-bordered processing">
                            <option disabled selected>Processing Time</option>
                            <option>1-3 days</option>
                            <option>1 weeks</option>
                            <option>2 weeks</option>
                            <option>3 weeks</option>
                            <option>4 weeks</option>
                            <option>5 weeks</option>
                        </select>
                    </label>
                </div>
                {/* form Photo Url row */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default UpdatePage;