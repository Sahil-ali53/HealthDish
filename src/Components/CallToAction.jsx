import React from 'react'
import { ArrowRight } from "lucide-react";
function CallToAction() {
    return (
        <>
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-black ">
                        <h2 className="text-3xl sm:text-4xl mb-6">
                            Ready to Start Your Healthy Journey?
                        </h2>
                        <p className="text-lg text-green-500 mb-8 max-w-2xl mx-auto">
                            Download the HealthDish app now and get 20% off on your first order. Available on iOS and Android.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                            <button className="bg-white text-green-600 font-medium hover:bg-blue-300 hover:transition rounded px-6 py-6 text-lg group" >
                                Get Started Now
                                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button ariant="outline" className="border-2 border-white text-black hover:bg-white hover:text-green-600 px-8 py-6 text-lg" >
                                Learn More
                            </button>
                        </div>

                        <div className="mt-12 flex justify-center gap-8 text-black">
                            <div>
                                <div className="text-3xl">500+</div>
                                <div className="text-sm">Dishes</div>
                            </div>
                            <div className="h-12 w-px bg-green-400"></div>
                            <div>
                                <div className="text-3xl">50K+</div>
                                <div className="text-sm">Orders</div>
                            </div>
                            <div className="h-12 w-px bg-green-400"></div>
                            <div>
                                <div className="text-3xl">4.8★</div>
                                <div className="text-sm">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CallToAction