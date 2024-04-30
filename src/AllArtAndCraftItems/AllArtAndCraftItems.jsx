import { Link, useLoaderData, useParams } from "react-router-dom";
import CraftItemSection from "../Pages/CraftItemSection";
import { useState } from "react";


const AllArtAndCraftItems = () => {
    // const {_id}=useParams();
    // console.log(_id);

    const loaderArtsItems = useLoaderData();
    const [artsItems, setArtsItems] = useState(loaderArtsItems);


    return (

        <div>
            <h2>Users : {loaderArtsItems.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item No</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Processing Time</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            artsItems.map((artsItem, index) => <tr key={artsItem._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-16" src={artsItem.photo} alt="" /></td>
                                <td>{artsItem.price}</td>
                                <td>{artsItem.rating}</td>
                                <td>{artsItem.selectedProcessing}</td>
                                <td>
                                    <Link to={`/craftdetail/${artsItem._id}`}>
                                        <button className="btn btn-sm mt-2 bg-[#244d61] text-white text-xl font-normal ">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>








        // <div>
        //     <h2>All item : {artsItems.length}</h2>
        //     <div className="grid md:grid-cols-3 gap-6 mb-20">
        //         {
        //             artsItems.map(artsItem =>
        //                 <CraftItemSection
        //                     key={artsItem._id}
        //                     artsItem={artsItem}
        //                     artsItems={artsItems}
        //                     setArtsItems={setArtsItems}
        //                 >
        //                 </CraftItemSection>)
        //         }
        //     </div>
        // </div>
    );
};

export default AllArtAndCraftItems;