import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Brain, MessageSquare, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const SortingGuide = () => {
  const videoGuides = [
    {
      title: "Plastic Recycling Guide",
      thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
      duration: "5:30"
    },
    {
      title: "Paper Waste Sorting",
      thumbnail: "https://images.unsplash.com/photo-1597668876776-89b685a7f712",
      duration: "4:15"
    },
    {
      title: "Electronic Waste Disposal",
      thumbnail: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      duration: "6:45"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-eco-primary">Sorting Guide</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Video Guides Section */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {videoGuides.map((video, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="text-white border-white hover:text-white">
                      Watch Now
                    </Button>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              AI Image Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 border-2 border-dashed rounded-lg">
              <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Take a photo of your waste item to identify the correct disposal method.
                (Coming soon)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chat Assistant */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              EcoBot Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-gray-50 rounded-lg p-4">
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4">
                  <div className="bg-eco-light p-3 rounded-lg max-w-[80%]">
                    Hello! I'm EcoBot. How can I help you with waste sorting today?
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 rounded-md border p-2"
                    disabled
                  />
                  <Button disabled>Send</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SortingGuide;