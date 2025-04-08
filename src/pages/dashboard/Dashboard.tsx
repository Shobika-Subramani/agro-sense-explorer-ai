
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getCurrentUser } from "@/utils/auth";
import { getDataRecommendations, getLatestSoilData, mockFarms } from "@/utils/data";
import { BarChart2, Droplet, Eye, Leaf, Thermometer } from "lucide-react";
import MapPin from "@/components/MapPin";
import MessageSquare from "@/components/MessageSquare";
import { Calendar } from "@/components/ui/calendar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = getCurrentUser();
  const userFarm = mockFarms.find(farm => farm.id === '101'); // For demo, we'll use a fixed farm
  const latestData = getLatestSoilData('101');
  
  const recommendations = latestData ? getDataRecommendations(latestData) : [];
  
  // Sample data for charts
  const moistureData = [
    { name: 'Mon', value: 30 },
    { name: 'Tue', value: 40 },
    { name: 'Wed', value: 45 },
    { name: 'Thu', value: 35 },
    { name: 'Fri', value: 50 },
    { name: 'Sat', value: 55 },
    { name: 'Sun', value: 48 },
  ];
  
  const temperatureData = [
    { name: 'Mon', value: 22 },
    { name: 'Tue', value: 25 },
    { name: 'Wed', value: 27 },
    { name: 'Thu', value: 26 },
    { name: 'Fri', value: 24 },
    { name: 'Sat', value: 23 },
    { name: 'Sun', value: 25 },
  ];
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-agro-green-dark tracking-tight">Welcome back, {user?.name}</h1>
            <p className="text-muted-foreground">Here's an overview of your farm's soil health</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-agro-green-dark hover:bg-agro-green-dark/90">
              Run New Analysis
            </Button>
          </div>
        </div>
        
        {userFarm && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Farm Name</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userFarm.name}</div>
                <p className="text-xs text-muted-foreground">
                  {userFarm.location.city}, {userFarm.location.state}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Farm Size</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userFarm.size} acres</div>
                <p className="text-xs text-muted-foreground">
                  {userFarm.crops.join(', ')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Last Analysis</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Today</div>
                <p className="text-xs text-muted-foreground">
                  {latestData ? new Date(latestData.timestamp).toLocaleTimeString() : 'No data'}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Soil Health</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <Progress value={75} className="h-2 mt-1" />
                <p className="text-xs text-muted-foreground mt-1">
                  75% optimal conditions
                </p>
              </CardContent>
            </Card>
          </div>
        )}
        
        {latestData && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Leaf className="h-5 w-5 mr-2 text-agro-green-dark" />
                  NPK Levels
                </CardTitle>
                <CardDescription>
                  Latest soil nutrient measurements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Nitrogen (N)</p>
                      <p className="text-xs text-muted-foreground">
                        {latestData.npk.nitrogen < 30 ? 'Low' : latestData.npk.nitrogen > 60 ? 'High' : 'Optimal'}
                      </p>
                    </div>
                    <Badge className={`data-tag data-tag-npk ${
                      latestData.npk.nitrogen < 30 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : latestData.npk.nitrogen > 60 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {latestData.npk.nitrogen.toFixed(1)}
                    </Badge>
                  </div>
                  <Progress value={(latestData.npk.nitrogen / 100) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Phosphorus (P)</p>
                      <p className="text-xs text-muted-foreground">
                        {latestData.npk.phosphorus < 15 ? 'Low' : latestData.npk.phosphorus > 30 ? 'High' : 'Optimal'}
                      </p>
                    </div>
                    <Badge className={`data-tag data-tag-npk ${
                      latestData.npk.phosphorus < 15 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : latestData.npk.phosphorus > 30 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {latestData.npk.phosphorus.toFixed(1)}
                    </Badge>
                  </div>
                  <Progress value={(latestData.npk.phosphorus / 50) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Potassium (K)</p>
                      <p className="text-xs text-muted-foreground">
                        {latestData.npk.potassium < 35 ? 'Low' : latestData.npk.potassium > 60 ? 'High' : 'Optimal'}
                      </p>
                    </div>
                    <Badge className={`data-tag data-tag-npk ${
                      latestData.npk.potassium < 35 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : latestData.npk.potassium > 60 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {latestData.npk.potassium.toFixed(1)}
                    </Badge>
                  </div>
                  <Progress value={(latestData.npk.potassium / 80) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Droplet className="h-5 w-5 mr-2 text-agro-blue" />
                  Soil Moisture Trend
                </CardTitle>
                <CardDescription>
                  Weekly moisture levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moistureData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4A90E2" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6 }} 
                        name="Moisture (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-sm font-medium">Current Moisture</p>
                    <p className="text-xs text-muted-foreground">
                      {latestData.moisture < 30 ? 'Low' : latestData.moisture > 70 ? 'High' : 'Optimal'}
                    </p>
                  </div>
                  <Badge className="data-tag data-tag-moisture">
                    {latestData.moisture.toFixed(1)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Thermometer className="h-5 w-5 mr-2 text-agro-red" />
                  Temperature & pH
                </CardTitle>
                <CardDescription>
                  Weekly temperature trend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={temperatureData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#E57373" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6 }} 
                        name="Temperature (°C)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Temperature</p>
                      <p className="text-xs text-muted-foreground">
                        {latestData.temperature < 15 ? 'Low' : latestData.temperature > 30 ? 'High' : 'Optimal'}
                      </p>
                    </div>
                    <Badge className="data-tag data-tag-temp">
                      {latestData.temperature.toFixed(1)}°C
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">pH Level</p>
                      <p className="text-xs text-muted-foreground">
                        {latestData.ph < 6.0 ? 'Acidic' : latestData.ph > 7.5 ? 'Alkaline' : 'Neutral'}
                      </p>
                    </div>
                    <Badge className="data-tag data-tag-ph">
                      {latestData.ph.toFixed(1)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Recommendations</CardTitle>
              <CardDescription>
                Based on your latest soil analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.length > 0 ? (
                  recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Leaf className="h-5 w-5 text-agro-green-dark mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm">No recommendations available</p>
                )}
                
                <div className="pt-2">
                  <Link to="/dashboard/ai-assistant">
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ask AI Assistant
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Activities</CardTitle>
              <CardDescription>
                Scheduled tasks for your farm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-agro-green-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Fertilizer Application</h4>
                    <p className="text-xs text-muted-foreground">Tomorrow, 8:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <Droplet className="h-5 w-5 text-agro-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Irrigation Schedule</h4>
                    <p className="text-xs text-muted-foreground">Thursday, 6:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <Eye className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium">Crop Inspection</h4>
                    <p className="text-xs text-muted-foreground">Friday, 10:00 AM</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Link to="/dashboard/calendar">
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Full Calendar
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
