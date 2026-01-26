import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Languages, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import certificate images
import iitbCppCert from "@/assets/iitb-cpp-bootcamp-cert.png";
import awsMlCert from "@/assets/aws-ml-foundations-cert.jpg";
import ibmAiCert from "@/assets/ibm-ai-fundamentals-cert.jpg";
import tutedudePythonCert from "@/assets/tutedude-python-cert.png";
import infosysMlPythonCert from "@/assets/infosys-ml-python-cert.png";
import infosysJdbcCert from "@/assets/infosys-jdbc-cert.png";
import udemyDbmsCert from "@/assets/udemy-dbms-sql-cert.png";
import dataflairJavaCert from "@/assets/dataflair-java-cert.png";
import infosysCCert from "@/assets/infosys-c-cert.png";
import infosysPythonFundCert from "@/assets/infosys-python-fundamentals-cert.png";
import dataflairPythonCert from "@/assets/dataflair-python-cert.png";
import infosysAimlCert from "@/assets/infosys-aiml-training-cert.png";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 75 },
      { name: "Flask/Streamlit", level: 70 },
      { name: "Model Deployment", level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "Database Management", level: 80 },
      { name: "JDBC", level: 75 },
      { name: "Git/GitHub", level: 80 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

const certifications = [
  { name: "C++ Bootcamp - IIT Bombay", image: iitbCppCert },
  { name: "AWS Academy Graduate - Machine Learning Foundations", image: awsMlCert },
  { name: "Artificial Intelligence Fundamentals - IBM SkillsBuild", image: ibmAiCert },
  { name: "Python Course Completion - TuteDude", image: tutedudePythonCert },
  { name: "Machine Learning using Python - Infosys Springboard", image: infosysMlPythonCert },
  { name: "Java Database Connectivity (JDBC) - Infosys", image: infosysJdbcCert },
  { name: "Database Management System (DBMS) & SQL - Udemy", image: udemyDbmsCert },
  { name: "Introduction to Java - DataFlair", image: dataflairJavaCert },
  { name: "Programming in C - Infosys", image: infosysCCert },
  { name: "Python Fundamentals - Infosys", image: infosysPythonFundCert },
  { name: "Python Certification - DataFlair", image: dataflairPythonCert },
  { name: "AI & Machine Learning Training - Infosys", image: infosysAimlCert },
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
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);

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
            <span className="text-primary font-mono text-sm mb-4 block">02. Skills & Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Toolkit</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and skills I've developed through academics, internships, and hackathons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
              <span className="text-muted-foreground text-sm">(Click to view)</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.button
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all cursor-pointer"
                >
                  {cert.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Languages className="w-5 h-5 text-primary" />
              <span>Languages:</span>
            </div>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Hindi (Native)</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">English (Fluent)</span>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-card border-border">
          <div className="relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedCert && (
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4 pr-10">{selectedCert.name}</h3>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SkillsSection;
