import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
/* empty css                             */
/* empty css                            */
import gsap from 'gsap';
/* empty css                               */
import 'clsx';

const ListBasic = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [nextNum, setNextNum] = useState(items.length + 1);
  const randomIndex = () => {
    return Math.floor(Math.random() * items.length);
  };
  const add = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 0, nextNum);
    setItems(newItems);
    setNextNum(nextNum + 1);
  };
  const remove = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 1);
    setItems(newItems);
  };
  return /* @__PURE__ */ jsxs("div", { className: "demo", children: [
    /* @__PURE__ */ jsx("button", { onClick: add, children: "Add at random index" }),
    /* @__PURE__ */ jsx("button", { onClick: remove, children: "Remove at random index" }),
    /* @__PURE__ */ jsx(TransitionGroup, { component: "ul", style: { marginTop: "20px" }, children: items.map((item) => /* @__PURE__ */ jsx(
      CSSTransition,
      {
        timeout: 500,
        classNames: "list",
        children: /* @__PURE__ */ jsx("li", { children: item })
      },
      item
    )) })
  ] });
};

const ListMove = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [nextNum, setNextNum] = useState(items.length + 1);
  const randomIndex = () => {
    return Math.floor(Math.random() * items.length);
  };
  const add = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 0, nextNum);
    setItems(newItems);
    setNextNum(nextNum + 1);
  };
  const remove = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 1);
    setItems(newItems);
  };
  const shuffle = (array) => {
    const newArray = [...array];
    let currentIndex = newArray.length;
    let randomIndex2;
    while (currentIndex !== 0) {
      randomIndex2 = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArray[currentIndex], newArray[randomIndex2]] = [
        newArray[randomIndex2],
        newArray[currentIndex]
      ];
    }
    setItems(newArray);
  };
  return /* @__PURE__ */ jsxs("div", { className: "demo", children: [
    /* @__PURE__ */ jsx("button", { onClick: add, children: "Add" }),
    /* @__PURE__ */ jsx("button", { onClick: remove, children: "Remove" }),
    /* @__PURE__ */ jsx("button", { onClick: () => shuffle(items), children: "Shuffle" }),
    /* @__PURE__ */ jsx(TransitionGroup, { component: "ul", style: { marginTop: "20px" }, children: items.map((item) => /* @__PURE__ */ jsx(
      CSSTransition,
      {
        timeout: 500,
        classNames: "list2",
        children: /* @__PURE__ */ jsx("li", { className: "list-item", children: item })
      },
      item
    )) })
  ] });
};

