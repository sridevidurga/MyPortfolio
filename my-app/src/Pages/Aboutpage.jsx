import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutpage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-10"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-700 text-center mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi 👋, I'm{" "}
          <span className="font-bold text-purple-600">Sridevi Durga</span>, a
          passionate Frontend Developer who loves creating elegant and
          interactive web experiences. With a strong foundation in Computer
          Applications and hands-on training in web technologies, I’m on a
          mission to design and develop responsive, user-friendly, and creative
          websites.
        </p>

        {/* Timeline / Achievements */}
        <div className="space-y-6">
          <div
            className="p-6  bg-white shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-purple-600">🎓 Education</h3>
            <p className="text-gray-700 mt-2">
              Completed <span className="font-bold">BCA</span> at{" "}
              <span className="italic">
                Idhaya College for Women, Kumbakonam
              </span>{" "}
              in 2022.
            </p>
          </div>

          <div
            className="p-6  bg-white shadow-lg rounded-lg"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-pink-600">💻 Certification</h3>
            <p className="text-gray-700 mt-2">
              Successfully completed{" "}
              <span className="font-bold">Front-End Development Course</span> in
              2023 at <span className="italic">Vebbox Software Solutions</span>.
            </p>
          </div>

          <div
            className="p-6  bg-white shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-green-600">🚀 Internship</h3>
            <p className="text-gray-700 mt-2">
              Completed <span className="font-bold">Frontend Internship</span>{" "}
              at <span className="italic">V-Accel</span> (2024 - 2025), gaining
              real-world project experience.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3
            className="text-3xl md:text-4xl font-extrabold text-center text-purple-700 mb-10"
            data-aos="fade-up"
          >
            My Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side */}
            <div className="p-6 bg-white rounded-xl shadow-lg" data-aos="fade-right">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Frontend Development
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>⚡ HTML5, CSS3, JavaScript (ES6+)</li>
                <li>⚡ React.js & Next.js</li>
                <li>⚡ Tailwind CSS, Bootstrap</li>
                <li>⚡ Responsive Web Design</li>
              </ul>
            </div>

            {/* Right side */}
            <div className="p-6 bg-white rounded-xl shadow-lg" data-aos="fade-left">
              <h4 className="text-xl font-semibold text-purple-600 mb-4">
                Tools & Others
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>⚡ Git & GitHub</li>
                <li>⚡ VS Code, Postman</li>
                <li>⚡  MongoDB & Node.js</li>
                <li>⚡  Basic of Php and MySQl</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
