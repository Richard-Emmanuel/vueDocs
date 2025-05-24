import { v as createVNode, g as Fragment$1, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                         */
import { useRef, useState, useEffect } from 'react';
import { ref } from 'vue';
import ReactDOM from 'react-dom';
import 'clsx';

const Sitemap = ({ nav }) => {
  if (!nav || !Array.isArray(nav)) {
    return null;
  }
  const ecosystem = nav.find((i) => i.activeMatch?.includes("ecosystem"));
  const items = nav.filter((i) => i !== ecosystem && i.items).concat(ecosystem?.items || []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "sitemap", children: /* @__PURE__ */ jsx("div", { className: "container", children: items.map((col, colIdx) => /* @__PURE__ */ jsxs("div", { className: "sitemap-col", children: [
      /* @__PURE__ */ jsx("h4", { children: col.text }),
      /* @__PURE__ */ jsx("ul", { children: col.items?.map((row, rowIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: row.link, className: "vt-link", children: row.text }) }, rowIdx)) })
    ] }, colIdx)) }) }),
    /* @__PURE__ */ jsx("style", { children: `
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
      ` })
  ] });
};

const data = ref();
const pending = ref(false);
const base = `https://automation.vuejs.org`;
const load = async () => {
  if (!pending.value) {
    pending.value = true;
    data.value = await (await fetch(`${base}/data.json`)).json();
  }
};

const eventMap = {
  aside: "4QUPDDRU",
  landing: "58FLAR2Z",
  page: "ZXLO3IUT"
};
function resolveList(data2, tier, placement) {
  let currentTier = data2[tier] || [];
  if (placement === "aside") {
    if (tier === "platinum") {
      currentTier = currentTier.filter((s) => !s.priority);
    } else if (tier === "special") {
      currentTier = [
        ...currentTier,
        ...data2.platinum.filter((s) => s.priority)
      ];
    }
  }
  return currentTier;
}
function Sponsors({ tier, placement = "aside" }) {
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: `spsr-container ${tier.startsWith("plat") ? "platinum" : tier} ${placement}`,
      children: [
        data && visible && /* @__PURE__ */ jsx(Fragment, { children: sponsorList.map(({ url, img, name }) => /* @__PURE__ */ jsx(
          "a",
          {
            href: url,
            className: "spsr-item",
            target: "_blank",
            rel: "sponsored noopener",
            onClick: () => track(),
            children: img.endsWith("png") ? /* @__PURE__ */ jsxs("picture", { children: [
              /* @__PURE__ */ jsx(
                "source",
                {
                  type: "image/avif",
                  srcSet: `${base}/images/${img.replace(/\.png$/, ".avif")}`
                }
              ),
              /* @__PURE__ */ jsx("img", { src: `${base}/images/${img}`, alt: name })
            ] }) : /* @__PURE__ */ jsx("img", { src: `${base}/images/${img}`, alt: name })
          },
          url
        )) }),
        placement !== "page" && tier !== "special" && /* @__PURE__ */ jsx(
          "a",
          {
            href: "/sponsor/",
            className: "spsr-item action",
            onClick: () => track(true),
            children: "Become a Sponsor"
          }
        ),
        tier === "special" && data && !data[tier]?.length && /* @__PURE__ */ jsx(
          "a",
          {
            href: "/sponsor/#tier-benefits",
            className: "spsr-item action",
            onClick: () => track(true),
            children: "Inquire about Special Sponsorship"
          }
        )
      ]
    }
  );
}

