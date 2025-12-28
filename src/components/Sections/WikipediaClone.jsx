import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Briefcase, Code, Globe } from 'lucide-react'
import profilePic from '../../assets/profile.png'

const WikipediaClone = () => {
  const contents = [
    'Early Life & Background',
    'Education',
    'Professional Experience',
    'Technical Philosophy'
  ]

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'SQL & Data Analysis', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js & Express', level: 82 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Information Security', level: 78 }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8 pb-4 border-b border-white/20"
      >
        <div className="flex items-center space-x-4">
          <Globe className="w-8 h-8 text-[hsl(var(--primary))]" />
          <div>
            <h1 className="text-4xl font-bold">Deepak Kumar Saw</h1>
            <p className="text-white/60">
              Aspiring Data Analyst | AI/ML Enthusiast | Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/60"></p>
          <p className="text-sm">Personal portfolio documentation</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          <div className="glass-card rounded-lg p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Contents
            </h3>

            <ul className="space-y-2">
              {contents.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  className="cursor-pointer hover:text-[hsl(var(--primary))]"
                >
                  <span className="text-white/40 mr-2">{index + 1}.</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-4">Technical Stack</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-2 space-y-8">
          <Section title="Early Life & Background">
            <p>
              I am a Computer Science and Engineering undergraduate specializing in
              Information Security. My interest in technology began with curiosity
              about how digital systems work and evolved into building secure,
              data-driven, and scalable applications.
            </p>
          </Section>

          <Section title="Education">
            <p>
              I am currently pursuing a B.Tech in Computer Science and Engineering
              with Information Security at Vellore Institute of Technology, Vellore.
            </p>
          </Section>

          <Section title="Professional Experience">
            <TimelineItem
              year="May 2025 – June 2025"
              title="Front-End Web Development Intern · IIT Delhi × Tryst (Remote)"
              description="Developed responsive webpages using HTML, CSS, and JavaScript. Collaborated with a remote team to build reusable UI components, improving performance and increasing engagement by 40%."
            />
          </Section>

          <Section title="Technical Philosophy">
            <blockquote className="border-l-4 border-[hsl(var(--primary))] pl-4 italic">
              “Build systems that are simple to use, reliable to scale, and secure by design.”
            </blockquote>
            <p>
              I focus on clean architecture, performance optimization, and continuous
              learning to create real-world impact through technology.
            </p>
          </Section>
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-1 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-lg p-6 sticky top-24"
          >
            {/* SQUARE IMAGE */}
            <img
              src={profilePic}
              alt="Deepak Kumar Saw"
              className="w-full aspect-square mb-4 object-cover border border-white/10"
            />

            <h3 className="font-bold text-center text-xl">Deepak Kumar Saw</h3>
            <p className="text-white/60 text-center mb-6">
              Data • AI • Full-Stack • Security
            </p>

            <div className="space-y-4">
              <InfoItem icon={Briefcase} text="Student & Intern" />
              <InfoItem icon={MapPin} text="Vellore, Tamil Nadu, India" />
              <InfoItem icon={Code} text="Python · React · SQL · ML" />
              <InfoItem icon="🎓" text="B.Tech CSE (InfoSec)" />
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="glass-card rounded-lg p-6"
  >
    <h2 className="text-2xl font-bold mb-4 border-b border-white/10">{title}</h2>
    <div className="prose prose-invert max-w-none">{children}</div>
  </motion.section>
)

const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-8 pb-4">
    <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[hsl(var(--primary))]" />
    <div className="text-sm text-white/60 mb-1">{year}</div>
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-white/80">{description}</p>
  </div>
)

const InfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3">
    {typeof Icon === 'string' ? <span>{Icon}</span> : <Icon className="w-5 h-5" />}
    <span className="text-sm">{text}</span>
  </div>
)

export default WikipediaClone
