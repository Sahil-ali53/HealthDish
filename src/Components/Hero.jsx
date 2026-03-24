import React from 'react'
import { Search } from "lucide-react";

function Hero() {
  return (
    <>
      <div className="relative bg-gradient from-green-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Healthy Food,
                  <span className="text-green-600 block">Delivered Fresh</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Experience the best of healthy eating with HealthDish. We deliver only verified, hygienic, and nutritious meals right to your doorstep.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button className="bg-green-600 rounded  hover:bg-green-700 text-white px-6 py-6" >
                  Find Food
                </button>


              </div>


              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Healthy Dishes</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Verified Vendors</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">

                <img
                  className="rounded-2xl shadow-2xl w-full"
                  src=" https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D "
                  alt="Healthy food bowl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero