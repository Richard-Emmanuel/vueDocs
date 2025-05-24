import "../styles/index.css";
// WhyVue.tsx
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const VIDEO_SOURCE = "https://player.vimeo.com/video/647441538?autoplay=1";

export default function WhyVue() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const modal = (
    <div onClick={() => setShowModal(false)} className="vuemastery-modal-mask">
      <div className="vuemastery-modal-wrapper">
        <div className="vuemastery-modal-container">
          <div className="vuemastery-modal-content">
            <div className="vuemastery-video-space">
              <iframe
                src={VIDEO_SOURCE}
                style={{
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  borderRadius: "6px",
                }}
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
              />
            </div>
          </div>
          <div className="vuemastery-modal-footer">
            <p className="vuemastery-modal-footer-text">
              Video by{" "}
              <a
                href="https://www.vuemastery.com"
                target="_blank"
                rel="sponsored noopener"
                title="Vue.js Courses on Vue Mastery"
              >
                Vue Mastery
              </a>
              . Watch Vue Mastery’s free{" "}
              <a
                href="https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3"
                target="_blank"
                rel="sponsored noopener"
                title="Vue.js Courses on Vue Mastery"
              >
                Intro to Vue course
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        id="vuemastery-action"
        className="why-vue"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="icon-play"
          aria-labelledby="simpleicons-play-icon"
          role="img"
          viewBox="0 0 100 125"
          fill="#FFFFFF"
        >
          <title id="simpleicons-play-icon" lang="en">
            Play icon
          </title>
          <path d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" />
        </svg>
        Why Vue
      </button>
      {showModal && ReactDOM.createPortal(modal, document.body)}
    </>
  );
}
