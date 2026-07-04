import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

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
    names: ["Node JS", "Express.js", "Django", "MongoDB", "PostgreSQL", "Redis"],
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
    <div className="space-y-12">
      {skillCategories.map((category) => {
        const catTechs = technologies.filter((t) =>
          category.names.includes(t.name)
        );
        if (catTechs.length === 0) return null;
        return (
          <div key={category.label}>
            {/* Category heading */}
            <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[4px] text-[#aaa6c3]">
              {category.label}
            </p>
            {/* Skill balls */}
            <div className="flex flex-row flex-wrap justify-center gap-8">
              {catTechs.map((technology) => (
                <div
                  key={technology.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="h-28 w-28">
                    <BallCanvas icon={technology.icon} />
                  </div>
                  <p className="text-center text-[12px] font-medium text-[#aaa6c3]">
                    {technology.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
