import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Newspaper, GamepadIcon } from "lucide-react";

const HomeSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8">
        <img
          src="/placeholder.svg"
          alt="EcoBlock Logo"
          className="h-16 w-auto"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              News & Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay updated with the latest news and events in sustainability and waste management.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Recycling Centers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
              Map placeholder - Coming soon
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GamepadIcon className="h-5 w-5" />
              Eco Game
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Test your recycling knowledge with our interactive game.
              (Coming soon)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeSection;