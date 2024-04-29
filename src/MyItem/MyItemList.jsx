import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";
import { setItem } from "localforage";
import { Link, useLoaderData } from "react-router-dom";
// import MyCard from "./MyCard";


const MyItemList = () => {

    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [user])





    return (
        <div>
            <h2>My Card</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20 border-red-600">
                {
                    item?.map(p => (

                        <div className="rounded" key={p._id} >
                            <div className="border-red-600 border md:h-[400px] card card-compact">
                                <figure><img className="w-full rounded" src={p.photo} alt="" /></figure>
                                <h1>hello : {p.name}</h1>
                                <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions gap-5 mt-5">
                                    {/* <Link >
                                        <button className="btn btn-sm mt-2 bg-[#244d61] text-white text-xl font-normal ">View Details</button>
                                    </Link> */}
                                    <Link to={`/update/${p._id}`}><div className="btn btn-sm bg-[#D2B48C] text-white badge badge-outline mt-2 ml-5">Update</div></Link>
                                    <button className="btn btn-sm bg-[#3C393B] text-white mt-2 ">
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