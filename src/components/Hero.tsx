import { ArrowRight, Recycle, Leaf, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-eco-light to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/leaf-pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Recycle className="h-20 w-20 text-eco-primary animate-float" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-eco-primary mb-6">
            Transform Your Waste
            <br />
            Into Value
          </h1>
          <p className="text-lg md:text-xl text-eco-dark max-w-2xl mx-auto mb-8">
            Join the sustainable revolution. Manage your waste efficiently, earn rewards,
            and make a positive impact on the environment.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 bg-eco-primary text-white rounded-lg hover:bg-eco-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center mb-4">
              <Recycle className="text-eco-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Smart Sorting</h3>
            <p className="text-gray-600">
              AI-powered waste identification and sorting recommendations
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center mb-4">
              <Leaf className="text-eco-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Eco Impact</h3>
            <p className="text-gray-600">
              Track your environmental impact and contribution to sustainability
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-eco-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Earn Rewards</h3>
            <p className="text-gray-600">
              Get rewarded for your sustainable waste management practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;