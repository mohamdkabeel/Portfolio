import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Eye, MapPin, Calendar, Sparkles } from 'lucide-react';
import profilePicture from '@/assets/MoKabeel.jpg';

const HeroSection = () => {
    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-section-bg to-background"></div>
                <div className="absolute top-20 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute -bottom-40 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-3 sm:px-6 py-12 sm:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Enhanced Text Content */}
                    <div className="space-y-4 sm:space-y-8 fade-in">
                        {/* Status Badge */}
                        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4">
                            <Badge className="hero-gradient text-white px-3 py-1.5 text-xs sm:text-sm font-medium border-0 animate-bounce">
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                Available for work
                            </Badge>
                            <div className="flex xs:hidden sm:flex items-center gap-2 text-xs sm:text-sm text-light">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>Mansoura, Egypt</span>
                            </div>
                        </div>

                        {/* Main Heading with Enhanced Typography */}
                        <div className="space-y-3 sm:space-y-6">
                            <div className="space-y-1 sm:space-y-2">
                                <p className="text-accent font-medium text-sm sm:text-lg tracking-wide"> Hey there, I'm</p>
                                <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-none">
                                    <span className="block">MOHAMED</span>
                                    <span className="block gradient-text">SAMEH</span>
                                    <span className="block text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground mt-1 sm:mt-2">
                                        KABEEL
                                    </span>
                                </h1>
                            </div>

                            {/* Professional Title with Modern Styling */}
                            <div className="relative">
                                <div className="absolute -inset-1 hero-gradient rounded-xl sm:rounded-2xl blur opacity-25"></div>
                                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 hero-gradient rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">Front-End Developer</p>
                                            <p className="text-light text-xs sm:text-sm">Specialized in React & Modern Web Technologies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Description */}
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-xl text-light max-w-lg leading-relaxed">
                                Crafting <span className="gradient-text font-semibold">responsive</span>,
                                <span className="gradient-text font-semibold"> fast</span>, and
                                <span className="gradient-text font-semibold"> beautiful</span> web experiences
                                with modern technologies and a focus on exceptional user experience.
                            </p>

                            {/* Tech Stack Preview */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech) => (
                                    <Badge key={tech} variant="secondary" className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm hover:bg-accent hover:text-white transition-colors duration-300 cursor-default">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <Button
                                variant="hero"
                                onClick={scrollToProjects}
                                className="px-4 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg font-medium group"
                            >
                                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform duration-300" />
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                onClick={scrollToContact}
                                className="px-4 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg font-medium border-2 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                            >
                                Let's Connect
                                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>
                        </div>

                        {/* Experience Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8 border-t border-border/50">
                            <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold gradient-text">2</div>
                                <p className="text-xs sm:text-sm text-light">Years Exp</p>
                            </div>
                            <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold gradient-text">5+</div>
                                <p className="text-xs sm:text-sm text-light">Projects</p>
                            </div>
                            <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold gradient-text">99%</div>
                                <p className="text-xs sm:text-sm text-light">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Profile Image Section */}
                    <div className="flex justify-center lg:justify-end fade-in mt-8 lg:mt-0">
                        <div className="relative group">
                            {/* Floating Elements - Hidden on very small screens */}
                            <div className="hidden xs:block absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 hero-gradient rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-500">
                                <span className="text-white font-bold text-sm sm:text-lg">-_-</span>
                            </div>
                            <div className="hidden xs:block absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-1000">
                                <span className="text-white font-bold text-sm sm:text-lg">-_-</span>
                            </div>
                            <div className="hidden sm:block absolute top-1/2 -right-6 lg:-right-12 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-1500">
                                <span className="text-white text-xs sm:text-sm">-_-</span>
                            </div>

                            {/* Main Profile Container */}
                            <div className="relative">
                                {/* Glow Effect */}
                                <div className="absolute -inset-2 sm:-inset-4 hero-gradient rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                                {/* Profile Image */}
                                <div className="relative w-64 mb-[50px] mr-[80px] h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/50 backdrop-blur-sm group-hover:ring-white/70 transition-all duration-500 hover:scale-105">
                                        <img
                                            src={profilePicture}
                                            alt="Mohamed Sameh Kabeel - Front-End Developer"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Monogram Badge */}
                                    <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 hero-gradient rounded-full flex items-center justify-center shadow-xl ring-2 sm:ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg sm:text-2xl">MK</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info Card - Adjusted for mobile */}
                            <div className="absolute -bottom-8 sm:-bottom-16 left-2 sm:left-8 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 max-w-[160px] sm:max-w-none">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
                                    <div>
                                        <p className="font-semibold text-xs sm:text-sm">Currently Available</p>
                                        <p className="text-[10px] sm:text-xs text-light">Ready for new projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
                    <p className="text-xs sm:text-sm text-light">Scroll to explore</p>
                    <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-accent rounded-full flex justify-center">
                        <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-accent rounded-full mt-1 sm:mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;