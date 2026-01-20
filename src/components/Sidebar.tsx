import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Sidebar.css'

interface MenuItem {
  id: string
  label: string
  path: string
  icon?: React.ReactNode
}

interface MenuSection {
  id: string
  title: string
  icon: React.ReactNode
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    id: 'ai-annotation',
    title: 'AI原生标注',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    items: [
      { id: 'ai-prelabeling', label: 'AI 预标注', path: '/ai-annotation/ai-prelabeling' },
      { id: 'active-learning', label: '主动学习（Active Learning）', path: '/ai-annotation/active-learning' },
      { id: 'ai-review', label: 'AI审核', path: '/ai-annotation/ai-review' },
      { id: 'copilot', label: '标注 Co-Pilot', path: '/ai-annotation/copilot' },
      { id: 'annotation-tasks', label: '你会参与哪些标注任务？', path: '/ai-annotation/annotation-tasks' },
    ]
  }
]

export default function Sidebar() {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>(['ai-annotation'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuSections.map((section) => (
          <div key={section.id} className="sidebar-section">
            <button
              className={`sidebar-section-header ${expandedSections.includes(section.id) ? 'expanded' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              <span className="section-icon">{section.icon}</span>
              <span className="section-title">{section.title}</span>
              <svg className="section-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
            
            <ul className={`sidebar-menu ${expandedSections.includes(section.id) ? 'expanded' : ''}`}>
              {section.items.map((item, index) => (
                <li key={item.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <NavLink
                    to={item.path}
                    className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <span className="link-indicator"></span>
                    <span className="link-text">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="version-badge">
          <span className="version-dot"></span>
          <span>v1.0.0</span>
        </div>
      </div>
    </aside>
  )
}

