
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Send, MessageSquare, User, Building, Clock, Award, Star, Zap, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

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
      title: 'Email',
      value: 'stefan@perssonify.com',
      description: 'Get in touch via email',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (609) 510-2061',
      description: 'Call us directly',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United States',
      description: 'Serving clients nationwide',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24-Hour Response',
      description: 'Quick turnaround on all inquiries',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Industry-leading professionals',
      color: 'text-green-500'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of success',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Let's Transform Your Business
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Scale
              </span>{' '}
              Your Growth?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Connect with our team of experts and discover how we can accelerate your business growth with strategic solutions that deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                <Card className={`relative overflow-hidden border-2 ${method.borderColor} bg-gradient-to-br from-background to-${method.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group h-full`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-10 h-10 ${method.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{method.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-3">{method.value}</p>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Features */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <CardHeader className="relative pb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-4xl font-bold text-foreground">Start the Conversation</CardTitle>
                      <CardDescription className="text-lg mt-2 text-muted-foreground">
                        Tell us about your vision and let's make it reality
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3"
                      >
                        <Label htmlFor="name" className="text-base font-semibold flex items-center">
                          <User className="w-5 h-5 mr-3 text-primary" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="h-14 border-2 focus:border-primary transition-colors bg-background/50 backdrop-blur-sm"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3"
                      >
                        <Label htmlFor="email" className="text-base font-semibold flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-primary" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="h-14 border-2 focus:border-primary transition-colors bg-background/50 backdrop-blur-sm"
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
                        <Building className="w-5 h-5 mr-3 text-primary" />
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-14 border-2 focus:border-primary transition-colors bg-background/50 backdrop-blur-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-3"
                    >
                      <Label htmlFor="solutionType" className="text-base font-semibold flex items-center">
                        <Target className="w-5 h-5 mr-3 text-primary" />
                        Area of Interest
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, solutionType: value})}>
                        <SelectTrigger className="h-14 border-2 focus:border-primary transition-colors bg-background/50 backdrop-blur-sm">
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
                        <MessageSquare className="w-5 h-5 mr-3 text-primary" />
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your goals, challenges, and what success looks like for your business..."
                        rows={6}
                        required
                        className="resize-none border-2 focus:border-primary transition-colors bg-background/50 backdrop-blur-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Button type="submit" className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group shadow-lg hover:shadow-xl">
                        Send Message
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Star className="w-8 h-8 text-primary mr-3" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/70 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
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
              <Card className="bg-gradient-to-br from-background to-muted/30 border-2 border-border/50">
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
                      className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-foreground font-medium">{step}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have accelerated their growth with our strategic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-2">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
