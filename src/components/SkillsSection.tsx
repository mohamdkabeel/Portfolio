import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Palette, Zap, Database } from 'lucide-react';

const SkillsSection = () => {
    const skillCategories = [
        {
            icon: Code2,
            title: 'Languages & Frameworks',
            skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Sass'],
            color: 'hero-gradient'
        },
        {
            icon: Palette,
            title: 'Design & Tools',
            skills: ['Figma', 'Adobe XD', 'VS Code', 'Chrome DevTools', 'Git', 'GitHub', 'Responsive Design'],
            color: 'bg-gradient-to-br from-purple-500 to-pink-500'
        },
        {
            icon: Zap,
            title: 'Expertise Areas',
            skills: ['GSAP/ScrollTrigger', 'Performance Optimization', 'SEO', 'Accessibility', 'Code Splitting', 'Lazy Loading'],
            color: 'bg-gradient-to-br from-green-500 to-emerald-500'
        },
        {
            icon: Database,
            title: 'Integration & APIs',
            skills: ['REST APIs', 'Axios/Fetch', 'JSON', 'Authentication', 'State Management', 'Error Handling'],
            color: 'bg-gradient-to-br from-orange-500 to-red-500'
        }
    ];

    const proficiencyLevels = [
        { skill: 'React', level: 95 },
        { skill: 'TypeScript', level: 60 },
        { skill: 'Tailwind CSS', level: 95 },
        { skill: 'JavaScript', level: 90 },
        { skill: 'Next.js', level: 75 },
        { skill: 'GSAP', level: 50 },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Skills & Expertise</h2>
                        <p className="text-lg text-light max-w-2xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </div>

                    {/* Skill Categories */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <Card key={index} className="hover-lift fade-in">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-12 h-12 ${category.color === 'hero-gradient' ? 'hero-gradient' : category.color} rounded-lg flex items-center justify-center`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold">{category.title}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className="px-3 py-1 text-sm">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Proficiency Levels */}
                    <div className="fade-in">
                        <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {proficiencyLevels.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{item.skill}</span>
                                        <span className="text-sm text-light">{item.level}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center fade-in">
                            <div className="text-4xl font-bold gradient-text mb-2">2</div>
                            <p className="text-light">Years Experience</p>
                        </div>
                        <div className="text-center fade-in">
                            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                            <p className="text-light">Projects Completed</p>
                        </div>
                        <div className="text-center fade-in">
                            <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                            <p className="text-light">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;