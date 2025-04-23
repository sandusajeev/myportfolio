import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-900" id="about">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">About Me</h2>
          <p className="text-lg text-gray-200 mt-4">

          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4"></h3>
            <p className="text-lg text-justify text-gray-200 mb-6">
              I'm Sandu Sajeev, a passionate MERN Stack Developer with a focus on creating scalable and performant applications.
              I have a strong background in backend technologies like Node.js and Express, and I'm proficient in front-end development using React.js.
              Additionally, I have hands-on experience working with databases like MongoDB and SQL.
            </p>
            <p className="text-lg text-justify text-gray-200">
              I am always eager to learn new technologies and contribute to the growth of web development.
              In my spare time, I enjoy writing clean and efficient code, and exploring new tech trends.
            </p>
          </motion.div>

         
          <motion.div
            className="flex-1 md:flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/src/assets/sandu1.png" 
              alt="Sandu"
              className="w-72 h-72 object-cover rounded-full shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;


