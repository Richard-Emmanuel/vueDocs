import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "TS with Composition API",
  "description": "A guide to using TypeScript with the Composition API in Vue.js."
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
    "set:html": "In Vue.js, the Composition API is a powerful way to organize and reuse logic in your components. This guide will cover the basics of using TypeScript with the Composition API, including how to define props and emits, how to use reactive and ref, and how to create composables.\r\nIt will also provide examples to help you understand how to use TypeScript effectively with the Composition API in your Vue.js applications."
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
const url = "src/content/docs/typescript/ts-with-composition-api.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/typescript/ts-with-composition-api.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/typescript/ts-with-composition-api.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
