import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)"/>
                <path d="M10 22L16 10L22 22H10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="16" cy="18" r="2" fill="white"/>
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1"/>
                    <stop offset="1" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>AI 标注工具</span>
            </div>
            <p className="footer-desc">为AI模型打造专业级训练数据</p>
            <p className="footer-contact">联系方式：support@example.com</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>产品</h4>
              <ul>
                <li><a href="#">AI原生标注</a></li>
                <li><a href="#">共识投票</a></li>
                <li><a href="#">质量任务</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>资源</h4>
              <ul>
                <li><a href="#">帮助文档</a></li>
                <li><a href="#">API参考</a></li>
                <li><a href="#">更新日志</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>关于</h4>
              <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">博客</a></li>
                <li><a href="#">招聘信息</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">隐私政策</a>
            <a href="#">用户协议</a>
          </div>
          <p className="footer-copyright">© 2026 AI 标注工具. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

