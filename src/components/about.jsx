import Photo_Profil from "../asset/Profil-Picture.JPG"

function About () {
return (
    <section id="about">
        <h2>Syamsuddin Nur</h2>
        <div class="profile">
        <img class="profil" src={Photo_Profil} alt=""/>
        <p>Hello! I'm Syamsuddin Nur, a mechanical engineering graduate passionate about technology. Currently, I'm honing my web development skills at Purwadhika School.I've always been drawn to technology, and web development has become my creative outlet. I specialize in HTML, CSS, and JavaScript, crafting user-friendly interfaces and responsive designs. I'm dedicated to continuous learning and look forward to collaborating with fellow professionals.Thank you for visiting my profile. Let's connect and create something amazing together!</p>
        </div>
    </section>
)
}

export default About