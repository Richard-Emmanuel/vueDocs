// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Vue.js",
      components: {},
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/index.css",
      ],
      //   logo
      logo: {
        src: "./src/assets/images/vue-logo.png",
      },
      //   favicon
      favicon: "./src/assets/images/favicon.svg",

      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Quick start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Essentials",
          items: [
            {
              label: "Creating an Application",
              slug: "essentials/creating-an-application",
            },
            { label: "Template Syntax", slug: "essentials/template-syntax" },
            {
              label: "Reactivity Fundamentals",
              slug: "essentials/reactivity-fundamentals",
            },
            {
              label: "Computed Properties",
              slug: "essentials/computed-properties",
            },
            {
              label: "Class and Style Bindings",
              slug: "essentials/class-and-style-bindings",
            },
          ],
        },
        {
          label: "Components In-Depth",
          items: [
            { label: "Registration", slug: "components-in-depth/registration" },
            { label: "Props", slug: "components-in-depth/props" },
            { label: "Events", slug: "components-in-depth/events" },
            {
              label: "Component v-model",
              slug: "components-in-depth/component-v-model",
            },
            {
              label: "Fallthrough Attributes",
              slug: "components-in-depth/fallthrough-attributes",
            },
          ],
        },

        {
          label: "Reusability",
          items: [
            { label: "Composables", slug: "reusability/composables" },
            {
              label: "Custom Directives",
              slug: "reusability/custom-directives",
            },
            { label: "Plugins", slug: "reusability/plugins" },
          ],
        },
        {
          label: "Built-In Components",
          items: [
            { label: "Transition", slug: "built-in-components/transition" },
            {
              label: "TransitionGroup",
              slug: "built-in-components/transition-group",
            },
            { label: "KeepAlive", slug: "built-in-components/keep-alive" },
            { label: "Teleport", slug: "built-in-components/teleport" },
            { label: "Suspense", slug: "built-in-components/suspense" },
          ],
        },
        {
          label: "Scaling Up",
          items: [
            {
              label: "Single-File Components",
              slug: "scaling-up/single-file-components",
            },
            { label: "Tooling", slug: "scaling-up/tooling" },
            { label: "Routing", slug: "scaling-up/routing" },
            { label: "State Management", slug: "scaling-up/state-management" },
            { label: "Testing", slug: "scaling-up/testing" },
            {
              label: "Server-Side Rendering (SSR)",
              slug: "scaling-up/server-side-rendering",
            },
          ],
        },

        {
          label: "Best Practices",
          items: [
            {
              label: "Product Deployment",
              slug: "best-practices/product-deployment",
            },
            { label: "Performance", slug: "best-practices/performance" },
            { label: "Accessibility", slug: "best-practices/accessibility" },
            { label: "Security", slug: "best-practices/security" },
          ],
        },
        {
          label: "Typescript",
          items: [
            { label: "Overview", slug: "typescript/overview" },
            {
              label: "TS with Composition API",
              slug: "typescript/ts-with-composition-api",
            },
            {
              label: "TS with Options API",
              slug: "typescript/ts-with-options-api",
            },
          ],
        },
        {
          label: "Extra Topics",
          items: [
            {
              label: "Ways of Using Vue",
              slug: "extra-topics/ways-of-using-vue",
            },
            {
              label: "Composition API FAQ",
              slug: "extra-topics/composition-api-faq",
            },
            {
              label: "Reactivity in Depth",
              slug: "extra-topics/reactivity-in-depth",
            },
            {
              label: "Rendering Mechanism",
              slug: "extra-topics/rendering-mechanism",
            },
            {
              label: "Render Functions & JSX",
              slug: "extra-topics/render-functions-jsx",
            },
          ],
        },

        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    react(),
    vue(),
  ],
});
