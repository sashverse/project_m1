import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactScreen = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE - INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Let’s Talk
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Have a project in mind or want to explore AI solutions?
            We’re here to help you build something amazing.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0A2540]/10 text-[#0A2540] rounded-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-[#0A2540]">
                  hr@sashverse.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0A2540]/10 text-[#0A2540] rounded-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-[#0A2540]">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0A2540]/10 text-[#0A2540] rounded-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-[#0A2540]">
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#0A2540] text-white py-3 rounded-lg font-medium hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;