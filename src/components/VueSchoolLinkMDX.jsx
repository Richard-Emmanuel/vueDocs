import React from "react";
import "./VueSchoolLink.css";

export default function VueSchoolLinkMDX({ href, title, children }) {
  return (
    <div className="vueschool">
      <a
        href={`${href}?friend=vuejs`}
        target="_blank"
        rel="sponsored noopener"
        title={title}
      >
        {children || "Watch a free video lesson on Vue School"}
      </a>
    </div>
  );
}
