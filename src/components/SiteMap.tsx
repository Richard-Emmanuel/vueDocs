import "../styles/index.css";
import React from "react";

interface NavItem {
  text: string;
  link?: string;
  items?: NavItem[];
  activeMatch?: string[];
}

interface SitemapProps {
  nav: NavItem[];
}

const Sitemap: React.FC<SitemapProps> = ({ nav }) => {
  if (!nav || !Array.isArray(nav)) {
    return null; // or return fallback JSX
  }

  const ecosystem = nav.find((i) => i.activeMatch?.includes("ecosystem"));
  const items = nav
    .filter((i) => i !== ecosystem && i.items)
    .concat(ecosystem?.items || []);

  return (
    <>
      <section id="sitemap">
        <div className="container">
          {items.map((col, colIdx) => (
            <div className="sitemap-col" key={colIdx}>
              <h4>{col.text}</h4>
              <ul>
                {col.items?.map((row, rowIdx) => (
                  <li key={rowIdx}>
                    <a href={row.link} className="vt-link">
                      {row.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        #sitemap {
          background: var(--vt-c-bg-soft);
        }

        #sitemap .container {
          max-width: 900px;
          margin: 0 auto;
          columns: 1;
          padding: 24px 32px;
        }

        @media (min-width: 768px) {
          #sitemap .container {
            columns: 2;
          }
        }

        @media (min-width: 1024px) {
          #sitemap .container {
            columns: 3;
          }
        }

        #sitemap h4 {
          font-weight: 500;
          color: var(--vt-c-text-1);
          margin-bottom: 0.25em;
        }

        .sitemap-col {
          margin-bottom: 2em;
          break-inside: avoid;
        }

        #sitemap .vt-link {
          font-size: 0.9em;
          color: var(--vt-c-text-2);
          text-decoration: none;
        }
        #sitemap .vt-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Sitemap;
