
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative py-20 bg-agro-green-dark text-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Have questions about AGROSENSE? We're here to help! Reach out to our team for inquiries, support, or partnerships.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="soil-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agro-green-dark">Phone</h3>
                <p className="text-muted-foreground mb-2">Sales & Support</p>
                <p className="font-medium">+91 1234567890</p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agro-green-dark">Email</h3>
                <p className="text-muted-foreground mb-2">Get in Touch</p>
                <p className="font-medium">info@agrosense.com</p>
              </CardContent>
            </Card>
            
            <Card className="soil-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-agro-green-dark text-white flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agro-green-dark">Working Hours</h3>
                <p className="text-muted-foreground mb-2">We're Available</p>
                <p className="font-medium">Monday-Friday: 9AM - 6PM</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Your phone (optional)" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select 
                      value={formData.inquiryType} 
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select type of inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Product Demo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-agro-green-dark hover:bg-agro-green-dark/90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">Visit Our Office</h2>
              <Card className="soil-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Map View</p>
                    </div>
                    {/* In a real app, this would be replaced with an actual map component */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-agro-green-dark mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">AgroSense Headquarters</h3>
                        <p className="text-muted-foreground">
                          Tech Park, Whitefield<br />
                          Bengaluru, Karnataka 560066<br />
                          India
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our main office is located in the heart of Bengaluru's tech district. We welcome visitors Monday through Friday, 9AM-6PM. Please schedule an appointment for product demonstrations.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-agro-green-dark">Regional Offices</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-agro-green-light/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-agro-green-dark mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">North India Office</h4>
                        <p className="text-sm text-muted-foreground">
                          Agri-Tech Hub, Sector 62<br />
                          Noida, Uttar Pradesh 201301
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-agro-green-light/20 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-agro-green-dark mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">West India Office</h4>
                        <p className="text-sm text-muted-foreground">
                          Agri Innovation Center<br />
                          Pune, Maharashtra 411014
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agro-green-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about AGROSENSE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-agro-green-light/20">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">How accurate is the AGROSENSE rover?</h3>
              <p className="text-muted-foreground">
                The AGROSENSE rover provides industry-leading accuracy with ±2% margin of error for NPK measurements, ±0.1 for pH readings, and ±3% for moisture content, exceeding the precision of traditional laboratory testing in most cases.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-agro-green-light/20">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">How do I get my soil data?</h3>
              <p className="text-muted-foreground">
                Your soil data is automatically uploaded to our secure cloud platform and accessible through your personalized dashboard. You can view it on any device with internet access, download reports, and receive alerts when new data is available.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-agro-green-light/20">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">Can I purchase or rent the rover?</h3>
              <p className="text-muted-foreground">
                We offer both purchase and rental options to suit different needs. For farmers, our subscription model includes seasonal rover usage with full support. Research institutions can purchase rovers outright with customizable sensor packages.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-agro-green-light/20">
              <h3 className="text-xl font-semibold mb-3 text-agro-green-dark">How is data security maintained?</h3>
              <p className="text-muted-foreground">
                We take data security seriously. All soil data is encrypted during transmission and storage, and our platform uses industry-standard security protocols. You maintain full ownership of your data, and we never share it without your explicit permission.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
