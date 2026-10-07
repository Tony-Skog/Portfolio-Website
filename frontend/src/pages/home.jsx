import portrait from '../../images/Athony-Skogund-centered.jpg'
import FeaturedProjects from '../components/featuredProjects.jsx'
import '../portfolio.css'

function Home() {
    return (
        <section id="home" className="home">
            <img className="home-portrait" src={portrait} alt="Tony Skogund" />
            <h1 className="home-name">Tony Skogund</h1>
            <p className="home-intro">
                Welcome to my portfolio.
            </p>
            <FeaturedProjects />
        </section>
    )
}

export default Home