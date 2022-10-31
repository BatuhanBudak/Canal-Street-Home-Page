import React, { useState } from "react";
import { FacebookLogo, InstagramLogo, MailIcon, PenIcon } from "./Icon";

export default function Footer() {
  const [value, setValue] = useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <footer>
      <section className="footer">
        <div className="footer__row">
          <div className="footer__row-item">
            <h3>Interested in becoming a vendor?</h3>
            <a href="">click here</a>
          </div>
        </div>
        <div className="footer__row">
          <a href="mailto:info@canalstreet.market">
            <div className="footer__row-item">
              <PenIcon />
              <p>
                Email us
                <br />{" "}
              </p>
            </div>
          </a>
          <a href="https://www.facebook.com/canalstreetmarket">
            <div className="footer__row-item">
              <FacebookLogo />
              <p>
                Follow us
                <br />
                on facebook
                <br />{" "}
              </p>
            </div>
          </a>
          <a href="https://www.instagram.com/canalstreetmarket/">
            <div className="footer__row-item">
              <InstagramLogo />
              <p>
                Follow us
                <br />
                on instagram
                <br />{" "}
              </p>
            </div>
          </a>
        </div>
        <div className="footer__row">
          <div className="footer__row-item ">
            <span>Stay up to date with our newsletter</span>
            <p className="mobile-only">
              <MailIcon />
            </p>
            <p className="mobile-only">Get updates in your inbox</p>
            <form>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={value}
                onChange={(e) => handleChange(e)}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </section>
      <section className="footer-legal">
        <div className="footer-legal__left">
          <p>Copyright Canal Street Market 2019</p>
          <a href="">Privacy Policy</a>
          <a href="">Vendor Login</a>
        </div>
      </section>

      <section className="footer-legal-mobile mobile-only">
        <div className="footer-legal-mobile__row">
          <a href="">Privacy Policy</a>
          <a href="">Vendor Login</a>
        </div>
        <div className="footer-legal-mobile__row">
          <p>Copyright Canal Street Market 2019</p>
        </div>
      </section>
    </footer>
  );
}
