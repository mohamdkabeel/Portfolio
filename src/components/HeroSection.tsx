import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Eye, MapPin, Sparkles } from 'lucide-react';
import profilePicture from '../assets/MoKabeel.jpg';

const HeroSection = () => {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-2 xs:px-0"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-section-bg to-background"></div>
                <div className="absolute top-10 xs:top-20 -left-20 xs:-left-40 w-40 xs:w-60 sm:w-80 h-40 xs:h-60 sm:h-80 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-24 xs:top-40 -right-20 xs:-right-40 w-40 xs:w-60 sm:w-80 h-40 xs:h-60 sm:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute -bottom-20 xs:-bottom-40 left-10 xs:left-20 w-40 xs:w-60 sm:w-80 h-40 xs:h-60 sm:h-80 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-2 xs:px-4 sm:px-6 py-10 xs:py-16 sm:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 xs:space-y-8 fade-in">
                        {/* Status */}
                        <div className="flex flex-wrap items-center gap-2 xs:gap-4">
                            <Badge className="hero-gradient text-white px-3 xs:px-4 py-1 xs:py-2 text-xs sm:text-sm font-medium border-0 animate-bounce">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Available for work
                            </Badge>
                            <div className="hidden xs:flex items-center gap-2 text-xs sm:text-sm text-light">
                                <MapPin className="w-4 h-4" />
                                <span>Mansoura, Egypt</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4 xs:space-y-6">
                            <div className="space-y-1 xs:space-y-2">
                                <p className="text-accent font-medium text-sm xs:text-base sm:text-lg tracking-wide">👋 Hey there, I'm</p>
                                <h1 className="text-2xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-none">
                                    <span className="block">MOHAMED</span>
                                    <span className="block gradient-text">SAMEH</span>
                                    <span className="block text-lg xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground mt-1 xs:mt-2 mb-4 xs:mb-0">
                                        KABEEL
                                    </span>
                                </h1>
                            </div>

                            {/* Title */}
                            <div className="relative">
                                <div className="absolute -inset-1 hero-gradient rounded-2xl blur opacity-25"></div>
                                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/20">
                                    <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                                        <div className="w-2 xs:w-3 h-2 xs:h-3 hero-gradient rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold">Front-End Developer</p>
                                            <p className="text-light text-xs xs:text-sm sm:text-base">Specialized in React & Modern Web Technologies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2 xs:space-y-4">
                            <p className="text-sm xs:text-base sm:text-xl text-light max-w-xs xs:max-w-lg leading-relaxed">
                                Crafting <span className="gradient-text font-semibold">responsive</span>,
                                <span className="gradient-text font-semibold"> fast</span>, and
                                <span className="gradient-text font-semibold"> beautiful</span> web experiences
                                with modern technologies and a focus on exceptional user experience.
                            </p>

                            <div className="flex flex-wrap gap-1 xs:gap-2">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="px-2 xs:px-3 py-0.5 xs:py-1 text-xs sm:text-sm hover:bg-accent hover:text-white transition-colors duration-300 cursor-default"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 pt-2 xs:pt-4">
                            <Button
                                variant="hero"
                                onClick={scrollToProjects}
                                className="px-4 xs:px-6 sm:px-8 py-2 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg font-medium group"
                            >
                                <Eye className="w-4 xs:w-5 h-4 xs:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                onClick={scrollToContact}
                                className="px-4 xs:px-6 sm:px-8 py-2 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg font-medium border-2 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
                            >
                                Let's Connect
                                <ArrowDown className="w-4 xs:w-5 h-4 xs:h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="hidden xs:grid grid-cols-3 gap-1 xs:gap-4 sm:gap-6 pt-4 xs:pt-8 border-t border-border/50 min-w-0 w-full overflow-x-auto">
                            <div className="text-center min-w-0">
                                <div className="text-base xs:text-xl sm:text-2xl font-bold gradient-text truncate">2</div>
                                <p className="text-xs sm:text-sm text-light">Years Exp</p>
                            </div>
                            <div className="text-center min-w-0">
                                <div className="text-base xs:text-xl sm:text-2xl font-bold gradient-text truncate">5+</div>
                                <p className="text-xs sm:text-sm text-light">Projects</p>
                            </div>
                            <div className="text-center min-w-0">
                                <div className="text-base xs:text-xl sm:text-2xl font-bold gradient-text truncate">99%</div>
                                <p className="text-xs sm:text-sm text-light">Satisfaction</p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center lg:justify-end fade-in mt-8 lg:mt-0">
                            <div className="relative group max-w-[180px] xs:max-w-[220px] sm:max-w-xs md:max-w-md">
                                {/* Floating Emojis */}
                                <div className="absolute -top-6 xs:-top-8 -left-6 xs:-left-8 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 hero-gradient rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-500">
                                    <span className="text-white font-bold text-xs xs:text-base sm:text-lg">-_-</span>
                                </div>
                                <div className="absolute -bottom-6 xs:-bottom-8 -right-6 xs:-right-8 w-10 xs:w-14 sm:w-20 h-10 xs:h-14 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-1000">
                                    <span className="text-white font-bold text-xs xs:text-base sm:text-lg">-_-</span>
                                </div>
                                <div className="absolute top-1/2 -right-8 xs:-right-10 sm:-right-12 w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-1500">
                                    <span className="text-white text-[10px] xs:text-xs sm:text-sm">-_-</span>
                                </div>

                                {/* Profile Image */}
                                <div className="relative">
                                    <div className="absolute -inset-2 xs:-inset-4 hero-gradient rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                                    <div className="relative w-40 xs:w-64 sm:w-80 md:w-96 h-40 xs:h-64 sm:h-80 md:h-96">
                                        <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 xs:ring-8 ring-white/50 backdrop-blur-sm group-hover:ring-white/70 transition-all duration-500 hover:scale-105">
                                            <img
                                                src={profilePicture}
                                                alt="Mohamed Sameh Kabeel - Front-End Developer"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute -bottom-4 xs:-bottom-6 -right-4 xs:-right-6 w-10 xs:w-16 sm:w-20 md:w-24 h-10 xs:h-16 sm:h-20 md:h-24 hero-gradient rounded-full flex items-center justify-center shadow-xl ring-2 xs:ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-base xs:text-lg sm:text-xl md:text-2xl">MK</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Card */}
                                <div className="absolute -bottom-10 xs:-bottom-14 sm:-bottom-16 left-1 xs:left-2 sm:left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-2 xs:p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                                    <div className="flex items-center gap-2 xs:gap-3">
                                        <div className="w-2 xs:w-3 h-2 xs:h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="font-semibold text-[10px] xs:text-xs sm:text-sm">Currently Available</p>
                                            <p className="text-[8px] xs:text-[10px] sm:text-xs text-light">Ready for new projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden xs:block absolute bottom-4 xs:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex flex-col items-center gap-1 xs:gap-2 animate-bounce">
                        <p className="text-[10px] xs:text-xs sm:text-sm text-light">Scroll to explore</p>
                        <div className="w-4 xs:w-5 sm:w-6 h-6 xs:h-8 sm:h-10 border-2 border-accent rounded-full flex justify-center">
                            <div className="w-0.5 xs:w-1 h-1 xs:h-2 sm:h-3 bg-accent rounded-full mt-1 xs:mt-2 animate-pulse">|</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
