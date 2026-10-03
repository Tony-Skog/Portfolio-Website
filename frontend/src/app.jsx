import { Routes, Route } from 'react-router'
import home from './pages/home.jsx'
import about from './pages/about.jsx'
import projects from './pages/projects.jsx'
import resume from './pages/resume.jsx'
import contact from './components/contact.jsx'
import layout from './components/layout.jsx'

function app() {
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

const App = app

export default App