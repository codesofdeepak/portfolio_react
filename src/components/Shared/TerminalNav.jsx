import React, { useState, useEffect, useRef } from 'react'
import { Terminal, ChevronRight, Search, User, Folder, Briefcase } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TerminalNav = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Portfolio CLI v1.0' },
    { type: 'output', text: 'Type "help" for available commands' },
  ])
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Navigate to About section',
      '  projects   - Navigate to Projects section',
      '  skills     - Navigate to Skills section',
      '  education  - Navigate to Education section',
      '  experience - Navigate to Experience section',
      '  analytics  - Navigate to Analytics section',
      '  clear      - Clear terminal history',
      '  contact    - Show contact information',
      '  help       - Show this help message',
    ],
    about: () => {
      navigate('/')
      return ['Navigating to About section...']
    },
    projects: () => {
      navigate('/projects')
      return ['Navigating to Projects section...']
    },
    skills: () => {
      navigate('/skills')
      return ['Navigating to Skills section...']
    },
    education: () => {
      navigate('/education')
      return ['Navigating to Education section...']
    },
    experience: () => {
      navigate('/experience')
      return ['Navigating to Experience section...']
    },
    analytics: () => {
      navigate('/analytics')
      return ['Navigating to Analytics section...']
    },
    clear: () => {
      setHistory([])
      return []
    },
    contact: () => [
      'Contact Information:',
      '  Email: john@developer.io',
      '  GitHub: github.com/johndeveloper',
      '  LinkedIn: linkedin.com/in/johndeveloper',
      '  Twitter: @johndeveloper',
    ],
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add command to history
    setHistory(prev => [...prev, { type: 'input', text: input }])

    // Process command
    const cmd = input.toLowerCase().trim()
    if (commands[cmd]) {
      const output = commands[cmd]()
      setHistory(prev => [...prev, ...output.map(text => ({ type: 'output', text }))])
    } else {
      setHistory(prev => [...prev, {
        type: 'output',
        text: `Command not found: ${cmd}. Type "help" for available commands.`
      }])
    }

    setInput('')
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Terminal className="w-5 h-5 text-[hsl(var(--primary))]" />
          <span className="font-mono font-medium">portfolio-cli</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer" />
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="mb-2">
            {item.type === 'input' ? (
              <div className="flex items-center">
                <span className="text-[hsl(var(--primary))] mr-2">$</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <div className="text-white/80">{item.text}</div>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[hsl(var(--primary))] mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-mono"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>

      {/* Quick Commands */}
      <div className="p-4 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setInput('projects')}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center"
          >
            <Folder className="w-4 h-4 mr-2" />
            projects
          </button>
          <button
            onClick={() => setInput('skills')}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            skills
          </button>
          <button
            onClick={() => setInput('contact')}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm flex items-center"
          >
            <User className="w-4 h-4 mr-2" />
            contact
          </button>
          <button
            onClick={() => setInput('clear')}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm"
          >
            clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default TerminalNav