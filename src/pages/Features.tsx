import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignLeft, BarChart2, CloudRain, Database, Droplet, FileText, Leaf, LineChart, MapPin, Microscope, Smartphone, Thermometer, Wifi, Wind } from "lucide-react";
import Sun from "@/components/Sun";
import Users from "@/components/Users";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative py-20 bg-agro-green-dark text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AGROSENSE Features</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Discover the comprehensive soil testing capabilities and smart analytics offered by our autonomous rover technology.
          </p>
        </div>
      </section>
      
      {/* The Rover */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">The AGROSENSE Rover</h2>
              <p className="text-muted-foreground mb-4">
                Our state-of-the-art autonomous rover is equipped with multiple sensors that analyze soil conditions as it traverses fields. The rover takes measurements every 200-500 meters, providing comprehensive coverage of your entire farm.
              </p>
              <p className="text-muted-foreground mb-6">
                Designed for durability and reliability in agricultural environments, the rover can operate in both autonomous and manual modes, allowing for flexible deployment based on your specific needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Wifi className="h-5 w-5 text-agro-green-dark mr-2 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Real-time data transmission</p>
                </div>
                <div className="flex items-start">
                  <Database className="h-5 w-5 text-agro-green-dark mr-2 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Onboard data storage</p>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-agro-green-dark mr-2 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Mobile control option</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-agro-green-dark mr-2 mt-0.5" />
                  <p className="text-sm text-muted-foreground">GPS navigation system</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <div className="aspect-video bg-agro-green-dark/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Rover Image</p>
                  <p className="text-xs text-muted-foreground">(Placeholder for actual rover image)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sensor Technology */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-agro-green-dark mb-12 text-center">Advanced Sensor Technology</h2>
          
          <Tabs defaultValue="npk" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="npk">NPK Sensors</TabsTrigger>
              <TabsTrigger value="moisture">Moisture & pH</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="additional">Additional</TabsTrigger>
            </TabsList>
            
            <TabsContent value="npk" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-6 w-6 text-agro-green-dark mr-3" />
                    <h3 className="text-xl font-semibold text-agro-green-dark">NPK Analysis Sensors</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our specialized NPK sensors utilize ion-selective electrodes and spectroscopic technology to accurately measure the levels of essential macronutrients in soil:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="font-semibold text-agro-green-dark">N</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Nitrogen Sensor</p>
                        <p className="text-sm text-muted-foreground">Measures available nitrogen compounds in soil, essential for leaf and vegetative growth.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="font-semibold text-agro-green-dark">P</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phosphorus Sensor</p>
                        <p className="text-sm text-muted-foreground">Detects phosphorus levels, critical for root development and flowering.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="font-semibold text-agro-green-dark">K</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Potassium Sensor</p>
                        <p className="text-sm text-muted-foreground">Measures potassium concentration, important for overall plant health and disease resistance.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="moisture" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <Droplet className="h-6 w-6 text-agro-blue mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">Soil Moisture Sensor</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Our capacitive soil moisture sensors provide accurate measurements of water content at different soil depths:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Multiple depth measurements (5cm, 15cm, 30cm)</li>
                        <li>• Real-time moisture monitoring</li>
                        <li>• Irrigation optimization capability</li>
                        <li>• Drought stress early warning</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <Microscope className="h-6 w-6 text-agro-blue mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">pH & EC Sensors</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Precise measurement of soil acidity and electrical conductivity:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• pH range: 3.0-10.0 with ±0.1 accuracy</li>
                        <li>• EC measurement for salinity assessment</li>
                        <li>• Temperature compensation for accurate readings</li>
                        <li>• Soil nutrient availability analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="environment" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <Thermometer className="h-6 w-6 text-agro-red mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">Temperature & Humidity</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        High-precision sensors for environmental monitoring:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Soil temperature at multiple depths</li>
                        <li>• Ambient air temperature</li>
                        <li>• Relative humidity measurement</li>
                        <li>• Dew point calculation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <Sun className="h-6 w-6 text-agro-yellow mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">Sunlight & Air Quality</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Comprehensive environmental assessment:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Light intensity measurement</li>
                        <li>• PAR (Photosynthetically Active Radiation) sensor</li>
                        <li>• Air quality index monitoring</li>
                        <li>• Particulate matter detection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="additional" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <MapPin className="h-6 w-6 text-agro-green-dark mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">GPS & Navigation</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Precise location tracking and autonomous navigation:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Centimeter-level positioning accuracy</li>
                        <li>• Field mapping capabilities</li>
                        <li>• Obstacle detection and avoidance</li>
                        <li>• Pre-programmed route planning</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <Wind className="h-6 w-6 text-agro-blue mr-3" />
                        <h3 className="text-xl font-semibold text-agro-green-dark">Additional Sensors</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Supplementary measurements for comprehensive analysis:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Soil compaction assessment</li>
                        <li>• Organic matter estimation</li>
                        <li>• Micronutrient detection (optional add-on)</li>
                        <li>• Carbon content analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Data Analysis */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-agro-green-dark mb-12 text-center">Data Analysis & Visualization</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="soil-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3">
                    <LineChart className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-agro-green-dark">Real-time Graphs</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Interactive charts and graphs that display your soil data in easy-to-understand formats. Monitor trends over time and compare different parameters with our intuitive visualization tools.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Time-series trend analysis</li>
                  <li>• Parameter correlation graphs</li>
                  <li>• Historical data comparison</li>
                  <li>• Export and sharing options</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-agro-green-dark">Field Mapping</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Detailed spatial representation of your field's soil conditions. Our mapping feature color-codes different parameters to help you identify problematic areas and optimize resource allocation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heat maps for different soil parameters</li>
                  <li>• Zone identification for variable-rate application</li>
                  <li>• Multi-layer analysis</li>
                  <li>• Custom boundary management</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-agro-green-dark">Custom Reports</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Generate comprehensive reports tailored to your specific needs. Our reporting system allows you to focus on the parameters that matter most to you, with options for simple summaries or detailed analyses.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Downloadable PDF and CSV formats</li>
                  <li>• Customizable parameter selection</li>
                  <li>• Scheduled automated reports</li>
                  <li>• Comparison with regional benchmarks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* AI Recommendations */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">AI-Powered Recommendations</h2>
              <p className="text-muted-foreground mb-4">
                Our intelligent system analyzes your soil data and provides actionable recommendations customized to your specific crops, soil type, and local conditions. The AI assistant continues to learn and improve its suggestions based on feedback and results.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="p-4 bg-white rounded-lg border border-agro-green-light/20">
                  <div className="flex items-start">
                    <AlignLeft className="h-5 w-5 text-agro-green-dark mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Fertilizer Recommendations</h4>
                      <p className="text-sm text-muted-foreground">Precise suggestions for fertilizer types, amounts, and application timing based on NPK levels and crop requirements.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-agro-green-light/20">
                  <div className="flex items-start">
                    <AlignLeft className="h-5 w-5 text-agro-blue mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Irrigation Guidance</h4>
                      <p className="text-sm text-muted-foreground">Water management advice based on soil moisture, weather forecasts, and crop water requirements.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-agro-green-light/20">
                  <div className="flex items-start">
                    <AlignLeft className="h-5 w-5 text-agro-yellow mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Soil Amendment Suggestions</h4>
                      <p className="text-sm text-muted-foreground">Recommendations for improving soil structure, pH balance, and organic matter content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-agro-green-light/20">
              <h3 className="text-xl font-semibold mb-4 text-agro-green-dark">AI Assistant Chat Interface</h3>
              <div className="bg-muted p-4 rounded-lg h-[380px] flex flex-col">
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-agro-green-dark flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-agro-green-light/10 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">How can I help you with your soil data today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end space-x-3">
                    <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                      <p className="text-sm">What does my soil NPK level mean?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-agro-brown-light flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-agro-green-dark flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-agro-green-light/10 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">Your NPK levels (N: 45, P: 22, K: 38) indicate adequate nitrogen, slightly low phosphorus, and normal potassium. For your wheat crop, I'd recommend adding a phosphorus-rich fertilizer before the next growth stage. Would you like specific product recommendations?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Ask about your soil data..." 
                    className="w-full p-3 pr-10 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-agro-green-dark/50"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-agro-green-dark hover:text-agro-green-light">
                    <Leaf className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
