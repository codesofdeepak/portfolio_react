import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Navigation from './components/Layout/Navigation'
import InteractiveBackground from './components/Shared/InteractiveBackground'


import WikipediaClone from './components/Sections/WikipediaClone'
import GitHubClone from './components/Sections/GitHubClone'
import LeetCodeClone from './components/Sections/LeetCodeClone'
import EducationClone from './components/Sections/EducationClone'
import LinkedInClone from './components/Sections/LinkedInClone'
import AnalyticsDashboard from './components/Sections/AnalyticsDashboard'

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // ESC key closes menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* 3D BACKGROUND (CLICK-THROUGH) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <InteractiveBackground />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 right-6 z-50 glass-card px-6 py-2 rounded-full font-semibold tracking-wide hover:scale-110 transition-all"
      >
        MENU
      </button>

      {/* GAME MENU */}
      <AnimatePresence>
        {menuOpen && <GameMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>

      <Navigation />

      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 pt-24 pb-16"
        >
          <Routes>
            <Route path="/" element={<WikipediaClone />} />
            <Route path="/projects" element={<GitHubClone />} />
            <Route path="/skills" element={<LeetCodeClone />} />
            <Route path="/education" element={<EducationClone />} />
            <Route path="/experience" element={<LinkedInClone />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}
