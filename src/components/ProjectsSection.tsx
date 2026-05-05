import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, Trophy, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

// IIT Bombay images
import iitbCertificate from "@/assets/iitb-certificate.png";
import iitbBadge from "@/assets/iitb-badge.png";
import iitbAward from "@/assets/iitb-award.png";
import iitbCampus from "@/assets/iitb-campus.png";
import iitbLecture from "@/assets/iitb-lecture.png";
import iitbCoding from "@/assets/iitb-coding.png";
import iitbPresentation from "@/assets/iitb-presentation.png";

// AICTE Internship images
import aicteCertificate from "@/assets/aicte-certificate.jpg";
import ibmAiBadge from "@/assets/ibm-ai-badge.png";

const iitbImages = [
  { src: iitbAward, alt: "Receiving certificate at IIT Bombay" },
  { src: iitbCertificate, alt: "IIT Bombay Certificate of Completion" },
  { src: iitbBadge, alt: "C++ Bootcamp Participant Badge" },
  { src: iitbCampus, alt: "At IIT Bombay Campus" },
  { src: iitbLecture, alt: "Bootcamp Lecture Session" },
  { src: iitbPresentation, alt: "C++ Programming Bootcamp Presentation" },
  { src: iitbCoding, alt: "Coding Session" },
];

const aicteImages = [
  { src: aicteCertificate, alt: "AICTE AI/ML Internship Certificate" },
  { src: ibmAiBadge, alt: "IBM SkillsBuild AI Fundamentals Badge" },
];

const projects = [
  {
    title: "AksharNet - Character Recognition",
    description: "Developed an innovative character recognition project at IIT Bombay Hackathon. Recognized as a PaceCoder for the innovative solution. Participated in the IoE Hands-on C++ Programming Bootcamp conducted by Prof. Varsha Apte.",
    tech: ["Python", "Machine Learning", "Computer Vision", "C++"],
    github: "https://github.com/sanskriti5002",
    achievement: "PaceCoder at IIT Bombay Hackathon",
    featured: true,
    hasGallery: true,
    galleryType: "iitb",
  },
  {
    title: "Employee Salary Prediction Model",
    description: "Built a machine learning model to predict employee salaries using job-related features, achieving 85% accuracy. Deployed with Flask/Streamlit for real-time predictions.",
    tech: ["Python", "Machine Learning", "Flask", "Streamlit"],
    github: "https://github.com/sanskriti5002",
    achievement: "AICTE Internship Project",
    featured: true,
    hasGallery: true,
    galleryType: "aicte",
  },
];

const hackathons = [
  { name: "C++ Programming Bootcamp Hackathon - IIT Bombay", date: "Feb 14-16, 2025" },
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

const ImageGallery = ({ images, onClose }: { images: typeof iitbImages; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft size={40} />
      </button>
      
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl max-h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain rounded-xl"
        />
        <p className="text-center text-muted-foreground mt-4">{images[currentIndex].alt}</p>
        <p className="text-center text-primary font-mono text-sm mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
      
      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronRight size={40} />
      </button>
    </motion.div>
  );
};

const FeaturedProject = ({ 
  project, 
  index, 
  isInView, 
  onOpenGallery 
}: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean;
  onOpenGallery?: () => void;
}) => {
  const galleryImages = project.galleryType === "iitb" ? iitbImages : project.galleryType === "aicte" ? aicteImages : [];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
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

      {project.hasGallery && galleryImages.length > 0 && (
        <div className="mb-4">
          <div className={`grid ${galleryImages.length <= 2 ? 'grid-cols-2' : 'grid-cols-4'} gap-2`}>
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={onOpenGallery}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-colors"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <button
            onClick={onOpenGallery}
            className="mt-2 text-sm text-primary hover:underline"
          >
            View all {galleryImages.length} photos →
          </button>
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
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGallery, setActiveGallery] = useState<"iitb" | "aicte" | null>(null);

  const getGalleryImages = () => {
    if (activeGallery === "iitb") return iitbImages;
    if (activeGallery === "aicte") return aicteImages;
    return [];
  };

  return (
    <>
      {activeGallery && (
        <ImageGallery images={getGalleryImages()} onClose={() => setActiveGallery(null)} />
      )}
      
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
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <FeaturedProject 
                  key={project.title} 
                  project={project} 
                  index={index} 
                  isInView={isInView}
                  onOpenGallery={project.hasGallery && project.galleryType ? () => setActiveGallery(project.galleryType as "iitb" | "aicte") : undefined}
                />
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
    </>
  );
};

export default ProjectsSection;
