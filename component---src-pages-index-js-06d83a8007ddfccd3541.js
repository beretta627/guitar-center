(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3dzV":function(e,a,t){e.exports={hero:"hero-module--hero--S__gH",heroImage:"hero-module--heroImage--DciWV",heroDetails:"hero-module--heroDetails--3uv8x",heroHeadline:"hero-module--heroHeadline--jhgHQ",heroTitle:"hero-module--heroTitle--2LulU"}},"D1b+":function(e,a,t){e.exports={previewTitle:"article-preview-module--previewTitle--16pYm",tag:"article-preview-module--tag--27JAs"}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return v}));var r=t("VbXa"),l=t.n(r),n=t("q1tI"),o=t.n(n),i=t("mwIZ"),s=t.n(i),c=t("qhky"),m=(t("pJf4"),t("9eSz")),u=t.n(m),d=t("3dzV"),h=t.n(d),p=function(e){var a=e.data;return o.a.createElement("div",{className:h.a.hero},o.a.createElement(u.a,{className:h.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),o.a.createElement("div",{className:h.a.heroDetails},o.a.createElement("h3",{className:h.a.heroHeadline},a.name),o.a.createElement("p",{className:h.a.heroTitle},a.title),o.a.createElement("p",null,a.shortBio.shortBio)))},f=t("Bl7J"),E=t("aWpR"),g=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),a=s()(this,"props.data.allContentfulBlogPost.edges"),t=s()(this,"props.data.allContentfulPerson.edges")[0];return o.a.createElement(f.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(c.a,{title:e}),o.a.createElement(p,{data:t.node}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent articles"),o.a.createElement("ul",{className:"article-list"},a.map((function(e){var a=e.node;return o.a.createElement("li",{key:a.slug},o.a.createElement(E.a,{article:a}))}))))))},a}(o.a.Component),v=(a.default=g,"1368690253")},aWpR:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),o=t("9eSz"),i=t.n(o),s=t("D1b+"),c=t.n(s);a.a=function(e){var a=e.article;return l.a.createElement("div",{className:c.a.preview},l.a.createElement(i.a,{alt:"",fluid:a.heroImage.fluid}),l.a.createElement("h3",{className:c.a.previewTitle},l.a.createElement(n.a,{to:"/blog/"+a.slug},a.title)),l.a.createElement("small",null,a.publishDate),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}}),a.tags&&a.tags.map((function(e){return l.a.createElement("p",{className:c.a.tag,key:e},e)})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-06d83a8007ddfccd3541.js.map