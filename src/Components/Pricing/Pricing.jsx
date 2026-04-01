import { use } from "react";
import { TiTick } from "react-icons/ti";


const Pricing = ({ pricePromise }) => {
    const pricing = use(pricePromise)
    return (
        <div className="bg-slate-50 ">
            <h1 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h1>
            <p className="pt-2 text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 px-20 pb-28">
                {pricing.map(price =>
                    <div key={price.id} className="shadow-lg rounded-lg border border-slate-300 p-5">
                        <h2 className="text-2xl font-semibold py-3">{price.name}</h2>
                        <p className="text-slate-600 ">{price.description}</p>
                        <p className="text-xl font-semibold py-3">{price.price}</p>
                        <ul className="text-slate-600 pb-3">

                            {price.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-green-500"><TiTick /></span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`btn rounded-3xl w-full ${price.button === "Get Started Free"
                                    ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                                    : price.button === "Start Pro Trial"
                                        ? "bg-slate-200 text-black"
                                        : "bg-linear-to-r from-indigo-500 to-purple-500 text-white"
                                }`}
                        >
                            {price.button}
                        </button>

                    </div>)}
            </div>

        </div>

    );
};

export default Pricing;