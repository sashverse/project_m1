import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Project M1</h2>
          <p className="text-sm leading-relaxed">
            Building modern digital experiences with performance, scalability, and great design.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: abc@gmail.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Location: Hyderabad, India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <div className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-[#0A2540] transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-[#0A2540] transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-[#0A2540] transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-[#0A2540] transition cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center text-sm py-4">
        © {new Date().getFullYear()} Project M1. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;