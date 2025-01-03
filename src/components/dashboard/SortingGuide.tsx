import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Brain, MessageSquare } from "lucide-react";

const SortingGuide = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">Sorting Guide</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              AI Image Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Take a photo of your waste item to identify the correct disposal method.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Interactive Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Test your knowledge and earn rewards.
              (Coming soon)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              EcoBot Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get real-time assistance with your sorting questions.
              (Coming soon)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SortingGuide;