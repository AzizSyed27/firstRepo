import { useRef, useState } from 'react';
/* GALLERY IMAGES */
import recent1 from "../../../assets/recent/recent-1.png";
import recent2 from "../../../assets/recent/recent-2.png";
import recent3 from "../../../assets/recent/recent-3.png";
import recent4 from "../../../assets/recent/recent-4.jpg";
import recent5 from "../../../assets/recent/recent-5.png";
import recent6 from "../../../assets/recent/recent-6.jpg";
import recent7 from "../../../assets/recent/recent-7.jpg";
import recent8 from "../../../assets/recent/recent-8.jpg";
import recent9 from "../../../assets/recent/recent-9.jpg";
import recent10 from "../../../assets/recent/recent-10.jpg";
import recent11 from "../../../assets/recent/recent-11.jpg";
import recent12 from "../../../assets/recent/recent-12.jpg";
import recent13 from "../../../assets/recent/recent-13.jpg";
import recent14 from "../../../assets/recent/recent-14.jpg";

export default function HomeGallery(){
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

    return(
        <main>
            
            {/* RECENT WORK */}
            <section className="recentSection" aria-label="Recent work" id="gallery">
                <div className="container">
                    <header className="recentHeader">
                        
                        <h2 className="recentTitle">RECENT WORK</h2>
                        
                        <p className="recentSub">
                            Photos and stories from the field show what we’ve built and who we’ve helped.
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