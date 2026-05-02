import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    review:
      "Project M1 helped us integrate AI into our platform seamlessly. The performance and scalability are outstanding.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Priya Reddy",
    role: "Product Manager",
    review:
      "The team delivered beyond expectations. Their AI solutions gave us real business insights.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Arjun Verma",
    role: "CTO",
    review:
      "From development to deployment, everything was smooth. Highly recommend for any tech-driven company.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sneha Patel",
    role: "Entrepreneur",
    review:
      "The UI/UX and AI integration they provided completely transformed our product.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Kiran Kumar",
    role: "Business Owner",
    review:
      "Reliable, fast, and highly skilled team. Their solutions helped us scale quickly.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Anjali Mehta",
    role: "Marketing Head",
    review:
      "We saw immediate impact after implementing their analytics solutions. Truly impressive work.",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by startups and businesses to deliver high-quality AI and technology solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#0A2540] font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="mt-4 w-0 h-[2px] bg-[#0A2540] group-hover:w-full transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;