import "../styles/index.css";

import { useEffect } from "react";
import SiteMap from "./SiteMap";
import NewsLetter from "./NewsLetter";
import { load, data, base } from "./sponsors";
import SponsorsGroup from "./SponsorsGroup";
import VueMasteryModal from "./VueMasteryModal";

export default function LandingPage() {
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <section id="hero">
        <img id="uwu" alt="Vue.js Kawaii Logo by @icarusgkx" />
        <h1 className="tagline">
          The <span className="accent">Progressive</span>
          <br /> JavaScript Framework
        </h1>
        <p className="description">
          An approachable, performant and versatile framework for building web
          user interfaces.
        </p>
        <p className="actions">
          <VueMasteryModal />
          <a className="get-started" href="/guide/introduction.html">
            Get Started
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </a>
          <a className="setup" href="/guide/quick-start.html">
            Install
          </a>
          <a
            className="security"
            href="https://v2.vuejs.org/eol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Security Updates for Vue 2
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </p>
      </section>

      <section id="special-spsr">
        {data && data.special ? (
          <>
            <span className="lead">Special Sponsor</span>
            {data.special.map(({ url, img, name, description }, idx) => (
              <div key={idx}>
                <a href={url} target="_blank" rel="sponsored noopener">
                  {img.endsWith("png") ? (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`${base}/images/${img.replace(
                          /\.png$/,
                          ".avif"
                        )}`}
                      />
                      <img src={`${base}/images/${img}`} alt={name} />
                    </picture>
                  ) : (
                    <img
                      width="168"
                      height="42"
                      src={`${base}/images/${img}`}
                      alt={name}
                    />
                  )}
                </a>
                <span>{description}</span>
              </div>
            ))}
          </>
        ) : (
          <span>
            <a href="/sponsor/#tier-benefits">
              Special Sponsor slot is now vacant - Inquire now
            </a>
          </span>
        )}
      </section>

      <section id="highlights" className="vt-box-container">
        <div className="vt-box">
          <h2>Approachable</h2>
          <p>
            Builds on top of standard HTML, CSS and JavaScript with intuitive
            API and world-class documentation.
          </p>
        </div>
        <div className="vt-box">
          <h2>Performant</h2>
          <p>
            Truly reactive, compiler-optimized rendering system that rarely
            requires manual optimization.
          </p>
        </div>
        <div className="vt-box">
          <h2>Versatile</h2>
          <p>
            A rich, incrementally adoptable ecosystem that scales between a
            library and a full-featured framework.
          </p>
        </div>
      </section>

      <section id="spsrs">
        <h2>Platinum Sponsors</h2>
        <SponsorsGroup tier="platinum" placement="landing" />
        <h2>Gold Sponsors</h2>
        <SponsorsGroup tier="gold" placement="landing" />
      </section>

      <SiteMap />
      {/* <NewsLetter /> */}
    </>
  );
}
