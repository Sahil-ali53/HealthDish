
import { Star, Clock, Flame } from "lucide-react";

const dishes = [
  {
    name: "Mediterranean Salad Bowl",
    image: "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww",
    calories: "350 cal",
    time: "20 min",
    rating: 4.8,
    price: "$12.99",
    tag: "Vegan",
  },
  {
    name: "Grilled Salmon & Quinoa",
    image: "https://images.unsplash.com/photo-1758157836016-3f3fbc5bf796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwaGVhbHRoeSUyMG1lYWx8ZW58MXx8fHwxNzczMzA3MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    calories: "420 cal",
    time: "25 min",
    rating: 4.9,
    price: "$16.99",
    tag: "High Protein",
  },
  {
    name: "Berry Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww ",
    calories: "280 cal",
    time: "15 min",
    rating: 4.7,
    price: "$9.99",
    tag: "Antioxidant",
  },
];

function FeaturedDishes() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Featured Healthy Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked meals crafted by expert chefs with premium ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {dish.tag}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl">{dish.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm">{dish.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Flame className="size-4 text-orange-500" />
                    <span>{dish.calories}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4 text-blue-500" />
                    <span>{dish.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl text-green-600">{dish.price}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white cursor-pointer " >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button variant="outline" className="border-green-600 text-green-600 cursor-pointer hover:bg-green-50 px-8 py-6" >
            View All Dishes
          </button>
        </div>
      </div>
    </div>
  );
}
export default FeaturedDishes;
