
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart2, CloudRain, Droplet, Leaf, Sun, Thermometer, Upload, Users, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-agro-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-farm.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-agro-green-dark to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Smart Soil Testing for Modern Agriculture
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              AGROSENSE revolutionizes traditional soil testing with autonomous rover technology, providing accurate, cost-effective, and real-time soil analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-white text-agro-green-dark hover:bg-white/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">
              Comprehensive Soil Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our rover collects detailed soil data through advanced sensors, delivering precise insights for informed agricultural decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="soil-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <span className="bg-agro-green-light/20 p-2 rounded-lg mr-3">
                    <Leaf className="h-5 w-5 text-agro-green-dark" />
                  </span>
                  NPK Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Precise measurement of Nitrogen, Phosphorus, and Potassium levels for optimal fertilization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <span className="bg-agro-blue/20 p-2 rounded-lg mr-3">
                    <Droplet className="h-5 w-5 text-agro-blue" />
                  </span>
                  pH & EC Levels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Measures soil acidity and electrical conductivity to assess nutrient availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <span className="bg-agro-blue/10 p-2 rounded-lg mr-3">
                    <CloudRain className="h-5 w-5 text-agro-blue" />
                  </span>
                  Moisture Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitors soil moisture levels to optimize irrigation and prevent water stress.
                </p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <span className="bg-agro-red/20 p-2 rounded-lg mr-3">
                    <Thermometer className="h-5 w-5 text-agro-red" />
                  </span>
                  Environment Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Measures temperature, humidity, air quality, and sunlight for complete field assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">
              How AGROSENSE Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A seamless process from field testing to actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-6">
                <Wind className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Field Testing</h3>
              <p className="text-muted-foreground">
                Our autonomous rover traverses your fields, collecting soil samples every 200-500m for comprehensive coverage.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-6">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
              <p className="text-muted-foreground">
                Collected data is transmitted to the cloud, where it's processed and analyzed for meaningful insights.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-6">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visualization & Recommendations</h3>
              <p className="text-muted-foreground">
                Access easy-to-understand graphs and actionable recommendations through our user-friendly dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">
              Tailored for Different Users
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AGROSENSE provides specialized insights for various agricultural stakeholders
            </p>
          </div>
          
          <Tabs defaultValue="farmers" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="farmers">Farmers</TabsTrigger>
              <TabsTrigger value="researchers">Research Centers</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="farmers" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-agro-green-dark" />
                    For Farmers
                  </CardTitle>
                  <CardDescription>
                    Access to your farm's specific data for informed decision making
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• View detailed soil analysis for your specific fields</li>
                    <li>• Receive customized fertilizer and irrigation recommendations</li>
                    <li>• Track soil health trends over time</li>
                    <li>• Optimize resource allocation and increase yields</li>
                    <li>• Access AI-powered assistant for soil management advice</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="researchers" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2 text-agro-blue" />
                    For Agricultural Research Centers
                  </CardTitle>
                  <CardDescription>
                    Comprehensive data for scientific analysis and research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access detailed soil analysis across multiple test sites</li>
                    <li>• Download raw data for further scientific analysis</li>
                    <li>• Compare soil parameters across different regions</li>
                    <li>• Track long-term soil health changes</li>
                    <li>• Generate comprehensive research reports</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-agro-green-dark" />
                    For Real Visionaries Team
                  </CardTitle>
                  <CardDescription>
                    Complete access to system data and management tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Manage all system users and data access permissions</li>
                    <li>• Monitor rover performance and maintenance needs</li>
                    <li>• Access aggregate data across all farms and regions</li>
                    <li>• Generate system-wide reports and analytics</li>
                    <li>• Customize and update the AI recommendations engine</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-agro-green-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Soil Testing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join farmers and agricultural researchers who are already benefiting from AGROSENSE's advanced soil analysis technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-agro-green-dark hover:bg-white/90">
                Contact Us
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
