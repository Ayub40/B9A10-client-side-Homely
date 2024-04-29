import { useLoaderData } from "react-router-dom";
import CraftItemSection from "../Pages/CraftItemSection";
import { useState } from "react";


const AllArtAndCraftItems = () => {

    const loaderArtsItems = useLoaderData();
    const [artsItems, setArtsItems] = useState(loaderArtsItems);


    return (
        <div>
            <h2>All item : {artsItems.length}</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
                {
                    artsItems.map(artsItem =>
                        <CraftItemSection
                            key={artsItem._id}
                            artsItem={artsItem}
                            artsItems={artsItems}
                            setArtsItems={setArtsItems}
                        >
                        </CraftItemSection>)
                }
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;