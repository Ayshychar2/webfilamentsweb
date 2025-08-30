import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronRight, Code, Smartphone, ShoppingCart, TrendingUp, Palette, Link, ArrowRight, Star, Users, Award, Clock, Menu, X, Moon, Sun, CheckCircle, Zap, Shield, Globe } from 'lucide-react';

// Performance-optimized homepage component
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  // Services data
  const services = useMemo(() => [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Crafting custom web solutions that drive growth and enhance user experience.",
      features: ["React/Next.js", "Performance Optimized", "Scalable Architecture"],
      link: "/services/web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Feature-rich & visually appealing mobile applications with seamless UX.",
      features: ["iOS & Android", "React Native", "Native Performance"],
      link: "/services/mobile-app-development"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Robust, intuitive, and secure E-commerce platforms for seamless shopping.",
      features: ["Shopify Partner", "Custom Solutions", "Payment Integration"],
      link: "/services/ecommerce-development"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic campaigns tailored to maximize your ROI and online presence.",
      features: ["SEO/SEM", "Social Media", "Analytics Driven"],
      link: "/services/digital-marketing"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing for the user, one pixel at a time. Creating experiences users love.",
      features: ["User Research", "Responsive Design", "Prototyping"],
      link: "/services/ui-ux-design"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Blockchain Services",
      description: "Innovative blockchain solutions for modern business challenges.",
      features: ["Smart Contracts", "DApps", "Web3 Integration"],
      link: "/services/blockchain-services"
    }
  ], []);

  // Stats data
  const stats = [
    { value: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-5 h-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "50+", label: "Expert Team", icon: <Users className="w-5 h-5" /> },
    { value: "5+", label: "Years Experience", icon: <Award className="w-5 h-5" /> }
  ];

  // Tech stack
  const techStack = [
    "React", "Next.js", "Node.js", "Python", "AWS", "MongoDB", 
    "PostgreSQL", "Docker", "Kubernetes", "TypeScript", "GraphQL", "Shopify"
  ];

  // Enhanced testimonials with more professional look
  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO & Founder",
      text: "WebFilaments transformed our digital presence completely. Their agile approach and technical expertise resulted in a 70% improvement in our site performance. The team's dedication to quality is unmatched.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen", 
      company: "E-Commerce Solutions Ltd.",
      role: "CTO",
      text: "Outstanding e-commerce development! Our Shopify store is now processing 3x more orders with their custom optimizations. The ROI has been incredible - we saw results within the first month.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Pro",
      role: "Marketing Director", 
      text: "Their digital marketing strategies increased our ROI by 150% in just 6 months. The data-driven approach and continuous optimization have been game-changing for our business growth.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "David Thompson",
      company: "Luxury Retail Group", 
      role: "Operations Manager",
      text: "The mobile app they developed has revolutionized our customer experience. User engagement is up 200% and our app store ratings improved from 3.2 to 4.8 stars. Exceptional work!",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observerRef.current.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  // Animation helper
  const getAnimationClass = (sectionId) => {
    return visibleSections.has(sectionId) 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-10';
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md ${isDarkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                WebFilaments
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="/services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 hover:text-blue-600">Home</a>
              <a href="/services" className="block px-3 py-2 hover:text-blue-600">Services</a>
              <a href="/portfolio" className="block px-3 py-2 hover:text-blue-600">Portfolio</a>
              <a href="/about" className="block px-3 py-2 hover:text-blue-600">About</a>
              <a href="/blog" className="block px-3 py-2 hover:text-blue-600">Blog</a>
              <a href="/contact" className="block px-3 py-2 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Transform Your Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Presence Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              We craft tailored solutions that empower clients to achieve their goals, streamline processes, and drive success effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200">
                View Portfolio
              </button>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - First Screenshot */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-50 dark:bg-gray-800' : 'bg-gray-50'} transition-all duration-1000 ${getAnimationClass('about')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Accelerating your digital success through{' '}
            <span className="text-orange-500">Agile software solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-6xl mx-auto mb-8">
            At <strong>Webfilaments</strong>, we are committed to achieving exceptional outcomes that surpass the expectations of our clients. Our team of skilled professionals is dedicated to creating innovative and tailored solutions that will help your business thrive in the ever-evolving digital landscape. We specialize in{' '}
            <strong>website development</strong>, <strong>mobile app development</strong>, <strong>E-commerce development and blockchain services</strong> that helping our clients harness the power of technology to achieve their goals.
          </p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-200">
            READ MORE!
          </button>
        </div>
      </section>

      {/* Client Solutions Section - Second Screenshot */}
      <section id="client-solutions" className={`py-20 transition-all duration-1000 ${getAnimationClass('client-solutions')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              We Made <span className="text-orange-500">Solutions</span> For Clients
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              We craft tailored solutions that empower clients to achieve their goals, streamline processes, and drive success effectively and efficiently.
            </p>
          </div>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className={`w-32 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md flex items-center justify-center border`}>
              <span className="text-2xl font-bold text-gray-400">A</span>
            </div>
            <div className={`w-32 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md flex items-center justify-center border`}>
              <span className="text-sm font-semibold text-yellow-600">Faultless<br/>Aesthetics</span>
            </div>
            <div className={`w-32 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md flex items-center justify-center border`}>
              <span className="text-sm font-bold text-blue-600">CHECK MY<br/>VIBES</span>
            </div>
            <div className={`w-32 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md flex items-center justify-center border`}>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">THELUXURY<br/>SALE</span>
            </div>
            <div className={`w-32 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md flex items-center justify-center border`}>
              <span className="text-sm font-bold text-red-600">W PRIZMWEAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 transition-all duration-1000 ${getAnimationClass('services')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From dynamic e-commerce platforms to custom web applications, we tailor our services to meet your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics Section - Third Screenshot */}
      <section id="company-stats" className={`py-20 ${isDarkMode ? 'bg-gray-50 dark:bg-gray-800' : 'bg-gray-50'} transition-all duration-1000 ${getAnimationClass('company-stats')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">11+</div>
                  <div className="text-lg font-semibold">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">11+</div>
                  <div className="text-lg font-semibold">Countries Served</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">1100+</div>
                  <div className="text-lg font-semibold">Projects Done<br/>Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500 mb-2">9+</div>
                  <div className="text-lg font-semibold">Awards</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 relative">
                  {/* Tech visualization */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 text-white">
                      <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="w-16 h-16 bg-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <div className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="w-16 h-16 bg-orange-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Shield className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  {/* Digital effects overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className={`py-20 transition-all duration-1000 ${getAnimationClass('why-us')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose WebFilaments?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine innovation with reliability to deliver exceptional digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Performance-first approach with load times under 2 seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO Optimized</h3>
              <p className="text-gray-600 dark:text-gray-400">Built for search engines with structured data and best practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Round-the-clock support to keep your business running</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className={`py-20 ${isDarkMode ? 'bg-gray-50 dark:bg-gray-800' : 'bg-gray-50'} transition-all duration-1000 ${getAnimationClass('tech-stack')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks to deliver scalable, high-performance solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-6 py-3 rounded-full ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section - Fourth Screenshot */}
      <section id="testimonials" className={`py-20 transition-all duration-1000 ${getAnimationClass('testimonials')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients who have achieved remarkable success with our solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-500 mr-2" />
                <span>Industry Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals with our tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
                WebFilaments
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting digital excellence with innovation and expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/services/web-development" className="hover:text-blue-600">Web Development</a></li>
                <li><a href="/services/mobile-app-development" className="hover:text-blue-600">Mobile Apps</a></li>
                <li><a href="/services/ecommerce-development" className="hover:text-blue-600">E-commerce</a></li>
                <li><a href="/services/digital-marketing" className="hover:text-blue-600">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="/portfolio" className="hover:text-blue-600">Portfolio</a></li>
                <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get the latest updates and insights
              </p>
              <div className="flex space-x-4">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 WebFilaments. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}