import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { fadeIn } from "../../utils/motion";

const skillCategories = [
  {
    label: "Languages",
    names: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    names: ["HTML 5", "CSS 3", "React JS", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    label: "Backend",
    names: [
      "Node JS",
      "Express.js",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    label: "DevOps & Cloud",
    names: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux", "Git"],
  },
  {
    label: "Tools & Other",
    names: ["Three JS", "Figma"],
  },
];

const Tech = () => {
  return (
    <div className="space-y-10">
      {skillCategories.map((category, catIndex) => {
        const catTechs = technologies.filter((t) =>
          category.names.includes(t.name)
        );
        if (catTechs.length === 0) return null;
        return (
          <motion.div
            key={category.label}
            variants={fadeIn("up", "spring", catIndex * 0.15, 0.5)}
          >
            {/* Category label */}
            <p className="mb-5 text-center text-[12px] font-semibold uppercase tracking-[4px] text-[#aaa6c3]">
              {category.label}
            </p>
            {/* Icon grid */}
            <div className="flex flex-row flex-wrap justify-center gap-5">
              {catTechs.map((technology) => (
                <motion.div
                  key={technology.name}
                  whileHover={{ scale: 1.12, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1d1836] p-3 shadow-lg ring-1 ring-white/10 transition-all hover:ring-[#915eff]/60">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-center text-[11px] font-medium text-[#aaa6c3]">
                    {technology.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
