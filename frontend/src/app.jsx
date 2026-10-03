import { Routes, Route } from 'react-router'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Projects from './pages/projects.jsx'
import Resume from './pages/resume.jsx'
import Contact from './components/contact.jsx'
import Layout from './components/layout.jsx'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<p className="subtitle">Page not found</p>} />
        </Routes>
    )
}

export default App