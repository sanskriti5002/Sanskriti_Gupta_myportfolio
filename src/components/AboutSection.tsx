import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "5+ Years" },
  { icon: Palette, label: "UI/UX Focus", value: "Design First" },
  { icon: Zap, label: "Performance", value: "Optimized" },
  { icon: Coffee, label: "Dedication", value: "24/7 Passion" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl border-gradient overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-gradient opacity-20">YN</span>
                </div>
                {/* Replace with your actual image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground font-mono">
                    Based in Your City, Country
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 5+ years of experience in the field, 
                I specialize in building modern web applications using cutting-edge technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started when I wrote my first line of code at 15. Since then, 
                I've worked with startups and established companies, helping them bring their 
                digital visions to life. I believe in writing clean, maintainable code and 
                creating interfaces that users love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or enjoying a good cup of coffee while planning my 
                next side project.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;