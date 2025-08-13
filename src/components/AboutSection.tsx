import { Card, CardContent } from '@/components/ui/card';
import { Brain, Users, Lightbulb, MessageSquare, GraduationCap, Calendar } from 'lucide-react';
import profilePicture from '../assets/profile-picture.jpg';

const AboutSection = () => {
  const skills = [
    { icon: Brain, label: 'Problem-solving', description: 'Analytical thinking and creative solutions' },
    { icon: Lightbulb, label: 'UI/UX Thinking', description: 'User-centered design approach' },
    { icon: MessageSquare, label: 'Communication', description: 'Clear and effective communication' },
    { icon: Users, label: 'Team Collaboration', description: 'Working effectively in teams' },
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Me</h2>
            <p className="text-lg text-light max-w-2xl mx-auto">
              Getting to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl hover-lift">
                  <img
                    src={profilePicture}
                    alt="Mohamed Sameh Kabeel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 hero-gradient rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">👋</span>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text">Hello! I'm Mohamed Kabeel</h3>
                <p className="text-lg leading-relaxed text-light">
                  I'm a passionate Front-End Developer with a background in computer engineering.
                  I enjoy crafting interactive, user-friendly web experiences using modern technologies
                  like React, TypeScript, and Tailwind CSS.
                </p>
                <p className="text-lg leading-relaxed text-light">
                  I'm driven by solving real-world problems through clean and efficient code,
                  while caring deeply about UX, visual design, and performance. Every project
                  is an opportunity to create something meaningful and impactful.
                </p>
              </div>

              {/* Education */}
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 hero-gradient rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Education</h4>
                      <p className="text-lg font-medium">Bachelor's in Computer Engineering</p>
                      <p className="text-light">misr higher for engineering and technology Mansoura</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-light">
                        <Calendar className="w-4 h-4" />
                        <span>Expected 2027</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-16 fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{skill.label}</h4>
                      <p className="text-sm text-light">{skill.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;