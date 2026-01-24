import { Link } from "react-router-dom";
import logo from "../assets/pxp-logo.png";

const COLS = [
  {
    title: "Our work",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "Get involved", to: "/get-involved" },
      { label: "About us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Community", to: "/community" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Gallery", to: "/gallery" },
      { label: "Updates", to: "/updates" },
      { label: "FAQ", to: "/faq" },
      { label: "Partners", to: "/partners" },
      { label: "Stories", to: "/stories" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Donate now", to: "/donate" },
      { label: "Newsletter", to: "/newsletter" },
      { label: "Social media", to: "/social" },
      { label: "Events", to: "/events" },
      { label: "Support", to: "/support" },
    ],
  },
];

// tiny inline icon helper (no extra libs)
function SocialIcon({ label, href, children }) {
  return (
    <a className="footerSocial" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

export default function Footer() {
  function onSubmit(e) {
    e.preventDefault();
    // MVP: wire this later to Mailchimp/Brevo/etc.
    alert("Thanks! Newsletter signup coming soon.");
  }

  return (
    <footer className="siteFooter" aria-label="Footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerLogo" aria-label="Project X Projects">
                P <spam className="xproj">X</spam> P
            </div>
          </div>

          <div className="footerCols" aria-label="Footer navigation">
            {COLS.map((col) => (
              <div className="footerCol" key={col.title}>
                <div className="footerColTitle">{col.title}</div>
                <ul className="footerList">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link className="footerLink" to={l.to}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footerNews">
            <div className="footerColTitle">Updates</div>
            <p className="footerNewsText">
              Stay informed with our latest news and project updates from Scarborough Community Relief Project.
            </p>

            <form className="footerForm" onSubmit={onSubmit}>
              <label className="srOnly" htmlFor="footerEmail">Email</label>
              <input
                id="footerEmail"
                className="footerInput"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button className="footerSubmit" type="submit">Subscribe</button>
            </form>

            <p className="footerFine">
              By subscribing you agree to our <Link className="footerInlineLink" to="/privacy">Privacy Policy</Link> and
              consent to receive updates from Scarborough Community Relief Project.
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerLegal">
            <span>© {new Date().getFullYear()} Scarborough Community Relief Project. All rights reserved.</span>
            <div className="footerLegalLinks">
              <Link className="footerInlineLink" to="/privacy">Privacy policy</Link>
              <Link className="footerInlineLink" to="/terms">Terms of service</Link>
              <Link className="footerInlineLink" to="/cookies">Cookie settings</Link>
            </div>
          </div>

          <div className="footerSocials" aria-label="Social links">
            <SocialIcon label="Facebook" href="https://facebook.com">
              <span aria-hidden="true">f</span>
            </SocialIcon>
            <SocialIcon label="Instagram" href="https://instagram.com">
              <span aria-hidden="true">Insta</span>
            </SocialIcon>
            <SocialIcon label="X" href="https://x.com">
              <span aria-hidden="true">x</span>
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="https://linkedin.com">
              <span aria-hidden="true">in</span>
            </SocialIcon>
            <SocialIcon label="YouTube" href="https://youtube.com">
              <span aria-hidden="true">▶</span>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
