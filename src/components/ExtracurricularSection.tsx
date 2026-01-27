import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Camera, Code, Sparkles } from "lucide-react";

const activities = [
  {
    title: "Campus Lens Club, IILM University",
    role: "General Secretary",
    icon: Camera,
  },
  {
    title: "Google Developer Group (GDG) Club",
    role: "Member",
    icon: Code,
  },
  {
    title: "ADC Club, IILM University",
    role: "Core Team Member",
    icon: Sparkles,
  },
  {
    title: "Hacko'clock, Ignite 2K24 & 2K25, Mosaic 2K23 & 2K25",
    role: "Volunteer",
    icon: Users,
  },
];

const ExtracurricularSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="extracurricular" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">05. Beyond Academics</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Extracurricular <span className="text-gradient">Activities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <activity.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-primary font-mono text-sm">{activity.role}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-foreground">{activity.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
