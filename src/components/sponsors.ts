// sponsor.ts
import { useState, useEffect } from "react";

declare global {
  interface Window {
    fathom?: {
      trackGoal: (id: string, value: number) => any;
    };
  }
}

export interface Sponsor {
  url: string;
  img: string;
  name: string;
  description?: string;
  priority?: boolean;
}

export const base = `https://automation.vuejs.org`;

export interface SponsorData {
  special: Sponsor[];
  platinum: Sponsor[];
  platinum_china: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
}

// Shared across instances like a module-level singleton
let sponsorData: SponsorData | null = null;
let dataPromise: Promise<SponsorData> | null = null;

export const loadSponsors = async (): Promise<SponsorData> => {
  if (sponsorData) return sponsorData;

  if (!dataPromise) {
    dataPromise = fetch(`${base}/data.json`).then((res) => res.json());
  }

  sponsorData = await dataPromise;
  return sponsorData;
};

// Optional React hook if you want live binding inside components
export const useSponsors = () => {
  const [data, setData] = useState<SponsorData | null>(null);

  useEffect(() => {
    loadSponsors().then(setData);
  }, []);

  return data;
};
