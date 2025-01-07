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
import SortingGuide from "./pages/SortingGuide";
import RequestPickup from "./pages/RequestPickup";
import MyDashboard from "./pages/MyDashboard";

const capsule = new Capsule({
  environment: "production" as const,
  apiKey: process.env.CAPSULE_API_KEY || "",
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
        const session = await capsule.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    capsule.auth.onAuthStateChange((session) => {
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
              path="/sorting-guide"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <SortingGuide />
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
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
