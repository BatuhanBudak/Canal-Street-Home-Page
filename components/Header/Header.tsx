import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavDesktop from "./NavDesktop";
import { Hamburger, Close, CanalLogo } from "../Icon";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header>
      <a href="#content" className="visually-hidden skip-nav">
        Skip Navigation
      </a>

      <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
        <a href="" className="logo">
          <CanalLogo />
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-primary"
          onClick={() => {
            toggleDrawer();
          }}
        >
          <Hamburger drawerOpen={drawerOpen} />
          <Close drawerOpen={drawerOpen} />
        </button>
        <NavDesktop />
        <NavDrawer drawerOpen={drawerOpen} />
      </nav>
    </header>
  );
}
