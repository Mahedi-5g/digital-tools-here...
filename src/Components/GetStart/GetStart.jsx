import userImg from '../../assets/images/user.png';
import packageImg from '../../assets/images/package.png';
import rocketImg from '../../assets/images/rocket.png';

const GetStart = () => {
    return (
        <div className="bg-slate-50 text-center pt-16">
            <h1 className="text-4xl font-bold">Get Started In 3 Step</h1>
            <p className="pt-2">Start using premium digital tools in minutes, not hours.</p>
            <div className="px-20 grid md:grid-cols-2 lg:grid-cols-3 pt-10 pb-20 gap-5">
               <div className="shadow-lg rounded-lg border border-slate-300 p-5">
                <div className="flex justify-end">
                    <p className=" p-1 rounded-2xl w-8 bg-blue-600 text-white">01</p>
                </div>
                 
                <img className="mx-auto p-2 my-4 rounded-full bg-blue-100" src={userImg} alt="" />
                <h3 className="text-2xl font-semibold">Create Account</h3>
                <p className="py-4">Sign up for free in seconds. No credit card required to get started.</p>
               </div>
               <div className="shadow-lg rounded-lg border border-slate-300 p-5">
                <div className="flex justify-end">
                    <p className=" p-1 rounded-2xl w-8 bg-blue-600 text-white">02</p>
                </div>
                <img className="mx-auto p-2 my-4 rounded-full bg-blue-100" src={packageImg} alt="" />
                <h3 className="text-2xl font-semibold">Choose Product</h3>
                <p className="py-4">Browse our catalog and select the tools that fit your needs.</p>
               </div>
               <div className="shadow-lg rounded-lg border border-slate-300 p-5">
                 <div className="flex justify-end">
                    <p className=" p-1 rounded-2xl w-8 bg-blue-600 text-white">03</p>
                </div>
                <img className="mx-auto p-2 my-4 rounded-full bg-blue-100" src={rocketImg} alt="" />
                <h3 className="text-2xl font-semibold">Start Creating</h3>
                <p className="py-4">Download and start using your premium tools immediately</p>
               </div>
            </div>
            
        </div>
    );
};

export default GetStart;