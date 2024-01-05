export default function HeroSection() {
  return(  
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h2 className="section--title"> Hey 👋, </h2>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">I'm Julia</span>{" "}
            <br />

          </h1>
          <h3 className="hero--section-description">
            Computer 💻 + Engineer 🛠
          </h3>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" /> {/*this is the big man picture */}
      </div>
    </section>
  );
}
