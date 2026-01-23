import heroImg from '../assets/hero-image.jpg';
import waterwellImg from '../assets/waterwell-icon.png';
import careImg from '../assets/carepackage-icon.png';
import giftImg from '../assets/gift-icon.png';
import masjidImg from '../assets/masjid-image.jpg';
import madrassaImg from '../assets/madrassas-image.jpg';
import communityImg from '../assets/community-img.jpg';
import bbqImg from '../assets/bbq-img-e.jpg';
import resultsMasjidImg from '../assets/masjid-uthman-img.jpg';
import resultsWaterImg from '../assets/water-pump-img.jpg';
import resultsReliefImg from '../assets/aid-img.jpg';
import impactImg from '../assets/impact-img.jpg';

import recent1 from "../assets/recent/recent-1.png";
import recent2 from "../assets/recent/recent-2.png";
import recent3 from "../assets/recent/recent-3.png";
import recent4 from "../assets/recent/recent-4.jpg";
import recent5 from "../assets/recent/recent-5.png";
import recent6 from "../assets/recent/recent-6.jpg";
import recent7 from "../assets/recent/recent-7.jpg";
import recent8 from "../assets/recent/recent-8.jpg";
import recent9 from "../assets/recent/recent-9.jpg";
import recent10 from "../assets/recent/recent-10.jpg";
import recent11 from "../assets/recent/recent-11.jpg";
import recent12 from "../assets/recent/recent-12.jpg";
import recent13 from "../assets/recent/recent-13.jpg";
import recent14 from "../assets/recent/recent-14.jpg";

import { useRef, useState } from 'react';



