import { Outlet } from 'react-router'
import navbar from './navbar.jsx'
import footer from './footer.jsx'

function layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

const Layout = layout

export default Layout