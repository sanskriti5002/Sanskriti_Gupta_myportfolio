import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, Code2, Users } from "lucide-react";
import profileImage from "@/assets/sanskriti-profile.jpg";

const highlights = [
  { icon: GraduationCap, label: "CGPA", value: "9.46" },
  { icon: Code2, label: "Languages", value: "C, Java, Python, C++" },
  { icon: Trophy, label: "Hackathons", value: "5+ Participated" },
  { icon: Users, label: "Leadership", value: "GDG & ADC Club" },
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
                <img 
                  src={profileImage} 
                  alt="Sanskriti Gupta" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground font-mono">
                    📍 Greater Noida, Uttar Pradesh
                  </p>
                  <p className="text-foreground font-semibold mt-1">
                    BTech CSE • IILM University (2023-2027)
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
                I'm a passionate Computer Science student at IILM University, Greater Noida, 
                currently pursuing my BTech with a strong CGPA of 9.46. I'm enthusiastic about 
                software development, AI, and innovative tech solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in AI & Machine Learning from my internship at AICTE 
                in collaboration with Edunet Foundation, I've developed ML models achieving 85% 
                accuracy. I'm certified in C++ from IIT Bombay, Java & JDBC from Infosys, and 
                Database Management from Udemy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an active member of Google Developer Group (GDG), ADC Club, and serve as 
                General Secretary of Campus Lens Club at IILM University. When I'm not coding, 
                you'll find me dancing, volunteering at tech events, or competing in hackathons!
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
