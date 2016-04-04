/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

typeof module!="undefined"&&typeof exports!="undefined"&&module.exports===exports&&(module.exports="ui.router"),function(e,t,n){function h(e,t){return f(new(f(function(){},{prototype:e})),t)}function p(e){return a(arguments,function(t){t!==e&&a(t,function(t,n){e.hasOwnProperty(n)||(e[n]=t)})}),e}function d(e,t){var n=[];for(var r in e.path){if(e.path[r]!==t.path[r])break;n.push(e.path[r])}return n}function v(e){if(Object.keys)return Object.keys(e);var t=[];return a(e,function(e,n){t.push(n)}),t}function m(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var n=e.length>>>0,r=Number(arguments[2])||0;r=r<0?Math.ceil(r):Math.floor(r),r<0&&(r+=n);for(;r<n;r++)if(r in e&&e[r]===t)return r;return-1}function g(e,t,n,r){var i=d(n,r),s,o={},u=[];for(var a in i){if(!i[a]||!i[a].params)continue;s=v(i[a].params);if(!s.length)continue;for(var l in s){if(m(u,s[l])>=0)continue;u.push(s[l]),o[s[l]]=e[s[l]]}}return f({},o,t)}function y(e,t,n){if(!n){n=[];for(var r in e)n.push(r)}for(var i=0;i<n.length;i++){var s=n[i];if(e[s]!=t[s])return!1}return!0}function b(e,t){var n={};return a(e,function(e){n[e]=t[e]}),n}function w(e,t){var n={};return a(e,function(e){n[e[t]]=e}),n}function E(e){var t={},n=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return a(n,function(n){n in e&&(t[n]=e[n])}),t}function S(e){var t={},n=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var r in e)m(n,r)==-1&&(t[r]=e[r]);return t}function x(e,t){var n=u(e)?[]:{};return a(e,function(e,r){n[r]=i(t)?t(e):e[t]}),n}function T(e,t){var n=u(e),r=n?[]:{};return a(e,function(e,i){t(e,i)&&(r[n?r.length:i]=e)}),r}function N(e,t){var n=u(e)?[]:{};return a(e,function(e,r){n[r]=t(e,r)}),n}function C(e,t){var i=1,u=2,l={},c=[],h=l,d=f(e.when(l),{$$promises:l,$$values:l});this.study=function(l){function E(e,n){if(w[n]===u)return;b.push(n);if(w[n]===i)throw b.splice(0,m(b,n)),new Error("Cyclic dependency: "+b.join(" -> "));w[n]=i;if(s(e))y.push(n,[function(){return t.get(e)}],c);else{var r=t.annotate(e);a(r,function(e){e!==n&&l.hasOwnProperty(e)&&E(l[e],e)}),y.push(n,e,r)}b.pop(),w[n]=u}function x(e){return o(e)&&e.then&&e.$$promises}if(!o(l))throw new Error("'invocables' must be an object");var g=v(l||{}),y=[],b=[],w={};return a(l,E),l=b=w=null,function(i,s,u){function E(){--b||(w||p(m,s.$$values),c.$$values=m,c.$$promises=c.$$promises||!0,delete c.$$inheritedValues,l.resolve(m))}function T(e){c.$$failure=e,l.reject(e)}function k(n,s,o){function h(e){f.reject(e),T(e)}function p(){if(r(c.$$failure))return;try{f.resolve(t.invoke(s,u,m)),f.promise.then(function(e){m[n]=e,E()},h)}catch(e){h(e)}}var f=e.defer(),l=0;a(o,function(e){v.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&(l++,v[e].then(function(t){m[e]=t,--l||p()},h))}),l||p(),v[n]=f.promise}x(i)&&u===n&&(u=s,s=i,i=null);if(!i)i=h;else if(!o(i))throw new Error("'locals' must be an object");if(!s)s=d;else if(!x(s))throw new Error("'parent' must be a promise returned by $resolve.resolve()");var l=e.defer(),c=l.promise,v=c.$$promises={},m=f({},i),b=1+y.length/3,w=!1;if(r(s.$$failure))return T(s.$$failure),c;s.$$inheritedValues&&p(m,S(s.$$inheritedValues,g)),f(v,s.$$promises),s.$$values?(w=p(m,S(s.$$values,g)),c.$$inheritedValues=S(s.$$values,g),E()):(s.$$inheritedValues&&(c.$$inheritedValues=S(s.$$inheritedValues,g)),s.then(E,T));for(var N=0,C=y.length;N<C;N+=3)i.hasOwnProperty(y[N])?E():k(y[N],y[N+1],y[N+2]);return c}},this.resolve=function(e,t,n,r){return this.study(e)(t,n,r)}}function k(e,t,n){this.fromConfig=function(e,t,n){return r(e.template)?this.fromString(e.template,t):r(e.templateUrl)?this.fromUrl(e.templateUrl,t):r(e.templateProvider)?this.fromProvider(e.templateProvider,t,n):null},this.fromString=function(e,t){return i(e)?e(t):e},this.fromUrl=function(n,r){return i(n)&&(n=n(r)),n==null?null:e.get(n,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,r){return n.invoke(e,null,r||{params:t})}}function A(e,t,r){function m(t,n,r,i){v.push(t);if(p[t])return p[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(d[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return d[t]=new L.Param(t,n,r,i),d[t]}function g(e,t,n,r){var i=["",""],s=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return s;switch(n){case!1:i=["(",")"+(r?"?":"")];break;case!0:s=s.replace(/\/$/,""),i=["(?:/(",")|/)?"];break;default:i=["("+n+"|",")?"]}return s+i[0]+t+i[1]}function y(r,i){var s,o,u,f,l,c;return s=r[2]||r[3],l=t.params[s],u=e.substring(a,r.index),o=i?r[4]:r[4]||(r[1]=="*"?".*":null),o&&(f=L.type(o)||h(L.type("string"),{pattern:new RegExp(o,t.caseInsensitive?"i":n)})),{id:s,regexp:o,segment:u,type:f,cfg:l}}t=f({params:{}},o(t)?t:{});var i=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,s=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,u="^",a=0,l,c=this.segments=[],p=r?r.params:{},d=this.params=r?r.params.$$new():new L.ParamSet,v=[];this.source=e;var b,w,E;while(l=i.exec(e)){b=y(l,!1);if(b.segment.indexOf("?")>=0)break;w=m(b.id,b.type,b.cfg,"path"),u+=g(b.segment,w.type.pattern.source,w.squash,w.isOptional),c.push(b.segment),a=i.lastIndex}E=e.substring(a);var S=E.indexOf("?");if(S>=0){var x=this.sourceSearch=E.substring(S);E=E.substring(0,S),this.sourcePath=e.substring(0,a+S);if(x.length>0){a=0;while(l=s.exec(x))b=y(l,!0),w=m(b.id,b.type,b.cfg,"search"),a=i.lastIndex}}else this.sourcePath=e,this.sourceSearch="";u+=g(E)+(t.strict===!1?"/?":"")+"$",c.push(E),this.regexp=new RegExp(u,t.caseInsensitive?"i":n),this.prefix=c[0],this.$$paramNames=v}function O(e){f(this,e)}function M(){function p(e){return e!=null?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}function d(e){return e!=null?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e}function S(){return{strict:l,caseInsensitive:e}}function x(e){return i(e)||u(e)&&i(e[e.length-1])}function C(){while(b.length){var e=b.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(g[e.name],w.invoke(e.def))}}function k(e){f(this,e||{})}L=this;var e=!1,l=!0,c=!1,g={},y=!0,b=[],w,E={string:{encode:p,decode:d,is:function(e){return e==null||!r(e)||typeof e=="string"},pattern:/[^/]*/},"int":{encode:p,decode:function(e){return parseInt(e,10)},is:function(e){return r(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return parseInt(e,10)!==0},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):n},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):n},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};M.$$getDefaultValue=function(e){if(!x(e.value))return e.value;if(!w)throw new Error("Injectable functions cannot be called at configuration time");return w.invoke(e.value)},this.caseInsensitive=function(t){return r(t)&&(e=t),e},this.strictMode=function(e){return r(e)&&(l=e),l},this.defaultSquashPolicy=function(e){if(!r(e))return c;if(e!==!0&&e!==!1&&!s(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return c=e,e},this.compile=function(e,t){return new A(e,f(S(),t))},this.isMatcher=function(e){if(!o(e))return!1;var t=!0;return a(A.prototype,function(n,s){i(n)&&(t=t&&r(e[s])&&i(e[s]))}),t},this.type=function(e,t,n){if(!r(t))return g[e];if(g.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return g[e]=new O(f({name:e},t)),n&&(b.push({name:e,def:n}),y||C()),this},a(E,function(e,t){g[t]=new O(f({name:t},e))}),g=h(g,{}),this.$get=["$injector",function(e){return w=e,y=!1,C(),a(E,function(e,t){g[t]||(g[t]=new O(e))}),this}],this.Param=function(i,a,l,h){function S(e){var t=o(e)?v(e):[],n=m(t,"value")===-1&&m(t,"type")===-1&&m(t,"squash")===-1&&m(t,"array")===-1;return n&&(e={value:e}),e.$$fn=x(e.value)?e.value:function(){return e.value},e}function C(e,n,r){if(e.type&&n)throw new Error("Param '"+i+"' has two type configurations.");return n?n:e.type?t.isString(e.type)?g[e.type]:e.type instanceof O?e.type:new O(e.type):r==="config"?g.any:g.string}function k(){var e={array:h==="search"?"auto":!1},t=i.match(/\[\]$/)?{array:!0}:{};return f(e,t,l).array}function L(e,t){var n=e.squash;if(!t||n===!1)return!1;if(!r(n)||n==null)return c;if(n===!0||s(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}function A(e,t,r,i){var o,a,f=[{from:"",to:r||t?n:""},{from:null,to:r||t?n:""}];return o=u(e.replace)?e.replace:[],s(i)&&o.push({from:i,to:n}),a=N(o,function(e){return e.from}),T(f,function(e){return m(a,e.from)===-1}).concat(o)}function M(){if(!w)throw new Error("Injectable functions cannot be called at configuration time");var e=w.invoke(l.$$fn);if(e!==null&&e!==n&&!p.type.is(e))throw new Error("Default value ("+e+") for parameter '"+p.id+"' is not an instance of Type ("+p.type.name+")");return e}function _(e){function t(e){return function(t){return t.from===e}}function n(e){var n=N(T(p.replace,t(e)),function(e){return e.to});return n.length?n[0]:e}return e=n(e),r(e)?p.type.$normalize(e):M()}function D(){return"{Param:"+i+" "+a+" squash: '"+b+"' optional: "+y+"}"}var p=this;l=S(l),a=C(l,a,h);var d=k();a=d?a.$asArray(d,h==="search"):a,a.name==="string"&&!d&&h==="path"&&l.value===n&&(l.value="");var y=l.value!==n,b=L(l,y),E=A(l,d,y,b);f(this,{id:i,type:a,location:h,array:d,squash:b,replace:E,isOptional:y,value:_,dynamic:n,config:l,toString:D})},k.prototype={$$new:function(){return h(this,f(new k,{$$parent:this}))},$$keys:function(){var e=[],t=[],n=this,r=v(k.prototype);while(n)t.push(n),n=n.$$parent;return t.reverse(),a(t,function(t){a(v(t),function(t){m(e,t)===-1&&m(r,t)===-1&&e.push(t)})}),e},$$values:function(e){var t={},n=this;return a(n.$$keys(),function(r){t[r]=n[r].value(e&&e[r])}),t},$$equals:function(e,t){var n=!0,r=this;return a(r.$$keys(),function(i){var s=e&&e[i],o=t&&t[i];r[i].type.equals(s,o)||(n=!1)}),n},$$validates:function(r){var i=this.$$keys(),s,o,u,a,f;for(s=0;s<i.length;s++){o=this[i[s]],u=r[i[s]];if(!(u!==n&&u!==null||!o.isOptional))break;a=o.type.$normalize(u);if(!o.type.is(a))return!1;f=o.type.encode(a);if(t.isString(f)&&!o.type.pattern.exec(f))return!1}return!0},$$parent:n},this.ParamSet=k}function _(e,o){function p(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return t!=null?t[1].replace(/\\(.)/g,"$1"):""}function d(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,n){return t[n==="$"?0:Number(n)]})}function v(e,t,n){if(!n)return!1;var i=e.invoke(t,t,{$match:n});return r(i)?i:!0}function m(r,i,o,u,f){function m(e,t,n){return p==="/"?e:t?p.slice(0,-1)+e:n?p.slice(1)+e:e}function g(e){function i(e){var t=e(o,r);return t?(s(t)&&r.replace().url(t),!0):!1}if(e&&e.defaultPrevented)return;var t=v&&r.url()===v;v=n;var u=a.length,f;for(f=0;f<u;f++)if(i(a[f]))return;l&&i(l)}function y(){return h=h||i.$on("$locationChangeSuccess",g),h}var p=u.baseHref(),d=r.url(),v;return c||y(),{sync:function(){g()},listen:function(){return y()},update:function(e){if(e){d=r.url();return}if(r.url()===d)return;r.url(d),r.replace()},push:function(e,t,i){var s=e.format(t||{});s!==null&&t&&t["#"]&&(s+="#"+t["#"]),r.url(s),v=i&&i.$$avoidResync?r.url():n,i&&i.replace&&r.replace()},href:function(n,i,s){if(!n.validates(i))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled),o=o&&f.history;var u=n.format(i);s=s||{},!o&&u!==null&&(u="#"+e.hashPrefix()+u),u!==null&&i&&i["#"]&&(u+="#"+i["#"]),u=m(u,o,s.absolute);if(!s.absolute||!u)return u;var a=!o&&u?"/":"",l=r.port();return l=l===80||l===443?"":":"+l,[r.protocol(),"://",r.host(),l,a,u].join("")}}}var a=[],l=null,c=!1,h;this.rule=function(e){if(!i(e))throw new Error("'rule' must be a function");return a.push(e),this},this.otherwise=function(e){if(s(e)){var t=e;e=function(){return t}}else if(!i(e))throw new Error("'rule' must be a function");return l=e,this},this.when=function(e,t){var n,r=s(t);s(e)&&(e=o.compile(e));if(!r&&!i(t)&&!u(t))throw new Error("invalid 'handler' in when()");var a={matcher:function(e,t){return r&&(n=o.compile(t),t=["$match",function(e){return n.format(e)}]),f(function(n,r){return v(n,t,e.exec(r.path(),r.search()))},{prefix:s(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return r&&(n=t,t=["$match",function(e){return d(n,e)}]),f(function(n,r){return v(n,t,e.exec(r.path()))},{prefix:p(e)})}},l={matcher:o.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(a[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===n&&(e=!0),c=e},this.$get=m,m.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function D(e,c){function C(e){return e.indexOf(".")===0||e.indexOf("^")===0}function k(e,t){if(!e)return n;var r=s(e),i=r?e:e.name,o=C(i);if(o){if(!t)throw new Error("No reference point given for path '"+i+"'");t=k(t);var u=i.split("."),a=0,f=u.length,l=t;for(;a<f;a++){if(u[a]===""&&a===0){l=t;continue}if(u[a]==="^"){if(!l.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");l=l.parent;continue}break}u=u.slice(a).join("."),i=l.name+(l.name&&u?".":"")+u}var c=d[i];return c&&(r||!r&&(c===e||c.self===e))?c:n}function A(e,t){S[e]||(S[e]=[]),S[e].push(t)}function O(e){var t=S[e]||[];while(t.length)M(t.shift())}function M(t){t=h(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var n=t.name;if(!s(n)||n.indexOf("@")>=0)throw new Error("State must have a valid name");if(d.hasOwnProperty(n))throw new Error("State '"+n+"' is already defined");var r=n.indexOf(".")!==-1?n.substring(0,n.lastIndexOf(".")):s(t.parent)?t.parent:o(t.parent)&&s(t.parent.name)?t.parent.name:"";if(r&&!d[r])return A(r,t.self);for(var u in T)i(T[u])&&(t[u]=T[u](t,T.$delegates[u]));return d[n]=t,!t[x]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,n){(w.$current.navigable!=t||!y(e,n))&&w.transitionTo(t,e,{inherit:!0,location:!1})}]),O(n),t}function _(e){return e.indexOf("*")>-1}function D(e){var t=e.split("."),n=w.$current.name.split(".");for(var r=0,i=t.length;r<i;r++)t[r]==="*"&&(n[r]="*");return t[0]==="**"&&(n=n.slice(m(n,t[1])),n.unshift("**")),t[t.length-1]==="**"&&(n.splice(m(n,t[t.length-2])+1,Number.MAX_VALUE),n.push("**")),t.length!=n.length?!1:n.join("")===t.join("")}function P(e,t){return s(e)&&!r(t)?T[e]:!i(t)||!s(e)?this:(T[e]&&!T.$delegates[e]&&(T.$delegates[e]=T[e]),T[e]=t,this)}function H(e,t){return o(e)?t=e:t.name=e,M(t),this}function B(e,c,m,E,S,T,C,L,A){function B(t,n,r,i){var s=e.$broadcast("$stateNotFound",t,n,r);if(s.defaultPrevented)return C.update(),P;if(!s.retry)return null;if(i.$retry)return C.update(),H;var o=w.transition=c.when(s.retry);return o.then(function(){return o!==w.transition?O:(t.options.$retry=!0,w.transitionTo(t.to,t.toParams,t.options))},function(){return P}),C.update(),o}function F(e,n,r,s,o,f){function d(){var n=[];return a(e.views,function(r,s){var a=r.resolve&&r.resolve!==e.resolve?r.resolve:{};a.$template=[function(){return m.load(s,{view:r,locals:o.globals,params:l,notify:f.notify})||""}],n.push(S.resolve(a,o.globals,o.resolve,e).then(function(n){if(i(r.controllerProvider)||u(r.controllerProvider)){var f=t.extend({},a,o.globals);n.$$controller=E.invoke(r.controllerProvider,null,f)}else n.$$controller=r.controller;n.$$state=e,n.$$controllerAs=r.controllerAs,o[s]=n}))}),c.all(n).then(function(){return o.globals})}var l=r?n:b(e.params.$$keys(),n),h={$stateParams:l};o.resolve=S.resolve(e.resolve,h,o.resolve,e);var p=[o.resolve.then(function(e){o.globals=e})];return s&&p.push(s),c.all(p).then(d).then(function(e){return o})}var O=c.reject(new Error("transition superseded")),M=c.reject(new Error("transition prevented")),P=c.reject(new Error("transition aborted")),H=c.reject(new Error("transition failed"));return p.locals={resolve:null,globals:{$stateParams:{}}},w={params:{},current:p.self,$current:p,transition:null},w.reload=function(t){return w.transitionTo(w.current,T,{reload:t||!0,inherit:!1,notify:!0})},w.go=function(t,n,r){return w.transitionTo(t,n,f({inherit:!0,relative:w.$current},r))},w.transitionTo=function(n,i,u){i=i||{},u=f({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},u||{});var a=w.$current,d=w.params,v=a.path,m,y=k(n,u.relative),S=i["#"];if(!r(y)){var N={to:n,toParams:i,options:u},L=B(N,a.self,d,u);if(L)return L;n=N.to,i=N.toParams,u=N.options,y=k(n,u.relative);if(!r(y))throw u.relative?new Error("Could not resolve '"+n+"' from state '"+u.relative+"'"):new Error("No such state '"+n+"'")}if(y[x])throw new Error("Cannot transition to abstract state '"+n+"'");u.inherit&&(i=g(T,i||{},w.$current,y));if(!y.params.$$validates(i))return H;i=y.params.$$values(i),n=y;var A=n.path,_=0,D=A[_],P=p.locals,I=[];if(!u.reload)while(D&&D===v[_]&&D.ownParams.$$equals(i,d))P=I[_]=D.locals,_++,D=A[_];else if(s(u.reload)||o(u.reload)){if(o(u.reload)&&!u.reload.name)throw new Error("Invalid reload state object");var q=u.reload===!0?v[0]:k(u.reload);if(u.reload&&!q)throw new Error("No such reload state '"+(s(u.reload)?u.reload:u.reload.name)+"'");while(D&&D===v[_]&&D!==q)P=I[_]=D.locals,_++,D=A[_]}if(j(n,i,a,d,P,u))return S&&(i["#"]=S),w.params=i,l(w.params,T),l(b(n.params.$$keys(),T),n.locals.globals.$stateParams),u.location&&n.navigable&&n.navigable.url&&(C.push(n.navigable.url,i,{$$avoidResync:!0,replace:u.location==="replace"}),C.update(!0)),w.transition=null,c.when(w.current);i=b(n.params.$$keys(),i||{}),S&&(i["#"]=S);if(u.notify&&e.$broadcast("$stateChangeStart",n.self,i,a.self,d,u).defaultPrevented)return e.$broadcast("$stateChangeCancel",n.self,i,a.self,d),w.transition==null&&C.update(),M;var R=c.when(P);for(var U=_;U<A.length;U++,D=A[U])P=I[U]=h(P),R=F(D,i,D===n,R,P,u);var z=w.transition=R.then(function(){var t,r,s;if(w.transition!==z)return O;for(t=v.length-1;t>=_;t--)s=v[t],s.self.onExit&&E.invoke(s.self.onExit,s.self,s.locals.globals),s.locals=null;for(t=_;t<A.length;t++)r=A[t],r.locals=I[t],r.self.onEnter&&E.invoke(r.self.onEnter,r.self,r.locals.globals);return w.transition!==z?O:(w.$current=n,w.current=n.self,w.params=i,l(w.params,T),w.transition=null,u.location&&n.navigable&&C.push(n.navigable.url,n.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:u.location==="replace"}),u.notify&&e.$broadcast("$stateChangeSuccess",n.self,i,a.self,d),C.update(!0),w.current)},function(t){return w.transition!==z?O:(w.transition=null,m=e.$broadcast("$stateChangeError",n.self,i,a.self,d,t),m.defaultPrevented||C.update(),c.reject(t))});return z},w.is=function(t,i,s){s=f({relative:w.$current},s||{});var o=k(t,s.relative);return r(o)?w.$current!==o?!1:i?y(o.params.$$values(i),T):!0:n},w.includes=function(t,i,o){o=f({relative:w.$current},o||{});if(s(t)&&_(t)){if(!D(t))return!1;t=w.$current.name}var u=k(t,o.relative);return r(u)?r(w.$current.includes[u.name])?i?y(u.params.$$values(i),T,v(i)):!0:!1:n},w.href=function(t,i,s){s=f({lossy:!0,inherit:!0,absolute:!1,relative:w.$current},s||{});var o=k(t,s.relative);if(!r(o))return null;s.inherit&&(i=g(T,i||{},w.$current,o));var u=o&&s.lossy?o.navigable:o;return!u||u.url===n||u.url===null?null:C.href(u.url,b(o.params.$$keys().concat("#"),i||{}),{absolute:s.absolute})},w.get=function(e,t){if(arguments.length===0)return N(v(d),function(e){return d[e].self});var n=k(e,t||w.$current);return n&&n.self?n.self:null},w}function j(e,t,n,r,i,s){function o(e,t,n){function r(t){return e.params[t].location!="search"}var i=e.params.$$keys().filter(r),s=E.apply({},[e.params].concat(i)),o=new L.ParamSet(s);return o.$$equals(t,n)}if(!s.reload&&e===n&&(i===n.locals||e.self.reloadOnSearch===!1&&o(n,r,t)))return!0}var p,d={},w,S={},x="abstract",T={parent:function(e){if(r(e.parent)&&e.parent)return k(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?k(t[1]):p},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=h(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,n={params:e.params||{}};if(s(t))return t.charAt(0)=="^"?c.compile(t.substring(1),n):(e.parent.navigable||p).url.concat(t,n);if(!t||c.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new L.ParamSet;return a(e.params||{},function(e,n){t[n]||(t[n]=new L.Param(n,null,e,"config"))}),t},params:function(e){var t=E(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?f(e.parent.params.$$new(),t):new L.ParamSet},views:function(e){var t={};return a(r(e.views)?e.views:{"":e},function(n,r){r.indexOf("@")<0&&(r+="@"+e.parent.name),t[r]=n}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?f({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};p=M({name:"",url:"^",views:null,"abstract":!0}),p.navigable=null,this.decorator=P,this.state=H,this.$get=B,B.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function P(){function e(e,t){return{load:function(n,r){var i,s={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return r=f(s,r),r.view&&(i=t.fromConfig(r.view,r.params,r.locals)),i}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function H(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,n){return e?t:function(e){return n(function(){e[0].scrollIntoView()},0,!1)}}]}function F(e,n,r,i){function s(){return n.has?function(e){return n.has(e)?n.get(e):null}:function(e){try{return n.get(e)}catch(t){return null}}}function f(e,n){function i(e){return B===1&&j>=4?!!a.enabled(e):B===1&&j>=2?!!a.enabled():!!u}var r={enter:function(e,t,n){t.after(e),n()},leave:function(e,t){e.remove(),t()}};if(!e.noanimation){if(a)return{enter:function(e,n,s){i(e)?t.version.minor>2?a.enter(e,null,n).then(s):a.enter(e,null,n,s):r.enter(e,n,s)},leave:function(e,n){i(e)?t.version.minor>2?a.leave(e).then(n):a.leave(e,n):r.leave(e,n)}};if(u){var s=u&&u(n,e);return{enter:function(e,t,n){s.enter(e,null,t),n()},leave:function(e,t){s.leave(e),t()}}}return r}return r}var o=s(),u=o("$animator"),a=o("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(n,s,o){return function(n,s,u){function m(){function n(){e&&e.remove(),t&&t.$destroy()}var e=a,t=c;t&&(t._willBeDestroyed=!0),l?(v.leave(l,function(){n(),a=null}),a=l):(n(),a=null),l=null,c=null}function g(a){var f,g=q(n,u,s,i),y=g&&e.$current&&e.$current.locals[g];if(!a&&y===h||n._willBeDestroyed)return;f=n.$new(),h=e.$current.locals[g],f.$emit("$viewContentLoading",g);var b=o(f,function(e){v.enter(e,s,function(){c&&c.$emit("$viewContentAnimationEnded"),(t.isDefined(d)&&!d||n.$eval(d))&&r(e)}),m()});l=b,c=f,c.$emit("$viewContentLoaded",g),c.$eval(p)}var a,l,c,h,p=u.onload||"",d=u.autoscroll,v=f(u,n);n.$on("$stateChangeSuccess",function(){g(!1)}),g(!0)}}};return l}function I(e,t,n,r){return{restrict:"ECA",priority:-400,compile:function(i){var s=i.html();return function(i,o,u){var a=n.$current,f=q(i,u,o,r),l=a&&a.locals[f];if(!l)return;o.data("$uiView",{name:f,state:l.$$state}),o.html(l.$template?l.$template:s);var c=e(o.contents());if(l.$$controller){l.$scope=i,l.$element=o;var h=t(l.$$controller,l);l.$$controllerAs&&(i[l.$$controllerAs]=h),o.data("$ngControllerController",h),o.children().data("$ngControllerController",h)}c(i)}}}}function q(e,t,n,r){var i=r(t.uiView||t.name||"")(e),s=n.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(s?s.state.name:"")}function R(e,t){var n=e.match(/^\s*({[^}]*})\s*$/),r;n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!r||r.length!==4)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function U(e){var t=e.parent().inheritedData("$uiView");if(t&&t.state&&t.state.name)return t.state}function z(e){var t=Object.prototype.toString.call(e.prop("href"))==="[object SVGAnimatedString]",n=e[0].nodeName==="FORM";return{attr:n?"action":t?"xlink:href":"href",isAnchor:e.prop("tagName").toUpperCase()==="A",clickable:!n}}function W(e,t,n,r,i){return function(s){var o=s.which||s.button,u=i();if(!(o>1||s.ctrlKey||s.metaKey||s.shiftKey||e.attr("target"))){var a=n(function(){t.go(u.state,u.params,u.options)});s.preventDefault();var f=r.isAnchor&&!u.href?1:0;s.preventDefault=function(){f--<=0&&n.cancel(a)}}}}function X(e,t){return{relative:U(e)||t.$current,inherit:!0}}function V(e,n){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,i,s,o){var u=R(s.uiSref,e.current.name),a={state:u.state,href:null,params:null},l=z(i),c=o[1]||o[0];a.options=f(X(i,e),s.uiSrefOpts?r.$eval(s.uiSrefOpts):{});var h=function(n){n&&(a.params=t.copy(n)),a.href=e.href(u.state,a.params,a.options),c&&c.$$addStateInfo(u.state,a.params),a.href!==null&&s.$set(l.attr,a.href)};u.paramExpr&&(r.$watch(u.paramExpr,function(e){e!==a.params&&h(e)},!0),a.params=t.copy(r.$eval(u.paramExpr))),h();if(!l.clickable)return;i.bind("click",W(i,e,n,l,function(){return a}))}}}function $(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,r,i,s){function c(t){l.state=t[0],l.params=t[1],l.options=t[2],l.href=e.href(l.state,l.params,l.options),u&&u.$$addStateInfo(l.state,l.params),l.href&&i.$set(o.attr,l.href)}var o=z(r),u=s[1]||s[0],a=[i.uiState,i.uiStateParams||null,i.uiStateOpts||null],f="["+a.map(function(e){return e||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};n.$watch(f,c,!0),c(n.$eval(f));if(!o.clickable)return;r.bind("click",W(r,e,t,o,function(){return l}))}}}function J(e,t,n){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,r,i,u){function v(t,n,i){var s=e.get(t,U(r)),o=m(t,n);f.push({state:s||{name:t},params:n,hash:o}),l[o]=i}function m(e,n){if(!s(e))throw new Error("state should be a string");return o(n)?e+c(n):(n=t.$eval(n),o(n)?e+c(n):e)}function g(){for(var e=0;e<f.length;e++)w(f[e].state,f[e].params)?y(r,l[f[e].hash]):b(r,l[f[e].hash]),E(f[e].state,f[e].params)?y(r,h):b(r,h)}function y(e,t){u(function(){e.addClass(t)})}function b(e,t){e.removeClass(t)}function w(t,n){return e.includes(t.name,n)}function E(t,n){return e.is(t.name,n)}var f=[],l={},h,p;h=n(i.uiSrefActiveEq||"",!1)(t);try{p=t.$eval(i.uiSrefActive)}catch(d){}p=p||n(i.uiSrefActive||"",!1)(t),o(p)&&a(p,function(n,r){if(s(n)){var i=R(n,e.current.name);v(i.state,t.$eval(i.paramExpr),r)}}),this.$$addStateInfo=function(e,t){if(o(p)&&f.length>0)return;v(e,t,p),g()},t.$on("$stateChangeSuccess",g),g()}]}}function K(e){var t=function(t,n){return e.is(t,n)};return t.$stateful=!0,t}function Q(e){var t=function(t,n,r){return e.includes(t,n,r)};return t.$stateful=!0,t}var r=t.isDefined,i=t.isFunction,s=t.isString,o=t.isObject,u=t.isArray,a=t.forEach,f=t.extend,l=t.copy,c=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),C.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",C),k.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",k);var L;A.prototype.concat=function(e,t){var n={caseInsensitive:L.caseInsensitive(),strict:L.strictMode(),squash:L.defaultSquashPolicy()};return new A(this.sourcePath+e+this.sourceSearch,f(n,t),this)},A.prototype.toString=function(){return this.source},A.prototype.exec=function(e,t){function h(e){function t(e){return e.split("").reverse().join("")}function n(e){return e.replace(/\\-/g,"-")}var r=t(e).split(/-(?!\\)/),i=N(r,t);return N(i,n).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var i=this.parameters(),s=i.length,o=this.segments.length-1,u={},a,f,l,c;if(o!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var p,d;for(a=0;a<o;a++){c=i[a],p=this.params[c],d=n[a+1];for(f=0;f<p.replace.length;f++)p.replace[f].from===d&&(d=p.replace[f].to);d&&p.array===!0&&(d=h(d)),r(d)&&(d=p.type.decode(d)),u[c]=p.value(d)}for(;a<s;a++){c=i[a],u[c]=this.params[c].value(t[c]),p=this.params[c],d=t[c];for(f=0;f<p.replace.length;f++)p.replace[f].from===d&&(d=p.replace[f].to);r(d)&&(d=p.type.decode(d)),u[c]=p.value(d)}return u},A.prototype.parameters=function(e){return r(e)?this.params[e]||null:this.$$paramNames},A.prototype.validates=function(e){return this.params.$$validates(e)},A.prototype.format=function(e){function c(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var t=this.segments,n=this.parameters(),r=this.params;if(!this.validates(e))return null;var i,o=!1,a=t.length-1,f=n.length,l=t[0];for(i=0;i<f;i++){var h=i<a,p=n[i],d=r[p],v=d.value(e[p]),m=d.isOptional&&d.type.equals(d.value(),v),g=m?d.squash:!1,y=d.type.encode(v);if(h){var b=t[i+1],w=i+1===a;if(g===!1)y!=null&&(u(y)?l+=N(y,c).join("-"):l+=encodeURIComponent(y)),l+=b;else if(g===!0){var E=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=b.match(E)[1]}else s(g)&&(l+=g+b);w&&d.squash===!0&&l.slice(-1)==="/"&&(l=l.slice(0,-1))}else{if(y==null||m&&g!==!1)continue;u(y)||(y=[y]);if(y.length===0)continue;y=N(y,encodeURIComponent).join("&"+p+"="),l+=(o?"&":"?")+(p+"="+y),o=!0}}return l},O.prototype.is=function(e,t){return!0},O.prototype.encode=function(e,t){return e},O.prototype.decode=function(e,t){return e},O.prototype.equals=function(e,t){return e==t},O.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},O.prototype.pattern=/.*/,O.prototype.toString=function(){return"{Type:"+this.name+"}"},O.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},O.prototype.$asArray=function(e,t){function i(e,t){function i(e,t){return function(){return e[t].apply(e,arguments)}}function s(e){return u(e)?e:r(e)?[e]:[]}function o(e){switch(e.length){case 0:return n;case 1:return t==="auto"?e[0]:e;default:return e}}function a(e){return!e}function f(e,t){return function(r){if(u(r)&&r.length===0)return r;r=s(r);var i=N(r,e);return t===!0?T(i,a).length===0:o(i)}}function l(e){return function(n,r){var i=s(n),o=s(r);if(i.length!==o.length)return!1;for(var u=0;u<i.length;u++)if(!e(i[u],o[u]))return!1;return!0}}this.encode=f(i(e,"encode")),this.decode=f(i(e,"decode")),this.is=f(i(e,"is"),!0),this.equals=l(i(e,"equals")),this.pattern=e.pattern,this.$normalize=f(i(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if(e==="auto"&&!t)throw new Error("'auto' array mode is for query parameters only");return new i(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",M),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),_.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",_),D.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",D),P.$inject=[],t.module("ui.router.state").provider("$view",P),t.module("ui.router.state").provider("$uiViewScroll",H);var B=t.version.major,j=t.version.minor;F.$inject=["$state","$injector","$uiViewScroll","$interpolate"],I.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",F),t.module("ui.router.state").directive("uiView",I),V.$inject=["$state","$timeout"],$.$inject=["$state","$timeout"],J.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",V).directive("uiSrefActive",J).directive("uiSrefActiveEq",J).directive("uiState",$),K.$inject=["$state"],Q.$inject=["$state"],t.module("ui.router.state").filter("isState",K).filter("includedByState",Q)}(window,window.angular);