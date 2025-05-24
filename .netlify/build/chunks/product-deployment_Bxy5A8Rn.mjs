import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Product Deployment",
  "description": "A guide to product deployment in Vue.js."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "development-vs-production",
    "text": "Development vs. Production"
  }, {
    "depth": 2,
    "slug": "without-build-tools",
    "text": "Without Build Tools"
  }, {
    "depth": 2,
    "slug": "with-build-tools",
    "text": "With Build Tools"
  }, {
    "depth": 2,
    "slug": "tracking-runtime-errors",
    "text": "Tracking Runtime Errors"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"development-vs-production\">Development vs. Production</h2><a class=\"sl-anchor-link\" href=\"#development-vs-production\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Development vs. Production”</span></a></div>\n<p>During development, Vue provides a number of features to improve the development experience:</p>\n<ul>\n<li>Warning for common errors and pitfalls</li>\n<li>Props / events validation</li>\n<li><a href=\"/guide/extras/reactivity-in-depth#reactivity-debugging\">Reactivity debugging hooks</a></li>\n<li>Devtools integration</li>\n</ul>\n<p>However, these features become useless in production. Some of the warning checks can also incur a small amount of performance overhead. When deploying to production, we should drop all the unused, development-only code branches for smaller payload size and better performance.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"without-build-tools\">Without Build Tools</h2><a class=\"sl-anchor-link\" href=\"#without-build-tools\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Without Build Tools”</span></a></div>\n<p>If you are using Vue without a build tool by loading it from a CDN or self-hosted script, make sure to use the production build (dist files that end in <code dir=\"auto\">.prod.js</code>) when deploying to production. Production builds are pre-minified with all development-only code branches removed.</p>\n<ul>\n<li>If using global build (accessing via the <code dir=\"auto\">Vue</code> global): use <code dir=\"auto\">vue.global.prod.js</code>.</li>\n<li>If using ESM build (accessing via native ESM imports): use <code dir=\"auto\">vue.esm-browser.prod.js</code>.</li>\n</ul>\n<p>Consult the <a href=\"https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use\">dist file guide</a> for more details.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"with-build-tools\">With Build Tools</h2><a class=\"sl-anchor-link\" href=\"#with-build-tools\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “With Build Tools”</span></a></div>\n<p>Projects scaffolded via <code dir=\"auto\">create-vue</code> (based on Vite) or Vue CLI (based on webpack) are pre-configured for production builds.</p>\n<p>If using a custom setup, make sure that:</p>\n<ol>\n<li><code dir=\"auto\">vue</code> resolves to <code dir=\"auto\">vue.runtime.esm-bundler.js</code>.</li>\n<li>The <a href=\"/api/compile-time-flags\">compile time feature flags</a> are properly configured.</li>\n<li><code>process.env.NODE_ENV</code> is replaced with <code dir=\"auto\">\"production\"</code> during build.</li>\n</ol>\n<p>Additional references:</p>\n<ul>\n<li><a href=\"https://vitejs.dev/guide/build.html\">Vite production build guide</a></li>\n<li><a href=\"https://vitejs.dev/guide/static-deploy.html\">Vite deployment guide</a></li>\n<li><a href=\"https://cli.vuejs.org/guide/deployment.html\">Vue CLI deployment guide</a></li>\n</ul>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"tracking-runtime-errors\">Tracking Runtime Errors</h2><a class=\"sl-anchor-link\" href=\"#tracking-runtime-errors\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Tracking Runtime Errors”</span></a></div>\n<p>The <a href=\"/api/application#app-config-errorhandler\">app-level error handler</a> can be used to report errors to tracking services:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { createApp } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">app</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">createApp</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">...</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">app</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">config</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">errorHandler</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">err</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">instance</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">info</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// report error to tracking services</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { createApp } from &#x27;vue&#x27;const app = createApp(...)app.config.errorHandler = (err, instance, info) => {  // report error to tracking services}\"><div></div></button></div></figure></div>\n<p>Services such as <a href=\"https://docs.sentry.io/platforms/javascript/guides/vue/\">Sentry</a> and <a href=\"https://docs.bugsnag.com/platforms/javascript/vue/\">Bugsnag</a> also provide official integrations for Vue.</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/best-practices/product-deployment.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/best-practices/product-deployment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/best-practices/product-deployment.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
