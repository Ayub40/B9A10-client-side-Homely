import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';

const ExtraSection = () => {
    return (

        <div className='mt-24'>
            <h3 className="text-5xl font-semibold text-center mb-12">Join Our Membership Scheme</h3>
            <div className="stats shadow-lg w-full">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Monthely Membership</div>
                    <div className="stat-value text-primary">5$ <span className='stat-title text-base'>Per Month</span></div>
                    <div className="stat-desc">
                        <ul className='list-disc'>
                            <li>riso print gifts</li>
                            <li>monthely newsletter</li>
                            <li>exclusive invites</li>
                            <li>personalised eid card</li>
                        </ul>

                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Monthely Membership</div>
                    <div className="stat-value text-secondary">10$ <span className='stat-title text-base'>Per Month</span></div>
                    <div className="stat-desc">
                        <ul className='list-disc'>
                            <li>discount on art</li>
                            <li>riso print gifts</li>
                            <li>exclusive invites</li>
                            <li>personalised eid card</li>
                        </ul>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div> */}
                    </div>
                    <div className="">Monthely Membership</div>
                    <div className="stat-value">20$ <span className='stat-title text-base'>Per Month</span></div>
                    <div className="stat-desc text-secondary">
                        <ul className='list-disc'>
                            <li>digital prints</li>
                            <li>discount on art</li>
                            <li>riso print gifts</li>
                            <li>exclusive invites</li>
                            <li>personalised eid card</li>
                        </ul>
                    </div>
                </div>

            </div>
            <section className="my-24">
                <h3 className="text-5xl font-semibold text-center mb-12">Happy <span className="text-bike-primary">Clients
                    says</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <div className="card w-96 bg-base-100 p-9 border shadow-lg ">
                        <figure><img className="w-36" src={user1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>Impressed by the craftsmanship and attention to detail in every piece. Exceptional customer service adds to the overall experience. Highly recommended for those seeking quality and uniqueness.</p>
                            <div className="rating justify-center">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="text-center space-y-4 mt-4">
                                <h4 className="text-sm font-semibold text-[#23A6F0]">Regina Miles</h4>
                                <p>Banker</p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 p-9 border shadow-lg">
                        <figure><img className="w-36" src={user2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>The art and craft business exceeded my expectations! Each item exudes creativity and care. Friendly and responsive customer service made the shopping experience delightful. Definitely a must-visit for anyone in search of special pieces.</p>
                            <div className="rating justify-center">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="text-center space-y-4 mt-4">
                                <h4 className="text-sm font-semibold text-[#23A6F0]">Regina Miles</h4>
                                <p>Housewife</p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 p-9 border shadow-lg">
                        <figure><img className="w-36" src={user3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>Fantastic finds at this art and craft business! The items I purchased are truly one-of-a-kind, showcasing immense talent and passion. The team's dedication to customer satisfaction shines through their excellent service. I will be returning for more treasures!</p>
                            <div className="rating justify-center">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="text-center space-y-4 mt-4">
                                <h4 className="text-sm font-semibold text-[#23A6F0]">Regina Miles</h4>
                                <p>Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExtraSection;