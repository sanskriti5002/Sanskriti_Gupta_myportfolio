import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Camera, Code, Sparkles, Trophy } from "lucide-react";

// Import achievement certificates
import posterPresentation1st from "@/assets/achievement-poster-presentation-1st.png";
import mathQuiz1st from "@/assets/achievement-math-quiz-1st.png";
import technodrama3rd from "@/assets/achievement-technodrama-3rd.png";
import pixelQuest1st from "@/assets/cert-pixel-quest-1st.png";
import technodramaTrophy from "@/assets/cert-technodrama-3rd-trophy.png";
import hackxNiet from "@/assets/cert-hackx-niet.png";
import hacknchill from "@/assets/cert-hacknchill.png";
import codingBlocks from "@/assets/cert-coding-blocks.png";
import ignite2025Coord from "@/assets/cert-ignite-2025-coord.png";
import igniteVolunteer from "@/assets/cert-ignite-volunteer.png";
import mosaic2025Volunteer from "@/assets/cert-mosaic-2025-volunteer.png";

const achievementsAndParticipations = [
  {
    name: "Poster Presentation of Ideas - 1st Position",
    event: "Institution's Innovation Council (IIC), Oct 2023",
    image: posterPresentation1st,
  },
  {
    name: "National Mathematics Day Quiz - 1st Prize",
    event: "IILM University, Dec 2023",
    image: mathQuiz1st,
  },
  {
    name: "Pixel Quest - 1st Position",
    event: "IGNITE 2024",
    image: pixelQuest1st,
  },
  {
    name: "Technodrama - 3rd Position",
    event: "IGNITE 2024",
    image: technodrama3rd,
  },
  {
    name: "Technodrama - 3rd Position (Trophy)",
    event: "IGNITE 2024",
    image: technodramaTrophy,
  },
  {
    name: "HACK-X NIET 2.0 - Participation",
    event: "NIET Greater Noida, April 2024",
    image: hackxNiet,
  },
  {
    name: "HacknChill 2024 - Participation",
    event: "GDSC ADGIPS, April 2024",
    image: hacknchill,
  },
  {
    name: "Coding Blocks Orientation",
    event: "Coding Blocks, Dec 2024",
    image: codingBlocks,
  },
  {
    name: "IGNITE 2025 - Coordinator",
    event: "IILM University, April 2025",
    image: ignite2025Coord,
  },
  {
    name: "IGNITE 2024 - Volunteer",
    event: "IILM University, April 2024",
    image: igniteVolunteer,
  },
  {
    name: "Mosaic 2025 - Volunteer",
    event: "IILM University, Feb 2025",
    image: mosaic2025Volunteer,
  },
];

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
    role: "Vice President",
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

          <div className="grid md:grid-cols-2 gap-4 mb-16">
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

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements & Participations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievementsAndParticipations.map((achievement, index) => (
                <motion.div
                  key={achievement.name + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group rounded-xl overflow-hidden border border-border bg-background/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-foreground line-clamp-2">{achievement.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
