import React from 'react'
import { Star } from "lucide-react";
function Testimonial() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Fitness Enthusiast",
            content: "HealthDish has completely transformed my meal planning! Every dish is fresh, delicious, and perfectly portioned. I've never felt better!",
            rating: 5,
            image: " https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
        },
        {
            name: "Michael Chen",
            role: "Working Professional",
            content: "As someone with a busy schedule, HealthDish is a lifesaver. Quality food delivered fast, and I know it's all verified and hygienic.",
            rating: 5,
            image: " https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        },
    ];

    return (
        <>
            <div className="py-20 bg-gradient-to- from-green-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who trust HealthDish for their daily nutrition.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        className="size-12 rounded-full object-cover"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />



                                    <div>
                                        <div className="text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial