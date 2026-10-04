import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#173e50] px-6 py-24 text-white lg:px-10"
    >
      <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -bottom-44 -left-20 h-96 w-96 rounded-full border border-white/10" />

      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#e9c27b]">
          Begin Your Journey
        </p>

        <h2 className="text-4xl leading-tight font-semibold md:text-6xl">
          Every Great Journey
          <span className="block text-[#e9c27b]">
            Starts With Learning
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl leading-8 text-gray-200">
          Take the next step toward an enriching educational
          experience. Connect with our admissions team to
          learn more about the opportunities at TIS.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e9c27b] px-8 py-4 font-bold text-[#173e50] transition hover:bg-white"
        >
          Enquire Now
          <ArrowUpRight size={20} />
        </motion.a>
      </Reveal>
    </section>
  );
}