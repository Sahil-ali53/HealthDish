import { ShieldCheck, Leaf, Award, TruckIcon } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Healthy",
    description: "All our meals are prepared with fresh, organic ingredients and nutritional balance in mind.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Hygienic",
    description: "Every vendor goes through rigorous verification and maintains the highest hygiene standards.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "Our food items are certified by nutrition experts and quality control teams.",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: TruckIcon,
    title: "Fast Delivery",
    description: "Hot and fresh meals delivered to your doorstep within 30 minutes.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Why Choose HealthDish?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering not just food, but a healthier lifestyle to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`${feature.bgColor} ${feature.color} size-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Features;
