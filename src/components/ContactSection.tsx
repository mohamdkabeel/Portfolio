import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'kabeelmohamed22@gmail.com',
            href: 'mailto:kabeelmohamed22@gmail.com'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'mohamed-kabil1',
            href: 'https://linkedin.com/in/mohamed-kabil1'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'mohamdkabeel',
            href: 'https://github.com/mohamdkabeel'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Mansoura, Egypt',
            href: '#'
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                'service_od694a9', // من EmailJS
                'template_tojv8yu', // من EmailJS
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                'STQJYlUJnC2t5SPt7' // من EmailJS
            );

            toast({
                title: "Message sent successfully!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });

            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast({
                title: "Error sending message",
                description: "Something went wrong. Please try again later.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 section-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Let's Work Together</h2>
                        <p className="text-lg text-light max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8 fade-in">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                                <p className="text-light leading-relaxed">
                                    I'm always interested in new opportunities and exciting projects.
                                    Whether you're a company looking for a developer or you're someone with a great idea,
                                    I'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <Card key={index} className="hover-lift">
                                            <CardContent className="p-4">
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                                    className="flex items-center gap-4 group"
                                                >
                                                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                        <Icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-light">{item.label}</p>
                                                        <p className="font-medium group-hover:text-accent transition-colors duration-200">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </a>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            {/* Availability Status */}
                            <Card className="hero-gradient text-white">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                                        <div>
                                            <h4 className="font-semibold">Available for Projects</h4>
                                            <p className="text-white/80 text-sm">Currently accepting new freelance projects and full-time opportunities</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="fade-in">
                            <Card>
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your full name"
                                                    required
                                                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="your.email@example.com"
                                                    required
                                                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell me about your project or idea..."
                                                rows={6}
                                                required
                                                className="transition-all duration-300 focus:ring-2 focus:ring-accent resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full hero-gradient text-white py-6 text-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;