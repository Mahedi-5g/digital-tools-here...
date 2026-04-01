import React, { useState } from 'react';
import Products from '../Products/Products';
import GetStart from '../GetStart/GetStart';
import Pricing from '../Pricing/Pricing';
import Cart from '../Cart/Cart';

const getProducts = async () => {
    const res = await fetch("/fake.json")
    return res.json()

}
const productPromise = getProducts()

const getPricing = async () => {
    const res = await fetch("/pricing.json")
    return res.json()
}
const pricePromise = getPricing()



const Body = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [carts, setCarts] = useState([])
    return (
        <div>
            <section className="bg-linear-to-r from-indigo-500 to-purple-500 lg:py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">

                    <div className="text-white px-6 py-6">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">50K+</p>
                        <p className="text-sm sm:text-base">Active Users</p>
                    </div>
                    <div className="text-white px-6 py-6 border-y sm:border-y-0 sm:border-x border-white/40">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">200+</p>
                        <p className="text-sm sm:text-base">Premium Tools</p>
                    </div>

                    <div className="text-white px-6 py-6">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4.9</p>
                        <p className="text-sm sm:text-base">Rating</p>
                    </div>

                </div>
            </section>
            <section>
                <div className="pt-20 pb-10 text-center">
                    <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                    <p className="py-4">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <label htmlFor="Toggle3" className="inline-flex items-center p-2 gap-2 cursor-pointer dark:text-gray-100">
                        <input id="Toggle3" type="checkbox" className="hidden peer" />
                        <span onClick={() => setActiveTab("products")} className="px-4 py-2 rounded-3xl dark:bg-indigo-500 peer-checked:dark:bg-gray-400">Products</span>
                        <span onClick={() => setActiveTab("cart")} className="px-4 py-2 rounded-3xl dark:bg-gray-400 peer-checked:dark:bg-indigo-500 ">Cart <span>({carts.length})</span></span>
                    </label>
                </div>
            </section>

            {activeTab === "products" ? <Products productPromise={productPromise} carts={carts} setCarts={setCarts}></Products> : null}
            {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}></Cart> : null}
            <GetStart ></GetStart>
            <Pricing pricePromise={pricePromise}></Pricing>


        </div>


    );
};

export default Body;