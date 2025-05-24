import { v as createVNode, g as Fragment, _ as __astro_tag_component__ } from './astro/server_BMW5zgxf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Computed Properties",
  "description": "A guide to Vue.js computed properties."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "basic-example",
    "text": "Basic Example"
  }, {
    "depth": 2,
    "slug": "computed-caching-vs-methods",
    "text": "Computed Caching vs. Methods"
  }, {
    "depth": 2,
    "slug": "writable-computed",
    "text": "Writable Computed"
  }, {
    "depth": 2,
    "slug": "getting-the-previous-value",
    "text": "Getting the Previous Value"
  }, {
    "depth": 2,
    "slug": "best-practices",
    "text": "Best Practices"
  }, {
    "depth": 3,
    "slug": "getters-should-be-side-effect-free",
    "text": "Getters should be side-effect free"
  }, {
    "depth": 3,
    "slug": "avoid-mutating-computed-value",
    "text": "Avoid mutating computed value"
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
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Complex calculations in template expressions can make them harder to read and maintain. This is where computed properties help us create reusable data calculations.</p>\n"
    }), createVNode("div", {
      class: "options-api",
      children: createVNode("a", {
        href: "https://vueschool.io/lessons/computed-properties-in-vue-3",
        "set:html": "<p>Free Vue.js Computed Properties Lesson</p>"
      })
    }), "\n", createVNode("div", {
      class: "composition-api",
      children: createVNode("a", {
        href: "https://vueschool.io/lessons/vue-fundamentals-capi-computed-properties-in-vue-with-the-composition-api",
        "set:html": "<p>Free Vue.js Computed Properties Lesson</p>"
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"basic-example\">Basic Example</h2><a class=\"sl-anchor-link\" href=\"#basic-example\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Basic Example”</span></a></div>\n<p>In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example, if we have an object with a nested array:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.v4551.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">author: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">John Doe</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">books: [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">          </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 2 - Advanced Guide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">          </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 3 - Basic Guide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">          </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 4 - The Mystery</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      author: {        name: &#x22;John Doe&#x22;,        books: [          &#x22;Vue 2 - Advanced Guide&#x22;,          &#x22;Vue 3 - Basic Guide&#x22;,          &#x22;Vue 4 - The Mystery&#x22;,        ],      },    };  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">author</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">reactive</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">name: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">John Doe</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">books:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 2 - Advanced Guide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 3 - Basic Guide</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Vue 4 - The Mystery</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const author = reactive({  name: &#x22;John Doe&#x22;,  books: [    &#x22;Vue 2 - Advanced Guide&#x22;,    &#x22;Vue 3 - Basic Guide&#x22;,    &#x22;Vue 4 - The Mystery&#x22;,  ],});\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>And we want to display different messages depending on if <code dir=\"auto\">author</code> already has some books or not:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Has published books:</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">span</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ author</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">books</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">length</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">?</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">Yes</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">No</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">span</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<p>Has published books:</p><span>{{ author.books.length > 0 ? &#x27;Yes&#x27; : &#x27;No&#x27; }}</span>\"><div></div></button></div></figure></div>\n<p>At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that it performs a calculation depending on <code dir=\"auto\">author.books</code>. More importantly, we probably don’t want to repeat ourselves if we need to include this calculation in the template more than once.</p>\n<p>That’s why for complex logic that includes reactive data, it is recommended to use a <strong>computed property</strong>. Here’s the same example, refactored:</p>\n"
    }), createVNode("div", {
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
                    children: "  "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#82AAFF",
                      "--1": "#3B61B0"
                    },
                    children: "data"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "()"
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
                    children: "    "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "return"
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
                      children: "      "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "author: {"
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
                      children: "        "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "name: "
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
                    children: "John Doe"
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
                    children: ","
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
                      children: "        "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "books: ["
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "          "
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
                    children: "Vue 2 - Advanced Guide"
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
                    children: ","
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "          "
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
                    children: "Vue 3 - Basic Guide"
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
                    children: ","
                  })]
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: [createVNode(_components.span, {
                    class: "indent",
                    children: "          "
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
                    children: "Vue 4 - The Mystery"
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
                    children: ","
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
                      children: "        "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "],"
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
                      children: "      "
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
                      children: "    "
                    })
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "};"
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
                    children: "computed: {"
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
                    children: "// a computed getter"
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
                    children: "publishedBooksMessage"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "()"
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
                    children: "// `this` points to the component instance"
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
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "return"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "this"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FAF39F",
                      "--1": "#111111"
                    },
                    children: "author"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FAF39F",
                      "--1": "#111111"
                    },
                    children: "books"
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
                    children: "length"
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
                    children: ">"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " "
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
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "?"
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
                    children: "Yes"
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
                    children: " "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
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
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "No"
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
              "data-code": "export default {  data() {    return {      author: {        name: \"John Doe\",        books: [          \"Vue 2 - Advanced Guide\",          \"Vue 3 - Basic Guide\",          \"Vue 4 - The Mystery\",        ],      },    };  },  computed: {    // a computed getter    publishedBooksMessage() {      // `this` points to the component instance      return this.author.books.length > 0 ? \"Yes\" : \"No\";    },  },};",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.div, {
        class: "expressive-code",
        children: createVNode(_components.figure, {
          class: "frame not-content",
          children: [createVNode(_components.figcaption, {
            class: "header"
          }), createVNode(_components.pre, {
            "data-language": "vue-html",
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
                      children: "p"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "Has published books:"
                  }), createVNode(_components.span, {
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
                      children: "p"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  })]
                })
              }), createVNode(_components.div, {
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
                      children: "span"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "{{ publishedBooksMessage }}"
                  }), createVNode(_components.span, {
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
                      children: "span"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  })]
                })
              })]
            })
          }), createVNode(_components.div, {
            class: "copy",
            children: createVNode(_components.button, {
              title: "Copy to clipboard",
              "data-copied": "Copied!",
              "data-code": "<p>Has published books:</p><span>{{ publishedBooksMessage }}</span>",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "https://play.vuejs.org/#eNqFkN1KxDAQhV/l0JsqaFfUq1IquwiKsF6JINaLbDNui20S8rO4lL676c82eCFCIDOZMzkzXxetlUoOjqI0ykypa2XzQtC3ktqC0ydzjUVXCIAzy87OpxjQZJ0WpwxgzlZSp+EBEKylFPGTrATuJcUXobST8sukeA8vQPzqCNe4xJofmCiJ48HV/FfbLLrxog0zdfmn4tYrXirC9mgs6WMcBB+nsJ+C8erHH0rZKmeJL0sot2tqUxHfDONuyRi2p4BggWCr2iQTgGTcLGlI7G2FHFe4Q/xGJoYn8SznQSbTQviTrRboPrHUqoZZ8hmQqfyRmTDFTC1bqalsFBN5183o/3NG33uvoWUwXYyi/gdTEpwK",
          children: "Try it in the Playground"
        })
      }), createVNode(_components.p, {
        children: ["Here we have declared a computed property ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage"
        }), "."]
      }), createVNode(_components.p, {
        children: ["Try to change the value of the ", createVNode(_components.code, {
          dir: "auto",
          children: "books"
        }), " array in the application ", createVNode(_components.code, {
          dir: "auto",
          children: "data"
        }), " and you will see how ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage"
        }), " is changing accordingly."]
      }), createVNode(_components.p, {
        children: ["You can data-bind to computed properties in templates just like a normal property. Vue is aware that ", createVNode(_components.code, {
          dir: "auto",
          children: "this.publishedBooksMessage"
        }), " depends on ", createVNode(_components.code, {
          dir: "auto",
          children: "this.author.books"
        }), ", so it will update any bindings that depend on ", createVNode(_components.code, {
          dir: "auto",
          children: "this.publishedBooksMessage"
        }), " when ", createVNode(_components.code, {
          dir: "auto",
          children: "this.author.books"
        }), " changes."]
      }), createVNode(_components.p, {
        children: ["See also: ", createVNode(_components.a, {
          href: "/guide/typescript/options-api#typing-computed-properties",
          children: "Typing Computed Properties"
        }), " ", createVNode("sup", {
          class: "vt-badge ts"
        })]
      })]
    }), "\n", createVNode("div", {
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
                    children: "import"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " { reactive, computed } "
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
                    children: "author"
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
                    children: "{"
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
                    children: "name: "
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
                    children: "John Doe"
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
                    children: ","
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
                    children: "books:"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: " ["
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
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "Vue 2 - Advanced Guide"
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
                    children: ","
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
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "Vue 3 - Basic Guide"
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
                    children: ","
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
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "\""
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#ECC48D",
                      "--1": "#984E4D"
                    },
                    children: "Vue 4 - The Mystery"
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
                    children: ","
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
                    children: "]"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: ","
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
                  children: "\n"
                })
              }), createVNode(_components.div, {
                class: "ec-line",
                children: createVNode(_components.div, {
                  class: "code",
                  children: createVNode(_components.span, {
                    style: {
                      "--0": "#919F9F",
                      "--1": "#5D6376"
                    },
                    children: "// a computed ref"
                  })
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
                    children: "publishedBooksMessage"
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
                    children: "computed"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "("
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D9F5DD",
                      "--1": "#111111"
                    },
                    children: "()"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " => {"
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
                    children: "return "
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#7FDBCA",
                      "--1": "#096E72"
                    },
                    children: "author"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#FAF39F",
                      "--1": "#111111"
                    },
                    children: "books"
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
                    children: "length"
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#C792EA",
                      "--1": "#8844AE"
                    },
                    children: " > "
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
                    children: " ? "
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
                    children: "Yes"
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
                    children: " : "
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
                    children: "No"
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
                  children: createVNode(_components.span, {
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
                      children: "template"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  })
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
                      children: "p"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "Has published books:"
                  }), createVNode(_components.span, {
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
                      children: "p"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
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
                      children: "span"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
                  }), createVNode(_components.span, {
                    style: {
                      "--0": "#D6DEEB",
                      "--1": "#403F53"
                    },
                    children: "{{ publishedBooksMessage }}"
                  }), createVNode(_components.span, {
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
                      children: "span"
                    }), createVNode(_components.span, {
                      style: {
                        "--0": "#7FDBCA"
                      },
                      children: ">"
                    })]
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
                      children: "template"
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
              "data-code": "<script setup>import { reactive, computed } from \"vue\";const author = reactive({  name: \"John Doe\",  books: [    \"Vue 2 - Advanced Guide\",    \"Vue 3 - Basic Guide\",    \"Vue 4 - The Mystery\",  ],});// a computed refconst publishedBooksMessage = computed(() => {  return author.books.length > 0 ? \"Yes\" : \"No\";});</script><template>  <p>Has published books:</p>  <span>{{ publishedBooksMessage }}</span></template>",
              children: createVNode(_components.div, {})
            })
          })]
        })
      }), createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "https://play.vuejs.org/#eNp1kE9Lw0AQxb/KI5dtoTainkoaaREUoZ5EEONhm0ybYLO77J9CCfnuzta0vdjbzr6Zeb95XbIwZroPlMySzJW2MR6OfDB5oZrWaOvRwZIsfbOnCUrdmuCpQo+N1S0ET4pCFarUynnI4GttMT9PjLpCAUq2NIN41bXCkyYxiZ9rrX/cDF/xDYiPQLjDDRbVXqqSHZ5DUw2tg3zP8lK6pvxHe2DtvSasDs6TPTAT8F2ofhzh0hTygm5pc+I1Yb1rXE3VMsKsyDm5JcY/9Y5GY8xzHI+wnIpVw4nTI/10R2rra+S4xSPEJzkBvvNNs310ztK/RDlLLjy1Zic9cQVkJn+R7gIwxJGlMXiWnZEq77orhH3Pq2NH9DjvTfpfSBSbmA==",
          children: "Try it in the Playground"
        })
      }), createVNode(_components.p, {
        children: ["Here we have declared a computed property ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage"
        }), ". The ", createVNode(_components.code, {
          dir: "auto",
          children: "computed()"
        }), " function expects to be passed a ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#description",
          children: "getter function"
        }), ", and the returned value is a ", createVNode(_components.strong, {
          children: "computed ref"
        }), ". Similar to normal refs, you can access the computed result as ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage.value"
        }), ". Computed refs are also auto-unwrapped in templates so you can reference them without ", createVNode(_components.code, {
          dir: "auto",
          children: ".value"
        }), " in template expressions."]
      }), createVNode(_components.p, {
        children: ["A computed property automatically tracks its reactive dependencies. Vue is aware that the computation of ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage"
        }), " depends on ", createVNode(_components.code, {
          dir: "auto",
          children: "author.books"
        }), ", so it will update any bindings that depend on ", createVNode(_components.code, {
          dir: "auto",
          children: "publishedBooksMessage"
        }), " when ", createVNode(_components.code, {
          dir: "auto",
          children: "author.books"
        }), " changes."]
      }), createVNode(_components.p, {
        children: ["See also: ", createVNode(_components.a, {
          href: "/guide/typescript/composition-api#typing-computed",
          children: "Typing Computed"
        }), " ", createVNode("sup", {
          class: "vt-badge ts"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"computed-caching-vs-methods\">Computed Caching vs. Methods</h2><a class=\"sl-anchor-link\" href=\"#computed-caching-vs-methods\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Computed Caching vs. Methods”</span></a></div>\n<p>You may have noticed we can achieve the same result by invoking a method in the expression:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue-html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{{ </span><span style=\"--0:#82AAFF;--1:#3B61B0\">calculateBooksMessage</span><span style=\"--0:#D6DEEB;--1:#403F53\">() }}</span><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<p>{{ calculateBooksMessage() }}</p>\"><div></div></button></div></figure></div>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// in component</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">methods: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">calculateBooksMessage</span><span style=\"--0:#D6DEEB;--1:#403F53\">() {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">author</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">books</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">length</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">?</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">Yes</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#984E4D\">No</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// in componentmethods: {  calculateBooksMessage() {    return this.author.books.length > 0 ? &#x27;Yes&#x27; : &#x27;No&#x27;  }}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// in component</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3B61B0\">calculateBooksMessage</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">author</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#FAF39F;--1:#111111\">books</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">length</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">?</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Yes</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">:</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">No</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// in componentfunction calculateBooksMessage() {  return author.books.length > 0 ? &#x22;Yes&#x22; : &#x22;No&#x22;;}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that <strong>computed properties are cached based on their reactive dependencies.</strong> A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as <code dir=\"auto\">author.books</code> has not changed, multiple access to <code dir=\"auto\">publishedBooksMessage</code> will immediately return the previously computed result without having to run the getter function again.</p>\n<p>This also means the following computed property will never update, because <code dir=\"auto\">Date.now()</code> is not a reactive dependency:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">computed: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">now</span><span style=\"--0:#D6DEEB;--1:#403F53\">() {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">Date</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">now</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"computed: {  now() {    return Date.now()  }}\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">now</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">computed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#C792EA;--1:#8844AE\"> => </span><span style=\"--0:#7FDBCA;--1:#096E72\">Date</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">now</span><span style=\"--0:#D6DEEB;--1:#403F53\">());</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const now = computed(() => Date.now());\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>In comparison, a method invocation will <strong>always</strong> run the function whenever a re-render happens.</p>\n<p>Why do we need caching? Imagine we have an expensive computed property <code dir=\"auto\">list</code>, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on <code dir=\"auto\">list</code>. Without caching, we would be executing <code dir=\"auto\">list</code>’s getter many more times than necessary! In cases where you do not want caching, use a method call instead.</p>\n<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"writable-computed\">Writable Computed</h2><a class=\"sl-anchor-link\" href=\"#writable-computed\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Writable Computed”</span></a></div>\n<p>Computed properties are by default getter-only. If you attempt to assign a new value to a computed property, you will receive a runtime warning. In the rare cases where you need a “writable” computed property, you can create one by providing both a getter and a setter:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">firstName: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">John</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">lastName: </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Doe</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">computed: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">fullName: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// getter</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">firstName</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">lastName</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#919F9F;--1:#5D6376\">// setter</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#919F9F;--1:#5D6376\">// Note: we are using destructuring assignment syntax here.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">firstName</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">lastName</span><span style=\"--0:#D6DEEB;--1:#403F53\">] </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">newValue</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">split</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      firstName: &#x22;John&#x22;,      lastName: &#x22;Doe&#x22;,    };  },  computed: {    fullName: {      // getter      get() {        return this.firstName + &#x22; &#x22; + this.lastName;      },      // setter      set(newValue) {        // Note: we are using destructuring assignment syntax here.        [this.firstName, this.lastName] = newValue.split(&#x22; &#x22;);      },    },  },};\"><div></div></button></div></figure></div><p>Now when you run <code dir=\"auto\">this.fullName = 'John Doe'</code>, the setter will be invoked and <code dir=\"auto\">this.firstName</code> and <code dir=\"auto\">this.lastName</code> will be updated accordingly.</p>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref, computed } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">firstName</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">John</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">lastName</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">Doe</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">fullName</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">computed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// getter</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#7FDBCA;--1:#096E72\">firstName</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\"> + </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#C792EA;--1:#8844AE\"> + </span><span style=\"--0:#7FDBCA;--1:#096E72\">lastName</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#919F9F;--1:#5D6376\">// setter</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// Note: we are using destructuring assignment syntax here.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#7FDBCA;--1:#096E72\">firstName</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#7FDBCA;--1:#096E72\">lastName</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#7FDBCA;--1:#096E72\">newValue</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#82AAFF;--1:#3B61B0\">split</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>import { ref, computed } from &#x22;vue&#x22;;const firstName = ref(&#x22;John&#x22;);const lastName = ref(&#x22;Doe&#x22;);const fullName = computed({  // getter  get() {    return firstName.value + &#x22; &#x22; + lastName.value;  },  // setter  set(newValue) {    // Note: we are using destructuring assignment syntax here.    [firstName.value, lastName.value] = newValue.split(&#x22; &#x22;);  },});</script>\"><div></div></button></div></figure></div><p>Now when you run <code dir=\"auto\">fullName.value = 'John Doe'</code>, the setter will be invoked and <code dir=\"auto\">firstName</code> and <code dir=\"auto\">lastName</code> will be updated accordingly.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"getting-the-previous-value\">Getting the Previous Value</h2><a class=\"sl-anchor-link\" href=\"#getting-the-previous-value\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Getting the Previous Value”</span></a></div>\n<ul>\n<li>Only supported in 3.4+</li>\n</ul>\n<p>In case you need it, you can get the previous value returned by the computed property accessing\r\nthe first argument of the getter:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">computed: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// This computed will return the value of count when it's less or equal to 3.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// When count is >=4, the last value that fulfilled our condition will be returned</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#919F9F;--1:#5D6376\">// instead until count is less or equal to 3</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3B61B0\">alwaysSmall</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">_</span><span style=\"--0:#D6DEEB\">, </span><span style=\"--0:#D7DBE0\">previous</span></span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">&#x3C;=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">previous</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      count: 2,    };  },  computed: {    // This computed will return the value of count when it&#x27;s less or equal to 3.    // When count is >=4, the last value that fulfilled our condition will be returned    // instead until count is less or equal to 3    alwaysSmall(_, previous) {      if (this.count <= 3) {        return this.count;      }      return previous;    },  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref, computed } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// This computed will return the value of count when it's less or equal to 3.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// When count is >=4, the last value that fulfilled our condition will be returned</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#919F9F;--1:#5D6376\">// instead until count is less or equal to 3</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">alwaysSmall</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">computed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">previous</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> => {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\"> &#x3C;= </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#D7DBE0;--1:#403F53\">previous</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>import { ref, computed } from &#x22;vue&#x22;;const count = ref(2);// This computed will return the value of count when it&#x27;s less or equal to 3.// When count is >=4, the last value that fulfilled our condition will be returned// instead until count is less or equal to 3const alwaysSmall = computed((previous) => {  if (count.value <= 3) {    return count.value;  }  return previous;});</script>\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>In case you’re using a writable computed:</p>\n"
    }), createVNode("div", {
      class: "options-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"js\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">data</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">count: </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">computed: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">alwaysSmall: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">previous</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">&#x3C;=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">          </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8844AE\">return</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">previous</span><span style=\"--0:#D6DEEB\">;</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#7FDBCA;--1:#096E72\">this</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8844AE\">=</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">newValue</span><span style=\"--0:#D6DEEB\"> </span></span><span style=\"--0:#C792EA;--1:#8844AE\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"export default {  data() {    return {      count: 2,    };  },  computed: {    alwaysSmall: {      get(previous) {        if (this.count <= 3) {          return this.count;        }        return previous;      },      set(newValue) {        this.count = newValue * 2;      },    },  },};\"><div></div></button></div></figure></div>"
    }), "\n", createVNode("div", {
      class: "composition-api",
      "set:html": "<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"vue\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">script</span></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C5E478;--1:#3B61B0\">setup</span><span style=\"--0:#7FDBCA;--1:#8844AE\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { ref, computed } </span><span style=\"--0:#C792EA;--1:#8844AE\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#984E4D\">vue</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">count</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">ref</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">const </span><span style=\"--0:#82AAFF;--1:#3B61B0\">alwaysSmall</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#82AAFF;--1:#3B61B0\">computed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8844AE\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">get</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">previous</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">if </span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\"> &#x3C;= </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">      </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">    </span></span><span style=\"--0:#C792EA;--1:#8844AE\">return </span><span style=\"--0:#D7DBE0;--1:#403F53\">previous</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3B61B0\">set</span><span style=\"--0:#D9F5DD;--1:#111111\">(</span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#D9F5DD;--1:#111111\">)</span><span style=\"--0:#C792EA;--1:#8844AE\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#7FDBCA;--1:#096E72\">count</span><span style=\"--0:#C792EA;--1:#8844AE\">.</span><span style=\"--0:#7FDBCA;--1:#096E72\">value</span><span style=\"--0:#C792EA;--1:#8844AE\"> = </span><span style=\"--0:#D7DBE0;--1:#403F53\">newValue</span><span style=\"--0:#C792EA;--1:#8844AE\"> * </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#C792EA;--1:#8844AE\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8844AE\">  </span></span><span style=\"--0:#C792EA;--1:#8844AE\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8844AE\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8844AE\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">script</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<script setup>import { ref, computed } from &#x22;vue&#x22;;const count = ref(2);const alwaysSmall = computed({  get(previous) {    if (count.value <= 3) {      return count.value;    }    return previous;  },  set(newValue) {    count.value = newValue * 2;  },});</script>\"><div></div></button></div></figure></div>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"best-practices\">Best Practices</h2><a class=\"sl-anchor-link\" href=\"#best-practices\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Best Practices”</span></a></div>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"getters-should-be-side-effect-free\">Getters should be side-effect free</h3><a class=\"sl-anchor-link\" href=\"#getters-should-be-side-effect-free\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Getters should be side-effect free”</span></a></div>\n<p>It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, <strong>don’t mutate other state, make async requests, or mutate the DOM inside a computed getter!</strong> Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Later in the guide we will discuss how we can perform side effects in reaction to state changes with <a href=\"./watchers\">watchers</a>.</p>\n<div class=\"sl-heading-wrapper level-h3\"><h3 id=\"avoid-mutating-computed-value\">Avoid mutating computed value</h3><a class=\"sl-anchor-link\" href=\"#avoid-mutating-computed-value\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Avoid mutating computed value”</span></a></div>\n<p>The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot, so a computed return value should be treated as read-only and never be mutated - instead, update the source state it depends on to trigger new computations.</p>"
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

const url = "src/content/docs/essentials/computed-properties.mdx";
const file = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/essentials/computed-properties.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Admin/Desktop/Project/vue-docs/src/content/docs/essentials/computed-properties.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
