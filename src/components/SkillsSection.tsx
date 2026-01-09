import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const SkillBar = ({ skill, index, isInView }: { skill: { name: string; level: number }; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group"
  >
    <div className="flex justify-between mb-2">
      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{skill.name}</span>
      <span className="text-muted-foreground text-sm font-mono">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
        className="h-full bg-gradient-primary rounded-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
      </motion.div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">03. Skills & Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Toolkit</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} isInView={isInView} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">And many more technologies I work with...</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["REST APIs", "WebSocket", "Redux", "Zustand", "Prisma", "Jest", "Cypress", "Linux", "Nginx", "Redis"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;