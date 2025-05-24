import "../styles/index.css";

import { useEffect, useRef, useState } from "react";
// Update the import path below if 'sponsor' is located elsewhere, e.g. '../utils/sponsor'
import { base, useSponsors, loadSponsors } from "./sponsors"; // updated import path and hook

const eventMap = {
  aside: "4QUPDDRU",
  landing: "58FLAR2Z",
  page: "ZXLO3IUT",
};

interface Sponsor {
  url: string;
  img: string;
  name: string;
  priority?: boolean;
}

interface SponsorsData {
  [tier: string]: Sponsor[];
}

// Use SponsorsData as the single source of truth for sponsor data type
type SponsorData = SponsorsData;

function resolveList(
  data: SponsorsData | undefined,
  tier: string,
  placement: string
): Sponsor[] {
  let currentTier: Sponsor[] = data?.[tier] || [];

  if (placement === "aside") {
    if (tier === "platinum") {
      currentTier = currentTier.filter((s) => !s.priority);
    } else if (tier === "special") {
      currentTier = [
        ...currentTier,
        ...(data?.platinum?.filter((s) => s.priority) || []),
      ];
    }
  }
  return currentTier;
}

type Placement = keyof typeof eventMap;

interface SponsorsProps {
  tier: string;
  placement?: Placement;
}

export default function Sponsors({ tier, placement = "aside" }: SponsorsProps) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const data = useSponsors();

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

  const track = (interest = false) => {
    const code = interest ? "Y2BVYNT2" : eventMap[placement as Placement];
    if (typeof window.fathom !== "undefined") {
      window.fathom.trackGoal(code, 0);
    }
  };

  const sponsorList = data ? resolveList(data, tier, placement) : [];

  return (
    <div
      ref={containerRef}
      className={`spsr-container ${
        tier.startsWith("plat") ? "platinum" : tier
      } ${placement}`}
    >
      {data && visible && sponsorList.length > 0 && (
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

      {tier === "special" && data && data[tier]?.length === 0 && (
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
