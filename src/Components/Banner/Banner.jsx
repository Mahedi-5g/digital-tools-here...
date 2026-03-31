import React from 'react'
import bannerImg from '../../assets/images/banner.png'
import playImg from '../../assets/images/Play.png';
import groupImg from '../../assets/images/Group 5.png';

const Banner = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 px-20">
                <div className="container flex flex-col justify-center mx-auto sm:py-4 lg:py-8 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <div className="flex w-fit p-2 border border-indigo-400 rounded-3xl bg-indigo-100 text-indigo-600 gap-1 font-normal">
                            <p><img className="mt-1" src={groupImg} alt="" /></p>
                             <p>New: AI-Powered Tools Available</p>
                        </div>
                       
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl pt-6">Supercharge Your Digital Workflow

                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.Explore Products
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                             <a className="btn btn-primary bg-linear-to-r from-indigo-500 to-purple-500 rounded-3xl">Explore Products</a>
                            <a className="btn  rounded-3xl text-indigo-500 border-indigo-400"> <span><img src={playImg} alt="" /></span>Watch Demo</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img className="h-full" src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;