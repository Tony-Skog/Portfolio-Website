import { Routes, Route } from 'react-router'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Resume from './pages/resume.jsx'
import Layout from './components/layout.jsx'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Route>
            <Route path="*" element={<p className="subtitle">Page not found</p>} />
        </Routes>
    )
}

export default App