import './PageStyles.css'
import './AnnotationTasks.css'

// 导入图片资源
import codeFixIcon from '../assets/images/code-fix-spPxAqEz.svg'
import codeStandardIcon from '../assets/images/code-standard-omgeABDt.svg'
import codingChallengeIcon from '../assets/images/coding-challenge-Byk0W0bm.svg'
import aiEvaluationIcon from '../assets/images/ai-evaluation-CQJ7eoxG.svg'
import apiTestIcon from '../assets/images/api-test-DhJ5RGiK.svg'
import errorTrackingIcon from '../assets/images/error-tracking-XsxXNuMN.svg'

// 导入SVG组件
import { CodeFixIcon } from '../components/SvgIcons'

const tasks = [
  {
    icon: codeFixIcon,
    title: '修复错误代码',
    description: '改进 AI 生成的代码片段，使其逻辑更清晰、输出更准确。'
  },
  {
    icon: codeStandardIcon,
    title: '制定代码标准',
    description: '编写评估规范，用于衡量代码的清晰度、结构与正确性。'
  },
  {
    icon: codingChallengeIcon,
    title: '设计编程挑战',
    description: '创建小型任务，用于测试模型的推理与实际问题解决能力。'
  },
  {
    icon: aiEvaluationIcon,
    title: '评估 AI 答案',
    description: '比较多组模型输出，选择最准确、最合理的结果。'
  },
  {
    icon: apiTestIcon,
    title: '测试 API 与命令行使用',
    description: '评估 AI 对真实工具（如 API、命令与响应）的使用能力。'
  },
  {
    icon: errorTrackingIcon,
    title: '追踪隐藏错误',
    description: '发现逻辑漏洞，并解释复杂函数中的潜在问题。'
  }
]

export default function AnnotationTasks() {
  return (
    <article className="doc-page">
      {/* 页面标题区 */}
      <header className="doc-header">
        <h1 className="doc-title">你会参与哪些标注任务？</h1>
        <p className="doc-subtitle">探索不同类型的标注任务，发挥你的专业技能</p>
      </header>

      {/* 任务卡片网格 */}
      <section className="doc-section">
        <div className="tasks-grid">
          {tasks.map((task, index) => (
            <div 
              key={index} 
              className="task-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="task-icon-wrapper">
                {index === 0 ? (
                  <CodeFixIcon />
                ) : (
                  <img src={task.icon} alt={task.title} className="task-icon" />
                )}
              </div>
              <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-description">{task.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

