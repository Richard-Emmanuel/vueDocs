import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "reactivity-in-depth",
  "description": "A deep dive into Vue's reactivity system."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "reactivity-in-depth",
    "text": "Reactivity in Depth"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<div class=\"sl-heading-wrapper level-h1\"><h1 id=\"reactivity-in-depth\">Reactivity in Depth</h1><a class=\"sl-anchor-link\" href=\"#reactivity-in-depth\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Reactivity in Depth”</span></a></div>\n<p>Vue’s reactivity system is a powerful feature that allows developers to create dynamic and responsive applications. In this section, we will explore the inner workings of Vue’s reactivity system, including how it tracks changes to data and updates the DOM efficiently.</p>"
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
const url = "src/content/docs/extra-topics/reactivity-in-depth.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/extra-topics/reactivity-in-depth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/extra-topics/reactivity-in-depth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