const list = [
  { msg: "Bruce Lee" },
  { msg: "Jackie Chan" },
  { msg: "Chuck Norris" },
  { msg: "Jet Li" },
  { msg: "Kung Fury" }
];
const ListStagger = () => {
  const [query, setQuery] = useState("");
  const computedList = useMemo(() => {
    return list.filter(
      (item) => item.msg.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  const onEnter = (node, index) => {
    gsap.fromTo(
      node,
      {
        opacity: 0,
        height: 0
      },
      {
        opacity: 1,
        height: "1.6em",
        delay: index * 0.15,
        duration: 0.3
      }
    );
  };
  const onExit = (node, index) => {
    gsap.to(node, {
      opacity: 0,
      height: 0,
      delay: index * 0.15,
      duration: 0.3
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "demo", style: { height: "265px" }, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        value: query,
        onChange: (e) => setQuery(e.target.value),
        style: { marginBottom: "20px" }
      }
    ),
    /* @__PURE__ */ jsx(TransitionGroup, { component: "ul", children: computedList.map((item, index) => /* @__PURE__ */ jsx(
      CSSTransition,
      {
        timeout: 300,
        onEnter: (node) => onEnter(node, index),
        onExit: (node) => onExit(node, index),
        children: /* @__PURE__ */ jsx("li", { "data-index": index, children: item.msg })
      },
      item.msg
    )) })
  ] });
};

const frontmatter = {
  "title": "TransitionGroup",
  "description": "A guide to using the TransitionGroup component in Vue.js."
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "transitiongroup",
    "text": "TransitionGroup"
  }, {
    "depth": 2,
    "slug": "differences-from-transition",
    "text": "Differences from <Transition>"
  }, {
    "depth": 2,
    "slug": "enter--leave-transitions",
    "text": "Enter / Leave Transitions"
  }, {
    "depth": 2,
    "slug": "move-transitions",
    "text": "Move Transitions"
  }, {
    "depth": 3,
    "slug": "custom-transitiongroup-classes",
    "text": "Custom TransitionGroup classes"
  }, {
    "depth": 2,
    "slug": "staggering-list-transitions",
    "text": "Staggering List Transitions"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h1\"><h1 id=\"transitiongroup\">TransitionGroup</h1><a class=\"sl-anchor-link\" href=\"#transitiongroup\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “TransitionGroup”</span></a></div>\n<p><code dir=\"auto\">&#x3C;TransitionGroup></code> is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a list.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"differences-from-transition\">Differences from <code dir=\"auto\">&#x3C;Transition></code></h2><a class=\"sl-anchor-link\" href=\"#differences-from-transition\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Differences from &#x3C;Transition>”</span></a></div>\n<p><code dir=\"auto\">&#x3C;TransitionGroup></code> supports the same props, CSS transition classes, and JavaScript hook listeners as <code dir=\"auto\">&#x3C;Transition></code>, with the following differences:</p>\n<ul>\n<li>\n<p>By default, it doesn’t render a wrapper element. But you can specify an element to be rendered with the <code dir=\"auto\">tag</code> prop.</p>\n</li>\n<li>\n<p><a href=\"./transition#transition-modes\">Transition modes</a> are not available, because we are no longer alternating between mutually exclusive elements.</p>\n</li>\n<li>\n<p>Elements inside are <strong>always required</strong> to have a unique <code dir=\"auto\">key</code> attribute.</p>\n</li>\n<li>\n<p>CSS transition classes will be applied to individual elements in the list, <strong>not</strong> to the group / container itself.</p>\n</li>\n</ul>\n<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>When used in <a href=\"/guide/essentials/component-basics#in-dom-template-parsing-caveats\">in-DOM templates</a>, it should be referenced as <code dir=\"auto\">&#x3C;transition-group></code>.</p></div></aside>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"enter--leave-transitions\">Enter / Leave Transitions</h2><a class=\"sl-anchor-link\" href=\"#enter--leave-transitions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Enter / Leave Transitions”</span></a></div>\n<p>Here is an example of applying enter / leave transitions to a <code dir=\"auto\">v-for</code> list using <code dir=\"auto\">&#x3C;TransitionGroup></code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">TransitionGroup</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">name</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">list</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">tag</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">ul</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3B61B0\">v-for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">item</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">in</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#D7DBE0;--1:#403F53\">items</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> :</span><span style=\"--0:#C5E478;--1:#3B61B0\">key</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">item</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ item }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">TransitionGroup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<TransitionGroup name=&#x22;list&#x22; tag=&#x22;ul&#x22;>  <li v-for=&#x22;item in items&#x22; :key=&#x22;item&#x22;>    {{ item }}  </li></TransitionGroup>\"><div></div></button></div></figure></div>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-enter-active</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-leave-active</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">all</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.5</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">ease</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-enter-from</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-leave-to</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">opacity</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateX</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">30</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".list-enter-active,.list-leave-active {  transition: all 0.5s ease;}.list-enter-from,.list-leave-to {  opacity: 0;  transform: translateX(30px);}\"><div></div></button></div></figure></div>\n"
    }), createVNode(ListBasic, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"move-transitions\">Move Transitions</h2><a class=\"sl-anchor-link\" href=\"#move-transitions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Move Transitions”</span></a></div>\n<p>The above demo has some obvious flaws: when an item is inserted or removed, its surrounding items instantly “jump” into place instead of moving smoothly. We can fix this by adding a few additional CSS rules:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"css\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-move</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#919F9F;--1:#5F636F\">/* apply transition to moving elements */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-enter-active</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-leave-active</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transition</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">all</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">0.5</span><span style=\"--0:#FFEB95\">s</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#FF6D6D;--1:#984E4D\">ease</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-enter-from</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-leave-to</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">opacity</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">transform</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#C5E478;--1:#3B61B0\">translateX</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--1:#AA0982\"><span style=\"--0:#F78C6C\">30</span><span style=\"--0:#FFEB95\">px</span></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5F636F\">/* ensure leaving items are taken out of layout flow so that moving</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#919F9F;--1:#5F636F\">   </span></span><span style=\"--0:#919F9F;--1:#5F636F\">animations can be calculated correctly. */</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3B61B0\">.list-leave-active</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#80CBC4;--1:#096E72\">position</span><span style=\"--0:#D6DEEB;--1:#403F53\">: </span><span style=\"--0:#FF6D6D;--1:#984E4D\">absolute</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\".list-move, /* apply transition to moving elements */.list-enter-active,.list-leave-active {  transition: all 0.5s ease;}.list-enter-from,.list-leave-to {  opacity: 0;  transform: translateX(30px);}/* ensure leaving items are taken out of layout flow so that moving   animations can be calculated correctly. */.list-leave-active {  position: absolute;}\"><div></div></button></div></figure></div>\n<p>Now it looks much better - even animating smoothly when the whole list is shuffled:</p>\n"
    }), createVNode(ListMove, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<p><a href=\"/examples/#list-transition\">Full Example</a></p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"custom-transitiongroup-classes\">Custom TransitionGroup classes</h3><a class=\"sl-anchor-link\" href=\"#custom-transitiongroup-classes\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Custom TransitionGroup classes”</span></a></div>\n<p>You can also specify custom transition classes for the moving element by passing the <code dir=\"auto\">moveClass</code> prop to <code dir=\"auto\">&#x3C;TransitionGroup></code>, just like <a href=\"/guide/built-ins/transition.html#custom-transition-classes\">custom transition classes on <code dir=\"auto\">&#x3C;Transition></code></a>.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"staggering-list-transitions\">Staggering List Transitions</h2><a class=\"sl-anchor-link\" href=\"#staggering-list-transitions\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Staggering List Transitions”</span></a></div>\n<p>By communicating with JavaScript transitions through data attributes, it’s also possible to stagger transitions in a list. First, we render the index of an item as a data attribute on the DOM element:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;</span><span style=\"--0:#C5E478;--1:#3B61B0\">TransitionGroup</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C5E478;--1:#3B61B0\">tag</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">ul</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">  </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">:</span><span style=\"--0:#C5E478;--1:#3B61B0\">css</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#FF6A83;--1:#A24848\">false</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">  </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">@</span><span style=\"--0:#C5E478;--1:#3B61B0\">before-enter</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">onBeforeEnter</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">  </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">@</span><span style=\"--0:#C5E478;--1:#3B61B0\">enter</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">onEnter</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">  </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">@</span><span style=\"--0:#C5E478;--1:#3B61B0\">leave</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">onLeave</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">li</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3B61B0\">v-for</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">item</span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">, </span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">index</span><span style=\"--0:#D6DEEB\">)</span></span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">in</span><span style=\"--0:#7FDBCA;--1:#8844AE\"> </span><span style=\"--0:#D7DBE0;--1:#403F53\">computedList</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">    </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">:</span><span style=\"--0:#C5E478;--1:#3B61B0\">key</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#096E72\">item</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">msg</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">    </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">:</span><span style=\"--0:#C5E478;--1:#3B61B0\">data-index</span><span style=\"--0:#7FDBCA;--1:#8844AE\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D7DBE0;--1:#403F53\">index</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8844AE\">  </span></span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ item</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">msg</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">li</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#8844AE\">&#x3C;/</span><span style=\"--0:#C5E478;--1:#3B61B0\">TransitionGroup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<TransitionGroup  tag=&#x22;ul&#x22;  :css=&#x22;false&#x22;  @before-enter=&#x22;onBeforeEnter&#x22;  @enter=&#x22;onEnter&#x22;  @leave=&#x22;onLeave&#x22;>  <li    v-for=&#x22;(item, index) in computedList&#x22;    :key=&#x22;item.msg&#x22;    :data-index=&#x22;index&#x22;  >    {{ item.msg }}  </li></TransitionGroup>\"><div></div></button></div></figure></div>\n<p>Then, in JavaScript hooks, we animate the element with a delay based on the data attribute. This example is using the <a href=\"https://gsap.com/\">GSAP library</a> to perform the animation:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">onEnter</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">el</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">done</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#096E72\">gsap</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">to</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\">(</span><span style=\"--0:#D7DBE0\">el</span></span><span style=\"--0:#889FB2;--1:#4D667B\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">opacity: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">height: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">1.6em</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">delay: </span><span style=\"--0:#7FDBCA;--1:#096E72\">el</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">dataset</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">index</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.15</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">onComplete: </span><span style=\"--0:#D7DBE0;--1:#403F53\">done</span><span style=\"--0:#889FB2;--1:#4D667B\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">});</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"function onEnter(el, done) {  gsap.to(el, {    opacity: 1,    height: &#x22;1.6em&#x22;,    delay: el.dataset.index * 0.15,    onComplete: done,  });}\"><div></div></button></div></figure></div>\n"
    }), createVNode(ListStagger, {}), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<p><a href=\"https://play.vuejs.org/#eNqlVMuu0zAQ/ZVRNklRm7QLWETtBW4FSFCxYkdYmGSSmjp28KNQVfl3xk7SFyvEponPGc+cOTPNOXrbdenRYZRHa1Nq3lkwaF33VEjedkpbOIPGeg6lajtnsYIeaq1aiOlSfAlqDOtG3L8SUchSSWNBcPrZwNdCAqVqTZND/KxdibBDjKGf3xIfWXngCNs9k4/Udu/KA3xWWnPz1zW0sOOP6CcnG3jv9ImIQn67SvrpUJ9IE/WVxPHsSkw97gbN0zFJZrB5grNPrskcLUNXac2FRZ0k3GIbIvxLSsVTq3bqF+otM5jMUi5L4So0SSicHplwOKOyfShdO1lariQo+Yy10vhO+qwoZkNFFKmxJ4Gp6ljJrRe+vMP3yJu910swNXqXcco1h0pJHDP6CZHEAAcAYMydwypYCDAkJRdX6Sts4xGtUDAKotIVs9Scpd4q/A0vYJmuXo5BSm7JOIEW81DVo77VR207ZEf8F23LB23T+X9VrbNh82nn6UAz7ASzSCeANZe0AnBctIqqbIoojLCIIBvoL5pJw31DH7Ry3VDKsoYinSii4ZyXxhBQM2Fwwt58D7NeoB8QkXfDvwRd2XtceOsCHkwc8KCINAk+vADJppQUFjZ0DsGVGT3uFn1KSjoPeKLoaYtvCO/rIlz3vH9O5FiU/nXny/pDT6YGKZngg0/Zg1GErrMbp6N5NHxJFi3N/4dRkj5IYf5ULxCmiPJpI4rIr4kHimhvbWfyLHOyOzQpNZZ57jXNy4nRGFLTR/0fWBqe7w==\">Full Example in the Playground</a></p>"
    }), "\n", createVNode("div", {
      class: "options-api",
      "set:html": "<p><a href=\"https://play.vuejs.org/#eNqtVE2P0zAQ/SujXNqgNmkPcIjaBbYCJKg4cSMcTDJNTB07+KNsVfW/M3aabNpyQltViT1vPPP8Zian6H3bJgeHURatTKF5ax9yyZtWaQuVYS3stGpg4peTXOayUNJYEJwea/ieS4ATNKbKYPKoXYGwRZzAeTYGPrNizxE2NZO30KZ2xR6+Kq25uTuGFrb81vrFyQo+On0kIJc/PCV8CmxL3DEnLJy8e8ksm8bdGkCjdVr2O4DfDvWRgtGN/JYC0SOkKVTTOotl1jv3hi3d+DngENILkey4sKinU26xiWH9AH6REN/Eqq36g3rDDE7jhMtCuBLN1NbcJIFEHN9RaNDWqjQDAyUfcac0fpA+CYoRCRSJsUeBiWpZwe2RSrK4w2rkVe2rdYG6LD5uH3EGpZI4iuurTdwDNBjpRJclg+UlhP914UnMZfIGm8kIKVEwciYivhoGLQlQ4hO8gkWyfD1yVHJDKgu0mAUmPXLuxRkYb5Ed8H8YL/7BeGx7Oa6hkLmk/yodBoo21BKtYBZpB7DikroKDvNGUeZ1HoVmyCNIO/ibZtJwy5X8pJVru9CWVeTpRB51+6wwhgw7Jgz2tnc/Q6/M0ZeWwKvmGZye0Wu78PIGexC6swdGxEnw/q6HOYUkt9DwMwhKxfS6GpY+KPHc45G8+6EYAV7reTjucf/uwUtSmvvTME1wDuISlVTwTqf0RiiyrtKR0tEs6r5l84b645dRkr5zoT8oXwBMHg2Tlke+jbwhj2prW5OlqZPtvkroYqnH3lK9nLgI46scnf8Cn22kBA==\">Full Example in the Playground</a></p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<p><strong>Related</strong></p>\n<ul>\n<li><a href=\"/api/built-in-components#transitiongroup\"><code dir=\"auto\">&#x3C;TransitionGroup></code> API reference</a></li>\n</ul>"
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

const url = "src/content/docs/built-in-components/transition-group.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/built-in-components/transition-group.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/built-in-components/transition-group.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
