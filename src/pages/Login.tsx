
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { login } from "@/utils/auth";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer'
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegisterData(prev => ({ ...prev, userType: value }));
  };
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    setTimeout(() => {
      const success = login(loginData.email, loginData.password);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back to AGROSENSE.",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
        });
        setIsLoggingIn(false);
      }
    }, 1000);
  };
  
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords Don't Match",
        description: "Please ensure both passwords match.",
      });
      return;
    }
    
    toast({
      title: "Registration Received",
      description: "Thank you for your interest. Our team will review your application and contact you shortly.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4 bg-muted/30">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-agro-green-dark text-white flex items-center justify-center">
              <Leaf className="h-8 w-8" />
            </div>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Log in to access your AGROSENSE account and view your soil data.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLoginSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-xs text-agro-green-dark hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required 
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-agro-green-dark hover:bg-agro-green-dark/90"
                      disabled={isLoggingIn}
                    >
                      {isLoggingIn ? 'Logging in...' : 'Sign In'}
                    </Button>
                  </CardFooter>
                </form>
                <div className="px-6 pb-6">
                  <p className="text-sm text-center text-muted-foreground mt-4">
                    <span className="block mb-1">Demo Accounts:</span>
                    <span className="block text-xs">Farmer: farmer@example.com / password</span>
                    <span className="block text-xs">Researcher: researcher@example.com / password</span>
                    <span className="block text-xs">Admin: admin@realvisionaries.com / admin123</span>
                  </p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Register to start using AGROSENSE for your farm or research.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegisterSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email" 
                        name="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input 
                        id="register-password" 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input 
                        id="confirm-password" 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="••••••••" 
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>User Type</Label>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="farmer" 
                            name="userType" 
                            value="farmer" 
                            checked={registerData.userType === 'farmer'} 
                            onChange={handleUserTypeChange}
                            className="h-4 w-4 text-agro-green-dark focus:ring-agro-green-dark"
                          />
                          <Label htmlFor="farmer" className="font-normal cursor-pointer">Farmer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="researcher" 
                            name="userType" 
                            value="researcher"
                            checked={registerData.userType === 'researcher'} 
                            onChange={handleUserTypeChange}
                            className="h-4 w-4 text-agro-green-dark focus:ring-agro-green-dark"
                          />
                          <Label htmlFor="researcher" className="font-normal cursor-pointer">Researcher</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-agro-green-dark hover:bg-agro-green-dark/90"
                    >
                      Register
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
