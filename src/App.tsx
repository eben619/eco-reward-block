import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Capsule from "@usecapsule/web-sdk";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Sort from "./pages/Sort";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RequestPickup from "./pages/RequestPickup";
import MyDashboard from "./pages/MyDashboard";

// Initialize Capsule correctly with environment first, then API key in options
const capsule = new Capsule("development", {
  apiKey: "pk_test_qwertyuiopasdfghjklzxcvbnm123456"
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await capsule.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    capsule.onAuthStateChange((session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Dashboard />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/sort"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Sort />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/request-pickup"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <RequestPickup />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <MyDashboard />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;