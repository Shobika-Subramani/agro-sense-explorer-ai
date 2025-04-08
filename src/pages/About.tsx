import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCheck, Leaf, LightbulbIcon, Target } from "lucide-react";
import Users from "@/components/Users";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative py-20 bg-agro-green-dark text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Real Visionaries</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            We're a team of innovators dedicated to transforming agricultural practices through advanced technology.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Real Visionaries was founded by a team of agricultural engineers and technology enthusiasts who recognized a significant gap in soil testing methods. Traditional laboratory testing was expensive, time-consuming, and provided limited data from only a few testing points.
              </p>
              <p className="text-muted-foreground mb-4">
                We envisioned a solution that would democratize access to comprehensive soil analysis, making it more affordable, faster, and more accurate for farmers and agricultural researchers alike.
              </p>
              <p className="text-muted-foreground">
                After years of research and development, we created AGROSENSE – an autonomous rover equipped with advanced sensors that revolutionizes soil testing by providing real-time, detailed analysis across entire fields.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-agro-green-dark mr-4" />
                <h3 className="text-2xl font-semibold text-agro-green-dark">Our Innovation</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-agro-green-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Developed autonomous soil testing rover with multiple sensor arrays</p>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-agro-green-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Created cloud-based data processing platform for real-time analysis</p>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-agro-green-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Designed user-friendly interfaces for different stakeholders</p>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-agro-green-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Integrated AI for personalized agricultural recommendations</p>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-5 w-5 text-agro-green-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Reduced soil testing time from 3-15 days to just hours</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="soil-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-agro-green-dark text-white flex items-center justify-center mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-agro-green-dark">Our Mission</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  At Real Visionaries, our mission is to empower farmers and agricultural researchers with accessible, accurate, and actionable soil data. We believe that by democratizing soil analysis technology, we can help improve crop yields, optimize resource use, and promote sustainable farming practices across the globe.
                </p>
                <p className="text-muted-foreground">
                  We are committed to continuous innovation, working closely with farmers and agricultural experts to ensure our solutions address real-world challenges and contribute to food security and environmental sustainability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-agro-green-dark text-white flex items-center justify-center mr-4">
                    <LightbulbIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-agro-green-dark">Our Vision</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We envision a future where every farm, regardless of size or location, has access to advanced soil analysis technology. Our vision is to create a global network of AGROSENSE rovers and users, sharing knowledge and best practices to transform agriculture into a more data-driven, efficient, and sustainable industry.
                </p>
                <p className="text-muted-foreground">
                  By 2030, we aim to have our technology deployed in at least 50 countries, helping farmers reduce unnecessary fertilizer usage by 30% while increasing crop yields by 20%, thus contributing to global food security and environmental protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-agro-green-dark mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to developing solutions that promote sustainable farming practices and help protect our planet's resources for future generations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our work, from the quality of our technology to our customer service and support.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <LightbulbIcon className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and continuous learning, always seeking new ways to improve our technology and better serve our users.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Impact</h3>
              <p className="text-muted-foreground">
                We measure our success by the positive impact our technology has on agricultural productivity, food security, and environmental health.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnership and work closely with farmers, researchers, and industry experts to create the most effective solutions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-agro-green-light/20 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-agro-green-light/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-agro-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Accessibility</h3>
              <p className="text-muted-foreground">
                We are dedicated to making advanced agricultural technology accessible to farmers of all scales, from small-holders to large commercial operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
