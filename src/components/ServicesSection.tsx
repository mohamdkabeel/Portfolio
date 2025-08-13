import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Zap, Plug, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Code,
            title: 'Front-End Web Development',
            description: 'Responsive, maintainable websites using React, Next.js, and Tailwind CSS. Clean code architecture with modern best practices.',
            features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Clean Architecture'],
            gradient: 'hero-gradient'
        },
        {
            icon: Palette,
            title: 'Web Design Implementation',
            description: 'Pixel-perfect UI/UX mockup integration from Figma and Adobe XD designs. Bringing designs to life with attention to detail.',
            features: ['Figma to Code', 'Pixel Perfect', 'Cross-browser', 'Mobile First'],
            gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Code splitting, lazy loading, and SEO-friendly improvements. Making your website fast and search engine optimized.',
            features: ['Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Core Web Vitals'],
            gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
        },
        {
            icon: Plug,
            title: 'API Integration',
            description: 'Secure and clean implementation using Axios/Fetch and REST APIs. Seamless data flow and error handling.',
            features: ['REST APIs', 'Authentication', 'Error Handling', 'State Management'],
            gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
        }
    ];

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-20 section-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Services</h2>
                        <p className="text-lg text-light max-w-2xl mx-auto">
                            I can help you with these core services to bring your digital vision to life
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card key={index} className="hover-lift fade-in group">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-16 h-16 ${service.gradient === 'hero-gradient' ? 'hero-gradient' : service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                        </div>

                                        <p className="text-light mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 hero-gradient rounded-full"></div>
                                                    <span className="text-sm text-light">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            variant="ghost"
                                            className="p-0 h-auto font-medium text-accent hover:text-accent group"
                                            onClick={scrollToContact}
                                        >
                                            Get Started
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center fade-in">
                        <div className="bg-gradient-to-r from-background to-section-bg rounded-2xl p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                            <p className="text-light mb-8 max-w-2xl mx-auto">
                                Let's discuss how I can help bring your ideas to life with modern web technologies
                                and exceptional user experiences.
                            </p>
                            <Button
                                onClick={scrollToContact}
                                className="hero-gradient text-white px-8 py-4 text-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                Let's Work Together
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;