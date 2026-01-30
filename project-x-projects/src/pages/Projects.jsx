import "../styles/projects.css";
import water1 from "../assets/recent/recent-1.png";
import water2 from "../assets/recent/recent-10.jpg";
import water3 from "../assets/recent/recent-12.jpg";

export default function Projects() {
  // You can swap images/text anytime — structure matches screenshot
  const cards = [
    {
      kicker: "Clean Water Access",
      title: "WELLS AND HAND PUMPS",
      desc: "Delivering reliable clean water so families can thrive without the daily struggle",
      links: [
        { label: "Explore", to: "#" },
      ],
      img: water1,
    },
    {
      kicker: "Faith & Community",
      title: "MOSQUES AND COMMUNITY SPACES",
      desc: "Building welcoming spaces for worship, learning, and gathering at the heart of communities.",
      links: [
        
        { label: "Relief when it matters most", to: "#" },
      ],
      img: water2,
    },
    {
      kicker: "Emergency Relief & Care",
      title: "SUPPORT WHERE IT'S NEEDED MOST",
      desc: "Providing ongoing support for orphans and widowed families with dignity and consistency.",
      links: [
        { label: "Sponsorships, gifts, and practical help for those alone", to: "#" },
      ],
      img: water3,
    },
  ];


  return (
    <main className="projectsPage">
      {/* PAGE HEADER */}
      <section className="projectsTop" aria-label="Projects header">

        <div className="container">
          <h1 className="projectsTitle">OUR PROJECTS</h1>
          <p className="projectsSub">
            We act locally and build globally. See the work we’re doing right now.
          </p>
        </div>
        
      </section>

      {/* CATEGORY BLOCK */}
      <section className="projectsBlock" aria-label="Water projects">
        <div className="container">
          <header className="projectsBlockHeader">
            <div className="projectsEyebrow">CATEGORIES</div>
            <h2 className="projectsBlockTitle">FROM CLEAN WATER, TO COMMUNITY SPACES, TO OVERALL SUPPORT</h2>
            <p className="projectsBlockSub">
              Hand-pumps and electric wells, mosques and spaces, or support, help is sent where needed
            </p>
          </header>

          <div className="projectsGrid">
            {cards.map((c) => (
              <article className="projectCard" key={c.title}>
                <div className="projectMedia">
                  <img src={c.img} alt="" />
                </div>

                <div className="projectOverlay">
                  <div className="projectKicker">{c.kicker}</div>

                  <h3 className="projectTitle">
                    {c.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>

                  <div className="projectDesc">{c.desc}</div>

                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
