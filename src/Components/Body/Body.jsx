import React from 'react';
import Products from '../Products/Products';
import GetStart from '../GetStart/GetStart';
import Pricing from '../Pricing/Pricing';

const getProducts = async()=>{
  const res = await fetch("/fake.json")
  return res.json()

}
const productPromise = getProducts()

const getPricing = async()=>{
    const res= await fetch("/pricing.json")
    return res.json()
}
const pricePromise = getPricing()

const Body = () => {
    return (
        <div>
            <section className="h-60 bg-linear-to-r from-indigo-500 to-purple-500 ">
                <div className="flex justify-center items-center py-20">
                    <div className="px-28 text-white ">
                        <p className="text-5xl font-bold pb-3">50K+</p>
                        <p>Active Users</p>
                    </div>
                    <div className="border-x border-white text-white px-28 ">
                        <p className="text-5xl font-bold pb-3">200+</p>
                        <p>Premimu Tools</p>
                    </div>
                    <div className="px-28 text-white pb-3">
                        <p className="text-5xl font-bold ">4.9</p>
                        <p>Rating</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="pt-20 pb-10 text-center">
                    <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                    <p className="py-4">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <label htmlFor="Toggle3" className="inline-flex items-center p-2 gap-2 cursor-pointer dark:text-gray-100">
                        <input id="Toggle3" type="checkbox" className="hidden peer" />
                        <span className="px-4 py-2 rounded-3xl dark:bg-indigo-500 peer-checked:dark:bg-gray-400">Products</span>
                        <span className="px-4 py-2 rounded-3xl dark:bg-gray-400 peer-checked:dark:bg-indigo-500">Cart <span>2</span></span>
                    </label>
                </div>
            </section>

            <Products productPromise={productPromise}></Products>
            <GetStart ></GetStart>
            <Pricing pricePromise={pricePromise}></Pricing>


        </div>


    );
};

export default Body;