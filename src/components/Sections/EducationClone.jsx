import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Users,
  Star,
} from 'lucide-react'

const EducationClone = () => {
  /* ================= EDUCATION DATA ================= */
  const education = [
    {
      id: 1,
      institution: 'Vellore Institute of Technology',
      degree: 'B.Tech in Computer Science & Engineering (Information Security)',
      period: '2022 – Present',
      description:
        'Undergraduate program focused on computer science fundamentals with specialization in information security, data systems, and modern application development.',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Cryptography',
        'Web Technologies',
        'Machine Learning',
      ],
      logoColor: '#1E40AF',
    },
    {
      id: 2,
      institution: 'Sri Chaitanya Vidya Niketan (CBSE)',
      degree: 'Pre-University Education (Science)',
      period: '2019 – 2021',
      description:
        'Focused on Mathematics, Physics, and analytical problem-solving skills.',
      courses: ['Mathematics', 'Physics', 'Chemisry','English','PE'],
      logoColor: '#9333EA',
    },
    {
      id: 3,
      institution: 'Dhanbad Public School (CBSE)',
      degree: 'Secondary Education',
      period: '2008 – 2019',
      description:
        'Built a strong academic foundation with emphasis on discipline, logic, and curiosity-driven learning.',
      courses: ['Mathematics', 'Science', 'IT','English','Hindi'],
      logoColor: '#16A34A',
    },
  ]

  /* ================= TRAINING ================= */
  const certifications = [
    {
      title: 'Front-End Web Development Internship',
      issuer: 'IIT Delhi × Tryst',
      year: '2025',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
    {
      title: 'SQL for Data Analysis',
      issuer: 'Self-Learning & Practice',
      year: '2024',
      skills: ['SQL Queries', 'Joins', 'Aggregations', 'Reporting'],
    },
    {
      title: 'Machine Learning Foundations',
      issuer: 'Academic & Project-Based',
      year: '2024',
      skills: ['Regression', 'Time Series', 'Model Evaluation'],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold">Education & Learning Journey</h1>
        <p className="text-white/60 mt-1">
          Academic background, continuous learning, and skill development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MAIN TIMELINE */}
        <div className="lg:col-span-2 space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${edu.logoColor}20` }}
                  >
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: edu.logoColor }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-[hsl(var(--primary))]">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-white/80 mb-4">{edu.description}</p>

              {edu.gpa && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                    GPA: {edu.gpa}
                  </span>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Key Subjects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CURRENT LEARNING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">
              Currently Strengthening
            </h2>
            <ul className="space-y-3 text-white/80">
              <li>• Advanced SQL queries for analytics and reporting</li>
              <li>• Full-stack system design for scalable applications</li>
              <li>• Security best practices for web applications</li>
              <li>• Time-series forecasting and ML model evaluation</li>
            </ul>
          </motion.div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Training & Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium">{cert.title}</h4>
                  <p className="text-sm text-white/60">{cert.issuer}</p>
                  <span className="text-xs text-white/60">{cert.year}</span>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LEARNING HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4">
              Learning Highlights
            </h3>

            <StatItem
              label="Years of Formal Education"
              value="5+"
              icon={<Clock className="w-4 h-4" />}
            />
            <StatItem
              label="Major Academic Projects"
              value="6+"
              icon={<BookOpen className="w-4 h-4" />}
            />
            <StatItem
              label="Internship Experience"
              value="1"
              icon={<Users className="w-4 h-4" />}
            />
            <StatItem
              label="Overall Academic Standing"
              value="Good"
              icon={<Star className="w-4 h-4" />}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ================= SMALL COMPONENT ================= */

const StatItem = ({ label, value, icon }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg mb-3">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary))]/20 flex items-center justify-center">
        {icon}
      </div>
      <span>{label}</span>
    </div>
    <span className="font-bold text-lg">{value}</span>
  </div>
)

export default EducationClone
