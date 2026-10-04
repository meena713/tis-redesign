import { motion } from "framer-motion";
import Reveal from "./Reveal";

const facilities = [
  {
    title: "Modern Classrooms",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900",
    description:
      "Supportive spaces for interactive and collaborative learning.",
  },
  {
    title: "Learning Resources",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900",
    description:
      "Resources that encourage exploration and independent learning.",
  },
  {
    title: "Sports and Activities",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
    description:
      "Activities that promote teamwork and active participation.",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-[#f3f5f4] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#bd8b3d]">
            Campus Experience
          </p>
          <h2 className="text-4xl font-semibold text-[#173e50] md:text-5xl">
            Spaces That Inspire
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {facilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-[#173e50]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}