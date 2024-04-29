// import { Link } from "react-router-dom";


// const MyCard = ({ artsItem, artsItems, setArtsItems }) => {


//     const { _id, email, item, description, photo } = artsItem;


//     return (
//         <div className="">

//             <div className="card card-compact  bg-base-100 shadow-xl md:h-[400px] ">
//                 <figure><img data-aos="zoom-in" data-aos-duration="1000" src={photo} alt="Shoes" /></figure>
//                 <div className="mt-4 flex ">
//                     <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1100" className="flex mr-4 ml-4">{item} </h2>

//                 </div>
//                 <div className="card-body">

//                     <p data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1100">{description}</p>


//                     <div data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1100" className="card-actions gap-5">

//                         <Link to={`/update/${_id}`}><div className="btn btn-sm bg-[#D2B48C] text-white badge badge-outline mt-2">Update</div></Link>
//                         {/* <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#3C393B] text-white mt-2 ">
//                             Delete
//                         </button> */}

//                     </div>

//                 </div>

//             </div>
//         </div>

//     );
// };

// export default MyCard;