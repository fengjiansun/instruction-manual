import './PageStyles.css'
import step1Image from '../assets/ai-prelabeling-step1.svg'
import step2Image from '../assets/ai-prelabeling-step2.svg'
import step3Image from '../assets/ai-prelabeling-step3.svg'

export default function AIPrelabeling() {
  return (
    <article className="doc-page">
      {/* 页面标题区 */}
      <header className="doc-header">
        <h1 className="doc-title">AI 预标注</h1>
        <p className="doc-subtitle">在专家开始标注前，先由模型生成一版标注草稿</p>
      </header>

      {/* 解决什么问题 */}
      <section className="doc-section">
        <h2 className="section-title">解决什么问题？</h2>
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p className="feature-text">
            让人类专家从<strong>创造者</strong>变成<strong>审核者</strong>，提升标注效率和产量
          </p>
        </div>
      </section>

      {/* 典型用例 */}
      <section className="doc-section">
        <h2 className="section-title">典型用例</h2>
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <path d="M8 21h8"/>
              <path d="M12 17v4"/>
              <path d="M7 8l3 3-3 3"/>
              <path d="M13 11h4"/>
            </svg>
          </div>
          <p className="feature-text">
            用多模态模型提前标注视频内容&风格，专家在模型预标注草稿上进行验证和微调，最终生成用于视频生成模型的高质量训练数据
          </p>
        </div>
      </section>

      {/* 如何使用 */}
      <section className="doc-section">
        <h2 className="section-title">如何使用</h2>
        
        <div className="steps-container">
          {/* 步骤 1 */}
          <div className="step-item">
            <div className="step-header">
              <span className="step-number">1.</span>
              <h3 className="step-title">连接你的模型</h3>
            </div>
            <div className="step-content">
              <div className="step-image-container">
                <img 
                  src={step1Image} 
                  alt="连接模型步骤" 
                  className="step-image"
                />
              </div>
            </div>
          </div>

          {/* 步骤 2 */}
          <div className="step-item">
            <div className="step-header">
              <span className="step-number">2.</span>
              <h3 className="step-title">标注界面会自动加载模型预标注的草稿</h3>
            </div>
            <div className="step-content">
              <div className="step-image-container">
                <img 
                  src={step2Image} 
                  alt="预标注草稿界面" 
                  className="step-image"
                />
              </div>
            </div>
          </div>

          {/* 步骤 3 */}
          <div className="step-item">
            <div className="step-header">
              <span className="step-number">3.</span>
              <h3 className="step-title">在模型草稿的基础上验证、修改与补充，提交最终标注结果</h3>
            </div>
            <div className="step-content">
              <div className="step-image-container">
                <img 
                  src={step3Image} 
                  alt="验证修改标注结果" 
                  className="step-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 优势总结 */}
      <section className="doc-section">
        <h2 className="section-title">核心优势</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h4>效率提升</h4>
            <p>减少从零开始标注的时间，专家只需审核和微调</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h4>质量保障</h4>
            <p>人机协作确保标注结果的准确性和一致性</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h4>成本节约</h4>
            <p>降低标注成本，提高投资回报率</p>
          </div>
        </div>
      </section>
    </article>
  )
}
