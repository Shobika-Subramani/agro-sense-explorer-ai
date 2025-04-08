
import { Button } from "@/components/ui/button";
import { getCurrentUser, isAuthenticated, logout } from "@/utils/auth";
import { Leaf, LogOut, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const user = getCurrentUser();
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we would add/remove dark class from document.documentElement
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-agro-green-light/20 px-4 py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-agro-green-dark">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold hidden sm:inline-block">AGROSENSE</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-agro-green-dark transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-agro-green-dark transition-colors">
            About
          </Link>
          <Link to="/features" className="text-foreground hover:text-agro-green-dark transition-colors">
            Features
          </Link>
          <Link to="/contact" className="text-foreground hover:text-agro-green-dark transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-foreground"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {isAuthenticated() ? (
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline-block text-sm text-muted-foreground">
                Welcome, {user?.name}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-foreground"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="default" className="bg-agro-green-dark hover:bg-agro-green-dark/90">
                Sign In
              </Button>
            </Link>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm py-4 px-6 mt-2 border-t border-agro-green-light/20 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-agro-green-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-agro-green-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/features" className="text-foreground hover:text-agro-green-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link to="/contact" className="text-foreground hover:text-agro-green-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
