import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Our Location",
      value: "Add the official TIS address",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "Add the official phone number",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "Add the official email address",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#faf9f6] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#bd8b3d]">
            Get in Touch
          </p>

          <h2 className="text-4xl font-semibold text-[#173e50] md:text-5xl">
            Let's Start a Conversation
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Have questions about admissions or the learning
            experience? Reach out to the TIS team.
          </p>

          <div className="mt-10 space-y-7">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#173e50] text-[#e9c27b]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#173e50]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            action="mailto:your-email@example.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl bg-white p-7 shadow-lg md:p-10"
          >
            <h3 className="mb-7 text-2xl font-semibold text-[#173e50]">
              Send an Enquiry
            </h3>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="mb-5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#bd8b3d]"
            />

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mb-5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#bd8b3d]"
            />

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="How can we help you?"
              className="mb-6 w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#bd8b3d]"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#173e50] px-6 py-4 font-semibold text-white transition hover:bg-[#bd8b3d]"
            >
              Send Message <Send size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}