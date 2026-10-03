import { Outlet } from 'react-router'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'

function Layout() {
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

export default Layout