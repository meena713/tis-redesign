import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users } from "lucide-react";
import Reveal from "./Reveal";

const programs = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "An engaging academic environment that encourages curiosity, critical thinking, and a strong foundation in learning.",
  },
  {
    icon: Lightbulb,
    title: "Creative Learning",
    description:
      "Opportunities to explore new ideas, develop creativity, and apply knowledge through interactive experiences.",
  },
  {
    icon: Users,
    title: "Holistic Development",
    description:
      "A learning experience that supports collaboration, communication, confidence, and personal growth.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="bg-white px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#bd8b3d]">
            Our Learning Experience
          </p>
          <h2 className="text-4xl font-semibold text-[#173e50] md:text-5xl">
            Explore Our Academics
          </h2>
          <p className="mt-5 leading-7 text-gray-600">
            Discover an approach to education designed to
            encourage learning, innovation, and growth.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.title} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-gray-100 bg-[#faf9f6] p-9 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#173e50] text-[#e9c27b]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#173e50]">
                    {program.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {program.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}