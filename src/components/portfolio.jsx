import Photo1 from "../asset/Gunung-Sinabung.jpg"
import Photo2 from "../asset/Pantai.jpg"
import Photo3 from "../asset/Danau-Toba.jpg"


function Portfolio () {
return (
<section id="portfolio">
        <h2>Portfolio</h2>
        <div class="content">
        <div class="portfolio-item">
            <img class="foto" src={Photo1}  alt=""/>
            <h3>Photo 1</h3>
            <p>a mount on the island of Sumatera called "Gunung Sinabung".</p>
        </div>
        <div class="portfolio-item">
            <img class="foto" src={Photo2} alt=""/>
            <h3>Photo 2</h3>
            <p>a beach in Simeleu Island.</p>
        </div>
        <div class="portfolio-item">
            <img class="foto" src= {Photo3} alt=""/>
            <h3>Photo 3</h3>
            <p>a lake on the island of Sumatera called "Danau Toba" </p>
        </div>
        </div>
    </section>
    )
}

export default Portfolio