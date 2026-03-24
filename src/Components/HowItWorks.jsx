import { MapPin, UtensilsCrossed, Package } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Your Location",
    description: "Enter your delivery address and browse restaurants near you.",
    step: "01",
  },
  {
    icon: UtensilsCrossed,
    title: "Select Your Meal",
    description: "Pick from our curated selection of healthy, verified dishes.",
    step: "02",
  },
  {
    icon: Package,
    title: "Get It Delivered",
    description: "Receive your fresh, hot meal within 30 minutes.",
    step: "03",
  },
];

function HowItWorks() {
  return (
    <div className="py-20 bg-gradient-to- from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting healthy food delivered has never been easier. Just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to- from-green-300 via-green-400 to-green-300"></div>

          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                <div className="relative mb-6">
                  <div className="bg-green-600 size-16 rounded-full flex items-center justify-center text-white mx-auto">
                    <step.icon className="size-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-100 text-green-600 size-10 rounded-full flex items-center justify-center text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
