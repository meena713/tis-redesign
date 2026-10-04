
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[70vh] items-center bg-blue-900 px-4 py-16 text-white sm:px-8 lg:min-h-[85vh] lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to TIS School
          </h1>

          <p className="mt-5 text-base text-blue-100 sm:text-lg md:text-xl">
            Inspiring young minds through education, creativity, and excellence.
          </p>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-100"
          >
            Explore More
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;