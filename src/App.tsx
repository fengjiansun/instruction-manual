import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import AIPrelabeling from './pages/AIPrelabeling'
import ActiveLearning from './pages/ActiveLearning'
import AIReview from './pages/AIReview'
import Copilot from './pages/Copilot'
import AnnotationTasks from './pages/AnnotationTasks'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/ai-annotation/ai-prelabeling" replace />} />
        <Route path="ai-annotation">
          <Route path="ai-prelabeling" element={<AIPrelabeling />} />
          <Route path="active-learning" element={<ActiveLearning />} />
          <Route path="ai-review" element={<AIReview />} />
          <Route path="copilot" element={<Copilot />} />
          <Route path="annotation-tasks" element={<AnnotationTasks />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

