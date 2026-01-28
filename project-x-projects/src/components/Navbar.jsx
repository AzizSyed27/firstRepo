import React, { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pxpLogo from "../assets/pxp-logo.png";
// TODO: replace this with your “new” logo asset
import newLogo from "../assets/pxp-mini-logo.png";

const EXPLORE_ITEMS = [
  "About Us",
  "Projects",
  "Get Involved",
  "Upcoming Events",
  "Contact Us"
];

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const panelId = useId();
  const wrapRef = useRef(null);

  // Sticky + “hover state when scrolled”
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click + ESC
  useEffect(() => {
    const onDown = (e) => {
      if (!exploreOpen) return;
      if (e.key === "Escape") setExploreOpen(false);
    };

    const onClick = (e) => {
      if (!exploreOpen) return;
      const el = wrapRef.current;
      if (el && !el.contains(e.target)) setExploreOpen(false);
    };

    document.addEventListener("keydown", onDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [exploreOpen]);

  const solid = isSticky || exploreOpen; // “hover” look when scrolled OR explore is open

  useEffect(() => {
    if (exploreOpen) {
      document.body.classList.add("navNoScroll");
    } else {
      document.body.classList.remove("navNoScroll");
    }
    return () => document.body.classList.remove("navNoScroll");
  }, [exploreOpen]);

  return (
    <header ref={wrapRef} className={`navWrap ${solid ? "isSolid" : ""}`}>
      <div className="container navRow">
        {/* LEFT: Explore */}
        <div className="navLeft">
          <button
            className={`navExploreBtn ${exploreOpen ? "isOpen" : ""}`}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={exploreOpen}
            aria-controls={panelId}
            onClick={() => setExploreOpen((v) => !v)}
          >
            Explore <span className="navCaret" aria-hidden="true">▾</span>
          </button>
        </div>

        {/* CENTER: Brand (logo animation on hover/solid) */}
        <Link to="/" className="brand brandCentered" aria-label="Project X Projects Home">
          <span className="logoSwap" aria-hidden="true">
            {/* Old logo split */}
            <span className="logoOld logoOldLeft">
              <img src={pxpLogo} alt="" />
            </span>
            <span className="logoOld logoOldRight">
              <img src={pxpLogo} alt="" />
            </span>

            {/* New logo emerges from center */}
            <span className="logoNew">
              <img src={newLogo} alt="" />
            </span>
          </span>

          {/* Accessible alt for screen readers */}
          <span className="srOnly">Project X Projects</span>
        </Link>

        {/* RIGHT: Actions */}
        <div className="navActions">
          <button className="btn navBtn" type="button">Donate</button>
        </div>
      </div>

      {/* EXPLORE DRAWER */}
      <div
        id={panelId}
        className={`exploreOverlay ${exploreOpen ? "isOpen" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Explore menu"
      >
        <div className="explorePanel">
          <div className="exploreLeft">
            <div className="exploreLocationRow">
              <div className="exploreLoc"></div>
            </div>

            <nav className="exploreList" aria-label="Explore">
              {EXPLORE_ITEMS.map((label) => (
                <button
                  key={label}
                  className="exploreItem"
                  type="button"
                  onClick={() => {
                    // TODO: you can navigate / route here later
                    setExploreOpen(false);
                  }}
                >
                  <span>{label}</span>
                  <span className="exploreChevron" aria-hidden="true">›</span>
                </button>
              ))}
            </nav>

            <div className="exploreMobileActions">
              <button className="btn btnPrimary" type="button" onClick={() => setExploreOpen(false)}>
                Donate
              </button>
            </div>

            <a className="exploreMemberLink" href="#" onClick={(e) => e.preventDefault()}>
              Admin Site <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="exploreRight" aria-hidden="true">
            <button
              className="exploreClose exploreCloseRight"
              type="button"
              onClick={() => setExploreOpen(false)}
              aria-label="Close explore menu"
              >
              ×
            </button>

            <div className="exploreHero">
              <div className="exploreHeroText">CHANGE STARTS HERE</div>
              <button className="exploreCta" type="button">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
