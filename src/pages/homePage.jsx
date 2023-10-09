import About from "../components/about";
import NavBar from "../components/navBar";
import Intro from "../components/introduction";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import "../components/style.css"

function HomePage() {
    return (
        <div>
            <NavBar/>
            <About/>
            <Intro/>
            <Portfolio/>
            <Contact/>
           
        </div>
    )
}

export default HomePage;