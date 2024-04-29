import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const CraftItemDetails = () => {

    const artsItem = useLoaderData();
    // const { _id } = useParams();
    // const idInt = parseInt(_id);
    // const artsItem = artsItems.find(artsItem => artsItem.id === idInt);
    // const artsItem = artsItems.find(artsItem => artsItem.id === _id);
    // console.log(artsItem);

    const { email, name, item, description, price, rating, photo, selectedCustom, selectedStock, selectedSubcategory, selectedProcessing } = artsItem;

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>CraftDetails</title>
            </Helmet>
            <div className="max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1200" className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">{item}</h3>
                            <p data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1200" className="mt-3 text-lg dark:text-gray-600">{description}</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">

                                    <div className="ml-4">
                                        <h4 data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1200" className="text-lg font-medium leading-6 dark:text-gray-900">{selectedSubcategory}</h4>
                                        <p data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1200" className="mt-2 dark:text-gray-600">Processing Time : {selectedProcessing}</p>
                                    </div>
                                </div>
                                <div className="flex">

                                    <div className="ml-4">
                                        <h4 data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1200" className="text-lg font-medium leading-6 dark:text-gray-900">Customization : {selectedCustom}</h4>
                                        <p data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1200" className=' list-disc'>Stock Status :  {selectedStock}</p>
                                    </div>
                                </div>
                                <div className="flex">

                                    <div className="ml-4">
                                        <h4 data-aos="fade-left" data-aos-delay="2200" data-aos-duration="1200" className="text-lg font-medium leading-6 dark:text-gray-900">Status : {status}</h4>
                                        <p data-aos="fade-left" data-aos-delay="2400" data-aos-duration="1200" className="mt-2 dark:text-gray-600">Price : {price}</p>
                                        <p data-aos="fade-left" data-aos-delay="2600" data-aos-duration="1200">Rating : {rating}</p>
                                    </div>
                                </div>
                                <button className="btn bg-[#46A094] w-full text-xl">Buy Now!</button>
                            </div>

                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img data-aos="zoom-in" data-aos-duration="1500" src={photo} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CraftItemDetails;