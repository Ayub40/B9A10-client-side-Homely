import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { data } from "autoprefixer";
// import { setItem } from "localforage";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import MyCard from "./MyCard";


const MyItemList = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://ak-art-server.vercel.app/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });
    }, [user, control]);

    const handleDelete = (id) => {
        console.log(id);
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


                fetch(`https://ak-art-server.vercel.app/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            setControl(!control)
                            // const remaining = control.filter(con => con.id !== id);
                            // setControl(remaining);

                            // const remaining = artsItems.filter(art => art._id !== _id);
                            // setArtsItems(remaining);

                        }
                    })
            }
        });
    }





    return (
        <div>
            <h2>My Card</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20 border-red-600">
                {
                    item?.map(p => (

                        <div className="rounded" key={p._id} >
                            <div className=" border md:h-[400px] card card-compact shadow-lg">
                                <figure><img className="w-full rounded" src={p.photo} alt="" /></figure>
                                <h1 className="mt-2 ml-2">Item : {p.item}</h1>
                                <div className="flex  gap-5">
                                    <h1 className="mt-2 ml-2">Price : {p.price}</h1>
                                    <h1 className="mt-2 ml-2">Rating : {p.rating}</h1>
                                </div>
                                <div className="flex  gap-5">
                                    <h1 className="mt-2 ml-2">Customization : {p.selectedCustom}</h1>
                                    <h1 className="mt-2 ml-2">Stock Status  : {p.selectedStock}</h1>
                                </div>
                                <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions gap-5 mt-2 mb-2">
                                    {/* <Link >
                                        <button className="btn btn-sm mt-2 bg-[#244d61] text-white text-xl font-normal ">View Details</button>
                                    </Link> */}
                                    <Link to={`/update/${p._id}`}><div className="btn btn-sm bg-[#D2B48C] text-white badge badge-outline mt-2 ml-5">Update</div></Link>
                                    <button onClick={() => handleDelete(p._id)} className="btn btn-sm bg-[#3C393B] text-white mt-2 ">
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </div>


                    ))
                }
            </div>

        </div>





    );
};

export default MyItemList;