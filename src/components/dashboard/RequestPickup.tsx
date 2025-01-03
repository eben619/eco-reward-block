import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Route, Cpu, Users, Wallet, Map } from "lucide-react";

const RequestPickup = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">Request Pickup</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5" />
              Route Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI-powered route planning for efficient waste collection.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Waste Prediction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Smart forecasting for better resource planning.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Collector Matching
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Find the perfect waste collector for your needs.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Blockchain Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Secure and transparent transactions with Celo.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Real-time Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your pickup requests in real-time.
              (Coming soon)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestPickup;