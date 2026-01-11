import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, Trophy, Calendar } from "lucide-react";

const projects = [
  {
    title: "AksharNet - Character Recognition",
    description: "Developed an innovative character recognition project at IIT Bombay Hackathon. Recognized as a PaceCoder for the innovative solution.",
    tech: ["Python", "Machine Learning", "Computer Vision"],
    github: "https://github.com/sanskriti5002",
    achievement: "PaceCoder at IIT Bombay Hackathon",
    featured: true,
  },
  {
    title: "Employee Salary Prediction Model",
    description: "Built a machine learning model to predict employee salaries using job-related features, achieving 85% accuracy. Deployed with Flask/Streamlit for real-time predictions.",
    tech: ["Python", "Machine Learning", "Flask", "Streamlit"],
    github: "https://github.com/sanskriti5002",
    achievement: "AICTE Internship Project",
    featured: true,
  },
  {
    title: "Mood Tracker with Voice Recognition",
    description: "Minor project implementing voice recognition technology to track and analyze user moods. Combines speech-to-text with sentiment analysis.",
    tech: ["Python", "Speech Recognition", "NLP"],
    github: "https://github.com/sanskriti5002",
    featured: true,
  },
];

const hackathons = [
  { name: "C++ Programming Bootcamp Hackathon - IIT Bombay", date: "Feb 16, 2025" },
  { name: "Code Nakshatra - Trinity Institute", date: "April 03-04, 2025" },
  { name: "HacknChill 2024 - GDSC ADGIPS", date: "April 25-27, 2024" },
  { name: "Hack-X NIET 2.0 - NIET, Greater Noida", date: "April 13, 2024" },
  { name: "Hack Utsav 2024 - IILM University", date: "Feb 12-13, 2024" },
];

const achievements = [
  "PaceCoder at IIT Bombay Hackathon - AksharNet Project",
  "1st Position - Pixel Quest and Techno Drama at Ignite 2024",
  "1st Position - Quiz Competition (National Mathematics Day, 2023)",
  "1st Position - Poster Presentation (IIC, Oct 2023 & July 2024)",
];

const FeaturedProject = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -8 }}
    className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
  >
    <div className="flex items-center justify-between mb-4">
      <Folder className="w-12 h-12 text-primary" />
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github size={20} />
      </a>
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
    <p className="text-muted-foreground mb-4">{project.description}</p>
    {project.achievement && (
      <div className="flex items-center gap-2 mb-4 text-primary text-sm">
        <Trophy size={16} />
        <span>{project.achievement}</span>
      </div>
    )}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span key={tech} className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">03. My Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my projects, hackathon experiences, and achievements
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30"
                >
                  <span className="text-primary mt-1">🏆</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Hackathon Participation</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 transition-colors"
                >
                  <p className="font-medium text-foreground mb-1">{hackathon.name}</p>
                  <p className="text-sm text-muted-foreground">{hackathon.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
