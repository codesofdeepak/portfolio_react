import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import Navigation from './components/Layout/Navigation'
git import InteractiveBackground from './components/Shared/InteractiveBackground'
import WikipediaClone from './components/Sections/WikipediaClone'
import GitHubClone from './components/Sections/GitHubClone'
import LeetCodeClone from './components/Sections/LeetCodeClone'
import EducationClone from './components/Sections/EducationClone'
import LinkedInClone from './components/Sections/LinkedInClone'
import AnalyticsDashboard from './components/Sections/AnalyticsDashboard'
import { Terminal } from 'lucide-react'




function App() {
  const location = useLocation()
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        setTerminalOpen(!terminalOpen)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [terminalOpen])

  return (
    <div className="min-h-screen relative">
      {/* 3D Interactive Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <InteractiveBackground />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Terminal Button */}
      <button
        onClick={() => setTerminalOpen(!terminalOpen)}
        className="fixed bottom-6 right-6 z-50 glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 group"
      >
        <Terminal className="w-6 h-6 group-hover:text-[hsl(var(--primary))]" />
        <span className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-[hsl(var(--primary))] rounded-full">
          Ctrl+K
        </span>
      </button>

      {/* Terminal Window */}
      {terminalOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          className="fixed bottom-0 left-0 right-0 h-96 z-40 glass-card border-t border-white/10"
        >
          <TerminalNav />
        </motion.div>
      )}

      <Navigation />

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