import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing, sentiment analysis, and smart suggestions.",
    tech: ["Next.js", "OpenAI", "WebSocket", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio generator that creates stunning developer portfolios from GitHub data.",
    tech: ["React", "GitHub API", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with 7-day forecasts, location tracking, and interactive maps.",
    tech: ["React", "Weather API", "Mapbox"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Code Snippet Manager",
    description: "Organize and share code snippets with syntax highlighting and tagging system.",
    tech: ["TypeScript", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const FeaturedProject = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
  >
    <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
      <div className="relative group">
        <div className="aspect-video rounded-xl border-gradient overflow-hidden bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-24 h-24 text-muted-foreground/20" />
          </div>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    </div>
    
    <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
      <span className="text-primary font-mono text-sm">Featured Project</span>
      <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
      <div className="p-6 rounded-xl bg-card border border-border mb-4">
        <p className="text-muted-foreground">{project.description}</p>
      </div>
      <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
        <motion.a
          href={project.github}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={22} />
        </motion.a>
        <motion.a
          href={project.live}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink size={22} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const OtherProject = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
    whileHover={{ y: -8 }}
    className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
  >
    <div className="flex items-center justify-between mb-4">
      <Folder className="w-10 h-10 text-primary" />
      <div className="flex gap-3">
        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span key={tech} className="text-xs font-mono text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
            <span className="text-primary font-mono text-sm mb-4 block">02. My Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <OtherProject key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
