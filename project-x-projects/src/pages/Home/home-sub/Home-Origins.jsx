/* ORIGINS IMAGES */
import communityImg from '../../../assets/origins/community-img.jpg';
import { Link } from "react-router-dom";

export default function HomeOrigins(){

    return(
        <main>
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
                        Projects <span className="xproj"> X</span> Projects started here, in this neighbourhood, with neighbors who believed actions matter
                        more than talk. Every BBQ, every donation, every conversation - it all stays connected
                        to where we come from. That's how it works: organize locally, listen closely, and
                        send real help where it's needed.
                    </p>

                    <div className="originsActions">
                        <Link className="btn originsBtnGhost" to="/about">Learn More ›</Link>
                    </div>

                    </div>

                </div>

                </div>

            </section>

        </main>
    )
}