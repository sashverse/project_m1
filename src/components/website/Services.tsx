import {
  FaBrain,
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBrain size={28} />,
    title: "AI & Machine Learning",
    desc: "Build intelligent systems with predictive models, NLP, and automation tailored to your business.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Custom Software Development",
    desc: "Scalable, high-performance web and enterprise applications built using modern technologies.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud & DevOps",
    desc: "Deploy, manage, and scale applications seamlessly using cloud infrastructure and CI/CD pipelines.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Mobile App Development",
    desc: "Create responsive and user-friendly mobile applications for Android and iOS platforms.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Cybersecurity Solutions",
    desc: "Protect your applications and data with advanced security frameworks and monitoring systems.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Data Analytics & Insights",
    desc: "Turn raw data into actionable insights with dashboards, BI tools, and advanced analytics.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540]">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions to help businesses innovate, scale, and lead in the AI-driven world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0A2540]/10 text-[#0A2540] mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0A2540] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Line */}
              <div className="mt-4 w-0 h-[2px] bg-[#0A2540] group-hover:w-full transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;