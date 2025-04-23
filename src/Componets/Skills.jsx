import React from "react";
import { motion } from "framer-motion";

function MySkills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 85 },
    { name: "Python", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-900" id="skills">
      <div className="max-w-5xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">My Skills</h2>
          <p className="text-lg text-gray-200 mt-4">
            Technologies and tools I’m proficient in.
          </p>
        </div>

        {/* Skills with Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-1 flex justify-between items-center">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-gray-200 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
