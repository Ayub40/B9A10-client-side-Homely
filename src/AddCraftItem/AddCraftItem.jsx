import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

const AddCraftItem = () => {
    const { user } = useContext(AuthContext);

    const handleAddArtCraft = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
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

        const artCraft = { email, name, item, description, price, rating, photo, selectedCustom, selectedStock, selectedSubcategory, selectedProcessing };

        console.log(artCraft);


        // send data to the server
        fetch('http://localhost:5000/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(artCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="  bg-[#F4F3F0] p-24">
            <h2 className="text-center text-3xl font-extrabold">Add Art And Craft</h2>
            <form onSubmit={handleAddArtCraft} className="card-body">
                {/* form row User email and name*/}
                <div className="md:flex gap-2 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* Subcategory name */}
                <div className="md:flex gap-2 mb-5 ">
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Subcategory name</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </div>
                            <select className="select select-bordered">
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
                            <input type="text" name="item" placeholder="Item Name" className="input input-bordered w-full" required />
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
                        <input type="text" name="description" placeholder="Write Description" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/*  */}
                <div className="md:flex gap-2 mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" min="1" max="5" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* customization and processing time */}
                <div className="md:flex gap-2 mb-5 ">
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Customization</span>

                            </div>
                            <select id="custom" className="select select-bordered customization">
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
                            <select id="stock" className="select select-bordered stockStatus">
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
                        <select id="processing" className="select select-bordered processing">
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
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" value="Add" className="btn btn-block bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default AddCraftItem;