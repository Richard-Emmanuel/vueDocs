import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import { V as VueSchoolLinkMDX } from './VueSchoolLinkMDX_BQ-v7n66.mjs';
import 'clsx';

/*@client*/
const frontmatter = {
  "title": "Events",
  "description": "A guide to component events in Vue.js."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "component-events",
    "text": "Component Events"
  }, {
    "depth": 2,
    "slug": "emitting-and-listening-to-events",
    "text": "Emitting and Listening to Events"
  }, {
    "depth": 2,
    "slug": "event-arguments",
    "text": "Event Arguments"
  }, {
    "depth": 2,
    "slug": "declaring-emitted-events",
    "text": "Declaring Emitted Events"
  }, {
    "depth": 2,
    "slug": "events-validation",
    "text": "Events Validation"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: ["\n", (() => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        const vModelHashes = ['#usage-with-v-model', '#v-model-arguments', '#multiple-v-model-bindings', '#handling-v-model-modifiers'];
        if (vModelHashes.includes(hash)) {
          window.location = './v-model.html' + hash;
        }
      }
      return null;
    })(), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h1\"><h1 id=\"component-events\">Component Events</h1><a class=\"sl-anchor-link\" href=\"#component-events\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Component Events”</span></a></div>\n<blockquote>\n<p>This page assumes you’ve already read the <a href=\"/guide/essentials/component-basics\">Components Basics</a>. Read that first if you are new to components.</p>\n</blockquote>\n"
    }), createVNode("div", {
      class: "options-api",
      children: createVNode(VueSchoolLinkMDX, {
        href: "https://vueschool.io/lessons/defining-custom-events-emits",
        title: "Free Vue.js Lesson on Defining Custom Events"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"emitting-and-listening-to-events\">Emitting and Listening to Events</h2><a class=\"sl-anchor-link\" href=\"#emitting-and-listening-to-events\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Emitting and Listening to Events”</span></a></div>\n<p>A component can emit custom events directly in template expressions (e.g. in a <code dir=\"auto\">v-on</code> handler) using the built-in <code dir=\"auto\">$emit</code> method:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">&#x3C;!-- MyComponent --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3B61B0\">$emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">someEvent</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Click Me</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<!-- MyComponent --><button @click=&#x22;$emit(&#x27;someEvent&#x27;)&#x22;>Click Me</button>\"><div></div></button></div></figure></div>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<p>The <code dir=\"auto\">$emit()</code> method is also available on the component instance as <code dir=\"auto\">this.$emit()</code>:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">$emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">someEvent</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  methods: {    submit() {      this.$emit(&#x22;someEvent&#x22;);    },  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The parent can then listen to it using <code dir=\"auto\">v-on</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">MyComponent</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> @</span><span style=\"--0:#C5E478;--1:#3B61B0\">some-event</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">callback</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<MyComponent @some-event=&#x22;callback&#x22; />\"><div></div></button></div></figure></div>\n<p>The <code dir=\"auto\">.once</code> modifier is also supported on component event listeners:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">MyComponent</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> @</span><span style=\"--0:#C5E478;--1:#3B61B0\">some-event</span><span style=\"--0:#7FDBCA;--1:#8844AE\">.</span><span style=\"--0:#C5E478;--1:#3B61B0\">once</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">callback</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<MyComponent @some-event.once=&#x22;callback&#x22; />\"><div></div></button></div></figure></div>\n<p>Like components and props, event names provide an automatic case transformation. Notice we emitted a camelCase event, but can listen for it using a kebab-cased listener in the parent. As with <a href=\"/guide/components/props#prop-name-casing\">props casing</a>, we recommend using kebab-cased event listeners in templates.</p>\n<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>Unlike native DOM events, component emitted events do <strong>not</strong> bubble. You can only listen to the events emitted by a direct child component. If there is a need to communicate between sibling or deeply nested components, use an external event bus or a <a href=\"/guide/scaling-up/state-management\">global state management solution</a>.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"event-arguments\">Event Arguments</h2><a class=\"sl-anchor-link\" href=\"#event-arguments\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Event Arguments”</span></a></div>\n<p>It’s sometimes useful to emit a specific value with an event. For example, we may want the <code dir=\"auto\">&#x3C;BlogPost></code> component to be in charge of how much to enlarge the text by. In those cases, we can pass extra arguments to <code dir=\"auto\">$emit</code> to provide this value:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\"> @</span></span><span style=\"--0:#C5E478;--1:#3B61B0\">click</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3B61B0\">$emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">increaseBy</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#7FDBCA;--1:#8844AE\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Increase by 1</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<button @click=&#x22;$emit(&#x27;increaseBy&#x27;, 1)&#x22;>  Increase by 1</button>\"><div></div></button></div></figure></div>\n<p>Then, when we listen to the event in the parent, we can use an inline arrow function as the listener, which allows us to access the event argument:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">MyButton</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> @</span><span style=\"--0:#C5E478;--1:#3B61B0\">increase-by</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">n</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#C792EA\">=></span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">count</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\"> </span><span style=\"--0:#C792EA\">+=</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#D7DBE0;--1:#403F53\">n</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<MyButton @increase-by=&#x22;(n) => count += n&#x22; />\"><div></div></button></div></figure></div>\n<p>Or, if the event handler is a method:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">MyButton</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> @</span><span style=\"--0:#C5E478;--1:#3B61B0\">increase-by</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">increaseCount</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> /></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<MyButton @increase-by=&#x22;increaseCount&#x22; />\"><div></div></button></div></figure></div>\n<p>Then the value will be passed as the first parameter of that method:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increaseCount</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">n</span><span style=\"--0:#D6DEEB\">) {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">+=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">n</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"methods: {  increaseCount(n) {    this.count += n  }}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">increaseCount</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">n</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">+=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">n</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"function increaseCount(n) {  count.value += n;}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>All extra arguments passed to <code dir=\"auto\">$emit()</code> after the event name will be forwarded to the listener. For example, with <code dir=\"auto\">$emit('foo', 1, 2, 3)</code> the listener function will receive three arguments.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"declaring-emitted-events\">Declaring Emitted Events</h2><a class=\"sl-anchor-link\" href=\"#declaring-emitted-events\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Declaring Emitted Events”</span></a></div>\n"
    }), createVNode(_components.p, {
      children: ["A component can explicitly declare the events it will emit using the ", createVNode("span", {
        class: "composition-api",
        "set:html": "<a href=\"/api/sfc-script-setup#defineprops-defineemits\"><code dir=\"auto\">defineEmits()</code></a> macro"
      }), createVNode("span", {
        class: "options-api",
        "set:html": "<a href=\"/api/options-state#emits\"><code dir=\"auto\">emits</code></a> option"
      }), ":"]
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3B61B0\">defineEmits</span><span style=\"--0:#D6DEEB;--1:#403F53\">([</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inFocus</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>defineEmits([&#x22;inFocus&#x22;, &#x22;submit&#x22;]);</script>\"><div></div></button></div></figure></div><p>The <code dir=\"auto\">$emit</code> method that we used in the <code dir=\"auto\">&#x3C;template></code> isn’t accessible within the <code dir=\"auto\">&#x3C;script setup></code> section of a component, but <code dir=\"auto\">defineEmits()</code> returns an equivalent function that we can use instead:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineEmits</span><span style=\"--0:#D6DEEB;--1:#403F53\">([</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inFocus</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">]);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">buttonClick</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>const emit = defineEmits([&#x22;inFocus&#x22;, &#x22;submit&#x22;]);function buttonClick() {  emit(&#x22;submit&#x22;);}</script>\"><div></div></button></div></figure></div><p>The <code dir=\"auto\">defineEmits()</code> macro <strong>cannot</strong> be used inside a function, it must be placed directly within <code dir=\"auto\">&#x3C;script setup></code>, as in the example above.</p><p>If you’re using an explicit <code dir=\"auto\">setup</code> function instead of <code dir=\"auto\">&#x3C;script setup></code>, events should be declared using the <a href=\"/api/options-state#emits\"><code dir=\"auto\">emits</code></a> option, and the <code dir=\"auto\">emit</code> function is exposed on the <code dir=\"auto\">setup()</code> context:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">emits: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inFocus</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setup</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">props</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">ctx</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">ctx</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  emits: [&#x22;inFocus&#x22;, &#x22;submit&#x22;],  setup(props, ctx) {    ctx.emit(&#x22;submit&#x22;);  },};\"><div></div></button></div></figure></div><p>As with other properties of the <code dir=\"auto\">setup()</code> context, <code dir=\"auto\">emit</code> can safely be destructured:</p><div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">emits: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inFocus</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">setup</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">props</span><span style=\"--0:#D6DEEB\">, { </span><span style=\"--0:#D7DBE0\">emit</span><span style=\"--0:#D6DEEB\"> }</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  emits: [&#x22;inFocus&#x22;, &#x22;submit&#x22;],  setup(props, { emit }) {    emit(&#x22;submit&#x22;);  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">emits: [</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">inFocus</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  emits: [&#x22;inFocus&#x22;, &#x22;submit&#x22;],};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>The <code dir=\"auto\">emits</code> option and <code dir=\"auto\">defineEmits()</code> macro also support an object syntax. If using TypeScript you can type arguments, which allows us to perform runtime validation of the payload of the emitted events:</p>\n"
    }), createVNode("div", {
      class: "composition-api",
      children: [createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "vue",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--1": "#8844AE"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "<"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "script"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "setup"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "lang"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "="
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
                    children: "ts"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#8844AE"
                    },
                    children: ">"
                  })]
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
                    children: "emit"
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
                    children: "defineEmits"
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
                    children: "{"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "submit"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "payload"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " { "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "email"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "string"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "; "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "password"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "string"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " }"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " {"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "    "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// return `true` or `false` to indicate"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "    "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// validation pass / fail"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: createVNode(_components.span, {
                      style: {
                        "--0": "#C792EA",
                        "--1": "#8844AE"
                      },
                      children: "  "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "},"
                  })]
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
                    children: "}"
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
                  children: createVNode(_components.span, {
                    style: {
                      "--1": "#8844AE"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "</"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "script"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  })
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "<script setup lang=\"ts\">const emit = defineEmits({  submit(payload: { email: string; password: string }) {    // return `true` or `false` to indicate    // validation pass / fail  },});</script>",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: ["If you are using TypeScript with ", createVNode(_components.code, {
          dir: "auto",
          children: "<script setup>"
        }), ", it’s also possible to declare emitted events using pure type annotations:"]
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "vue",
            children: createVNode(_components.code, {
              children: [createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    style: {
                      "--1": "#8844AE"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "<"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "script"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "setup"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "lang"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "="
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
                    children: "ts"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#8844AE"
                    },
                    children: ">"
                  })]
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
                    children: "emit"
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
                    children: "defineEmits"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "<{"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "e"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
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
                    children: "change"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: ", "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "id"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "number"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "void"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: ";"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "e"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
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
                    children: "update"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: ", "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "value"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "string"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "void"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
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
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "}>"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "();"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: createVNode(_components.span, {
                    style: {
                      "--1": "#8844AE"
                    },
                    children: [createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: "</"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#CAECE6"
                      },
                      children: "script"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  })
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "<script setup lang=\"ts\">const emit = defineEmits<{  (e: \"change\", id: number): void;  (e: \"update\", value: string): void;}>();</script>",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: ["More details: ", createVNode(_components.a, {
          href: "/guide/typescript/composition-api#typing-component-emits",
          children: "Typing Component Emits"
        }), " ", createVNode("sup", {
          class: "vt-badge ts"
        })]
      })]
    }), "\n", createVNode("div", {
      class: "options-api",
      children: [createVNode(_components.div, {
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
                    children: "export"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "default"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " {"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: createVNode(_components.span, {
                      style: {
                        "--0": "#D6DEEB",
                        "--1": "#403F53"
                      },
                      children: "  "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "emits: {"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "    "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "submit"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D7DBE0",
                      "--1": "#403F53"
                    },
                    children: "payload"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " { email"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "string"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: ", password"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C5E478",
                      "--1": "#3B61B0"
                    },
                    children: "string"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " }"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: ")"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " {"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "      "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// return `true` or `false` to indicate"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "      "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// validation pass / fail"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: createVNode(_components.span, {
                      style: {
                        "--0": "#D6DEEB",
                        "--1": "#403F53"
                      },
                      children: "    "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "},"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: createVNode(_components.span, {
                      style: {
                        "--0": "#D6DEEB",
                        "--1": "#403F53"
                      },
                      children: "  "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "},"
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "};"
                  })
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "export default {  emits: {    submit(payload: { email: string, password: string }) {      // return `true` or `false` to indicate      // validation pass / fail    },  },};",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: ["See also: ", createVNode(_components.a, {
          href: "/guide/typescript/options-api#typing-component-emits",
          children: "Typing Component Emits"
        }), " ", createVNode("sup", {
          class: "vt-badge ts"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Although optional, it is recommended to define all emitted events in order to better document how a component should work. It also allows Vue to exclude known listeners from <a href=\"/guide/components/attrs#v-on-listener-inheritance\">fallthrough attributes</a>, avoiding edge cases caused by DOM events manually dispatched by 3rd party code.</p>\n<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>If a native event (e.g., <code dir=\"auto\">click</code>) is defined in the <code dir=\"auto\">emits</code> option, the listener will now only listen to component-emitted <code dir=\"auto\">click</code> events and no longer respond to native <code dir=\"auto\">click</code> events.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"events-validation\">Events Validation</h2><a class=\"sl-anchor-link\" href=\"#events-validation\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Events Validation”</span></a></div>\n<p>Similar to prop type validation, an emitted event can be validated if it is defined with the object syntax instead of the array syntax.</p>\n"
    }), createVNode(_components.p, {
      children: ["To add validation, the event is assigned a function that receives the arguments passed to the ", createVNode("span", {
        class: "options-api",
        "set:html": "<code dir=\"auto\">this.$emit</code>"
      }), createVNode("span", {
        class: "composition-api",
        "set:html": "<code dir=\"auto\">emit</code>"
      }), " call and returns a boolean to indicate whether the event is valid or not."]
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">defineEmits</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// No validation</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">click: </span><span style=\"--0:#FF6A83;--1:#A24848\">null</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// Validate submit event</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">submit</span><span style=\"--0:#C792EA;--1:#8844AE\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{ </span><span style=\"--0:#D7DBE0;--1:#403F53\">email</span><span style=\"--0:#C792EA;--1:#8844AE\">, </span><span style=\"--0:#D7DBE0;--1:#403F53\">password</span><span style=\"--0:#C792EA;--1:#8844AE\"> }</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">email</span></span><span style=\"--0:#C792EA;--1:#8844AE\"> &#x26;&#x26; </span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">password</span><span style=\"--0:#D6DEEB\">)</span></span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">} else {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">warn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Invalid submit event payload!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">submitForm</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">email</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">password</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> { </span><span style=\"--0:#D7DBE0\">email</span></span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">password</span><span style=\"--0:#D6DEEB\"> });</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>const emit = defineEmits({  // No validation  click: null,  // Validate submit event  submit: ({ email, password }) => {    if (email &#x26;&#x26; password) {      return true;    } else {      console.warn(&#x22;Invalid submit event payload!&#x22;);      return false;    }  },});function submitForm(email, password) {  emit(&#x22;submit&#x22;, { email, password });}</script>\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">emits: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// No validation</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">click: </span><span style=\"--0:#FF6A83;--1:#A24848\">null</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Validate submit event</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">submit</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">{ </span><span style=\"--0:#D7DBE0\">email</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">password</span><span style=\"--0:#D6DEEB\"> }</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=></span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> (</span><span style=\"--0:#D7DBE0\">email</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">&#x26;&#x26;</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">password</span><span style=\"--0:#D6DEEB\">) {</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6A83;--1:#A24848\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">} </span><span style=\"--0:#C792EA;--1:#8844AE\">else</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#7FDBCA;--1:#096E72\">console</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">warn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Invalid submit event payload!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">submitForm</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">email</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">password</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">$emit</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">submit</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">, { </span><span style=\"--0:#D7DBE0\">email</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">password</span><span style=\"--0:#D6DEEB\"> });</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  emits: {    // No validation    click: null,    // Validate submit event    submit: ({ email, password }) => {      if (email &#x26;&#x26; password) {        return true;      } else {        console.warn(&#x22;Invalid submit event payload!&#x22;);        return false;      }    },  },  methods: {    submitForm(email, password) {      this.$emit(&#x22;submit&#x22;, { email, password });    },  },};\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/components-in-depth/events.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/components-in-depth/events.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/components-in-depth/events.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