export default function Home() {

    const [activeResult, setActiveResult] = useState("water");

    const results = {
        water: {
            tab: "Water wells",
            tag: "Water",
            title: "HAND-PUMP AND ELECTRIC WELLS ACROSS CONTINENTS",
            body:
            "We’ve drilled in Malawi, Tanzania, Uganda, Niger, Pakistan, India, and Nepal. " +
            "Clean water isn’t a luxury where we work — it’s survival. Every well means a family " +
            "doesn’t walk miles for water.",
            img: resultsWaterImg,
            alt: "Water well project",
        },
        masjids: {
            tab: "Masjids built",
            tag: "Spaces",
            title: "MASJIDS THAT STAND, COMMUNITIES THAT GATHER",
            body:
            "We help build masjids and community spaces where people can pray, learn, and connect. " +
            "These spaces strengthen local bonds and serve as anchors for long-term growth.",
            img: resultsMasjidImg,
            alt: "A newly constructed masjid",
        },
        relief: {
            tab: "Relief aid",
            tag: "Relief",
            title: "RELIEF DELIVERED WHEN IT MATTERS MOST",
            body:
            "When hardship hits, we move quickly with practical support—food, essentials, and urgent aid " +
            "for families facing displacement and crisis.",
            img: resultsReliefImg,
            alt: "Relief aid distribution",
        },
    };

    const current = results[activeResult];

    const stats = [
        {
            label: "WELLS BUILT",
            value: "40+",
            desc: "Hand-pump and electric wells across seven countries",
        },
        {
            label: "COMMUNITIES SERVED",
            value: "10",
            desc: "Countries where we work and build",
        },
        {
            label: "FAMILIES SUPPORTED",
            value: "1000+",
            desc: "Orphans, widows, and those facing hardship",
        },
    ];

    //Carasoul of recent images
    const recentRef = useRef(null);
    const [recentIndex, setRecentIndex] = useState(0);

    const recentItems = [
        { img: recent1, alt: "Recent project photo 1" },
        { img: recent2, alt: "Recent project photo 2" },
        { img: recent3, alt: "Recent project photo 3" },
        { img: recent4, alt: "Recent project photo 4" },
        { img: recent5, alt: "Recent project photo 5" }, 
        { img: recent6, alt: "Recent project photo 6" },
        { img: recent7, alt: "Recent project photo 7" },
        { img: recent8, alt: "Recent project photo 8" },
        { img: recent9, alt: "Recent project photo 9" },
        { img: recent10, alt: "Recent project photo 10" },
        { img: recent11, alt: "Recent project photo 11" },
        { img: recent12, alt: "Recent project photo 12" },
        { img: recent13, alt: "Recent project photo 13" },
        { img: recent14, alt: "Recent project photo 14" },
    ];

    function scrollRecentByCards(dir) {
        const el = recentRef.current;
        if (!el) return;

        const card = el.querySelector(".recentCard");
        const gap = 22;
        const cardW = card ? card.getBoundingClientRect().width : 320;
        const step = cardW + gap;

        el.scrollBy({ left: dir * step, behavior: "smooth" });
    }

    function onRecentScroll() {
        const el = recentRef.current;
        if (!el) return;

        const card = el.querySelector(".recentCard");
        const gap = 22;
        const cardW = card ? card.getBoundingClientRect().width : 320;
        const step = cardW + gap;

        const idx = Math.round(el.scrollLeft / step);
        setRecentIndex(Math.max(0, Math.min(idx, 13)));
    }





  return (
    <main>

        <section className="heroSection" aria-label="Hero">

            <div className="container">
                <section className="heroCard" aria-label="Hero">
                
                    <div className="heroLeft">
                        
                        <span className="kicker">Welcome to Projects <span className="xproj">X </span> Projects</span>

                        <h1 className="h1">
                        ACT LOCALLY, <br /> 
                        HELP GLOBALLY, <br />
                        KEEP IT REAL.
                        </h1>

                        <p className="lead">
                        We started in Scarborough with a simple belief: real change comes from
                        real people doing real work - wells, masjids, madrassas, relief packages,
                        and support for orphans and widowed families. 
                        </p>

                        <div className="heroActions">
                        <button className="btn btnPrimary" type="button">Donate</button>
                        <button className="btn btnGhost" type="button">Learn more</button>
                        </div>
                    </div>

                    <div className="heroRight">
                        <img src={heroImg} alt="Volunteers working together on a community project" />
                    </div>

                </section>

            </div>

        </section>

            
        {/* IMPACT / WHAT WE BUILD (custom layout like screenshot) */}
        <section className="impactSection" aria-label="Impact">

            <div className="container">

                <header className="impactHeader">
                <div className="impactEyebrow">Impact</div>
                <h2 className="impactTitle">WHAT WE BUILD</h2>
                <p className="impactSub">Six pillars of service, rooted in faith and action.</p>
                </header>

                <div className="impactGrid">
                {/* COL 1 */}
                <div className="impactCol">
                    <article className="impactCard">
                    <div className="impactIcon" aria-hidden="true">
                        <img src={waterwellImg} alt="" className="iconImg"/>
                    </div>

                    <h3 className="impactCardTitle">
                        CLEAN WATER REACHES COMMUNITIES
                    </h3>

                    <p className="impactCardBody">
                        Hand-pump and electric wells across Malawi, Tanzania, Uganda, Niger,
                        Pakistan, India, and Nepal.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>
                    </article>

                    <article className="impactCard impactCardTall">
                    <div className="impactTag">SPACES</div>
                    <h3 className="impactCardTitle">MASJIDS AND COMMUNITY SPACES</h3>

                    <p className="impactCardBody">
                        Building places of worship and gathering spaces where communities
                        strengthen their faith and bonds.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>

                    <div className="impactMedia">
                        <img src={masjidImg} alt="A newly constructed masjid" className="impactMediaInner"/>
                    </div>
                    </article>
                </div>

                {/* COL 2 */}
                <div className="impactCol">
                    <article className="impactCard impactCardTall">
                    <div className="impactTag">Masjids</div>
                    <h3 className="impactCardTitle">EDUCATION THROUGH MADRASSAS</h3>

                    <p className="impactCardBody">
                        Supporting learning and spiritual growth for children and families
                        in underserved regions.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>

                    <div className="impactMedia">
                        <img src={madrassaImg} alt="Children attending a madrassa class" className="impactMediaInner"/>
                    </div>
                    </article>

                    <article className="impactCard">
                    <div className="impactIcon" aria-hidden="true">
                        <img src={careImg} alt="" className="iconImg"/>
                    </div>
                    <h3 className="impactCardTitle">RELIEF WHEN IT MATTERS MOST</h3>

                    <p className="impactCardBody">
                        Urgent aid for communities facing hardship and displacement.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>
                    </article>
                </div>

                {/* COL 3 */}
                <div className="impactCol">
                    <article className="impactCard">
                    <div className="impactIcon" aria-hidden="true">
                        <img src={giftImg} alt="" className="iconImg"/>
                    </div>
                    <h3 className="impactCardTitle">ORPHANS AND WIDOWS SUPPORTED</h3>

                    <p className="impactCardBody">
                        Sponsorships, Eid gifts, and practical assistance for families facing
                        loss and struggle.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>
                    </article>

                    <article className="impactCard impactCardTall">
                    <div className="impactTag">Community</div>
                    <h3 className="impactCardTitle">SCARBOROUGH BRINGS IT TOGETHER</h3>

                    <p className="impactCardBody">
                        Annual BBQs, Eid toy drives, and local events that turn good intentions
                        into action.
                    </p>

                    <button className="impactLink" type="button">
                        Explore <span aria-hidden="true">›</span>
                    </button>

                    <div className="impactMedia">
                        <img src={bbqImg} alt="Community members gathered at a local event" className="impactMediaInner"/>
                    </div>
                    </article>
                </div>
                </div>
            </div>
        </section>

        {/* ORIGINS */}
        <section className="originsSection" aria-label="Origins">

            <div className="container">

            <div className="originsCard">

                <div className="originsRight">

                    <img src={communityImg} alt="Community gathering in Scarborough" />

                </div>

                <div className="originsLeft">

                <span className="originsKicker">Origins</span>

                <h2 className="originsH1">SCARBOROUGH ROOTS RUN DEEP</h2>

                <p className="originsLead">
                    We started here, in this neighbourhood, with neighbors who believed actions matter
                    more than talk. Every BBQ, every donation, every conversation - it all stays connected
                    to where we come from. That's how we work: we organize locally, we listen closely, and
                    we send real help where it's needed.
                </p>

                <div className="originsActions">
                    <button className="btn originsBtnPrimary" type="button">Explore</button>
                    <button className="btn originsBtnGhost" type="button">Learn ›</button>
                </div>

                </div>

            </div>

            </div>

        </section>

        {/* RESULTS / TANGIBLE WORK */}
        <section className="resultsSection" aria-label="Results">
            <div className="container">
                <header className="resultsHeader">
                <div className="resultsEyebrow">Results</div>
                <h2 className="resultsTitle">WHAT TANGIBLE WORK LOOKS LIKE</h2>
                <p className="resultsSub">
                    We don’t talk about change. We build it. Wells that run, masjids that stand,
                    schools that teach, families that eat. This is what we do.
                </p>

                <div className="resultsTopActions">
                    <button className="btn resultsBtnPrimary" type="button">Explore</button>
                    <button className="btn resultsBtnGhost" type="button">Learn ›</button>
                </div>

                {/* Tabs */}
                <nav className="resultsTabs" aria-label="Results categories">
                    <button
                    className={`resultsTab ${activeResult === "water" ? "isActive" : ""}`}
                    type="button"
                    onClick={() => setActiveResult("water")}
                    >
                    Water wells
                    </button>

                    <button
                    className={`resultsTab ${activeResult === "masjids" ? "isActive" : ""}`}
                    type="button"
                    onClick={() => setActiveResult("masjids")}
                    >
                    Masjids built
                    </button>

                    <button
                    className={`resultsTab ${activeResult === "relief" ? "isActive" : ""}`}
                    type="button"
                    onClick={() => setActiveResult("relief")}
                    >
                    Relief aid
                    </button>
                </nav>
                </header>

                {/* Dynamic card */}
                <section className="resultsCard" aria-label="Featured result">
                    <div className="resultsMedia">
                        <img src={current.img} alt={current.alt} />
                    </div>

                    <div className="resultsContent">
                        <div className="resultsTag">{current.tag}</div>
                        <h3 className="resultsCardTitle">{current.title}</h3>
                        <p className="resultsCardBody">{current.body}</p>

                        <div className="resultsCardActions">
                        <button className="btn resultsBtnPrimary" type="button">Explore</button>
                        <button className="btn resultsBtnGhost" type="button">Learn ›</button>
                        </div>

                    </div>

                </section>

            </div>

        </section>

        {/* NUMBERS THAT MATTER */}
        <section className="numbersSection" aria-label="Numbers that matter">
            <div className="container">
                
                <header className="numbersHeader">
                    <div className="numbersEyebrow">Impact</div>
                    <h2 className="numbersTitle">NUMBERS THAT MATTER</h2>
                    <p className="numbersSub">Real work, real results, real people helped.</p>
                </header>

                <div className="numbersGrid">
                    <div className="numbersStack">
                        {stats.map((s) => (
                            <article className="numbersCard" key={s.label}>
                                <div className="numbersLabel">{s.label}</div>
                                <div className="numbersValue">{s.value}</div>
                                <div className="numbersDivider" />
                                <p className="numbersDesc">{s.desc}</p>
                            </article>
                        ))}
                    </div>

                    <div className="numbersMedia" aria-label="Impact image">
                        <img className="numbersMediaImg" src={impactImg} alt="Impact in the field" />
                    </div>
                </div>
            </div>
        </section>


        {/* RECENT WORK */}
        <section className="recentSection" aria-label="Recent work">
            <div className="container">
                <header className="recentHeader">
                    
                    <h2 className="recentTitle">RECENT WORK</h2>
                    
                    <p className="recentSub">
                        Photos tell stories from the field show what we’ve built and who we’ve helped.
                    </p>

                </header>

                <div className="recentRailWrap">

                    <div
                        className="recentRail"
                        ref={recentRef}
                        onScroll={onRecentScroll}
                    >
                        {recentItems.map((item, i) => (
                        <div className="recentCard" key={item.alt + i}>
                            <img src={item.img} alt={item.alt} />
                        </div>
                        ))}
                    </div>

                    <div className="recentFooter">

                        <div className="recentDots" aria-label="Carousel position">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((d) => (
                                <span
                                key={d}
                                className={`recentDot ${d === recentIndex ? "isActive" : ""}`}
                                />
                            ))}
                            </div>

                            <div className="recentArrows">
                            <button
                                className="recentArrow"
                                type="button"
                                aria-label="Previous"
                                onClick={() => scrollRecentByCards(-1)}
                            >
                                ←
                            </button>
                            <button
                                className="recentArrow"
                                type="button"
                                aria-label="Next"
                                onClick={() => scrollRecentByCards(1)}
                            >
                                →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        

    </main>
  );
}
