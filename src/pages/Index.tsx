
import { ArrowRight, TrendingUp, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">
              Perssonify
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-black hover:text-[#30C9CB] transition-colors">Home</a>
              <a href="#services" className="text-black hover:text-[#30C9CB] transition-colors">Services</a>
              <a href="#about" className="text-black hover:text-[#30C9CB] transition-colors">About</a>
              <a href="#insights" className="text-black hover:text-[#30C9CB] transition-colors">Insights</a>
              <a href="#contact" className="text-black hover:text-[#30C9CB] transition-colors">Contact</a>
            </div>
            <Button className="bg-[#30C9CB] hover:bg-[#28B4B6] text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Accelerate Your 
                  <span className="text-[#30C9CB]"> Growth</span> with
                  Strategic Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We partner with ambitious companies to unlock sustainable growth through 
                  data-driven strategies and proven execution frameworks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#30C9CB] hover:bg-[#28B4B6] text-white px-8 py-4 text-lg">
                  Explore Growth Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg">
                  Strategic Consulting
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F8F8F8] rounded-2xl p-8 shadow-[7px_7px_0px_0px_#F2F2F2]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#30C9CB] rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Growth</h3>
                    <p className="text-sm text-gray-600">Accelerated Results</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Strategy</h3>
                    <p className="text-sm text-gray-600">Proven Framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#30C9CB] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Partnership</h3>
                    <p className="text-sm text-gray-600">Long-term Success</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-black mb-2">Innovation</h3>
                    <p className="text-sm text-gray-600">Future Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in two core areas that drive measurable business impact 
              and sustainable competitive advantage.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Growth Solutions */}
            <Card className="bg-white border-0 shadow-[7px_7px_0px_0px_#F2F2F2] hover:shadow-[10px_10px_0px_0px_#F2F2F2] transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#30C9CB] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Growth Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Accelerate your business growth with data-driven marketing strategies, 
                  customer acquisition optimization, and revenue enhancement programs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#30C9CB] rounded-full mr-3"></div>
                    Digital Marketing & Analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#30C9CB] rounded-full mr-3"></div>
                    Customer Acquisition Strategy
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#30C9CB] rounded-full mr-3"></div>
                    Revenue Optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#30C9CB] rounded-full mr-3"></div>
                    Performance Measurement
                  </li>
                </ul>
                <Button className="bg-[#30C9CB] hover:bg-[#28B4B6] text-white w-full">
                  Learn More About Growth
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Strategic Solutions */}
            <Card className="bg-white border-0 shadow-[7px_7px_0px_0px_#F2F2F2] hover:shadow-[10px_10px_0px_0px_#F2F2F2] transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Strategic Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your business with comprehensive strategic planning, 
                  organizational development, and long-term competitive positioning.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Strategic Planning & Execution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Organizational Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Market Positioning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Change Management
                  </li>
                </ul>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  Explore Strategic Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black">
                Why Choose Perssonify?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just consultants – we're your strategic partners committed 
                to delivering measurable results that drive lasting business transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#30C9CB] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Proven Results</h3>
                    <p className="text-gray-600">Track record of delivering measurable business impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#30C9CB] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Strategic Partnership</h3>
                    <p className="text-gray-600">Long-term collaboration focused on sustainable growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#30C9CB] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Tailored Approach</h3>
                    <p className="text-gray-600">Customized solutions designed for your unique challenges</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#30C9CB] hover:bg-[#28B4B6] text-white">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="bg-[#F8F8F8] rounded-2xl p-8 shadow-[7px_7px_0px_0px_#F2F2F2]">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-4xl font-bold text-[#30C9CB] mb-2">500+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">95%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#30C9CB] mb-2">10+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our strategic solutions can drive your business forward. 
            Schedule a consultation to explore opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#30C9CB] hover:bg-[#28B4B6] text-white px-8 py-4 text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#F8F8F8] border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-black mb-4">Perssonify</div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Strategic consulting firm dedicated to accelerating business growth 
                through innovative solutions and proven methodologies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Growth Solutions</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Strategic Consulting</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Business Strategy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#30C9CB] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Perssonify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
