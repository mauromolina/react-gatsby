(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{SUsj:function(n,t,e){"use strict";e.r(t),e.d(t,"query",(function(){return c}));e("q1tI");var a=e("Bl7J"),i=e("9eSz"),l=e.n(i),s=e("qKvR"),c=(e("Wbzz"),graphql("\n    query($slug:String!) {\n        allDatoCmsRoom (filter: { slug: {eq: $slug } }) {\n        nodes {\n            title\n            description\n            image {\n            fluid(maxWidth:1200){\n                ...GatsbyDatoCmsFluid\n            }\n            }\n            }\n        }\n        }\n        ")),u={name:"yuzd48",styles:"margin:0 auto;max-width:1200px;width:95%;"},o={name:"btlv4",styles:"margin-top:4rem;text-align:center"};t.default=function(n){var t=n.data.allDatoCmsRoom.nodes[0],e=t.title,i=t.description,c=t.image;return Object(s.c)(a.a,null,Object(s.c)("main",{css:u},Object(s.c)("h1",{css:o},e),Object(s.c)("p",null,i),Object(s.c)(l.a,{fluid:c.fluid})))}}}]);
//# sourceMappingURL=component---src-components-rooms-js-446f712ec5c4bac2d330.js.map