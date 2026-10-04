import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f6] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000"
              alt="Students learning together"
              className="h-[450px] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-7 -right-5 hidden rounded-2xl bg-[#e9c27b] p-7 text-[#173e50] shadow-lg sm:block">
              <p className="text-3xl font-bold">TIS</p>
              <p className="mt-1 text-sm font-medium">
                Learning for life
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#bd8b3d]">
            About Our Institution
          </p>

          <h2 className="text-4xl leading-tight font-semibold text-[#173e50] md:text-5xl">
            Education That Goes Beyond the Classroom
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            At TIS, education is about more than academics.
            We aim to create an engaging environment that
            encourages students to explore their interests,
            build confidence, and develop lifelong skills.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our approach focuses on learning, creativity,
            collaboration, and personal development to help
            every learner discover their potential.
          </p>

          <a
            href="#academics"
            className="mt-8 inline-flex items-center gap-3 font-semibold text-[#173e50] transition hover:text-[#bd8b3d]"
          >
            Explore Our Approach
            <ArrowUpRight size={19} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}