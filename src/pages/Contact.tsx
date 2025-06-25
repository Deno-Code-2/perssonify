
import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, Building, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { WorldMap } from '@/components/ui/world-map';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    services: [] as string[],
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      services: [],
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    }
  };

  const services = [
    'Growth Solutions',
    'Strategic Solutions', 
    'Performance Marketing',
    'Social Media Marketing',
    'Content Strategy',
    'Process Automation',
    'Custom Development',
    'Consulting'
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Get In Touch.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? We help companies grow fast and scale smart with strategic solutions that deliver real results.
            </p>
            <p className="text-base text-muted-foreground mt-4">
              Or just reach out manually to{' '}
              <a href="mailto:stefan@perssonify.com" className="text-primary hover:underline font-medium">
                stefan@perssonify.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2 border-border/20 shadow-xl bg-gradient-to-br from-background to-muted/5">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium flex items-center">
                          <User className="w-4 h-4 mr-2 text-muted-foreground" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name..."
                          required
                          className="h-12 border-2 focus:border-primary transition-colors rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address..."
                          required
                          className="h-12 border-2 focus:border-primary transition-colors rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Phone and Position Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number..."
                          className="h-12 border-2 focus:border-primary transition-colors rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-sm font-medium flex items-center">
                          <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                          Job Position
                        </Label>
                        <Select onValueChange={(value) => setFormData({...formData, position: value})}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary transition-colors rounded-xl">
                            <SelectValue placeholder="Select your job position..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/Founder</SelectItem>
                            <SelectItem value="cto">CTO</SelectItem>
                            <SelectItem value="cmo">CMO</SelectItem>
                            <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                            <SelectItem value="operations-manager">Operations Manager</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Services Selection */}
                    <div className="space-y-4">
                      <Label className="text-sm font-medium">Choose Our Services</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => 
                                handleServiceChange(service, checked as boolean)
                              }
                              className="border-2"
                            />
                            <Label
                              htmlFor={service}
                              className="text-xs font-medium cursor-pointer"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-muted-foreground" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your main text here..."
                        rows={4}
                        required
                        className="resize-none border-2 focus:border-primary transition-colors rounded-xl"
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {formData.message.length}/500
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 rounded-xl"
                    >
                      Submit Form
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* World Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* World Map */}
              <Card className="border-2 border-border/20 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-2" />
                    Our Global Reach
                  </CardTitle>
                  <CardDescription>
                    Serving clients across the United States and beyond
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 w-full">
                    <WorldMap />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-2 border-border/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Ready to start your transformation journey?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">stefan@perssonify.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (609) 510-2061</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-sm text-muted-foreground">United States</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Custom strategy development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