const VIDEO_SOURCE = "https://player.vimeo.com/video/647441538?autoplay=1";
function WhyVue() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);
  const modal = /* @__PURE__ */ jsx("div", { onClick: () => setShowModal(false), className: "vuemastery-modal-mask", children: /* @__PURE__ */ jsx("div", { className: "vuemastery-modal-wrapper", children: /* @__PURE__ */ jsxs("div", { className: "vuemastery-modal-container", children: [
    /* @__PURE__ */ jsx("div", { className: "vuemastery-modal-content", children: /* @__PURE__ */ jsx("div", { className: "vuemastery-video-space", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: VIDEO_SOURCE,
        style: {
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
          borderRadius: "6px"
        },
        frameBorder: "0",
        allowFullScreen: true,
        allow: "autoplay"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "vuemastery-modal-footer", children: /* @__PURE__ */ jsxs("p", { className: "vuemastery-modal-footer-text", children: [
      "Video by",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.vuemastery.com",
          target: "_blank",
          rel: "sponsored noopener",
          title: "Vue.js Courses on Vue Mastery",
          children: "Vue Mastery"
        }
      ),
      ". Watch Vue Mastery’s free",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3",
          target: "_blank",
          rel: "sponsored noopener",
          title: "Vue.js Courses on Vue Mastery",
          children: "Intro to Vue course"
        }
      ),
      "."
    ] }) })
  ] }) }) });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        id: "vuemastery-action",
        className: "why-vue",
        onClick: () => setShowModal(true),
        children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "icon-play",
              "aria-labelledby": "simpleicons-play-icon",
              role: "img",
              viewBox: "0 0 100 125",
              fill: "#FFFFFF",
              children: [
                /* @__PURE__ */ jsx("title", { id: "simpleicons-play-icon", lang: "en", children: "Play icon" }),
                /* @__PURE__ */ jsx("path", { d: "M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" })
              ]
            }
          ),
          "Why Vue"
        ]
      }
    ),
    showModal && ReactDOM.createPortal(modal, document.body)
  ] });
}

function LandingPage() {
  useEffect(() => {
    load();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { id: "hero", children: [
      /* @__PURE__ */ jsx("img", { id: "uwu", alt: "Vue.js Kawaii Logo by @icarusgkx" }),
      /* @__PURE__ */ jsxs("h1", { className: "tagline", children: [
        "The ",
        /* @__PURE__ */ jsx("span", { className: "accent", children: "Progressive" }),
        /* @__PURE__ */ jsx("br", {}),
        " JavaScript Framework"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "description", children: "An approachable, performant and versatile framework for building web user interfaces." }),
      /* @__PURE__ */ jsxs("p", { className: "actions", children: [
        /* @__PURE__ */ jsx(WhyVue, {}),
        /* @__PURE__ */ jsxs("a", { className: "get-started", href: "/guide/introduction.html", children: [
          "Get Started",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "icon",
              xmlns: "http://www.w3.org/2000/svg",
              width: "10",
              height: "10",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { d: "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("a", { className: "setup", href: "/guide/quick-start.html", children: "Install" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "security",
            href: "https://v2.vuejs.org/eol/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              "Get Security Updates for Vue 2",
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /* @__PURE__ */ jsx("path", { d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" })
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "special-spsr", children: data && data.special ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "lead", children: "Special Sponsor" }),
      data.special.map(({ url, img, name, description }, idx) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "sponsored noopener", children: img.endsWith("png") ? /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              type: "image/avif",
              srcSet: `${base}/images/${img.replace(
                /\.png$/,
                ".avif"
              )}`
            }
          ),
          /* @__PURE__ */ jsx("img", { src: `${base}/images/${img}`, alt: name })
        ] }) : /* @__PURE__ */ jsx(
          "img",
          {
            width: "168",
            height: "42",
            src: `${base}/images/${img}`,
            alt: name
          }
        ) }),
        /* @__PURE__ */ jsx("span", { children: description })
      ] }, idx))
    ] }) : /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "/sponsor/#tier-benefits", children: "Special Sponsor slot is now vacant - Inquire now" }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "highlights", className: "vt-box-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "vt-box", children: [
        /* @__PURE__ */ jsx("h2", { children: "Approachable" }),
        /* @__PURE__ */ jsx("p", { children: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "vt-box", children: [
        /* @__PURE__ */ jsx("h2", { children: "Performant" }),
        /* @__PURE__ */ jsx("p", { children: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "vt-box", children: [
        /* @__PURE__ */ jsx("h2", { children: "Versatile" }),
        /* @__PURE__ */ jsx("p", { children: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "spsrs", children: [
      /* @__PURE__ */ jsx("h2", { children: "Platinum Sponsors" }),
      /* @__PURE__ */ jsx(Sponsors, { tier: "platinum", placement: "landing" }),
      /* @__PURE__ */ jsx("h2", { children: "Gold Sponsors" }),
      /* @__PURE__ */ jsx(Sponsors, { tier: "gold", placement: "landing" })
    ] }),
    /* @__PURE__ */ jsx(Sitemap, {})
  ] });
}

const frontmatter = {
  "title": "Welcome to Starlight",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "actions": [{
      "text": "Get Started",
      "link": "/getting-started/introduction/",
      "icon": "right-arrow"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(LandingPage, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/index.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
