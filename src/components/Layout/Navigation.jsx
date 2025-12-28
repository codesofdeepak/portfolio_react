import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  FolderGit2,
  Brain,
  GraduationCap,
  Briefcase,
  BarChart3,
  Menu,
  X,
  Github,
  Linkedin,
} from 'lucide-react'
import profileImg from '../../assets/profile.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', icon: Home, label: 'About' },
    { to: '/projects', icon: FolderGit2, label: 'Projects' },
    { to: '/skills', icon: Brain, label: 'Skills' },
    { to: '/education', icon: GraduationCap, label: 'Education' },
    { to: '/experience', icon: Briefcase, label: 'Experience' },
    { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* LEFT: PROFILE + NAME */}
            <div className="flex items-center space-x-3">
              <img
                src={profileImg}
                alt="Deepak Kumar Saw"
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                <h1 className="text-lg font-bold leading-tight">
                  Deepak Kumar Saw
                </h1>
                <p className="text-xs text-white/60">Personal Portfolio</p>
              </div>
            </div>

            {/* CENTER: NAV ITEMS */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                      isActive
                        ? 'bg-[hsl(var(--primary))] text-white'
                        : 'hover:bg-white/10'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* RIGHT: SOCIAL ICONS */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/codesofdeepak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--primary))] transition"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/deepakkumarsaw01/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--primary))] transition"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE NAV */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-4 right-4 z-40 md:hidden glass-card rounded-lg border border-white/10 backdrop-blur-xl"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[hsl(var(--primary))] text-white'
                      : 'hover:bg-white/10'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* MOBILE SOCIAL LINKS */}
            <div className="flex justify-center space-x-6 pt-3 border-t border-white/10">
              <a
                href="https://github.com/codesofdeepak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/deepakkumarsaw01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navigation
