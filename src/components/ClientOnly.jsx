import React from "react";

const ClientOnly = ({ children, fallback = null }) => {
  // During SSR, show fallback
  if (typeof window === "undefined") {
    return fallback;
  }

  // In the browser, show the actual content
  return children;
};

export default ClientOnly;
