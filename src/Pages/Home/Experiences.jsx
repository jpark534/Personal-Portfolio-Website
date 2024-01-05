import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Experiences</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <p className="text-md">{item.description}</p>
            <div className="experience--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md experience--author--name">
                  {item.author_name}
                </p>
                <p className="text-md experience--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}