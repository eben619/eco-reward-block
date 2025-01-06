import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Route, MapPin, Calendar, Truck } from "lucide-react";
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
                <label htmlFor="wasteType" className="block text-sm font-medium mb-1">
                  Type of Waste
                </label>
                <Input id="wasteType" placeholder="e.g., Plastic, Paper, Electronics" />
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                  Estimated Quantity (kg)
                </label>
                <Input id="quantity" type="number" placeholder="Enter quantity" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Additional Details
                </label>
                <Textarea
                  id="description"
                  placeholder="Provide any additional information about the waste"
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">
                  Preferred Pickup Date
                </label>
                <Input id="preferredDate" type="date" />
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
            <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
              Map placeholder - Coming soon
              {/* Map component will be implemented here */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestPickup;