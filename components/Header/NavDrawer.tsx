import { FacebookLogo, InstagramLogo } from "../Icon";

export default function NavDrawer({ drawerOpen }) {
  return (
    <div
      className="nav__drawer"
      aria-hidden={!drawerOpen}
      tabIndex={drawerOpen ? 0 : -1}
      role="menu"
    >
      <div className="mobile-nav__blocks">
        <a href="" className="mobile-nav__block">
          <span>About</span>
        </a>
        <a href="" className="mobile-nav__block">
          <span>Food</span>
        </a>
        <a href="" className="mobile-nav__block">
          <span>Retail</span>
        </a>
        <a href="" className="mobile-nav__block">
          <span>Community</span>
        </a>
      </div>
      <div className="mobile-nav__info ">
        <a href="" className="btn ">
          become a vendor
        </a>
        <div>
          <p>
            265 Canal Street
            <br />
            New York, New York
          </p>
          <p>
            Food Hall Hours:
            <br />
            Mon – Sun: 10AM- 10PM
          </p>
          <p>
            Retail Market Hours:
            <br />
            Mon – Sat: 11AM- 7PM
            <br />
            Sun: 11AM-6PM
          </p>{" "}
        </div>
        <a href="mailto:info@canalstreet.market">Email us</a>
        <div className="mobile-nav__social">
          <a href="" className="btn">
            <FacebookLogo />
          </a>
          <a href="" className="btn">
            <InstagramLogo />
          </a>
        </div>
      </div>
    </div>
  );
}
