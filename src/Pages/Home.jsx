import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import About from '../Componets/About';
import Projects from '../Componets/Projects';
import Contact from '../Componets/Contact';
import Skills from '../Componets/Skills';

function Home() {
  return (
    <>
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900 px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-1xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-700 ease-in-out">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              HI, I AM <span className=''>SANDU SAJEEV</span>
            </motion.h1>
          </h1>
          <p className="text-lg text-white text-justify mb-6">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className='font-bold'>MERN STACK DEVELOPER</span> <br />
              I'm a passionate Fullstack Developer with a strong command of HTML, CSS, JavaScript, React, Tailwind CSS, and modern web design principles. I enjoy crafting intuitive, user-friendly websites and dynamic applications that not only look great but also solve real-world problems. I'm always excited to explore new technologies and bring creative ideas to life.
            </motion.h1>
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl text-white">
            <motion.a
              href="https://github.com/sandusajeev"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sandu-sajeev/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:ysandusajeev51@gmail.com"
              className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <FaTwitter />
            </motion.a>
          </div>

          <div className="mt-6">
            <a
              href="/cv/Sandu_Sajeev_Profile.pdf"
              download="Sandu_CV.pdf"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-all duration-300 ease-in-out hover:scale-110"
            >
              Download CV
            </a>
          </div>
        </div>


        <div className="flex-1 md:flex items-center justify-center">
          <img
            src="/src/assets/sandu.jpg"
            alt="Sandu"
            className="w-90 h-90 object-cover rounded-t-3xl rounded-b-3xl shadow-5xl transform transition-all duration-700 ease-in-out hover:scale-110" 
          />
        </div>
      </div>
    </section>
<hr />
<About/>
<hr />
<Projects/>
<hr />
<Skills/>
<hr/>
<Contact/>
    </>
  );
}

export default Home;
