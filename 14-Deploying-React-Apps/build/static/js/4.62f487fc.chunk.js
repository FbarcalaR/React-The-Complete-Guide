(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={comments:"Comments_comments__1Hw-q"}},46:function(e,t,c){e.exports={form:"NewCommentForm_form__1CNAi",loading:"NewCommentForm_loading__1PwYD",control:"NewCommentForm_control__1FOJb",actions:"NewCommentForm_actions__2-NgS"}},47:function(e,t,c){e.exports={item:"CommentItem_item__MxN78"}},48:function(e,t,c){e.exports={comments:"CommentsList_comments__3WMaP"}},49:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2Js9O"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),o=c(37),a=c(45),m=c.n(a),r=c(35),j=c(36),i=c(14),d=c(46),u=c.n(d),l=c(1),b=function(e){var t=Object(s.useRef)(),c=Object(r.a)(j.a),n=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(s.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var d=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(l.jsxs)("form",{className:u.a.form,onSubmit:d,children:["pending"===o&&Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(i.a,{})}),Object(l.jsxs)("div",{className:u.a.control,onSubmit:d,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:u.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=c(47),O=c.n(x),h=function(e){return Object(l.jsx)("li",{className:O.a.item,children:Object(l.jsx)("p",{children:e.text})})},f=c(48),p=c.n(f),N=function(e){return Object(l.jsx)("ul",{className:p.a.comments,children:e.comments.map((function(e){return Object(l.jsx)(h,{text:e.text},e.id)}))})},_=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],d=Object(n.j)().quoteId,u=Object(r.a)(j.c),x=u.sendRequest,O=u.status,h=u.data;Object(s.useEffect)((function(){x(d)}),[x,d]);var f,p=Object(s.useCallback)((function(){x(d)}),[x,d]);return"pending"===O&&(f=Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(i.a,{})})),"completed"===O&&(h||h.length>0)&&(f=Object(l.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(l.jsx)("p",{children:"No comments added here"})),Object(l.jsxs)("section",{className:m.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!c&&Object(l.jsx)("button",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),c&&Object(l.jsx)(b,{quoteId:d,onAddedComment:p}),f]})},C=c(49),g=c.n(C),v=function(e){return Object(l.jsxs)("figure",{className:g.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})},q=c(9);t.default=function(e){var t=Object(n.k)(),c=Object(n.j)().quoteId,o=Object(r.a)(j.e,!0),a=o.sendRequest,m=o.status,d=o.data,u=o.error;return Object(s.useEffect)((function(){a(c)}),[a,c]),"pending"===m?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(i.a,{})}):u?Object(l.jsx)("p",{className:"centered focused",children:u}):d.text?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(v,{text:d.text,author:d.author}),Object(l.jsx)(n.c,{path:t.path,exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(q.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(l.jsx)(n.c,{path:"".concat(t.path,"/comments"),children:Object(l.jsx)(_,{})})]}):Object(l.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.62f487fc.chunk.js.map