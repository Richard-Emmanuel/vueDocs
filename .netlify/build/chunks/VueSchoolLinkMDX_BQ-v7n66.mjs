import { jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                                 */

function VueSchoolLinkMDX({ href, title, children }) {
  return /* @__PURE__ */ jsx("div", { className: "vueschool", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `${href}?friend=vuejs`,
      target: "_blank",
      rel: "sponsored noopener",
      title,
      children: children || "Watch a free video lesson on Vue School"
    }
  ) });
}

export { VueSchoolLinkMDX as V };
