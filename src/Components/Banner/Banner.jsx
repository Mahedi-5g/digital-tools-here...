import React from 'react'
import bannerImg from '../../assets/images/banner.png'
import playImg from '../../assets/images/Play.png';
import groupImg from '../../assets/images/Group 5.png';

const Banner = () => {
    return (
        <section className="bg-gray-50 pt-6 lg:pt-10 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

                <div className="text-center lg:text-left max-w-xl">

                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-400 rounded-full bg-indigo-100 text-indigo-600 text-sm">
                        <img className="w-4 h-4" src={groupImg} alt="" />
                        <span>New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight pt-5">
                        Supercharge Your Digital Workflow
                    </h1>

                    <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="mt-6 mb-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-6 py-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white">
                            Explore Products
                        </button>

                        <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-indigo-400 text-indigo-500">
                            <img className="w-4 h-4" src={playImg} alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-8 mb-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src={bannerImg}
                        alt="banner"
                        className="h-full"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner;