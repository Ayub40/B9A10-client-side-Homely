// import { data } from "autoprefixer";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// const LandscapePainting = () => {
//     const { subcategory_name } = useParams();
//     // const { params } = useParams();
//     // console.log(params);

//     console.log(subcategory_name);
//     const [item, setItem] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/crafts/${subcategory_name}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setItem(data);
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, [subcategory_name])



//     return (
//         <div>
//             {
//                 item.map(p => (
//                     <div key={p.id}>
//                         <h1>Hello :{p.price}</h1>
//                         <img src={p.photo} alt="" />
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default LandscapePainting;