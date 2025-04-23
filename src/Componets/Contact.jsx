import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o239gwa", 
      "template_5i4o3u2", 
      form.current,
      "n6zlCiRutPGY9vhP4" 
    )
    .then(() => {
      toast.success("Message sent successfully! 🚀");
      form.current.reset();
    })
    .catch(() => {
      toast.error("Failed to send message. Try again later.");
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-900 text-white" id="contact">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
        

        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md text-black border border-black bg-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md text-black border border-black bg-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded-md text-black border border-black bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>


        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex items-center gap-4">
            <FaPhone />
            <span>+91 9656223272</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope />
            <span>sandusajeev51@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt />
            <span>Kerala, India</span>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub />
            <a href="https://github.com/sandusajeev" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/sandu-sajeev/" target="_blank" rel="noopener noreferrer" className="underline">
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

