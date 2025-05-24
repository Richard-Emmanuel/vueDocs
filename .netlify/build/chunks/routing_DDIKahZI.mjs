import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Routing",
  "description": "A guide to routing in Vue.js."
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
    "set:html": "In Vue.js, routing is an essential part of building single-page applications (SPAs). This guide will cover the basics of routing in Vue.js, including how to set up a router, how to define routes, and how to use navigation guards.\r\nIt will also provide examples to help you understand how to implement routing effectively in your Vue.js applications."
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
const url = "src/content/docs/scaling-up/routing.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/routing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/routing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
