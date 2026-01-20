import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
              <path d="M10 22L16 10L22 22H10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              <circle cx="16" cy="18" r="2" fill="white"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1"/>
                  <stop offset="1" stopColor="#a855f7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">AI 标注工具</span>
          <span className="logo-divider"></span>
          <span className="logo-subtitle">产品说明书</span>
        </div>
        
        <nav className="header-nav">
          <a href="#" className="nav-link">首页</a>
          <a href="#" className="nav-link active">文档</a>
          <a href="#" className="nav-link">API</a>
          <a href="#" className="nav-link">更新日志</a>
        </nav>
        
        <div className="header-actions">
          <button className="search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <span>搜索</span>
            <kbd>⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  )
}

