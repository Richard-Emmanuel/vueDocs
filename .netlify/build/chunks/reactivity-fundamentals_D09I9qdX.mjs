import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Reactivity Fundamentals",
  "description": "A guide to Vue.js reactivity fundamentals."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "outline-deep",
    "text": "outline: deep"
  }, {
    "depth": 1,
    "slug": "reactivity-fundamentals",
    "text": "Reactivity Fundamentals"
  }, {
    "depth": 2,
    "slug": "declaring-reactive-state",
    "text": "Declaring Reactive State"
  }, {
    "depth": 3,
    "slug": "reactive-proxy-vs-original",
    "text": "Reactive Proxy vs. Original"
  }, {
    "depth": 2,
    "slug": "declaring-reactive-state-1",
    "text": "Declaring Reactive State"
  }, {
    "depth": 3,
    "slug": "ref",
    "text": "ref()"
  }, {
    "depth": 3,
    "slug": "script-setup",
    "text": "<script setup>"
  }, {
    "depth": 3,
    "slug": "why-refs",
    "text": "Why Refs?"
  }, {
    "depth": 2,
    "slug": "declaring-methods",
    "text": "Declaring Methods"
  }, {
    "depth": 3,
    "slug": "deep-reactivity",
    "text": "Deep Reactivity"
  }, {
    "depth": 3,
    "slug": "dom-update-timing",
    "text": "DOM Update Timing"
  }, {
    "depth": 2,
    "slug": "reactive",
    "text": "reactive()"
  }, {
    "depth": 3,
    "slug": "reactive-proxy-vs-original-1",
    "text": "Reactive Proxy vs. Original"
  }, {
    "depth": 3,
    "slug": "limitations-of-reactive",
    "text": "Limitations of reactive()"
  }, {
    "depth": 2,
    "slug": "additional-ref-unwrapping-details",
    "text": "Additional Ref Unwrapping Details"
  }, {
    "depth": 3,
    "slug": "as-reactive-object-property",
    "text": "As Reactive Object Property"
  }, {
    "depth": 3,
    "slug": "caveat-in-arrays-and-collections",
    "text": "Caveat in Arrays and Collections"
  }, {
    "depth": 3,
    "slug": "caveat-when-unwrapping-in-templates",
    "text": "Caveat when Unwrapping in Templates"
  }, {
    "depth": 3,
    "slug": "stateful-methods",
    "text": "Stateful Methods"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    svg: "svg",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<hr>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"outline-deep\">outline: deep</h2><a class=\"sl-anchor-link\" href=\"#outline-deep\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “outline: deep”</span></a></div>\n<div class=\"sl-heading-wrapper level-h1\"><h1 id=\"reactivity-fundamentals\">Reactivity Fundamentals</h1><a class=\"sl-anchor-link\" href=\"#reactivity-fundamentals\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Reactivity Fundamentals”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: [":::tip API Preference\r\nThis page and many other chapters later in the guide contain different content for the Options API and the Composition API. Your current preference is ", createVNode("span", {
        class: "options-api",
        "set:html": "Options API"
      }), createVNode("span", {
        class: "composition-api",
        "set:html": "Composition API"
      }), ". You can toggle between the API styles using the “API Preference” switches at the top of the left sidebar.\r\n:::"]
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"declaring-reactive-state\">Declaring Reactive State</h2><a class=\"sl-anchor-link\" href=\"#declaring-reactive-state\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Declaring Reactive State”</span></a></div><p>With the Options API, we use the <code dir=\"auto\">data</code> option to declare reactive state of a component. The option value should be a function that returns an object. Vue will call the function when creating a new component instance, and wrap the returned object in its reactivity system. Any top-level properties of this object are proxied on the component instance (<code dir=\"auto\">this</code> in methods and lifecycle hooks):</p><div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// `mounted` is a lifecycle hook which we will explain later</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">mounted</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// `this` refers to the component instance.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// => 1</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// data can be mutated as well</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      count: 1,    };  },  // &#x60;mounted&#x60; is a lifecycle hook which we will explain later  mounted() {    // &#x60;this&#x60; refers to the component instance.    console.log(this.count); // => 1    // data can be mutated as well    this.count = 2;  },};\"><div></div></button></div></figure></div><p><a href=\"https://play.vuejs.org/#eNpFUNFqhDAQ/JXBpzsoHu2j3B2U/oYPpnGtoetGkrW2iP/eRFsPApthd2Zndilex7H8mqioimu0wY16r4W+Rx8ULXVmYsVSC9AaNafz/gcC6RTkHwHWT6IVnne85rI+1ZLr5YJmyG1qG7gIA3Yd2R/LhN77T8y9sz1mwuyYkXazcQI2SiHz/7iP3VlQexeb5KKjEKEe2lPyMIxeSBROohqxVO4E6yV6ppL9xykTy83tOQvd7tnzoZtDwhrBO2GYNFloYWLyxrzPPOi44WWLWUt618txvASUhhRCKSHgbZt2scKy7HfCujGOqWL9BVfOgyI=\">Try it in the Playground</a></p><p>These instance properties are only added when the instance is first created, so you need to ensure they are all present in the object returned by the <code dir=\"auto\">data</code> function. Where necessary, use <code dir=\"auto\">null</code>, <code dir=\"auto\">undefined</code> or some other placeholder value for properties where the desired value isn’t yet available.</p><p>It is possible to add a new property directly to <code dir=\"auto\">this</code> without including it in <code dir=\"auto\">data</code>. However, properties added this way will not be able to trigger reactive updates.</p><p>Vue uses a <code dir=\"auto\">$</code> prefix when exposing its own built-in APIs via the component instance. It also reserves the prefix <code dir=\"auto\">_</code> for internal properties. You should avoid using names for top-level <code dir=\"auto\">data</code> properties that start with either of these characters.</p><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"reactive-proxy-vs-original\">Reactive Proxy vs. Original</h3><a class=\"sl-anchor-link\" href=\"#reactive-proxy-vs-original\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Reactive Proxy vs. Original”</span></a></div><p>In Vue 3, data is made reactive by leveraging <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy\">JavaScript Proxies</a>. Users coming from Vue 2 should be aware of the following edge case:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">someObject: {},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">mounted</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">const</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">newObject</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">someObject</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">newObject</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">newObject</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">===</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">someObject</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// false</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      someObject: {},    };  },  mounted() {    const newObject = {};    this.someObject = newObject;    console.log(newObject === this.someObject); // false  },};\"><div></div></button></div></figure></div><p>When you access <code dir=\"auto\">this.someObject</code> after assigning it, the value is a reactive proxy of the original <code dir=\"auto\">newObject</code>. <strong>Unlike in Vue 2, the original <code dir=\"auto\">newObject</code> is left intact and will not be made reactive: make sure to always access reactive state as a property of <code dir=\"auto\">this</code>.</strong></p>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h2",
        children: [createVNode(_components.h2, {
          id: "declaring-reactive-state-1",
          children: "Declaring Reactive State"
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#declaring-reactive-state-1",
          children: [createVNode(_components.span, {
            "aria-hidden": "true",
            class: "sl-anchor-icon",
            children: createVNode(_components.svg, {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              children: createVNode(_components.path, {
                fill: "currentcolor",
                d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
              })
            })
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Section titled “Declaring Reactive State”"
          })]
        })]
      }), createVNode(_components.div, {
        class: "sl-heading-wrapper level-h3",
        children: [createVNode(_components.h3, {
          id: "ref",
          children: createVNode(_components.code, {
            dir: "auto",
            children: "ref()"
          })
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#ref",
          children: [createVNode(_components.span, {
            "aria-hidden": "true",
            class: "sl-anchor-icon",
            children: createVNode(_components.svg, {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              children: createVNode(_components.path, {
                fill: "currentcolor",
                d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
              })
            })
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Section titled “ref()”"
          })]
        })]
      }), createVNode(_components.p, {
        children: ["In Composition API, the recommended way to declare reactive state is using the ", createVNode(_components.a, {
          href: "/api/reactivity-core#ref",
          children: createVNode(_components.code, {
            dir: "auto",
            children: "ref()"
          })
        }), " function:"]
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "js",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "import"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " { ref } "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "from"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "vue"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: "\n"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "const "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "count"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " = "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "ref"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#F78C6C",
                      "--1": "#AA0982"
                    },
                    children: "0"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ");"
                  })]
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "import { ref } from \"vue\";const count = ref(0);",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: [createVNode(_components.code, {
          dir: "auto",
          children: "ref()"
        }), " takes the argument and returns it wrapped within a ref object with a ", createVNode(_components.code, {
          dir: "auto",
          children: ".value"
        }), " property:"]
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "js",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "const "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "count"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " = "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "ref"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#F78C6C",
                      "--1": "#AA0982"
                    },
                    children: "0"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ");"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: "\n"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "console"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "log"
                  }), createVNode(_components.span, {
                    style: {
                      "--1": "#403F53"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        "--0": "#D6DEEB"
                      },
                      children: "("
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#D7DBE0"
                      },
                      children: "count"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#D6DEEB"
                      },
                      children: "); "
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// { value: 0 }"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "console"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "log"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "count"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "value"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "); "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// 0"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: "\n"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "count"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "value"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "++"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "console"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "log"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "count"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "value"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "); "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// 1"
                  })]
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "const count = ref(0);console.log(count); // { value: 0 }console.log(count.value); // 0count.value++;console.log(count.value); // 1",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.blockquote, {
        children: ["\n", createVNode(_components.p, {
          children: ["See also: ", createVNode(_components.a, {
            href: "/guide/typescript/composition-api#typing-ref",
            children: "Typing Refs"
          }), " ", createVNode("sup", {
            class: "vt-badge ts"
          })]
        }), "\n"]
      }), createVNode(Fragment$1, {
        "set:html": "<p>To access refs in a component’s template, declare and return them from a component’s <code dir=\"auto\">setup()</code> function:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// `setup` is a special hook dedicated for the Composition API.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setup</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">const</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// expose the ref to the template</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#403F53\">      </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { ref } from &#x22;vue&#x22;;export default {  // &#x60;setup&#x60; is a special hook dedicated for the Composition API.  setup() {    const count = ref(0);    // expose the ref to the template    return {      count,    };  },};\"><div></div></button></div></figure></div><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count }}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<div>{{ count }}</div>\"><div></div></button></div></figure></div><p>Notice that we did <strong>not</strong> need to append <code dir=\"auto\">.value</code> when using the ref in the template. For convenience, refs are automatically unwrapped when used inside templates (with a few <a href=\"#caveat-when-unwrapping-in-templates\">caveats</a>).</p><p>You can also mutate a ref directly in event handlers:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<button @click=&#x22;count++&#x22;>  {{ count }}</button>\"><div></div></button></div></figure></div><p>For more complex logic, we can declare functions that mutate refs in the same scope and expose them as methods alongside the state:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setup</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">const</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// .value is needed in JavaScript</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// don't forget to expose the function as well.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#403F53\">      </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--1:#403F53\">      </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">increment</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { ref } from &#x22;vue&#x22;;export default {  setup() {    const count = ref(0);    function increment() {      // .value is needed in JavaScript      count.value++;    }    // don&#x27;t forget to expose the function as well.    return {      count,      increment,    };  },};\"><div></div></button></div></figure></div><p>Exposed methods can then be used as event handlers:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<button @click=&#x22;increment&#x22;>  {{ count }}</button>\"><div></div></button></div></figure></div><p>Here’s the example live on <a href=\"https://codepen.io/vuejs-examples/pen/WNYbaqo\">Codepen</a>, without using any build tools.</p><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"script-setup\"><code dir=\"auto\">&#x3C;script setup></code></h3><a class=\"sl-anchor-link\" href=\"#script-setup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “&#x3C;script setup>”</span></a></div><p>Manually exposing state and methods via <code dir=\"auto\">setup()</code> can be verbose. Luckily, it can be avoided when using <a href=\"/guide/scaling-up/sfc\">Single-File Components (SFCs)</a>. We can simplify the usage with <code dir=\"auto\">&#x3C;script setup></code>:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">template</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>import { ref } from &#x22;vue&#x22;;const count = ref(0);function increment() {  count.value++;}</script><template>  <button @click=&#x22;increment&#x22;>    {{ count }}  </button></template>\"><div></div></button></div></figure></div><p><a href=\"https://play.vuejs.org/#eNo9jUEKgzAQRa8yZKMiaNcllvYe2dgwQqiZhDhxE3L3jrW4/DPvv1/UK8Zhz6juSm82uciwIef4MOR8DImhQMIFKiwpeGgEbQwZsoE2BhsyMUwH0d66475ksuwCgSOb0CNx20ExBCc77POase8NVUN6PBdlSwKjj+vMKAlAvzOzWJ52dfYzGXXpjPoBAKX856uopDGeFfnq8XKp+gWq4FAi\">Try it in the Playground</a></p><p>Top-level imports, variables and functions declared in <code dir=\"auto\">&#x3C;script setup></code> are automatically usable in the template of the same component. Think of the template as a JavaScript function declared in the same scope - it naturally has access to everything declared alongside it.</p><aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>For the rest of the guide, we will be primarily using SFC + <code dir=\"auto\">&#x3C;script setup></code> syntax for the Composition API code examples, as that is the most common usage for Vue developers.</p><p>If you are not using SFC, you can still use Composition API with the <a href=\"/api/composition-api-setup\"><code dir=\"auto\">setup()</code></a> option.</p></div></aside><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"why-refs\">Why Refs?</h3><a class=\"sl-anchor-link\" href=\"#why-refs\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Why Refs?”</span></a></div><p>You might be wondering why we need refs with the <code dir=\"auto\">.value</code> instead of plain variables. To explain that, we will need to briefly discuss how Vue’s reactivity system works.</p><p>When you use a ref in a template, and change the ref’s value later, Vue automatically detects the change and updates the DOM accordingly. This is made possible with a dependency-tracking based reactivity system. When a component is rendered for the first time, Vue <strong>tracks</strong> every ref that was used during the render. Later on, when a ref is mutated, it will <strong>trigger</strong> a re-render for components that are tracking it.</p><p>In standard JavaScript, there is no way to detect the access or mutation of plain variables. However, we can intercept the get and set operations of an object’s properties using getter and setter methods.</p><p>The <code dir=\"auto\">.value</code> property gives Vue the opportunity to detect when a ref has been accessed or mutated. Under the hood, Vue performs the tracking in its getter, and performs triggering in its setter. Conceptually, you can think of a ref as an object that looks like this:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// pseudo code, not actual implementation</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">myRef</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">_value: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">get </span><span style=\"--0:#82AAFF;--1:#3B61B0\">value</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">track</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">_value</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">set </span><span style=\"--0:#82AAFF;--1:#3B61B0\">value</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">_value</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">trigger</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// pseudo code, not actual implementationconst myRef = {  _value: 0,  get value() {    track();    return this._value;  },  set value(newValue) {    this._value = newValue;    trigger();  },};\"><div></div></button></div></figure></div><p>Another nice trait of refs is that unlike plain variables, you can pass refs into functions while retaining access to the latest value and the reactivity connection. This is particularly useful when refactoring complex logic into reusable code.</p><p>The reactivity system is discussed in more details in the <a href=\"/guide/extras/reactivity-in-depth\">Reactivity in Depth</a> section.</p>"
      })]
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"declaring-methods\">Declaring Methods</h2><a class=\"sl-anchor-link\" href=\"#declaring-methods\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Declaring Methods”</span></a></div><p><a href=\"https://vueschool.io/lessons/methods-in-vue-3\">Free Vue.js Methods Lesson</a></p><p>To add methods to a component instance we use the <code dir=\"auto\">methods</code> option. This should be an object containing the desired methods:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">mounted</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// methods can be called in lifecycle hooks, or other methods!</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      count: 0,    };  },  methods: {    increment() {      this.count++;    },  },  mounted() {    // methods can be called in lifecycle hooks, or other methods!    this.increment();  },};\"><div></div></button></div></figure></div><p>Vue automatically binds the <code dir=\"auto\">this</code> value for <code dir=\"auto\">methods</code> so that it always refers to the component instance. This ensures that a method retains the correct <code dir=\"auto\">this</code> value if it’s used as an event listener or callback. You should avoid using arrow functions when defining <code dir=\"auto\">methods</code>, as that prevents Vue from binding the appropriate <code dir=\"auto\">this</code> value:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// BAD: no `this` access here!</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  methods: {    increment: () => {      // BAD: no &#x60;this&#x60; access here!    },  },};\"><div></div></button></div></figure></div><p>Just like all other properties of the component instance, the <code dir=\"auto\">methods</code> are accessible from within the component’s template. Inside a template they are most commonly used as event listeners:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count }}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<button @click=&#x22;increment&#x22;>{{ count }}</button>\"><div></div></button></div></figure></div><p><a href=\"https://play.vuejs.org/#eNplj9EKwyAMRX8l+LSx0e65uLL9hy+dZlTWqtg4BuK/z1baDgZicsPJgUR2d656B2QN45P02lErDH6c9QQKn10YCKIwAKqj7nAsPYBHCt6sCUDaYKiBS8lpLuk8/yNSb9XUrKg20uOIhnYXAPV6qhbF6fRvmOeodn6hfzwLKkx+vN5OyIFwdENHmBMAfwQia+AmBy1fV8E2gWBtjOUASInXBcxLvN4MLH0BCe1i4Q==\">Try it in the Playground</a></p><p>In the example above, the method <code dir=\"auto\">increment</code> will be called when the <code dir=\"auto\">&#x3C;button></code> is clicked.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"deep-reactivity\">Deep Reactivity</h3><a class=\"sl-anchor-link\" href=\"#deep-reactivity\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Deep Reactivity”</span></a></div>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<p>In Vue, state is deeply reactive by default. This means you can expect changes to be detected even when you mutate nested objects or arrays:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">obj: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">nested: { count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">arr: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">foo</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">bar</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">mutateDeeply</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// these will work as expected.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">obj</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">nested</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">obj</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">arr</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">push</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">baz</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      obj: {        nested: { count: 0 },        arr: [&#x22;foo&#x22;, &#x22;bar&#x22;],      },    };  },  methods: {    mutateDeeply() {      // these will work as expected.      this.obj.nested.count++;      this.obj.arr.push(&#x22;baz&#x22;);    },  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<p>Refs can hold any value type, including deeply nested objects, arrays, or JavaScript built-in data structures like <code dir=\"auto\">Map</code>.</p><p>A ref will make its value deeply reactive. This means you can expect changes to be detected even when you mutate nested objects or arrays:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">obj</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">nested: { count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#C792EA;--1:#8844AE\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">arr:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">foo</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">bar</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">mutateDeeply</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// these will work as expected.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">obj</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">nested</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">obj</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">arr</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">push</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">baz</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { ref } from &#x22;vue&#x22;;const obj = ref({  nested: { count: 0 },  arr: [&#x22;foo&#x22;, &#x22;bar&#x22;],});function mutateDeeply() {  // these will work as expected.  obj.value.nested.count++;  obj.value.arr.push(&#x22;baz&#x22;);}\"><div></div></button></div></figure></div><p>Non-primitive values are turned into reactive proxies via <a href=\"#reactive\"><code dir=\"auto\">reactive()</code></a>, which is discussed below.</p><p>It is also possible to opt-out of deep reactivity with <a href=\"/api/reactivity-advanced#shallowref\">shallow refs</a>. For shallow refs, only <code dir=\"auto\">.value</code> access is tracked for reactivity. Shallow refs can be used for optimizing performance by avoiding the observation cost of large objects, or in cases where the inner state is managed by an external library.</p><p>Further reading:</p><ul>\n<li><a href=\"/guide/best-practices/performance#reduce-reactivity-overhead-for-large-immutable-structures\">Reduce Reactivity Overhead for Large Immutable Structures</a></li>\n<li><a href=\"/guide/extras/reactivity-in-depth#integration-with-external-state-systems\">Integration with External State Systems</a></li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"dom-update-timing\">DOM Update Timing</h3><a class=\"sl-anchor-link\" href=\"#dom-update-timing\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “DOM Update Timing”</span></a></div>\n<p>When you mutate reactive state, the DOM is updated automatically. However, it should be noted that the DOM updates are not applied synchronously. Instead, Vue buffers them until the “next tick” in the update cycle to ensure that each component updates only once no matter how many state changes you have made.</p>\n<p>To wait for the DOM update to complete after a state change, you can use the <a href=\"/api/general#nexttick\">nextTick()</a> global API:</p>\n"
    }), createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { nextTick } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">await</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">nextTick</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Now the DOM is updated</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { nextTick } from &#x22;vue&#x22;;async function increment() {  count.value++;  await nextTick();  // Now the DOM is updated}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { nextTick } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">async</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increment</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#C792EA;--1:#8844AE\">await</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">nextTick</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// Now the DOM is updated</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { nextTick } from &#x22;vue&#x22;;export default {  methods: {    async increment() {      this.count++;      await nextTick();      // Now the DOM is updated    },  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      children: [createVNode(_components.div, {
        class: "sl-heading-wrapper level-h2",
        children: [createVNode(_components.h2, {
          id: "reactive",
          children: createVNode(_components.code, {
            dir: "auto",
            children: "reactive()"
          })
        }), createVNode(_components.a, {
          class: "sl-anchor-link",
          href: "#reactive",
          children: [createVNode(_components.span, {
            "aria-hidden": "true",
            class: "sl-anchor-icon",
            children: createVNode(_components.svg, {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              children: createVNode(_components.path, {
                fill: "currentcolor",
                d: "m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"
              })
            })
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Section titled “reactive()”"
          })]
        })]
      }), createVNode(_components.p, {
        children: ["There is another way to declare reactive state, with the ", createVNode(_components.code, {
          dir: "auto",
          children: "reactive()"
        }), " API. Unlike a ref which wraps the inner value in a special object, ", createVNode(_components.code, {
          dir: "auto",
          children: "reactive()"
        }), " makes an object itself reactive:"]
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "js",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "import"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " { reactive } "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "from"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "vue"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: "\n"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "const "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "state"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " = "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "reactive"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "{ count: "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#F78C6C",
                      "--1": "#AA0982"
                    },
                    children: "0"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " }"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ");"
                  })]
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "import { reactive } from \"vue\";const state = reactive({ count: 0 });",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.blockquote, {
        children: ["\n", createVNode(_components.p, {
          children: ["See also: ", createVNode(_components.a, {
            href: "/guide/typescript/composition-api#typing-reactive",
            children: "Typing Reactive"
          }), " ", createVNode("sup", {
            class: "vt-badge ts"
          })]
        }), "\n"]
      }), createVNode(Fragment$1, {
        "set:html": "<p>Usage in template:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<button @click=&#x22;state.count++&#x22;>  {{ state.count }}</button>\"><div></div></button></div></figure></div><p>Reactive objects are <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy\">JavaScript Proxies</a> and behave just like normal objects. The difference is that Vue is able to intercept the access and mutation of all properties of a reactive object for reactivity tracking and triggering.</p><p><code dir=\"auto\">reactive()</code> converts the object deeply: nested objects are also wrapped with <code dir=\"auto\">reactive()</code> when accessed. It is also called by <code dir=\"auto\">ref()</code> internally when the ref value is an object. Similar to shallow refs, there is also the <a href=\"/api/reactivity-advanced#shallowreactive\"><code dir=\"auto\">shallowReactive()</code></a> API for opting-out of deep reactivity.</p><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"reactive-proxy-vs-original-1\">Reactive Proxy vs. Original</h3><a class=\"sl-anchor-link\" href=\"#reactive-proxy-vs-original-1\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Reactive Proxy vs. Original”</span></a></div><p>It is important to note that the returned value from <code dir=\"auto\">reactive()</code> is a <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy\">Proxy</a> of the original object, which is not equal to the original object:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">raw</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">proxy</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">raw</span><span style=\"--0:#D6DEEB\">);</span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// proxy is NOT equal to the original.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">proxy</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">===</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">raw</span><span style=\"--0:#D6DEEB\">); </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// false</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const raw = {};const proxy = reactive(raw);// proxy is NOT equal to the original.console.log(proxy === raw); // false\"><div></div></button></div></figure></div><p>Only the proxy is reactive - mutating the original object will not trigger updates. Therefore, the best practice when working with Vue’s reactivity system is to <strong>exclusively use the proxied versions of your state</strong>.</p><p>To ensure consistent access to the proxy, calling <code dir=\"auto\">reactive()</code> on the same object always returns the same proxy, and calling <code dir=\"auto\">reactive()</code> on an existing proxy also returns that same proxy:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// calling reactive() on the same object returns the same proxy</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">raw</span><span style=\"--0:#D6DEEB\">) </span></span><span style=\"--0:#C792EA;--1:#8844AE\">===</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">proxy</span><span style=\"--0:#D6DEEB\">); </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// true</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// calling reactive() on a proxy returns itself</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">proxy</span><span style=\"--0:#D6DEEB\">) </span></span><span style=\"--0:#C792EA;--1:#8844AE\">===</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">proxy</span><span style=\"--0:#D6DEEB\">); </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// true</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// calling reactive() on the same object returns the same proxyconsole.log(reactive(raw) === proxy); // true// calling reactive() on a proxy returns itselfconsole.log(reactive(proxy) === proxy); // true\"><div></div></button></div></figure></div><p>This rule applies to nested objects as well. Due to deep reactivity, nested objects inside a reactive object are also proxies:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">proxy</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">raw</span><span style=\"--0:#C792EA;--1:#8844AE\"> = {}</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">proxy</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">nested</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">raw</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">proxy</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">nested</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">===</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">raw</span><span style=\"--0:#D6DEEB\">); </span></span><span style=\"--0:#919F9F;--1:#5D6376\">// false</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const proxy = reactive({});const raw = {};proxy.nested = raw;console.log(proxy.nested === raw); // false\"><div></div></button></div></figure></div><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"limitations-of-reactive\">Limitations of <code dir=\"auto\">reactive()</code></h3><a class=\"sl-anchor-link\" href=\"#limitations-of-reactive\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Limitations of reactive()”</span></a></div><p>The <code dir=\"auto\">reactive()</code> API has a few limitations:</p><ol>\n<li>\n<p><strong>Limited value types:</strong> it only works for object types (objects, arrays, and <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections\">collection types</a> such as <code dir=\"auto\">Map</code> and <code dir=\"auto\">Set</code>). It cannot hold <a href=\"https://developer.mozilla.org/en-US/docs/Glossary/Primitive\">primitive types</a> such as <code dir=\"auto\">string</code>, <code dir=\"auto\">number</code> or <code dir=\"auto\">boolean</code>.</p>\n</li>\n<li>\n<p><strong>Cannot replace entire object:</strong> since Vue’s reactivity tracking works over property access, we must always keep the same reference to the reactive object. This means we can’t easily “replace” a reactive object because the reactivity connection to the first reference is lost:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let </span><span style=\"--0:#D7DBE0;--1:#403F53\">state</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// the above reference ({ count: 0 }) is no longer being tracked</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// (reactivity connection is lost!)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">state</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">({ count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"let state = reactive({ count: 0 });// the above reference ({ count: 0 }) is no longer being tracked// (reactivity connection is lost!)state = reactive({ count: 1 });\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p><strong>Not destructure-friendly:</strong> when we destructure a reactive object’s primitive type property into local variables, or when we pass that property into a function, we will lose the reactivity connection:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">state</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// count is disconnected from state.count when destructured.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">let { </span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">state</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// does not affect original state</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// the function receives a plain number and</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// won't be able to track changes to state.count</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// we have to pass the entire object in to retain reactivity</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">callSomeFunction</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const state = reactive({ count: 0 });// count is disconnected from state.count when destructured.let { count } = state;// does not affect original statecount++;// the function receives a plain number and// won&#x27;t be able to track changes to state.count// we have to pass the entire object in to retain reactivitycallSomeFunction(state.count);\"><div></div></button></div></figure></div>\n</li>\n</ol><p>Due to these limitations, we recommend using <code dir=\"auto\">ref()</code> as the primary API for declaring reactive state.</p><div class=\"sl-heading-wrapper level-h2\"><h2 id=\"additional-ref-unwrapping-details\">Additional Ref Unwrapping Details</h2><a class=\"sl-anchor-link\" href=\"#additional-ref-unwrapping-details\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Additional Ref Unwrapping Details”</span></a></div><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"as-reactive-object-property\">As Reactive Object Property</h3><a class=\"sl-anchor-link\" href=\"#as-reactive-object-property\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “As Reactive Object Property”</span></a></div><p>A ref is automatically unwrapped when accessed or mutated as a property of a reactive object. In other words, it behaves like a normal property:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">state</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// 0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// 1</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const count = ref(0);const state = reactive({  count,});console.log(state.count); // 0state.count = 1;console.log(count.value); // 1\"><div></div></button></div></figure></div><p>If a new ref is assigned to a property linked to an existing ref, it will replace the old ref:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">otherCount</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">otherCount</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">state</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// 2</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// original ref is now disconnected from state.count</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">); </span><span style=\"--0:#919F9F;--1:#5D6376\">// 1</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const otherCount = ref(2);state.count = otherCount;console.log(state.count); // 2// original ref is now disconnected from state.countconsole.log(count.value); // 1\"><div></div></button></div></figure></div><p>Ref unwrapping only happens when nested inside a deep reactive object. It does not apply when it is accessed as a property of a <a href=\"/api/reactivity-advanced#shallowreactive\">shallow reactive object</a>.</p><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"caveat-in-arrays-and-collections\">Caveat in Arrays and Collections</h3><a class=\"sl-anchor-link\" href=\"#caveat-in-arrays-and-collections\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Caveat in Arrays and Collections”</span></a></div><p>Unlike reactive objects, there is <strong>no</strong> unwrapping performed when the ref is accessed as an element of a reactive array or a native collection type like <code dir=\"auto\">Map</code>:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">books</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">([</span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 3 Guide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)]);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// need .value here</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">books</span><span style=\"--0:#D6DEEB\">[</span></span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">map</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">new</span><span style=\"--0:#C792EA;--1:#8844AE\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">Map</span><span style=\"--0:#D6DEEB;--1:#403F53\">([[</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">count</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">)]]));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// need .value here</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">log</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">map</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">count</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const books = reactive([ref(&#x22;Vue 3 Guide&#x22;)]);// need .value hereconsole.log(books[0].value);const map = reactive(new Map([[&#x22;count&#x22;, ref(0)]]));// need .value hereconsole.log(map.get(&#x22;count&#x22;).value);\"><div></div></button></div></figure></div><div class=\"sl-heading-wrapper level-h3\"><h3 id=\"caveat-when-unwrapping-in-templates\">Caveat when Unwrapping in Templates</h3><a class=\"sl-anchor-link\" href=\"#caveat-when-unwrapping-in-templates\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Caveat when Unwrapping in Templates”</span></a></div><p>Ref unwrapping in templates only applies if the ref is a top-level property in the template render context.</p><p>In the example below, <code dir=\"auto\">count</code> and <code dir=\"auto\">object</code> are top-level properties, but <code dir=\"auto\">object.id</code> is not:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">object</span><span style=\"--0:#C792EA;--1:#8844AE\"> = { id: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const count = ref(0);const object = { id: ref(1) };\"><div></div></button></div></figure></div><p>Therefore, this expression works as expected:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{{ count </span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{{ count + 1 }}\"><div></div></button></div></figure></div><p>…while this one does <strong>NOT</strong>:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{{ object</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">id</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{{ object.id + 1 }}\"><div></div></button></div></figure></div><p>The rendered result will be <code dir=\"auto\">[object Object]1</code> because <code dir=\"auto\">object.id</code> is not unwrapped when evaluating the expression and remains a ref object. To fix this, we can destructure <code dir=\"auto\">id</code> into a top-level property:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const { </span><span style=\"--0:#82AAFF;--1:#3B61B0\">id</span><span style=\"--0:#C792EA;--1:#8844AE\"> } = </span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">object</span><span style=\"--0:#D6DEEB\">;</span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const { id } = object;\"><div></div></button></div></figure></div><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{{ id </span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{{ id + 1 }}\"><div></div></button></div></figure></div><p>Now the render result will be <code dir=\"auto\">2</code>.</p>"
      }), createVNode(_components.p, {
        children: ["Another thing to note is that a ref does get unwrapped if it is the final evaluated value of a text interpolation (i.e. a ", createVNode("code", {
          "v-pre": true,
          children: {}
        }), " tag), so the following will render ", createVNode(Fragment$1, {
          "set:html": "<code dir=\"auto\">1</code>:"
        })]
      }), createVNode(_components.div, {
        class: "expressive-code",
        "set:html": "<figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{{ object</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">id</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{{ object.id }}\"><div></div></button></div></figure>"
      }), createVNode(_components.p, {
        children: ["This is just a convenience feature of text interpolation and is equivalent to ", createVNode("code", {
          "v-pre": true,
          "set:html": "<code dir=\"auto\">{% raw %}{{ object.id.value }}{% endraw %}</code>"
        }), "."]
      })]
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"stateful-methods\">Stateful Methods</h3><a class=\"sl-anchor-link\" href=\"#stateful-methods\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Stateful Methods”</span></a></div><p>In some cases, we may need to dynamically create a method function, for example creating a debounced event handler:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { debounce } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">lodash-es</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Debouncing with Lodash</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">click: </span><span style=\"--0:#82AAFF;--1:#3B61B0\">debounce</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// ... respond to click ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}, </span><span style=\"--0:#F78C6C;--1:#AA0982\">500</span><span style=\"--0:#D6DEEB;--1:#403F53\">),</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { debounce } from &#x22;lodash-es&#x22;;export default {  methods: {    // Debouncing with Lodash    click: debounce(function () {      // ... respond to click ...    }, 500),  },};\"><div></div></button></div></figure></div><p>However, this approach is problematic for components that are reused because a debounced function is <strong>stateful</strong>: it maintains some internal state on the elapsed time. If multiple component instances share the same debounced function, they will interfere with one another.</p><p>To keep each component instance’s debounced function independent of the others, we can create the debounced version in the <code dir=\"auto\">created</code> lifecycle hook:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">created</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// each instance now has its own copy of debounced handler</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">debouncedClick</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">_</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">debounce</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">click</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">500</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">unmounted</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// also a good idea to cancel the timer</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// when the component is removed</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">debouncedClick</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">cancel</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">click</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// ... respond to click ...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  created() {    // each instance now has its own copy of debounced handler    this.debouncedClick = _.debounce(this.click, 500);  },  unmounted() {    // also a good idea to cancel the timer    // when the component is removed    this.debouncedClick.cancel();  },  methods: {    click() {      // ... respond to click ...    },  },};\"><div></div></button></div></figure></div>"
    })]
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

const url = "src/content/docs/essentials/reactivity-fundamentals.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/essentials/reactivity-fundamentals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/essentials/reactivity-fundamentals.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
