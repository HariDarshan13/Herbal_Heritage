import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginSelection from "./pages/LoginSelection";

// User Module
import UserRegister from "./pages/user/Register";
import UserLogin from "./pages/user/Login";
import UserProfile from "./pages/user/Profile";
import UserBookmarks from "./pages/user/Bookmarks";
import SubmitRemedy from "./pages/user/SubmitRemedy";

// Remedy Module
import RemedyListing from "./pages/remedies/Listing";
import RemedyDetail from "./pages/remedies/Detail";

// Admin Module
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminRemedies from "./pages/admin/ManageRemedies";
import AdminCategories from "./pages/admin/ManageCategories";

// Feedback Module
import Feedback from "./pages/feedback/Feedback";
import Contact from "./pages/feedback/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginSelection />} />
              
              {/* User Module Routes */}
              <Route path="/user/register" element={<UserRegister />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/bookmarks" element={<UserBookmarks />} />
              <Route path="/user/submit-remedy" element={<SubmitRemedy />} />
              
              {/* Remedy Module Routes */}
              <Route path="/remedies" element={<RemedyListing />} />
              <Route path="/remedies/:id" element={<RemedyDetail />} />
              
              {/* Admin Module Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/remedies" element={<AdminRemedies />} />
              <Route path="/admin/categories" element={<AdminCategories />} />
              
              {/* Feedback Module Routes */}
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
