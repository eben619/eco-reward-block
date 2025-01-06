import { Card, CardContent } from "@/components/ui/card";
import { Recycle } from "lucide-react";

const SortingGuide = () => {
  return (
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Recycle className="h-8 w-8 text-eco-primary" />
          <h1 className="text-4xl font-bold text-eco-primary">Sorting Guide</h1>
        </div>
        
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Sorting Guide Placeholder"
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <p className="text-lg text-muted-foreground">
                Our comprehensive waste sorting guide is coming soon. Learn how to properly sort your recyclables and contribute to a sustainable future.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SortingGuide;