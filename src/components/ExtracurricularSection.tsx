import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Camera, Code, Sparkles, Music } from "lucide-react";

const activities = [
  {
    title: "Google Developer Group (GDG)",
    role: "Active Member",
    description: "Participating in tech events, workshops, and collaborative coding sessions organized by Google Developer Group.",
    icon: Code,
  },
  {
    title: "ADC Club",
    role: "Active Member",
    description: "Engaged in Android development community activities, learning and contributing to mobile app development initiatives.",
    icon: Sparkles,
  },
  {
    title: "Campus Lens Club",
    role: "General Secretary",
    description: "Leading the photography and media club at IILM University, organizing events and managing club activities.",
    icon: Camera,
  },
  {
    title: "Dance & Cultural Activities",
    role: "Performer",
    description: "Active participation in cultural events, dance performances, and creative expressions at university functions.",
    icon: Music,
  },
  {
    title: "Tech Event Volunteering",
    role: "Volunteer",
    description: "Volunteering at various tech events, hackathons, and workshops, helping with organization and coordination.",
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
            <span className="text-primary font-mono text-sm mb-4 block">04. Beyond Academics</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Extracurricular <span className="text-gradient">Activities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leadership roles, club memberships, and activities that shape my personality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <span className="text-sm text-primary font-mono">{activity.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
