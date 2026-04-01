import { use } from 'react';
import { TiTick} from 'react-icons/ti';

const Products = ({ productPromise }) => {
    const products = use(productPromise)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 px-20 pb-28">
            {products.map(product =>
                <div key={product.id} className="shadow-lg rounded-lg border border-slate-300 p-5">
                    <div className="flex justify-between">
                        <img src={product.icon} alt="" />
                        <p
                            className={`px-3 py-1 rounded-full text-sm" ${product.tag === "new"
                                    ? "bg-green-200 text-green-600"
                                    : product.tag === "best seller"
                                        ? "bg-orange-100 text-orange-300 "
                                        : product.tag === "popular"
                                            ? "bg-blue-200 text-blue-600"
                                            : "bg-gray-300"
                                }`}
                        >
                            {product.tag}
                        </p>
                    </div>
                    <h2 className="text-2xl font-semibold py-3">{product.name}</h2>
                    <p className="text-slate-600 ">{product.description}</p>
                    <p className="text-xl font-semibold py-3">{product.price}</p>
                    <ul  className="text-slate-600 pb-3">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-green-500"><TiTick/></span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary bg-linear-to-r from-indigo-500 to-purple-500 rounded-3xl w-full">Buy Now</button>

                </div>)}
        </div>
    )
};

export default Products;