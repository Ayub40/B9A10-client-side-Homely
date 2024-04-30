import { useLoaderData } from "react-router-dom";
import CraftItemSection from "../Pages/CraftItemSection";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import 'animate.css';
import Banner from "./Banner";
import ExtraSection from "../ExtraPage/ExtraSection";


const Home = () => {

    const loaderArtsItems = useLoaderData();
    const [artsItems, setArtsItems] = useState(loaderArtsItems);
    const [dataLength, setDataLength] = useState([6]);


    return (
        <div>
            <Banner></Banner>
            {/* <h2>Home : {artsItems.length} </h2> */}
            <div>
                <h1 className='text-center mb-12 font-bold text-5xl'>Craft items </h1>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
                {
                    artsItems.slice(0, dataLength).map(artsItem =>
                        <CraftItemSection
                            key={artsItem._id}
                            artsItem={artsItem}
                            artsItems={artsItems}
                            setArtsItems={setArtsItems}
                        >
                        </CraftItemSection>)
                }
            </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;