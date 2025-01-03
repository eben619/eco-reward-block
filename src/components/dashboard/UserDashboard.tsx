import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, LineChart, FileText, Receipt, Settings } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">My Dashboard</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Eco Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Personalized recommendations for waste reduction.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Progress Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Monitor your recycling achievements and impact.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Waste Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Detailed analysis of your waste patterns.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              View your complete transaction history.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Manage your account preferences.
              (Coming soon)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;