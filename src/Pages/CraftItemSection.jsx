// import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CraftItemSection = ({ artsItem, artsItems, setArtsItems }) => {

    const { _id, item, description, photo } = artsItem;

    const handleDelete = _id => {
        console.log(_id);
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


                fetch(`https://ak-art-server.vercel.app/arts/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                            const remaining = artsItems.filter(art => art._id !== _id);
                            setArtsItems(remaining);
                        }
                    })

                // console.log('deleted confirm');
            }
        });
    }


    return (

        <div className="">

            <div className="card card-compact  bg-base-100 shadow-xl md:h-[400px] ">
                <figure><img data-aos="zoom-in" data-aos-duration="1000" src={photo} alt="Shoes" /></figure>
                <div className="mt-4 flex ">
                    <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1100" className="flex mr-4 ml-4">{item} </h2>

                </div>
                <div className="card-body">

                    <p data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1100">{description}</p>


                    <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions gap-5">
                        <Link to={`/craftdetail/${_id}`}>
                            <button className="btn btn-sm mt-2 bg-[#244d61] text-white text-xl font-normal ">View Details</button>
                        </Link>
                        <Link to={`/update/${_id}`}><div className="btn btn-sm bg-[#D2B48C] text-white badge badge-outline mt-2">Update</div></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#3C393B] text-white mt-2 ">
                            Delete
                        </button>

                    </div>

                </div>

            </div>
        </div>



        // <div className="card  bg-base-100 shadow-xl">
        //     <figure><img src={photo} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {item}
        //             <div className="badge badge-secondary">NEW</div>
        //         </h2>
        //         <p>{description}</p>

        //         <div className="card-body">


        //             <h2 className="card-title">{bookName}</h2>
        //             <p data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1100">{description}</p>
        //             <div className="mt-4 flex ">
        //                 <h2 className="flex mr-4">{category} </h2>
        //                 <h2 className="flex">  {rating} </h2>
        //             </div>

        //             <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions">
        //                 <Link to={`/update/${_id}`}>
        //                     <button className="btn bg-[#c2aff0] text-xl font-normal ">View Property</button>
        //                 </Link>
        //             </div>
        //         </div>


        //         <div className="card-actions justify-end">
        //             <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions">
        //                 <Link to={`/update/${_id}`}>
        //                     <button className="btn bg-[#c2aff0] text-xl font-normal ">View Property</button>
        //                 </Link>
        //             </div>
        //             <div className="badge badge-outline">Fashion</div>
        //             <div className="badge badge-outline">Products</div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CraftItemSection;