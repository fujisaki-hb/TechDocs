!function t(e,n,o){function i(a,u){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n?n:t)},l,l.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t){var e=t("riot"),n=t("./lib/ajax-get");t("../components/app.tag"),t("../components/logo.tag"),t("../components/item.tag"),t("../components/footnote.tag"),URL="/index.json",n(URL,function(t){e.mount("app",{title:"TechDocs",items:JSON.parse(t),urls:{github:"https://github.com/TechDocs/TechDocs"}})})},{"../components/app.tag":3,"../components/footnote.tag":4,"../components/item.tag":5,"../components/logo.tag":6,"./lib/ajax-get":7,riot:2}],2:[function(t,e,n){!function(){function t(t){var e={val:t},n=t.split(/\s+in\s+/);return n[1]&&(e.val="{ "+n[1],n=n[0].slice(1).trim().split(/,\s*/),e.key=n[0],e.pos=n[1]),e}function o(e,n,o){f(e,"each");var i,r=e.outerHTML,u=e.previousSibling,c=e.parentNode,s=[],l=[];o=t(o),n.one("update",function(){c.removeChild(e)}).one("mount",function(){m(c)||(c=n.root)}).on("update",function(){var t=b(o.val,n);if(t){if(!Array.isArray(t)){var e=JSON.stringify(t);if(e==i)return;i=e,l.map(function(t){t.unmount()}),l=s=[],t=Object.keys(t).map(function(e){var n={};return n[o.key]=e,n[o.pos]=t[e],n})}g(s,t).map(function(t){var e=s.indexOf(t),n=l[e];n&&(n.unmount(),s.splice(e,1),l.splice(e,1))});var f=c.childNodes,p=Array.prototype.indexOf.call(f,u);g(t,s).map(function(e){var u=t.indexOf(e);if(!i&&o.key){var s={};s[o.key]=e,s[o.pos]=u,e=s}var d=new a({tmpl:r},{before:f[p+1+u],parent:n,root:c,loop:!0,item:e});l.splice(u,0,d)}),s=t.slice()}})}function i(t,e){h(t,function(t){1==t.nodeType&&l(t.attributes,function(n){/^(name|id)$/.test(n.name)&&(e[n.value]=t)})})}function r(t,e,n){function i(t,e,o){if(b(e)||o){var i={dom:t,expr:e};n.push(p(i,o||{}))}}h(t,function(t){var n=t.nodeType;if(3==n&&"STYLE"!=t.parentNode.tagName&&i(t,t.nodeValue),1==n){var r=t.getAttribute("each");if(r)return o(t,e,r),!1;var u=w[t.tagName.toLowerCase()];return u?(u=new a(u,{root:t,parent:e}),!1):void l(t.attributes,function(e){var n=e.name,o=e.value,r=n.split("__")[1];return i(t,o,{attr:r||n,bool:r}),r?(f(t,n),!1):void 0})}})}function a(t,e){function n(){Object.keys(c).map(function(t){w[t]=b(c[t],h||a)})}function o(){for(;C.firstChild;)g?(k=C.firstChild,y.insertBefore(C.firstChild,e.before||null)):y.appendChild(C.firstChild);m(y)||(a.root=y=h.root),a.trigger("mount"),h&&h.on("update",a.update).one("unmount",a.unmount)}var a=v.observable(this),u=[],c={},h=e.parent,g=e.loop,y=e.root,w=e.opts,x=e.item;if(g||!y.riot){y.riot=1,w=w||{},p(this,{parent:h,root:y,opts:w,children:[]}),p(this,x),l(y.attributes,function(t){var e=t.name,n=t.value;return c[e]=n,n.indexOf("{")>=0?(f(y,e),!1):void 0}),n(),h&&h.children.push(this);var k,C=d(t.tmpl);i(C,this),this.update=function(t){p(a,t),p(a,x),a.trigger("update"),n(),s(u,a,x),a.trigger("updated")},this.unmount=function(){if(g)y.removeChild(k);else{var t=y.parentNode;t&&t.removeChild(y)}if(h){var e=h.children;e.splice(e.indexOf(a),1)}a.trigger("unmount"),h&&h.off("update",a.update),mounted=!1},t.fn&&t.fn.call(this,w),r(C,this,u),this.update(),o()}}function u(t,e,n,o,i){n[t]=function(t){t=t||window.event,t.which=t.which||t.charCode||t.keyCode,t.target=t.target||t.srcElement,t.currentTarget=n,t.item=i,e.call(o,t)!==!0&&(t.preventDefault&&t.preventDefault(),t.returnValue=!1),o.update()}}function c(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function s(t,e,n){l(t,function(t){var o=t.dom,i=t.attr,r=b(t.expr,e);if(null==r&&(r=""),t.value!==r){if(t.value=r,!i)return o.nodeValue=r;if((!r&&t.bool||/obj|func/.test(typeof r))&&f(o,i),"function"==typeof r)u(i,r,o,e,n);else if("if"==i){f(o,i);var a=t.stub;r?a&&c(a.parentNode,a,o):(a=t.stub=a||document.createTextNode(""),c(o.parentNode,o,a))}else if(/^(show|hide)$/.test(i))f(o,i),"hide"==i&&(r=!r),o.style.display=r?"":"none";else{if(t.bool){if(o[i]=r,!r)return;r=i}o.setAttribute(i,r)}}})}function l(t,e){for(var n=0;n<(t||[]).length;n++)e(t[n],n)===!1&&n--}function f(t,e){t.removeAttribute(e)}function p(t,e){return e&&Object.keys(e).map(function(n){t[n]=e[n]}),t}function d(t){var e=t.trim().slice(1,3).toLowerCase(),n=/td|th/.test(e)?"tr":"tr"==e?"tbody":"div";return el=document.createElement(n),el.stub=!0,el.innerHTML=t,el}function h(t,e){for(t=e(t)===!1?t.nextSibling:t.firstChild;t;)h(t,e),t=t.nextSibling}function g(t,e){return t.filter(function(t){return e.indexOf(t)<0})}function m(t){var e=t.parentNode,n=window.HTMLDocument;return e&&!(n&&e instanceof n)}var v={version:"v2.0.8",settings:{}};v.observable=function(t){t=t||{};var e={};return t.on=function(n,o){return"function"==typeof o&&n.replace(/\S+/g,function(t,n){(e[t]=e[t]||[]).push(o),o.typed=n>0}),t},t.off=function(n,o){if("*"==n)e={};else if(o)for(var i,r=e[n],a=0;i=r&&r[a];++a)i==o&&(r.splice(a,1),a--);else n.replace(/\S+/g,function(t){e[t]=[]});return t},t.one=function(e,n){return n&&(n.one=1),t.on(e,n)},t.trigger=function(n){for(var o,i=[].slice.call(arguments,1),r=e[n]||[],a=0;o=r[a];++a)o.busy||(o.busy=1,o.apply(t,o.typed?[n].concat(i):i),o.one?(r.splice(a,1),a--):r[a]!==o&&a--,o.busy=0);return t},t},function(t,e){function n(){return r.hash.slice(1)}function o(t){return t.split("/")}function i(t){t.type&&(t=n()),t!=u&&(a.trigger.apply(null,["H"].concat(o(t))),u=t)}if(this.top){var r=location,a=t.observable(),u=n(),c=window,s=t.route=function(t){t[0]?(r.hash=t,i(t)):a.on("H",t)};s.exec=function(t){t.apply(null,o(n()))},s.parser=function(t){o=t},c.addEventListener?c.addEventListener(e,i,!1):c.attachEvent("on"+e,i)}}(v,"hashchange");var b=function(){function t(t,n){return n=(t||i.join("")).replace(o(/\\{/),"￰").replace(o(/\\}/),"￱").split(r),new Function("d","return "+(n[0]||n[2]||n[3]?"["+n.map(function(t,n){return n%2?e(t,1):'"'+t.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':e(n[1])).replace(/\uFFF0/g,i[0]).replace(/\uFFF1/g,i[1]))}function e(t,e){return t=t.replace(/\n/g," ").replace(o(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w-"']+ *:/.test(t)?"["+t.replace(/\W*([\w-]+)\W*:([^,]+)/g,function(t,o,i){return i.replace(/\w[^,|& ]*/g,function(t){return n(t,e)})+'?"'+o+'":"",'})+'].join(" ")':n(t,e)}function n(t,e){return"(function(v){try{v="+(t.replace(u,function(t,e,n){return n?"(d."+n+"===undefined?window."+n+":d."+n+")":t})||"x")+"}finally{return "+(e?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function o(t){return RegExp(t.source.split("{").join("\\"+i[0]).split("}").join("\\"+i[1]),t.global?"g":"")}var i,r,a={},u=/("|').+?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_]\w*)/gi;return function(e,n){var u=v.settings.brackets||"{ }";return u!=i&&(i=u.split(" "),r=o(/({[\s\S]*?})/)),n?e&&(a[e]=a[e]||t(e))(n):r.test(e)}}(),y=[],w={};v.tag=function(t,e,n){w[t]={name:t,tmpl:e,fn:n}};var x=v.mountTo=function(t,e,n){var o,i=w[e];return i&&(o=new a(i,{root:t,opts:n})),o?(y.push(o),o.on("unmount",function(){y.splice(y.indexOf(o),1)})):void 0};v.mount=function(t,e){"*"==t&&(t=Object.keys(w).join(", "));var n=[];return l(document.querySelectorAll(t),function(t){var o=t.tagName.toLowerCase(),i=x(t,o,e);i&&n.push(i)}),n},v.update=function(){return y.map(function(t){t.update()}),y},"object"==typeof n?e.exports=v:"function"==typeof define&&define.amd?define(function(){return v}):this.riot=v}()},{}],3:[function(t){var e=t("riot");e.tag("app",'<logo title="{ opts.title }"></logo> <form> <input type="search" value="{ keyword }" onkeyup="{ keyup }" placeholder="search"> </form> <item each="{ filtered }" url="{ url }" language="{ language }" title="{ title }"></item> <p if="{ more }">and { count - MAX } more documents</p> <footnote urls="{ opts.urls }"></footnote> <style> app { display: block; text-align: center; color: #666; } app > form { background: #72A7EE; padding: 0 2em 2em; margin-bottom: 1em; } app input[type=search] { width: 100%; font-size: 2em; padding: .5em 0; text-align: center; outline: none; border: 0; border-radius: .2em; background-color: rgba(255,255,255,.7); transition: all .5s; } app input[type=search]:hover, app input[type=search]:focus { background-color: rgba(255,255,255,1); box-shadow: 0 1px 5px rgba(0,0,0,.3); } app > p { color: #ccc; } </style>',function(t){MAX=20,this.init=function(){this.keyword="",this.items=t.items,this.filtered=[],this.count=0,this.more=!1,this.search()}.bind(this),this.keyup=function(t){this.keyword=t.target.value.trim().toLowerCase(),this.search()}.bind(this),this.search=function(){filtered=this.items.filter(this.filter),this.count=filtered.length,this.more=filtered.length>MAX,this.filtered=filtered.slice(0,MAX)}.bind(this),this.filter=function(t){return!this.keyword.length||t.id.replace(/\-\w\w$/,"").match(this.keyword)}.bind(this),this.init()})},{riot:2}],4:[function(t){var e=t("riot");e.tag("footnote",'<p>TechDocs Project - <a href="{ opts.urls.github }">GitHub</a></p> <style> footnote { color: #999; } footnote p { line-height: 4em; } </style>',function(){})},{riot:2}],5:[function(t){var e=t("riot");e.tag("item",'<a href="{ opts.url }"> <span class="language">{ opts.language }</span> { opts.title } </a> <style> item { display: block; text-align: left; border-bottom: 1px dotted #ddd; background: white; } item .language { background: #FB1C1C; color: white; text-align: center; width: 2em; line-height: 1.4em; border-radius: .6em; margin-right: .4em; display: inline-block; font-size: 80%; } item a { text-decoration: none; display: block; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; line-height: 2em; padding: .3em 5%; color: inherit; } item a:hover { background: #f7f7f7; color: #333; } </style>',function(){})},{riot:2}],6:[function(t){var e=t("riot");e.tag("logo","<h1>{ opts.title }</h1> <style> logo { display: block; background-color: #72A7EE; color: #fff; padding: 5em 0; } logo h1 { background-image: url('images/logo.svg'); background-size: contain; background-position: center; background-repeat: no-repeat; color: transparent; margin: 0; padding: .5em; font-size: 3em; white-space: nowrap; overflow: hidden; } </style>",function(){})},{riot:2}],7:[function(t,e){e.exports=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e(n.responseText)},n.open("GET",t,!0),n.send("")}},{}]},{},[1]);
//# sourceMappingURL=app.js.map