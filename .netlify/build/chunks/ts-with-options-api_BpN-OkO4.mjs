import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "TS with Options API",
  "description": "A guide to using TypeScript with the Options API in Vue.js."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "defining-props-and-emits",
    "text": "Defining Props and Emits"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>In Vue.js, the Options API is a traditional way to organize component code. This guide will cover the basics of using TypeScript with the Options API, including how to define props and emits, how to use data and computed properties, and how to create mixins.\r\nIt will also provide examples to help you understand how to use TypeScript effectively with the Options API in your Vue.js applications.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"defining-props-and-emits\">Defining Props and Emits</h2><a class=\"sl-anchor-link\" href=\"#defining-props-and-emits\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Defining Props and Emits”</span></a></div>\n<p>When using TypeScript with the Options API, you can define props and emits using the <code dir=\"auto\">defineProps</code> and <code dir=\"auto\">defineEmits</code> functions. This allows you to specify the types of props and events that your component accepts.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"\"><div></div></button></div></figure></div>"
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
const url = "src/content/docs/typescript/ts-with-options-api.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/typescript/ts-with-options-api.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/typescript/ts-with-options-api.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
