import HomeSection from "@/components/dashboard/HomeSection";
import SortingGuide from "@/components/dashboard/SortingGuide";
import RequestPickup from "@/components/dashboard/RequestPickup";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");

  const renderContent = () => {
    switch (hash) {
      case "sorting":
        return <SortingGuide />;
      case "pickup":
        return <RequestPickup />;
      case "profile":
        return <UserDashboard />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-eco-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;