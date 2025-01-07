import { Card, CardContent } from "@/components/ui/card";
import { Camera, MessageSquare, Video, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Sort = () => {
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
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-eco-primary mb-8">Waste Sorting Guide</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Video Guides Section */}
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Video className="h-6 w-6" />
                Video Guides
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
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

          {/* AI Image Recognition */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Camera className="h-6 w-6" />
                AI Image Recognition
              </h2>
              <div className="text-center p-6 border-2 border-dashed rounded-lg hover:border-primary transition-colors cursor-pointer">
                <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  Take or upload a photo of your waste item to identify the correct disposal method
                </p>
                <Button className="mt-4">Upload Image</Button>
              </div>
            </CardContent>
          </Card>

          {/* Chat Assistant */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                EcoBot Assistant
              </h2>
              <div className="h-[300px] bg-gray-50 rounded-lg p-4">
                <div className="h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4">
                    <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                      Hello! I'm EcoBot. How can I help you with waste sorting today?
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Input
                      type="text"
                      placeholder="Ask about waste sorting..."
                      className="flex-1"
                    />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sort;