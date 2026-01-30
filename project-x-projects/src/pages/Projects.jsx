import { useEffect, useState } from "react";
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

  const currentNow = [
    
    {
      title: "WATER PUMPS OF RELIEF",
      desc: "Four deep hand pumps installed to deliver sustainable, safe water in Pakistan.",
      tags: ["Water", "Pakistan", "Hand Pumps", "Relief", "Clean Water"],
      img: null, //pakistanPumpsImg
      to: "#",
    },
    {
      title: "STREAMS OF MERCY",
      desc: "Twenty-two water pumps bringing clean water to villages across Pakistan in need.",
      tags: ["Water", "Pakistan", "Pumps", "Sustainable", "Relief"],
      img: null, //pakistanStreamsImg
      to: "#",
    },
    {
      title: "THE WELLS OF PURITY",
      desc: "Four pumps and a wudu facility providing water for daily and religious use in Bihar.",
      tags: ["Water", "India", "Bihar", "Wudu", "Sadaqah"],
      img: null, //biharImg
      to: "#",
    },
    {
      title: "PILLARS OF FAITH",
      desc: "A masjid and water well completed to serve worship and clean water in Malawi.",
      tags: ["Faith", "Water", "Malawi", "Masjid", "Ramadan"],
      img: null, //malawiPillarsImg
      to: "#",
    },
  ];

  const completedProjects = [
    {
      title: "WATER CHANGES EVERYTHING",
      desc: "A community well bringing safe drinking water to 1,000+ residents in Zanzibar.",
      tags: ["Water", "Zanzibar", "Tanzania", "Community", "Clean Water"],
      img: null , //zanzibarImg
      to: "#",
    },
    {
      title: "FOR THE UMMAH",
      desc: "A water well providing clean, reliable water for families and schools in Uganda.",
      tags: ["Water", "Uganda", "Wakiso", "Ummah", "Clean Water"],
      img: null, //ugandaImg
      to: "#",
    },
    {
      title: "WELLS OF ACCESS",
      desc: "A well restoring clean water access for 8 families in rural Niger communities.",
      tags: ["Water", "Niger", "Dosso", "Access", "Clean Water"],
      img: null, //nigerImg
      to: "#",
    },
    {
      title: "FOUNDATIONS OF FAITH",
      desc: "A masjid and water well built to support worship and daily clean water in Malawi.",
      tags: ["Faith", "Water", "Malawi", "Masjid", "Community"],
      img: null, //malawiFoundationsImg
      to: "#",
    },
  ];

  function getColsForViewport() {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;

    // match your CSS breakpoints:
    // < 620px => 1 col
    // < 980px => 2 cols
    // otherwise => 3 cols
    if (w < 620) return 1;
    if (w < 980) return 2;
    return 3;
  }

  const [showAllCurrent, setShowAllCurrent] = useState(false);
  const [showAllCompleted, setShowAllCompleted] = useState(false);

  const [cols, setCols] = useState(getColsForViewport());

  useEffect(() => {
    const onResize = () => setCols(getColsForViewport());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCurrentNow = showAllCurrent ? currentNow : currentNow.slice(0, cols);
  const canToggleCurrent = currentNow.length > cols;

  const visibleCompleted = showAllCompleted ? completedProjects : completedProjects.slice(0, cols);
  const canToggleCompleted = completedProjects.length > cols;


  return (
    <main className="projectsPage">
      {/* PAGE HEADER */}
      <section className="projectsTop" aria-label="Projects header">

        <div className="container">
          <h1 className="projectsTitle">OUR PROJECTS</h1>
          <p className="projectsSub">
            Projects <span className="xproj"> X</span> Projects acts locally and builds globally. See the work P<span className="xproj">X</span>P is doing right now.
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
              Need is need. Suffering is Suffering. P<span className="xproj">X</span>P simply acts on that
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

      {/* WORK HAPPENING NOW */}
      <section className="currentNowSection" aria-label="Work happening now" id="current-now">
        <div className="container">
          <div className="currentNowHead">
            <div className="projectsEyebrow">Current</div>
            <h2 className="currentNowTitle">WORK HAPPENING NOW</h2>
            <p className="currentNowSub">
              Each project addresses a real need in communities near and far.
            </p>
          </div>

          <div className="currentNowGrid">
            {visibleCurrentNow.map((p) => (
              <article className="currentNowCard" key={p.title}>
                <div className="currentNowMedia">
                  {p.img ? (
                    <img src={p.img} alt="" />
                  ) : (
                    <div className="currentNowPlaceholder" aria-hidden="true">
                      {/* icon */}
                      <svg viewBox="0 0 24 24" width="52" height="52">
                        <path
                          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-13Z"
                          fill="rgba(15,23,42,0.12)"
                        />
                        <path
                          d="M7 16l3.2-3.6a1 1 0 0 1 1.5 0L14 15l1.4-1.6a1 1 0 0 1 1.5 0L18 15v3H7v-2Z"
                          fill="rgba(15,23,42,0.20)"
                        />
                        <circle cx="9" cy="8.5" r="1.3" fill="rgba(15,23,42,0.20)" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="currentNowBody">
                  <h3 className="currentNowCardTitle">{p.title}</h3>
                  <p className="currentNowDesc">{p.desc}</p>

                  <div className="currentNowTags">
                    {p.tags.map((t) => (
                      <span className="currentNowTag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {canToggleCurrent && (
            <div className="currentNowAllRow">
              <button
                className="btn currentNowAllBtn"
                type="button"
                onClick={() => {
                  setShowAllCurrent((s) => {
                    const next = !s;

                    if (!next) {
                      requestAnimationFrame(() => {
                        document
                          .getElementById("current-now")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      });
                    }

                    return next;
                  });
                }}
              >
                {showAllCurrent ? "Show less" : "View all"}
              </button>
            </div>
          )}
        </div>

      </section>



      {/* COMPLETED WORK */}
      <section className="completedSection" id="completed-projects" aria-label="Completed projects">

        <div className="container">

          <div className="completedHead">

            <div className="projectsEyebrow">Completed</div>
            <h2 className="completedTitle">COMPLETED PROJECTS</h2>
            <p className="completedSub">
              Completed work with real outcomes delivered to communities around the world.
            </p>
            
          </div>

          <div className="completedGrid">
            {visibleCompleted.map((p) => (
              <article className="completedCard" key={p.title}>
                <div className="completedMedia">
                  {p.img ? (
                    <img src={p.img} alt="" loading="lazy" />
                  ) : (
                    <div className="completedPlaceholder" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="52" height="52">
                        <path
                          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-13Z"
                          fill="rgba(15,23,42,0.12)"
                        />
                        <path
                          d="M7 16l3.2-3.6a1 1 0 0 1 1.5 0L14 15l1.4-1.6a1 1 0 0 1 1.5 0L18 15v3H7v-2Z"
                          fill="rgba(15,23,42,0.20)"
                        />
                        <circle cx="9" cy="8.5" r="1.3" fill="rgba(15,23,42,0.20)" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="completedBody">
                  <h3 className="completedCardTitle">{p.title}</h3>
                  <p className="completedDesc">{p.desc}</p>

                  <div className="completedTags">
                    {p.tags.map((t) => (
                      <span className="completedTag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            ))}
          </div>

          {canToggleCompleted && (
            <div className="completedAllRow">
              <button
                className="btn completedAllBtn"
                type="button"
                onClick={() => {
                  setShowAllCompleted((s) => {
                    const next = !s;

                    if (!next) {
                      requestAnimationFrame(() => {
                        document
                          .getElementById("completed-projects")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      });
                    }

                    return next;
                  });
                }}
              >
                {showAllCompleted ? "Show less" : "View all"}
              </button>
            </div>
          )}

         
        </div>
      </section>
    </main>
  );
}
