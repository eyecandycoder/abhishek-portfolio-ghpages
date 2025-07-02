
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
const DEFAULT_IMG = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80";

function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/eyecandycoder/repos?sort=updated")
      .then(res => res.json())
      .then(data => {
        setRepos(
          data.filter(r => !r.fork && r.description).slice(0, 6)
        );
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="py-20 px-4 min-h-[80vh] relative"
      id="projects"
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #f3e8ff 100%)",
        boxShadow: "inset 0 2px 24px #e0e7ef"
      }}
    >
      <h3 className="text-3xl font-extrabold mb-12 text-center text-gray-900 drop-shadow-lg">🚀 Projects</h3>
      {loading ? (
        <div className="text-center text-lg">Loading projects...</div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {repos.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                scale: 1.045,
                rotate: -1 + Math.random() * 2, // fun little card tilt!
                boxShadow: "0 8px 48px rgba(68,0,255,0.08)",
              }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-[8px] border border-indigo-100 flex flex-col transition-transform"
              style={{
                borderRadius: "1.2rem",
                minHeight: 370
              }}
            >
              <img
                src={DEFAULT_IMG}
                alt="Project visual"
                className="w-full h-40 object-cover"
                style={{ filter: "blur(0px) saturate(1.2)" }}
                loading="lazy"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold mb-2 text-gray-800">{project.name.replaceAll('_', ' ')}</h4>
                <p className="text-gray-600 text-[0.98rem] mb-3 flex-1">{project.description}</p>
                <div className="flex items-center gap-3 mb-2 mt-auto">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">{project.language ?? "Other"}</span>
                  <span className="text-xs text-gray-500">★ {project.stargazers_count}</span>
                </div>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 px-4 py-1 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 text-white font-semibold text-xs shadow hover:scale-105 transition-transform"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}





export default function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <nav className="p-4 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-800">
          <h1 className="text-xl font-bold">Abhishek Chauhan</h1>
          <div className="flex gap-3 items-center">
            <button onClick={toggleTheme} title="Toggle Theme">
              {dark ? <Sun /> : <Moon />}
            </button>
            <a href="#contact" className="font-medium">Contact</a>
          </div>
        </nav>

        <section className="text-center py-20 px-4">
          <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Hi, I’m Abhishek — a Data Engineer
          </motion.h2>
          <p className="text-lg max-w-xl mx-auto">
            I build scalable data pipelines using PySpark, Databricks, AWS and more.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xl">
            <a href="mailto:abhishekchauhan5757@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/eyecandycoder" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/abhishek-chauhan007" target="_blank"><FaLinkedin /></a>
          </div>
        </section>

        {/* Dynamic GitHub Projects section */}
        <ProjectsSection />

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Python', 'SQL', 'Spark', 'Databricks', 'AWS', 'Airflow', 'Tableau', 'GCP'].map(skill => (
              <motion.div key={skill} className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 text-center"
                whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6" id="contact">
          <h3 className="text-2xl font-semibold mb-4 text-center">Contact Me</h3>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            <textarea rows="4" placeholder="Your Message" className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
          </form>
        </section>
      </main>
    </div>
  )
}

