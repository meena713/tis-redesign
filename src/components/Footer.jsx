
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold mb-3">TIS School</h2>
          <p className="text-slate-300">
            Inspiring young minds through learning, creativity, and excellence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-slate-300">
            <a href="#about" className="hover:text-white">About Us</a>
            <a href="#academics" className="hover:text-white">Academics</a>
            <a href="#admissions" className="hover:text-white">Admissions</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <div className="flex flex-col gap-3 text-slate-300">
            <p className="flex items-center gap-2">
              <Mail size={18} /> Email us
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> Call us
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Visit our school
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10 pt-5 text-center text-slate-400">
        <p>© {new Date().getFullYear()} TIS School. All rights reserved.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-4 hover:text-white"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;