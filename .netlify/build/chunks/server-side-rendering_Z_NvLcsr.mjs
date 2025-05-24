import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Server-Side Rendering (SSR)",
  "description": "A guide to server-side rendering in Vue.js."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    "set:html": "In Vue.js, server-side rendering (SSR) is a technique used to render components on the server and send the fully rendered HTML to the client. This guide will cover the basics of server-side rendering in Vue.js, including how to set it up and how to use it in your applications.\r\nIt will also provide examples to help you understand how to implement server-side rendering effectively in your Vue.js applications."
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
const url = "src/content/docs/scaling-up/server-side-rendering.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/server-side-rendering.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/server-side-rendering.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
