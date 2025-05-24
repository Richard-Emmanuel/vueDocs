import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Single File Components",
  "description": "A guide to using Single File Components (SFCs) in Vue.js."
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
    "set:html": "In Vue.js, Single File Components (SFCs) are a way to encapsulate the structure, style, and behavior of a component in a single file. This guide will cover the basics of creating and using SFCs, including how to define them and how to use them in your applications.\r\nIt will also provide examples to help you understand how to use SFCs effectively in your Vue.js applications."
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
const url = "src/content/docs/scaling-up/single-file-components.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/single-file-components.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/scaling-up/single-file-components.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
