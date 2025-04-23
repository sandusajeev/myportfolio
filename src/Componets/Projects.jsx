import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-900" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">My Projects</h2>
          <p className="text-lg text-gray-200 mt-4">
          Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img src="/src/assets/todo.jpg" alt="todo" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">TODO LIST</h3>
            <p className="text-gray-700 mb-2 text-justify">
            A MERN stack To-Do List application that allows users to add, update, delete, and manage daily tasks with login functionality and data persistence
            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: React, Node.js Javascript, HTML, CSS</p>
            <a
              href="https://todolist-react-sandu-sajeev.netlify.app/"
              className="text-purple-600 hover:underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <img src="/src/assets/gsap.png" alt="Portfolio Website" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">GSAP Website</h3>
            <p className="text-gray-700 mb-2 text-justify">
            An interactive, visually engaging website, built using GSAP (GreenSock Animation Platform) to create smooth, scroll-triggered animations, dynamic page transitions, and vibrant UI effects. This project focuses on enhancing user experience through modern motion design, and performance-optimized animations.

            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: HTML, CSS, Bootstrap, JavaScript, GSAP, React,  ScrollTrigger Plugin</p>
            <a
              href="https://gsap-website-sandu-sajeev.netlify.app/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <img src="/src/assets/parallex.png" alt="Weather App" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Parallex Website</h3>
            <p className="text-gray-700 mb-2 text-justify">
              A dynamic Parallax website showcasing smooth scrolling animations and interactive visual effects. The site includes multiple layers that move at different speeds, creating a 3D effect as the user scrolls down. This project demonstrates the use of advanced CSS techniques and JavaScript to create an engaging user

            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: HTML, CSS, JavaScript, Parallax.js, React.</p>
            <a
              href="https://parallax-website-sandu-sajeev.netlify.app/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <img src="/src/assets/qoutes.png" alt="Weather App" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Random Quotes Generater</h3>
            <p className="text-gray-700 mb-2 text-justify">
            A random quote generator built with React, fetching quotes from a public API. The app allows users to generate new motivational or inspirational quotes at the click of a button. With a clean and responsive design, powered by React and styled with Bootstrap, this app provides a delightful experience for users seeking daily inspiration.
            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: React, Bootstrap, React Bootstrap, Public API, JavaScript, HTML, CSS.</p>
            <a
              href="https://quotes-generator-preetha.netlify.app/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <img src="/src/assets/travel.png" alt="Weather App" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Travell Website</h3>
            <p className="text-gray-700 mb-2 text-justify">
            A travel website designed to inspire wanderlust, featuring stunning destinations, interactive maps, and travel tips. The site is built using HTML and CSS, with media queries for responsive design to ensure it looks great on any device. It includes sections for featured destinations, travel packages, and a simple contact form.
            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: HTML, CSS, Media Queries, Bootstrap</p>
            <a
              href="https://sandusajeev.github.io/Travel_site/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>

          {/* Project 6 */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <img src="/src/assets/anytimefitness.png" alt="Weather App" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Fitness Website</h3>
            <p className="text-gray-700 mb-2 text-justify">
            A clone of the Gym Anytime Fitness website, designed to provide users with an engaging and interactive fitness experience. The website showcases various gym membership plans, fitness schedules, and offers a user-friendly interface to navigate through services. Built using HTML, CSS, and Bootstrap, the site is fully responsive and provides an attractive layout for both desktop and mobile users.
            </p>
            <p className="text-sm text-gray-600 mb-4">Tech Used: HTML, CSS, Bootstrap</p>
            <a
              href="https://sandusajeev.github.io/Anytime_fitness/"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Live Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
