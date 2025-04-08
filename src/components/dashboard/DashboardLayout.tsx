
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { getCurrentUser, isAuthenticated } from "@/utils/auth";
import { BarChart2, Calendar, Home, Leaf, MessageSquare, Settings, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();
  const user = getCurrentUser();
  
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);
  
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebarOnMobile = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };
  
  const navItems = [
    { 
      label: 'Dashboard', 
      icon: Home, 
      path: '/dashboard',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'Soil Analysis', 
      icon: BarChart2, 
      path: '/dashboard/soil-analysis',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'Field Map', 
      icon: MapPin, 
      path: '/dashboard/field-map',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'AI Assistant', 
      icon: MessageSquare, 
      path: '/dashboard/ai-assistant',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'Reports', 
      icon: FileText, 
      path: '/dashboard/reports',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'Calendar', 
      icon: Calendar, 
      path: '/dashboard/calendar',
      roles: ['farmer', 'admin']
    },
    { 
      label: 'Settings', 
      icon: Settings, 
      path: '/dashboard/settings',
      roles: ['farmer', 'researcher', 'admin']
    },
    { 
      label: 'User Management', 
      icon: User, 
      path: '/dashboard/users',
      roles: ['admin']
    }
  ];
  
  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    user && item.roles.includes(user.role)
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar - Mobile Overlay */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
        
        {/* Sidebar */}
        <aside 
          className={`fixed md:relative z-50 md:z-auto h-full md:h-auto flex-shrink-0 w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ${
            isSidebarOpen 
              ? 'left-0' 
              : '-left-64 md:left-0 md:w-16'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-sidebar-primary" />
              {isSidebarOpen && <span className="font-bold">AGROSENSE</span>}
            </div>
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                className="text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
          
          <div className="py-4">
            <nav className="space-y-1 px-2">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                  }`}
                  onClick={closeSidebarOnMobile}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isSidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className={`flex-grow transition-all duration-300 ${
          isSidebarOpen && !isMobile ? 'md:ml-0' : 'md:ml-0'
        }`}>
          {/* Toggle Button - Desktop Only */}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="fixed left-0 top-20 z-10 bg-white shadow-md rounded-r-md border border-l-0 border-border h-8 w-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Button>
          )}
          
          {/* Page Content */}
          <div className="p-4 sm:p-6">
            {/* Mobile Sidebar Toggle */}
            {isMobile && !isSidebarOpen && (
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSidebar}
                className="mb-4 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                Menu
              </Button>
            )}
            
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
