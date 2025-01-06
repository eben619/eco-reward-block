import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Route, MapPin, Calendar, Truck, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const RequestPickup = () => {
  const { toast } = useToast();
  const [location, setLocation] = useState({ lat: null, lng: null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Your pickup request has been received. We'll notify you once it's confirmed.",
    });
  };

  const wasteTypes = [
    "Plastic",
    "Paper",
    "Glass",
    "Metal",
    "Electronics",
    "Organic",
    "Hazardous",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">Request Pickup</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Waste Collection Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Type of Waste
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {wasteTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50"
                    >
                      <input type="checkbox" className="rounded" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-medium mb-1">
                  Estimated Weight Range (kg)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="minWeight" type="number" placeholder="Min weight" />
                  <Input id="maxWeight" type="number" placeholder="Max weight" />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Pickup Address
                </label>
                <Textarea
                  id="address"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Contact Number
                </label>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">
                  Preferred Pickup Date
                </label>
                <Input id="preferredDate" type="date" />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">
                  Additional Notes
                </label>
                <Textarea
                  id="notes"
                  placeholder="Any special instructions or requirements?"
                />
              </div>

              <Button type="submit" className="w-full bg-eco-primary hover:bg-eco-dark">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Pickup Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Interactive map for selecting pickup location coming soon.
                  You can specify your address in the form for now.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestPickup;