import heroImg from '../assets/hero-image.jpg';
import waterwellImg from '../assets/waterwell-icon.png';
import careImg from '../assets/carepackage-icon.png';
import giftImg from '../assets/gift-icon.png';
import masjidImg from '../assets/masjid-image.jpg';
import madrassaImg from '../assets/madrassas-image.jpg';
import communityImg from '../assets/community-img.jpg';
import bbqImg from '../assets/bbq-img-e.jpg';

export default function Home() {
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

    </main>
  );
}
