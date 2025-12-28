import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building,
  MapPin,
  Calendar,
  Users,
  Award,
  Mail,
  Phone,
  Download,
} from 'lucide-react'
import profileImg from '../../assets/profile.png'
import resumePdf from '../../assets/resume.pdf'

const LinkedInClone = () => {
  const [showContact, setShowContact] = useState(false)

  const [endorsements, setEndorsements] = useState({
    Python: 18,
    SQL: 22,
    React: 16,
    'Data Analysis': 20,
    'Machine Learning': 12,
    'Web Security': 10,
  })

  const experiences = [
    {
      id: 1,
      company: 'IIT Delhi (Jet Aerospace Internship)',
      role: 'Software & Systems Intern',
      period: '2024',
      location: 'New Delhi, India',
      description:
        'Worked on technology-driven solutions involving drones, IoT systems, and data processing.',
      achievements: [
        'Worked with sensor data and basic analytics',
        'Collaborated in a multidisciplinary technical environment',
        'Gained exposure to real-world engineering workflows',
      ],
      skills: ['Python', 'IoT Basics', 'Data Processing'],
    },
    {
      id: 2,
      company: 'Academic & Personal Projects',
      role: 'Full-Stack & Data Projects',
      period: '2023 – Present',
      location: 'Remote',
      description:
        'Developed academic and personal projects focusing on data analysis, security, and web applications.',
      achievements: [
        'Sales Data Analysis using SQL',
        'Online Anti-Cheating Quiz Platform',
        'Appointment Booking Web Application',
      ],
      skills: ['SQL', 'React', 'Node.js', 'Authentication'],
    },
  ]

  const handleEndorse = (skill) => {
    setEndorsements((prev) => ({
      ...prev,
      [skill]: prev[skill] + 1,
    }))
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* PROFILE */}
          <div className="flex items-center space-x-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[hsl(var(--primary))]">
              <img
                src={profileImg}
                alt="Deepak Kumar Saw"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold">Deepak Kumar Saw</h1>
              <p className="text-white/60 text-lg">
                B.Tech CSE (Information Security) · Data & Full-Stack Enthusiast
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  India
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3">
            {/* CONTACT INFO */}
            <button
              onClick={() => setShowContact(!showContact)}
              className="px-6 py-2 bg-[hsl(var(--primary))] rounded-full font-medium"
            >
              Contact info
            </button>

            {/* MESSAGE → LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/deepakkumarsaw01/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10"
            >
              Message
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href={resumePdf}
              download
              className="px-6 py-2 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white/10"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        {/* CONTACT DETAILS DROPDOWN */}
        {showContact && (
          <div className="mt-4 glass-card p-4 rounded-lg max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-4 h-4" />
              <span>5911deepak@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span>+91 87893 04327</span>
            </div>
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* ABOUT */}
          <motion.div className="glass-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-white/80">
              Computer Science undergraduate specializing in Information Security,
              with hands-on experience in data analysis, full-stack development,
              and secure web applications. Passionate about building practical,
              scalable, and reliable systems.
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div className="glass-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Experience</h2>

            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="pb-6 border-b border-white/10 last:border-0 last:pb-0"
              >
                <h3 className="text-lg font-bold">{exp.role}</h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mt-1">
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {exp.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-white/80 mt-3">{exp.description}</p>

                <ul className="mt-3 space-y-2">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start">
                      <Award className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <motion.div className="glass-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Skills & Endorsements
            </h3>

            {Object.entries(endorsements).map(([skill, count]) => (
              <div
                key={skill}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg mb-3"
              >
                <div>
                  <div className="font-medium">{skill}</div>
                  <div className="text-sm text-white/60">
                    {count} endorsements
                  </div>
                </div>
                <button
                  onClick={() => handleEndorse(skill)}
                  className="px-3 py-1 border border-white/20 rounded-lg text-sm hover:bg-white/10"
                >
                  Endorse
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LinkedInClone
