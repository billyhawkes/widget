(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var W,u,oe,w,j,F={},re=[],ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(_,e){for(var t in e)_[t]=e[t];return _}function ie(_){var e=_.parentNode;e&&e.removeChild(_)}function me(_,e,t){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?W.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)l[o]===void 0&&(l[o]=_.defaultProps[o]);return T(_,l,r,i,null)}function T(_,e,t,r,i){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++oe};return i==null&&u.vnode!=null&&u.vnode(o),o}function E(_){return _.children}function L(_,e){this.props=_,this.context=e}function x(_,e){if(e==null)return _.__?x(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?x(_):null}function le(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return le(_)}}function z(_){(!_.__d&&(_.__d=!0)&&w.push(_)&&!M.__r++||j!==u.debounceRendering)&&((j=u.debounceRendering)||setTimeout)(M)}function M(){for(var _;M.__r=w.length;)_=w.sort(function(e,t){return e.__v.__b-t.__v.__b}),w=[],_.some(function(e){var t,r,i,o,l,f;e.__d&&(l=(o=(t=e).__v).__e,(f=t.__P)&&(r=[],(i=b({},o)).__v=o.__v+1,B(f,o,i,t.__n,f.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??x(o),o.__h),se(r,o),o.__e!=l&&le(o)))})}function ce(_,e,t,r,i,o,l,f,d,p){var n,h,s,c,a,N,v,m=r&&r.__k||re,k=m.length;for(t.__k=[],n=0;n<e.length;n++)if((c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?T(null,c,null,null,c):Array.isArray(c)?T(E,{children:c},null,null,null):c.__b>0?T(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(s=m[n])===null||s&&c.key==s.key&&c.type===s.type)m[n]=void 0;else for(h=0;h<k;h++){if((s=m[h])&&c.key==s.key&&c.type===s.type){m[h]=void 0;break}s=null}B(_,c,s=s||F,i,o,l,f,d,p),a=c.__e,(h=c.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,c),v.push(h,c.__c||a,c)),a!=null?(N==null&&(N=a),typeof c.type=="function"&&c.__k===s.__k?c.__d=d=ue(c,d,_):d=fe(_,c,s,m,a,d),typeof t.type=="function"&&(t.__d=d)):d&&s.__e==d&&d.parentNode!=_&&(d=x(s))}for(t.__e=N,n=k;n--;)m[n]!=null&&de(m[n],m[n]);if(v)for(n=0;n<v.length;n++)ae(v[n],v[++n],v[++n])}function ue(_,e,t){for(var r,i=_.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=_,e=typeof r.type=="function"?ue(r,e,t):fe(t,r,r,i,r.__e,e));return e}function fe(_,e,t,r,i,o){var l,f,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==_)_.appendChild(i),l=null;else{for(f=o,d=0;(f=f.nextSibling)&&d<r.length;d+=1)if(f==i)break e;_.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function ge(_,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||O(_,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||O(_,o,e[o],t[o],r)}function G(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||ye.test(e)?t:t+"px"}function O(_,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||G(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||G(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?J:K,o):_.removeEventListener(e,o?J:K,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?_.removeAttribute(e):_.setAttribute(e,t))}}function K(_){this.l[_.type+!1](u.event?u.event(_):_)}function J(_){this.l[_.type+!0](u.event?u.event(_):_)}function B(_,e,t,r,i,o,l,f,d){var p,n,h,s,c,a,N,v,m,k,C,$,R,S,A,g=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(d=t.__h,f=e.__e=t.__e,e.__h=null,o=[f]),(p=u.__b)&&p(e);try{e:if(typeof g=="function"){if(v=e.props,m=(p=g.contextType)&&r[p.__c],k=p?m?m.props.value:p.__:r,t.__c?N=(n=e.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?e.__c=n=new g(v,k):(e.__c=n=new L(v,k),n.constructor=g,n.render=be),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=b({},n.__s)),b(n.__s,g.getDerivedStateFromProps(v,n.__s))),s=n.props,c=n.state,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,k),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,k)===!1||e.__v===t.__v){for(n.props=v,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(P){P&&(P.__=e)}),C=0;C<n._sb.length;C++)n.__h.push(n._sb[C]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,c,a)})}if(n.context=k,n.props=v,n.__v=e,n.__P=_,$=u.__r,R=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,$&&$(e),p=n.render(n.props,n.state,n.context),S=0;S<n._sb.length;S++)n.__h.push(n._sb[S]);n._sb=[]}else do n.__d=!1,$&&$(e),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++R<25);n.state=n.__s,n.getChildContext!=null&&(r=b(b({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(s,c)),A=p!=null&&p.type===E&&p.key==null?p.props.children:p,ce(_,Array.isArray(A)?A:[A],e,t,r,i,o,l,f,d),n.base=e.__e,e.__h=null,n.__h.length&&l.push(n),N&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ke(t.__e,e,t,r,i,o,l,d);(p=u.diffed)&&p(e)}catch(P){e.__v=null,(d||o!=null)&&(e.__e=f,e.__h=!!d,o[o.indexOf(f)]=null),u.__e(P,e,t)}}function se(_,e){u.__c&&u.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function ke(_,e,t,r,i,o,l,f){var d,p,n,h=t.props,s=e.props,c=e.type,a=0;if(c==="svg"&&(i=!0),o!=null){for(;a<o.length;a++)if((d=o[a])&&"setAttribute"in d==!!c&&(c?d.localName===c:d.nodeType===3)){_=d,o[a]=null;break}}if(_==null){if(c===null)return document.createTextNode(s);_=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,s.is&&s),o=null,f=!1}if(c===null)h===s||f&&_.data===s||(_.data=s);else{if(o=o&&W.call(_.childNodes),p=(h=t.props||F).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},a=0;a<_.attributes.length;a++)h[_.attributes[a].name]=_.attributes[a].value;(n||p)&&(n&&(p&&n.__html==p.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(ge(_,s,h,i,f),n)e.__k=[];else if(a=e.props.children,ce(_,Array.isArray(a)?a:[a],e,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&x(t,0),f),o!=null)for(a=o.length;a--;)o[a]!=null&&ie(o[a]);f||("value"in s&&(a=s.value)!==void 0&&(a!==_.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&O(_,"value",a,h.value,!1),"checked"in s&&(a=s.checked)!==void 0&&a!==_.checked&&O(_,"checked",a,h.checked,!1))}return _}function ae(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){u.__e(r,t)}}function de(_,e,t){var r,i;if(u.unmount&&u.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||ae(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&de(r[i],e,t||typeof _.type!="function");t||_.__e==null||ie(_.__e),_.__=_.__e=_.__d=void 0}function be(_,e,t){return this.constructor(_,t)}function He(_,e,t){var r,i,o;u.__&&u.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],B(e,_=(!r&&t||e).__k=me(E,null,[_]),i||F,F,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?W.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r),se(o,_)}W=re.slice,u={__e:function(_,e,t,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(f){_=f}throw _}},oe=0,L.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof _=="function"&&(_=_(b({},t),this.props)),_&&b(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},L.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},L.prototype.render=E,w=[],M.__r=0;var pe,y,I,Q,V=0,he=[],U=[],X=u.__b,Y=u.__r,Z=u.diffed,ee=u.__c,_e=u.unmount;function Ne(_,e){u.__h&&u.__h(y,_,V||e),V=0;var t=y.__H||(y.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:U}),t.__[_]}function $e(_){return V=1,we(ve,_)}function we(_,e,t){var r=Ne(pe++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):ve(void 0,e),function(o){var l=r.__N?r.__N[0]:r.__[0],f=r.t(l,o);l!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,l,f){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(n){return n.__c});if(d.every(function(n){return!n.__N}))return!i||i.call(this,o,l,f);var p=!1;return d.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(p=!0)}}),!(!p&&r.__c.props===o)&&(!i||i.call(this,o,l,f))}}return r.__N||r.__}function xe(){for(var _;_=he.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(D),_.__H.__h.forEach(q),_.__H.__h=[]}catch(e){_.__H.__h=[],u.__e(e,_.__v)}}u.__b=function(_){y=null,X&&X(_)},u.__r=function(_){Y&&Y(_),pe=0;var e=(y=_.__c).__H;e&&(I===y?(e.__h=[],y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=U,t.__N=t.i=void 0})):(e.__h.forEach(D),e.__h.forEach(q),e.__h=[])),I=y},u.diffed=function(_){Z&&Z(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(he.push(e)!==1&&Q===u.requestAnimationFrame||((Q=u.requestAnimationFrame)||Ee)(xe)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==U&&(t.__=t.__V),t.i=void 0,t.__V=U})),I=y=null},u.__c=function(_,e){e.some(function(t){try{t.__h.forEach(D),t.__h=t.__h.filter(function(r){return!r.__||q(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(r,t.__v)}}),ee&&ee(_,e)},u.unmount=function(_){_e&&_e(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{D(r)}catch(i){e=i}}),t.__H=void 0,e&&u.__e(e,t.__v))};var te=typeof requestAnimationFrame=="function";function Ee(_){var e,t=function(){clearTimeout(r),te&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);te&&(e=requestAnimationFrame(t))}function D(_){var e=y,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),y=e}function q(_){var e=y;_.__c=_.__(),y=e}function ve(_,e){return typeof e=="function"?e(_):e}var Ce=0;function H(_,e,t,r,i){var o,l,f={};for(l in e)l=="ref"?o=e[l]:f[l]=e[l];var d={type:_,props:f,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ce,__source:i,__self:r};if(typeof _=="function"&&(o=_.defaultProps))for(l in o)f[l]===void 0&&(f[l]=o[l]);return u.vnode&&u.vnode(d),d}function Se({Container:_}){const[e,t]=$e(0),r=_.getAttribute("data-keywords"),i=_.getAttribute("data-name");return H(E,{children:[H("h1",{children:"Widget Test"}),H("h2",{children:["Site name: ",i]}),H("h2",{children:["Site keywords: ",r]}),H("div",{class:"card",children:H("button",{onClick:()=>t(o=>o+1),children:["count is ",e]})})]})}const ne=document.getElementById("widget");He(H(Se,{Container:ne}),ne);
