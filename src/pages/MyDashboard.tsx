import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard } from "lucide-react";

const MyDashboard = () => {
  return (
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard className="h-8 w-8 text-eco-primary" />
          <h1 className="text-4xl font-bold text-eco-primary">My Dashboard</h1>
        </div>
        
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="My Dashboard Placeholder"
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <p className="text-lg text-muted-foreground">
                Track your recycling progress, manage pickups, and view your environmental impact. Your personalized dashboard is under construction.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyDashboard;