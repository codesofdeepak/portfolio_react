import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, Code, ExternalLink } from 'lucide-react'

const GitHubClone = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [repos, setRepos] = useState([])

  // ================= YOUR PROJECTS =================
  const projects = [
    {
      id: 1,
      name: 'Stock Analysis & Prediction Dashboard',
      description:
        'Interactive dashboard for real-time stock analysis and price prediction.',
      language: 'Python',
      stars: 52,
      forks: 14,
      tech: ['Python', 'Streamlit', 'yFinance', 'Plotly', 'SARIMAX'],
      color: '#3572A5',
      github: 'https://github.com/deepakkumarsaw/stock-analysis-dashboard',
      demo: '',
      commits: [
        { hash: 'a1b2c3d', message: 'Add RSI & MACD indicators', date: '3 days ago' },
        { hash: 'e4f5g6h', message: 'Implement SARIMAX forecasting', date: '1 week ago' },
      ],
    },
    {
      id: 2,
      name: 'Sales Data Analysis using SQL',
      description:
        'SQL-based analytics system to calculate revenue, profit, and sales trends.',
      language: 'SQL',
      stars: 34,
      forks: 9,
      tech: ['SQL', 'Joins', 'CTE', 'Aggregations', 'Window Functions'],
      color: '#E38C00',
      github: 'https://github.com/codesofdeepak/sales_data_analysis_project',
      demo: '',
    },
    {
      id: 3,
      name: 'AI-Based Wellness Coach',
      description:
        'AI-powered system for posture correction and intelligent diet recommendation.',
      language: 'Python',
      stars: 41,
      forks: 10,
      tech: ['OpenCV', 'NLP', 'React', 'JWT', 'REST APIs'],
      color: '#3572A5',
      github: 'https://github.com/codesofdeepak/ai-wellness-coach',
      demo: '',
    },
    {
      id: 4,
      name: 'Online Anti-Cheating Quiz Platform',
      description:
        'Secure online quiz platform with basic anti-cheating mechanisms.',
      language: 'JavaScript',
      stars: 47,
      forks: 12,
      tech: ['React', 'Authentication', 'Timers', 'Webcam Monitoring'],
      color: '#F1E05A',
      github: 'https://github.com/deepakkumarsaw/anti-cheating-quiz',
      demo: '',
    },
    {
      id: 5,
      name: 'Portfolio Website',
      description:
        'Personal portfolio featuring Wikipedia-style About and GitHub-style Projects.',
      language: 'JavaScript',
      stars: 29,
      forks: 6,
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      color: '#F1E05A',
      github: 'https://github.com/deepakkumarsaw/portfolio',
      demo: 'https://deepakkumarsaw.vercel.app',
    },
    {
      id: 6,
      name: 'Appointment Booking Application',
      description:
        'Web-based appointment booking system with slot management and authentication.',
      language: 'JavaScript',
      stars: 31,
      forks: 8,
      tech: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Authentication',
        'Time Slot Management',
      ],
      color: '#F1E05A',
      github: 'https://github.com/deepakkumarsaw/appointment-booking-app',
      demo: '',
      commits: [
        {
          hash: 'b7c9d1e',
          message: 'Implement appointment slot booking logic',
          date: '4 days ago',
        },
        {
          hash: 'a2f4e6d',
          message: 'Add user authentication and validation',
          date: '1 week ago',
        },
      ],
    },
  ]

  useEffect(() => {
    setRepos(projects)
  }, [])

  const LanguageBadge = ({ language, color }) => (
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm">{language}</span>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">deepakkumarsaw</h1>
        <p className="text-white/60">
          B.Tech CSE (InfoSec) · Data Analyst · Full-Stack Developer
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: REPOSITORIES */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Repositories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 cursor-pointer"
                onClick={() => setSelectedProject(repo)}
              >
                <h3 className="text-lg font-semibold text-[hsl(var(--primary))]">
                  {repo.name}
                </h3>
                <p className="text-sm text-white/60 mt-1">{repo.description}</p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <LanguageBadge
                      language={repo.language}
                      color={repo.color}
                    />
                    <IconStat icon={Star} value={repo.stars} />
                    <IconStat icon={GitFork} value={repo.forks} />
                  </div>

                  <div className="flex space-x-2">
                    {repo.tech.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-white/5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="lg:col-span-1">
          {selectedProject ? (
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-xl font-bold">{selectedProject.name}</h3>
              <p className="text-sm text-white/60 mt-1">
                {selectedProject.description}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center bg-[hsl(var(--primary))] rounded-lg font-medium"
                >
                  GitHub Repo
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center border border-white/20 rounded-lg flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <DetailRow label="Language">
                  <LanguageBadge
                    language={selectedProject.language}
                    color={selectedProject.color}
                  />
                </DetailRow>
                <DetailRow label="Stars">{selectedProject.stars}</DetailRow>
                <DetailRow label="Forks">{selectedProject.forks}</DetailRow>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.commits && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Recent Commits</h4>
                  <div className="space-y-2">
                    {selectedProject.commits.map((c, i) => (
                      <div
                        key={i}
                        className="text-sm bg-white/5 p-2 rounded"
                      >
                        <div className="font-mono text-[hsl(var(--primary))]">
                          {c.hash}
                        </div>
                        <div>{c.message}</div>
                        <div className="text-xs text-white/60">{c.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card p-6 text-center">
              <Code className="w-10 h-10 mx-auto text-white/40 mb-3" />
              <p className="text-white/60 text-sm">
                Select a repository to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ================= SMALL COMPONENTS ================= */

const IconStat = ({ icon: Icon, value }) => (
  <div className="flex items-center space-x-1 text-sm">
    <Icon className="w-4 h-4" />
    <span>{value}</span>
  </div>
)

const DetailRow = ({ label, children }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/60">{label}</span>
    {children}
  </div>
)

export default GitHubClone
