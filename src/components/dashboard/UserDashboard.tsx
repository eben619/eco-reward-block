import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, FileText, Receipt, Lightbulb, Trophy, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">My Dashboard</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Waste Reduction Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Personalized Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Based on your recycling patterns:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Consider using reusable containers</li>
              <li>Separate paper from plastic waste</li>
              <li>Start composting food waste</li>
            </ul>
          </CardContent>
        </Card>

        {/* Progress Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Recycling Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-muted-foreground">
                Progress Chart Coming Soon
              </div>
              <p className="text-muted-foreground">
                You've recycled 45kg this month!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Waste Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Waste Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-muted-foreground">
                Waste Distribution Chart
              </div>
              <Button className="w-full bg-eco-primary hover:bg-eco-dark">
                View Full Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="p-4 grid grid-cols-4 gap-4 font-medium">
                <div>Date</div>
                <div>Type</div>
                <div>Amount</div>
                <div>Status</div>
              </div>
              <div className="divide-y">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 grid grid-cols-4 gap-4 text-muted-foreground">
                    <div>2024-03-{i}</div>
                    <div>Recycling Pickup</div>
                    <div>$10.00</div>
                    <div className="text-green-600">Completed</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;