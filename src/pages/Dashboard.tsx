import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeSection from "@/components/dashboard/HomeSection";
import SortingGuide from "@/components/dashboard/SortingGuide";
import RequestPickup from "@/components/dashboard/RequestPickup";
import UserDashboard from "@/components/dashboard/UserDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="home" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="sorting">Sorting Guide</TabsTrigger>
            <TabsTrigger value="pickup">Request Pickup</TabsTrigger>
            <TabsTrigger value="user">My Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6">
            <HomeSection />
          </TabsContent>

          <TabsContent value="sorting" className="space-y-6">
            <SortingGuide />
          </TabsContent>

          <TabsContent value="pickup" className="space-y-6">
            <RequestPickup />
          </TabsContent>

          <TabsContent value="user" className="space-y-6">
            <UserDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;