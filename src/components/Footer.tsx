import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Mail,
            href: 'mailto:kabeelmohamed22@gmail.com',
            label: 'Email'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/mohamed-kabil1',
            label: 'LinkedIn'
        },
        {
            icon: Github,
            href: 'https://github.com/mohamdkabeel',
            label: 'GitHub'
        }
    ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-primary bg-slate-900 text-primary-foreground py-16">
            <div className="container text-white  mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-4  ">
                            <h3 className="text-2xl font-bold font-serif gradient-text">
                                Mohamed Kabeel
                            </h3>
                            <p className="text-primary-foreground/80 leading-relaxed max-w-md ">
                                Front-End Developer passionate about creating beautiful, functional,
                                and user-friendly web experiences with modern technologies.
                            </p>
                            <div className="flex gap-4 ">
                                {socialLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            size="icon"
                                            asChild
                                            className="hover:bg-white/10 transition-colors duration-300"
                                        >
                                            <a
                                                href={link.href}
                                                target={link.href.startsWith('http') ? '_blank' : '_self'}
                                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                                aria-label={link.label}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 ">
                            <h4 className="text-lg font-semibold">Quick Links</h4>
                            <nav className="flex flex-col space-y-2 ">
                                {navLinks.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-left text-white hover:text-blue-500 text-primary-foreground/80 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 ">
                            <h4 className="text-lg font-semibold">Get In Touch</h4>
                            <div className="space-y-2">
                                <p className="text-primary-foreground/80  text-white hover:text-blue-500 text-sm">
                                    kabeelmohamed22@gmail.com
                                </p>
                                <p className="text-primary-foreground/80  text-white hover:text-blue-500 text-sm">
                                    Mansoura, Egypt
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-primary-foreground/80  text-white hover:text-blue-500">Available for work</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-8"></div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-primary-foreground/60 text-sm  text-white hover:text-red-900">
                            © {currentYear} MADE BY MOHAMED KABEEL
                        </p>

                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={scrollToTop}
                                className="hover:bg-white/10 transition-colors duration-300"
                            >
                                <ArrowUp className="w-4 h-4 mr-2" />
                                Back to Top
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;