export const AboutScreen = () => {
    return (
        <div className="min-h-screen bg-[#0A2540] text-white px-6 md:px-16 py-16 mt-12">

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-[#F9B233]">Sashverse</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Sashverse Technologies Private Limited is a next-generation technology company
                    focused on building innovative, scalable, and intelligent digital solutions
                    for the future. We specialize in AI-driven platforms, enterprise applications,
                    and real-world impactful products.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-[#F9B233]">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        To empower businesses and individuals through advanced technology solutions
                        that drive innovation, efficiency, and growth. We aim to create impactful
                        digital ecosystems that solve real-world problems.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-[#F9B233]">Our Vision</h2>
                    <p className="text-gray-300 leading-relaxed">
                        To become one of the world's leading technology companies by building
                        future-ready products, fostering innovation, and creating opportunities
                        for the next generation of developers and entrepreneurs.
                    </p>
                </div>
            </div>

            {/* What We Do */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-semibold mb-10 text-center">What We Do</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "AI & Automation Solutions",
                        "Enterprise Software Development",
                        "Learning Management Systems",
                        "Cloud & DevOps Engineering",
                        "Real-time Data Processing Systems",
                        "Startup Product Development"
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#0F6FAF] to-[#0A2540] p-6 rounded-2xl shadow-lg hover:scale-105 transition"
                        >
                            <p className="text-lg font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Director Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-semibold mb-10 text-center">
                    Leadership
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 p-8 rounded-2xl shadow-lg">

                    {/* Image */}
                    <div className="w-68 h-68 rounded-full bg-gray-300 overflow-hidden">
                        {/* Replace with actual image */}
                        <img
                            src="/me.png"
                            alt="Director"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">Santhosh Mudavath</h3>
                        <p className="text-[#F9B233] mb-4">Founder & Director</p>

                        <p className="text-gray-300 leading-relaxed">
                            Santhosh Mudavath is the visionary behind Sashverse Technologies.
                            With expertise in full-stack development, system architecture, and
                            scalable product design, he leads the company with a mission to build
                            impactful, future-ready technology solutions. He is deeply involved
                            in product innovation, engineering excellence, and strategic growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-semibold mb-10 text-center">
                    Our Core Values
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        "Innovation",
                        "Integrity",
                        "Excellence",
                        "Customer Focus"
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="bg-white/5 p-6 rounded-xl text-center shadow hover:bg-white/10 transition"
                        >
                            <p className="font-semibold">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">
                    Let’s Build the Future Together 🚀
                </h2>
                <p className="text-gray-300 mb-6">
                    Join us in creating innovative solutions and transforming ideas into reality.
                </p>

                <button className="bg-[#F9B233] text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Contact Us
                </button>
            </div>

        </div>
    );
};