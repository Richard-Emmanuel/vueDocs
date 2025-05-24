import "../styles/index.css";

import { useEffect, useRef, useState } from "react";
import { SponsorData, data, base, load } from "./sponsors";

const eventMap = {
  aside: "4QUPDDRU",
  landing: "58FLAR2Z",
  page: "ZXLO3IUT",
};

function resolveList(data, tier, placement) {
  let currentTier = data[tier] || [];

  if (placement === "aside") {
    if (tier === "platinum") {
      currentTier = currentTier.filter((s) => !s.priority);
    } else if (tier === "special") {
      currentTier = [
        ...currentTier,
        ...data.platinum.filter((s) => s.priority),
      ];
    }
  }
  return currentTier;
}

export default function Sponsors({ tier, placement = "aside" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 300px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    load();
  }, []);

  const track = (interest = false) => {
    const code = interest ? "Y2BVYNT2" : eventMap[placement];
    if (typeof fathom !== "undefined") {
      fathom.trackGoal(code, 0);
    }
  };

  const sponsorList = resolveList(data, tier, placement);

  return (
    <div
      ref={containerRef}
      className={`spsr-container ${
        tier.startsWith("plat") ? "platinum" : tier
      } ${placement}`}
    >
      {data && visible && (
        <>
          {sponsorList.map(({ url, img, name }) => (
            <a
              key={url}
              href={url}
              className="spsr-item"
              target="_blank"
              rel="sponsored noopener"
              onClick={() => track()}
            >
              {img.endsWith("png") ? (
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${base}/images/${img.replace(/\.png$/, ".avif")}`}
                  />
                  <img src={`${base}/images/${img}`} alt={name} />
                </picture>
              ) : (
                <img src={`${base}/images/${img}`} alt={name} />
              )}
            </a>
          ))}
        </>
      )}

      {placement !== "page" && tier !== "special" && (
        <a
          href="/sponsor/"
          className="spsr-item action"
          onClick={() => track(true)}
        >
          Become a Sponsor
        </a>
      )}

      {tier === "special" && data && !data[tier]?.length && (
        <a
          href="/sponsor/#tier-benefits"
          className="spsr-item action"
          onClick={() => track(true)}
        >
          Inquire about Special Sponsorship
        </a>
      )}
    </div>
  );
}
