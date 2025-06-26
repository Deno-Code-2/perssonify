import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Users, Target, Star, ArrowRight, Zap, Shield, Award } from 'lucide-react'
import { WorldMap } from '@/components/ui/world-map'

export default function ContactSection() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            details: "hello@perssonify.com",
            description: "Get in touch for collaboration"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Speak directly with our team"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "San Francisco, CA",
            description: "Come see us in person"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: "Mon-Fri 9AM-6PM PST",
            description: "We're here when you need us"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-background via-background to-muted/30">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Let's Build Something Amazing Together
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto py-10">
                        Ready to transform your business? We're here to help you grow faster and scale smarter.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We're here to help your business grow. Reach out and let's discuss how we can accelerate your success.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                >
                                    <Card>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                                                <p className="font-medium text-foreground mb-1">{info.details}</p>
                                                <p className="text-sm text-muted-foreground">{info.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card className="p-8 lg:p-12 border-0 bg-gradient-to-br from-card via-card to-card/80 shadow-2xl">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-4">Start Your Growth Journey</h3>
                                <p className="text-muted-foreground">
                                    Tell us about your business goals and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <Input
                                            id="firstName"
                                            placeholder="First Name"
                                            type="text"
                                            required
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            id="lastName"
                                            placeholder="Last Name"
                                            type="text"
                                            required
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Input
                                        id="email"
                                        placeholder="Work Email"
                                        type="email"
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Input
                                        id="company"
                                        placeholder="Company Name"
                                        type="text"
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Select>
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="growth">Growth Solutions</SelectItem>
                                            <SelectItem value="strategic">Strategic Solutions</SelectItem>
                                            <SelectItem value="both">Both Services</SelectItem>
                                            <SelectItem value="consultation">General Consultation</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Select>
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                            <SelectItem value="50k+">$50,000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Textarea
                                        id="message"
                                        placeholder="Describe your current challenges and what you'd like to achieve..."
                                        rows={4}
                                        required
                                        className="mt-2"
                                    />
                                </div>

                                <Button size="lg" className="w-full">
                                    Send Message
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    By submitting this form, you agree to our{" "}
                                    <Link to="/privacy-policy" className="underline hover:text-primary">
                                        Privacy Policy
                                    </Link>{" "}
                                    and{" "}
                                    <Link to="/terms-of-service" className="underline hover:text-primary">
                                        Terms of Service
                                    </Link>
                                </p>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
