
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Send, MessageSquare, User, Building, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solutionType: '',
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
      company: '',
      solutionType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'stefan@perssonify.com',
      description: 'Send us a message anytime',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (609) 510-2061',
      description: 'Available during business hours',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United States',
      description: 'Serving clients nationwide',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'Quick turnaround on all inquiries'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Industry-leading professionals'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of success'
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container">
        <ThemeBreadcrumb />
        
        {/* Hero Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background rounded-3xl" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Let's Connect
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to Accelerate Your{' '}
                <span className="text-primary">Business Growth?</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Transform your business with strategic solutions that deliver measurable results. Let's discuss your growth objectives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{method.value}</p>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Contact Form & Info */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/10">
                <CardHeader className="pb-8">
                  <div className="flex items-center mb-4">
                    <Send className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <CardTitle className="text-3xl font-bold">Start the Conversation</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Tell us about your business challenges and growth objectives.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3"
                      >
                        <Label htmlFor="name" className="text-base font-semibold flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3"
                      >
                        <Label htmlFor="email" className="text-base font-semibold flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="company" className="text-base font-semibold flex items-center">
                        <Building className="w-4 h-4 mr-2 text-primary" />
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="solutionType" className="text-base font-semibold">Area of Interest</Label>
                      <Select onValueChange={(value) => setFormData({...formData, solutionType: value})}>
                        <SelectTrigger className="h-12 border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select what interests you most" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="growth-marketing">Growth & Marketing Solutions</SelectItem>
                          <SelectItem value="core-growth">Core Growth Solutions</SelectItem>
                          <SelectItem value="strategic-operations">Strategic & Operations Solutions</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Business Optimization</SelectItem>
                          <SelectItem value="consultation">Initial Strategy Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="message" className="text-base font-semibold flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current challenges, goals, and what success looks like for your business..."
                        rows={6}
                        required
                        className="resize-none border-2 focus:border-primary transition-colors"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Button type="submit" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 group">
                        Send Message
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Process Overview */}
              <Card className="bg-gradient-to-br from-background to-muted/30">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-2" />
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Discovery call within 24 hours',
                    'Tailored proposal and strategy',
                    'Clear timeline and deliverables',
                    'Project kickoff and execution'
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{step}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
