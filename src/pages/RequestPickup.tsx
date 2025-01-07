import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";

const RequestPickup = () => {
  const [wasteType, setWasteType] = useState("");
  const [weightRange, setWeightRange] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ wasteType, weightRange, address, contact });
  };

  return (
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Truck className="h-8 w-8 text-eco-primary" />
          <h1 className="text-4xl font-bold text-eco-primary">Request Pickup</h1>
        </div>
            <div className="p-6">
              <p className="text-lg text-muted-foreground">
                Schedule your waste pickup service with ease. Our efficient collection system is designed to serve you better.
              </p>
            </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          <div>
            <label
              htmlFor="wasteType"
              className="block text-sm font-medium text-eco-primary mb-2"
            >
              Select Waste Type
            </label>
            <select
              id="wasteType"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-eco-primary"
            >
              <option value="">Choose a waste type</option>
              <option value="plastic">Plastic</option>
              <option value="metal">Metal</option>
              <option value="paper">Paper</option>
              <option value="organic">Organic</option>
              <option value="electronic">Electronic</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="weightRange"
              className="block text-sm font-medium text-eco-primary mb-2"
            >
              Weight Range (kg)
            </label>
            <select
              id="weightRange"
              value={weightRange}
              onChange={(e) => setWeightRange(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-eco-primary"
            >
              <option value="">Select weight range</option>
              <option value="1-5">1-5 kg</option>
              <option value="6-10">6-10 kg</option>
              <option value="11-20">11-20 kg</option>
              <option value="21+">21+ kg</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-eco-primary mb-2"
            >
              Pickup Address / Location
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-eco-primary"
              placeholder="Enter pickup address or use the map below to select a location."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-eco-primary mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-eco-primary"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-eco-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-eco-primary-dark focus:outline-none focus:ring focus:ring-eco-primary"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPickup;
