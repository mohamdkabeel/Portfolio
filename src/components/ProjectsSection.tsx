import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';
import { SmartFire } from '../assets/SmartFire.png'

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            title: 'Travel Planner Web App',
            description: 'Multi-API travel planning application with interactive maps, weather integration, and booking system. Built with modern React architecture.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
            tech: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS', 'REST APIs'],
            category: 'Web Apps',
            role: 'Full-Stack Developer',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'E-Commerce Storefront',
            description: 'Complete shopping platform with cart management, payment integration, and admin dashboard. Focused on performance and user experience.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
            tech: ['React', 'Redux', 'Node.js', 'Stripe API', 'MongoDB'],
            category: 'Web Apps',
            role: 'Front-End Lead',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Smart Fire Fighting Robot',
            description: 'Arduino-based autonomous fire detection and extinguishing system with real-time monitoring and alert mechanisms.',
            image: { SmartFire },
            tech: ['Arduino', 'C++', 'Sensors', 'IoT', 'Real-time Systems'],
            category: 'Hardware',
            role: 'Hardware Engineer',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website with advanced animations, smooth scrolling, and responsive design. Built with modern web technologies.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
            tech: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
            category: 'Personal',
            role: 'Designer & Developer',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Task Management Dashboard',
            description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
            tech: ['React', 'TypeScript', 'Socket.io', 'Chart.js', 'Express'],
            category: 'Web Apps',
            role: 'Full-Stack Developer',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Weather Analytics App',
            description: 'Weather tracking application with data visualization, historical analysis, and location-based forecasting.',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
            tech: ['React', 'D3.js', 'Weather API', 'PWA', 'Charts'],
            category: 'Personal',
            role: 'Front-End Developer',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    const categories = ['All', 'Web Apps', 'Hardware', 'Personal'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Recent Projects</h2>
                        <p className="text-lg text-light max-w-2xl mx-auto">
                            A showcase of my recent work and the technologies I've been exploring
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeFilter === category ? "default" : "outline"}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 transition-all duration-300 ${activeFilter === category
                                    ? 'hero-gradient text-white'
                                    : 'hover:bg-accent hover:text-white'
                                    }`}
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Card key={index} className="overflow-hidden hover-lift fade-in group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={SmartFire}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                            <Button size="sm" variant="secondary" asChild>
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </Button>
                                            <Button size="sm" variant="secondary" asChild>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm text-accent mb-2">{project.role}</p>
                                            <p className="text-light leading-relaxed">{project.description}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* View More Projects */}
                    <div className="text-center mt-12 fade-in">
                        <p className="text-light mb-6">Interested in seeing more of my work?</p>
                        <Button
                            variant="outline"
                            className="px-8 py-4 text-lg border-2 hover:bg-accent hover:text-white transition-all duration-300"
                            asChild
                        >
                            <a href="https://github.com/mohamdkabeel" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 mr-2" />
                                View All Projects on GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;