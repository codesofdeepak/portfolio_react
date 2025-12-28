import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  TrendingUp,
  Database,
  Code2,
  Shield,
  Calendar,
} from 'lucide-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const SkillDashboard = () => {
  /* ================= CORE METRICS ================= */
  const metrics = {
    totalSolved: 210,
    streak: 28,
    successRate: 72.4,
  }

  /* ================= SKILL DISTRIBUTION ================= */
  const skills = [
    {
      name: 'Programming & Problem Solving',
      percent: 43,
      color: '#10B981',
      meaning: 'Logic building, data structures, scheduling algorithms',
    },
    {
      name: 'SQL & Data Analysis',
      percent: 21,
      color: '#F59E0B',
      meaning: 'Sales analysis, KPIs, queries, reporting systems',
    },
    {
      name: 'Web Development',
      percent: 19,
      color: '#3B82F6',
      meaning: 'Frontend, backend APIs, authentication, dashboards',
    },
    {
      name: 'Machine Learning',
      percent: 10,
      color: '#8B5CF6',
      meaning: 'Prediction models, analytics, computer vision',
    },
    {
      name: 'Security Concepts',
      percent: 7,
      color: '#EF4444',
      meaning: 'Authentication, anti-cheating logic, secure systems',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
        <h1 className="text-3xl font-bold">Skills & Capability Dashboard</h1>
        <p className="text-white/60 mt-1">
          Practical skill application, learning consistency, and problem-solving experience
        </p>
      </motion.div>

      {/* TOP METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard
          icon={<Calendar />}
          value={`${metrics.streak} Days`}
          label="Active Learning Streak"
        />
        <MetricCard
          icon={<CheckCircle />}
          value={metrics.totalSolved}
          label="Tasks / Problems Completed"
        />
        <MetricCard
          icon={<TrendingUp />}
          value={`${metrics.successRate}%`}
          label="Successful Implementations"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* SKILL CHARTS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4">
                  <CircularProgressbar
                    value={skill.percent}
                    text={`${skill.percent}%`}
                    styles={buildStyles({
                      textColor: 'white',
                      pathColor: skill.color,
                      trailColor: 'rgba(255,255,255,0.1)',
                    })}
                  />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-white/60 mt-2">{skill.meaning}</p>
              </motion.div>
            ))}
          </div>

          {/* VALUE SECTION (REPLACED RECENT PROBLEMS) */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">How I Apply These Skills</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Analyze sales data using SQL to derive revenue and performance insights</li>
              <li>• Build secure web applications with authentication and role-based access</li>
              <li>• Design scheduling logic for appointment and booking systems</li>
              <li>• Apply ML models for prediction and real-world analytics use cases</li>
              <li>• Implement security checks for online assessments and user actions</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* CODE PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card overflow-hidden"
          >
            <div className="bg-gray-900 p-3 border-b border-white/10 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm ml-4">appointment_scheduler.sql</span>
            </div>
            <div className="p-4 font-mono text-sm text-gray-400">
              <pre>{`-- Find available appointment slots
SELECT slot_time
FROM appointment_slots
WHERE slot_time NOT IN (
  SELECT appointment_time
  FROM appointments
  WHERE appointment_date = CURRENT_DATE
)
ORDER BY slot_time;

-- Validate booking limit
IF daily_bookings < max_limit THEN
  ALLOW_BOOKING();
ELSE
  BLOCK_BOOKING();
END IF;`}</pre>
            </div>
          </motion.div>

          {/* KEY SKILLS */}
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'SQL',
                'React',
                'Node.js',
                'Authentication',
                'Data Analysis',
                'Machine Learning',
                'Security',
                'API Design',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================= COMPONENTS ================= */

const MetricCard = ({ icon, value, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="glass-card p-6 text-center">
    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-[hsl(var(--primary))]">
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
    </div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-white/60">{label}</div>
  </motion.div>
)

export default SkillDashboard
