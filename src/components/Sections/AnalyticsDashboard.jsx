import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  TrendingUp,
  Clock,
  Code,
  GitCommit,
  Star,
  Users,
  Calendar,
  Activity,
  PieChart,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('month')

  /* ================= REALISTIC STATS ================= */
  const stats = {
    commits: 210,
    streak: 28,
    hoursCoded: 180,
    projectsActive: 4,
  }

  /* ================= COMMIT ACTIVITY ================= */
  const commitData = [
    { day: 'Mon', commits: 8 },
    { day: 'Tue', commits: 12 },
    { day: 'Wed', commits: 10 },
    { day: 'Thu', commits: 15 },
    { day: 'Fri', commits: 14 },
    { day: 'Sat', commits: 6 },
    { day: 'Sun', commits: 4 },
  ]

  /* ================= LANGUAGE USAGE ================= */
  const languageData = [
    { name: 'Python', value: 35, color: '#3572A5' },
    { name: 'JavaScript', value: 30, color: '#F1E05A' },
    { name: 'SQL', value: 20, color: '#E38C00' },
    { name: 'HTML/CSS', value: 10, color: '#E34C26' },
    { name: 'Other', value: 5, color: '#6E7681' },
  ]

  /* ================= DAILY PRODUCTIVITY ================= */
  const productivityData = [
    { hour: '9AM', value: 60 },
    { hour: '10AM', value: 75 },
    { hour: '11AM', value: 85 },
    { hour: '12PM', value: 70 },
    { hour: '2PM', value: 80 },
    { hour: '3PM', value: 90 },
    { hour: '4PM', value: 88 },
    { hour: '5PM', value: 72 },
  ]

  /* ================= PROJECT PERFORMANCE ================= */
  const projectData = [
    {
      name: 'Stock Analysis Dashboard',
      stars: 52,
      forks: 14,
    },
    {
      name: 'Sales Data Analysis (SQL)',
      stars: 34,
      forks: 9,
    },
    {
      name: 'Anti-Cheating Quiz Platform',
      stars: 47,
      forks: 12,
    },
    {
      name: 'Appointment Booking App',
      stars: 31,
      forks: 8,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Development Analytics</h1>
            <p className="text-white/60">
              Overview of coding activity, learning effort, and project work
            </p>
          </div>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<GitCommit />}
          label="Total Commits"
          value={stats.commits}
        />
        <StatCard
          icon={<Calendar />}
          label="Learning Streak"
          value={`${stats.streak} days`}
        />
        <StatCard
          icon={<Clock />}
          label="Hours Coded"
          value={stats.hoursCoded}
        />
        <StatCard
          icon={<Code />}
          label="Active Projects"
          value={stats.projectsActive}
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* COMMIT CHART */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Weekly Commit Activity
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="day" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="commits" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* LANGUAGE PIE */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <PieChart className="w-5 h-5 mr-2" />
            Language Usage (% of work)
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={languageData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, value }) => `${name} (${value}%)`}
                >
                  {languageData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* PRODUCTIVITY + PROJECTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PRODUCTIVITY */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Daily Productivity Trend
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="hour" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Area
                  dataKey="value"
                  stroke="hsl(var(--secondary))"
                  fill="hsl(var(--secondary) / 0.3)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PROJECT PERFORMANCE */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Project Engagement
          </h3>

          <div className="space-y-4">
            {projectData.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{p.name}</h4>
                  <div className="text-sm text-white/60 mt-1">
                    ⭐ {p.stars} · 🍴 {p.forks}
                  </div>
                </div>
                <div className="font-bold">
                  {(p.stars + p.forks * 2) / 10}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================= SMALL COMPONENT ================= */

const StatCard = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="glass-card p-6 rounded-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-white/60">{label}</div>
  </motion.div>
)

export default AnalyticsDashboard
