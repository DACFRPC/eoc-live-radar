import{r as e}from"./tslib.es6-qUHyP9zl.js";import{x as t}from"./string-BMjYH0yQ.js";import{g as n}from"./arrayUtils-B0XE_S9U.js";import{i as r,r as i,u as a}from"./typedArrayUtil-CCxBF8Zf.js";import{A as o,c as s,n as c,t as l}from"./decorators-aNXrAvhl.js";import{t as u}from"./PooledArray-CTqJLNLZ.js";import{g as d,v as f}from"./mathUtils-DR0Fu_aL.js";import{b as p}from"./vec2-BA-LEgcg.js";import{h as m}from"./mat3-AUeZxTOE.js";import{t as h}from"./mat3f64-0nIg8LsN.js";import{c as g,d as _,f as v,r as y,t as b}from"./vec3f64-CbPwldcz.js";import{h as x}from"./screenUtils-B20Pilik.js";import{D as ee,T as te,_ as ne,b as re,g as ie,h as ae,m as oe,p as S,x as se}from"./mat4-CmtBNVDy.js";import{n as C,r as ce}from"./guards-1OFa44Mn.js";import{A as le,C as w,D as ue,E as de,M as fe,N as pe,_ as T,a as E,f as me,i as he,j as D,l as O,v as k}from"./vec3-mgEpaRyZ.js";import{i as ge,r as _e,t as A}from"./mat4f64-E_FXCKxO.js";import{I as ve,M as ye,R as be,a as xe,i as Se,m as Ce,r as we}from"./aaBoundingBox-wc1Kx3Vn.js";import{t as Te}from"./lengthUtils-BedIwHcm.js";import{f as Ee,l as De}from"./vec4-Xgyc9IxX.js";import{l as Oe,n as ke,o as Ae}from"./vec4f64-BVLRhYcJ.js";import{d as je}from"./Texture-BeNV715A.js";import{n as Me}from"./vec2f64-C5Ma3aci.js";import{a as Ne,t as Pe}from"./Indices-CLqnxyCN.js";import"./vectorStacks-BrpRk3Kn.js";import{s as Fe}from"./ray-BoVkESg_.js";import{a as Ie}from"./lineSegment-BKC_hj3F.js";import{E as Le,a as j,d as M,m as Re,n as ze,o as N,t as Be,u as Ve,w as He}from"./getEmissions.glsl-CF69lU70.js";import{t as Ue}from"./NoParameters-ZDc3QXO4.js";import{a as P,i as F,r as I}from"./Texture2DPassUniform-DmlRZeJi.js";import{n as We}from"./sphere-B-vaG3P2.js";import{i as Ge}from"./InterleavedLayout-DCoaJu4J.js";import{n as Ke,t as qe}from"./AlphaCutoff-Bj-LJnL8.js";import{c as Je,i as Ye,l as Xe,s as Ze,u as Qe}from"./RenderingContext-1h9O3_ik.js";function $e(e){return e?{p0:_(e.p0),p1:_(e.p1),p2:_(e.p2)}:{p0:y(),p1:y(),p2:y()}}function et(e,t,n){let{direction:r,origin:i}=t,{p0:a,p1:o,p2:s}=e,c=o[0]-a[0],l=o[1]-a[1],u=o[2]-a[2],d=s[0]-a[0],f=s[1]-a[1],p=s[2]-a[2],m=r[1]*p-f*r[2],h=r[2]*d-p*r[0],g=r[0]*f-d*r[1],_=c*m+l*h+u*g;if(_>-1e-5&&_<1e-5)return!1;let v=1/_,y=i[0]-a[0],b=i[1]-a[1],x=i[2]-a[2],ee=v*(y*m+b*h+x*g);if(ee<0||ee>1)return!1;let te=b*u-l*x,ne=x*c-u*y,re=y*l-c*b,ie=v*(r[0]*te+r[1]*ne+r[2]*re);if(ie<0||ee+ie>1)return!1;if(n){let e=v*(d*te+f*ne+p*re);pe(n,r,e),ue(n,i,n)}return!0}function tt(e,t,n){let[r,i]=e,[a,o]=t,[s,c]=n,l=a-r,u=o-i,d=s-r;return .5*(l*(c-i)-u*d)}function nt(e,t,n,r,i=0){let a=tt(r,e,t),o=tt(r,t,n),s=tt(r,n,e);return!((a<-i||o<-i||s<-i)&&(a>i||o>i||s>i))}function rt(e,t,n){return D(L,t,e),D(R,n,e),.5*le(he(L,L,R))}function it(e,t,n,r,i){O(L,r,n),O(z,i,n),O(R,t,n);let a=E(L,R),o=E(z,R);if(a<=0&&o<=0){w(e,n);return}O(R,t,r);let s=E(L,R),c=E(z,R);if(s>=0&&c<=s){w(e,r);return}let l=a*c-s*o;if(l<=0&&a>=0&&s<=0){k(e,n,L,a/(a-s));return}O(R,t,i);let u=E(L,R),d=E(z,R);if(d>=0&&u<=d){w(e,i);return}let f=u*o-a*d;if(f<=0&&o>=0&&d<=0){k(e,n,z,o/(o-d));return}let p=s*d-u*c;if(p<=0&&c-s>=0&&u-d>=0){O(R,i,r),k(e,r,R,(c-s)/(c-s+(u-d)));return}let m=1/(p+f+l);w(e,n),k(e,e,L,f*m),k(e,e,z,l*m)}function at(e,t,n,r){O(L,n,t),O(R,r,t),he(e,L,R);let i=le(e);return i!==0&&(pe(e,e,1/i),!0)}new Fe(Ie),new Fe(()=>$e());var L=y(),R=y(),z=y(),ot=class{constructor(){this.uid=o()}},st=class extends ot{constructor(e){super(),this.highlightName=e,this.channel=0}},ct=class extends ot{constructor(){super(...arguments),this.channel=1}},lt=class extends I{constructor(e,t,n){super(e,`vec2`,0,(r,i)=>r.setUniform2fv(e,t(i),n))}};function ut(e){e.uniforms.add(new lt(`zProjectionMap`,e=>dt(e.camera))),e.code.add(F`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(F`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`)}function dt(e){let t=e.projectionMatrix;return p(ft,t[14],t[10])}var ft=Me();function pt(e){e.include(ut),e.code.add(F`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(F`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}var mt=class extends I{constructor(e,t,n){super(e,`vec4`,0,(r,i)=>r.setUniform4fv(e,t(i),n))}},ht=class extends I{constructor(e,t){super(e,`sampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}};function gt(e,t=!0){e.attributes.add(`position`,`vec2`),t&&e.varyings.add(`uv`,`vec2`),e.vertex.main.add(F`
    gl_Position = vec4(position, 0.0, 1.0);
    ${t?F`uv = position * 0.5 + vec2(0.5);`:``}
  `)}var B=class extends I{constructor(e,t,n){super(e,`float`,0,(r,i)=>r.setUniform1f(e,t(i),n))}},V=class extends I{constructor(e,t,n){super(e,`mat4`,0,(r,i)=>r.setUniformMatrix4fv(e,t(i),n))}},_t=new V(`view`,({camera:e})=>e.viewMatrix);new V(`inverseViewMatrix`,({camera:e})=>e.inverseViewMatrix);var vt=new V(`proj`,({camera:e})=>e.projectionMatrix),yt=new V(`inverseProjectionMatrix`,({camera:e})=>e.inverseProjectionMatrix),bt=new V(`viewNormal`,({camera:e})=>e.viewInverseTransposeMatrix),xt=new lt(`nearFar`,({camera:e})=>e.nearFar),St=new mt(`viewport`,({camera:e})=>e.fullViewport);new B(`pixelRatio`,({camera:e})=>e.pixelRatio);var Ct=new B(`screenPixelSizePerDistance`,({camera:e})=>e.screenPixelSizePerDistance),wt=new B(`renderPixelSizePerDistance`,({camera:e})=>e.renderPixelSizePerDistance),Tt=new B(`metersPerRenderUnit`,e=>e.metersPerRenderUnit);new lt(`inverseScreenSize`,({camera:e})=>p(Et,1/e.fullWidth,1/e.fullHeight));var Et=Me(),Dt=class extends I{constructor(e,t,n){super(e,`vec2`,1,(r,i,a)=>r.setUniform2fv(e,t(i,a),n))}},Ot=class extends I{constructor(e,t,n){super(e,`vec3`,0,(r,i)=>r.setUniform3fv(e,t(i),n))}},kt=class extends I{constructor(e,t,n){super(e,`vec4`,1,(r,i,a)=>r.setUniform4fv(e,t(i,a),n))}},H=class extends s{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.OCCLUSION_QUERY_DEBUG_PIXEL=!1,this.ENABLE_OPTIMIZATIONS=!0,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.UPDATING=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1,this.FLOW_GLOBAL_SCALE_THRESHOLD=null}};e([l()],H.prototype,`SCENEVIEW_HITTEST_RETURN_INTERSECTOR`,void 0),e([l()],H.prototype,`DECONFLICTOR_SHOW_VISIBLE`,void 0),e([l()],H.prototype,`DECONFLICTOR_SHOW_INVISIBLE`,void 0),e([l()],H.prototype,`DECONFLICTOR_SHOW_GRID`,void 0),e([l()],H.prototype,`LABELS_SHOW_BORDER`,void 0),e([l()],H.prototype,`TEXT_SHOW_BASELINE`,void 0),e([l()],H.prototype,`TEXT_SHOW_BORDER`,void 0),e([l()],H.prototype,`OVERLAY_DRAW_DEBUG_TEXTURE`,void 0),e([l()],H.prototype,`OVERLAY_SHOW_CENTER`,void 0),e([l()],H.prototype,`SHOW_POI`,void 0),e([l()],H.prototype,`OCCLUSION_QUERY_DEBUG_PIXEL`,void 0),e([l()],H.prototype,`ENABLE_OPTIMIZATIONS`,void 0),e([l()],H.prototype,`TESTS_DISABLE_FAST_UPDATES`,void 0),e([l()],H.prototype,`DRAW_MESH_GEOMETRY_NORMALS`,void 0),e([l()],H.prototype,`FEATURE_TILE_FETCH_SHOW_TILES`,void 0),e([l()],H.prototype,`FEATURE_TILE_TREE_SHOW_TILES`,void 0),e([l()],H.prototype,`TERRAIN_TILE_TREE_SHOW_TILES`,void 0),e([l()],H.prototype,`I3S_TREE_SHOW_TILES`,void 0),e([l()],H.prototype,`I3S_SHOW_MODIFICATIONS`,void 0),e([l()],H.prototype,`UPDATING`,void 0),e([l()],H.prototype,`LOD_INSTANCE_RENDERER_DISABLE_UPDATES`,void 0),e([l()],H.prototype,`LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL`,void 0),e([l()],H.prototype,`EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES`,void 0),e([l()],H.prototype,`LINE_WIREFRAMES`,void 0),e([l()],H.prototype,`FLOW_GLOBAL_SCALE_THRESHOLD`,void 0),H=e([c(`esri.views.3d.support.debugFlags`)],H);var At=new H;function jt(e){e.code.add(F`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(F`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}var Mt=class{constructor(){this._scale=0,this._angleFactor=0,this._minScale=0}update(e,t,n,r){n?(this._scale=Math.min(n.divisor/(t-n.offset),1),this._angleFactor=Pt(e),this._minScale=r==null?0:Math.min(n.minPixelSize/r,1)):(this._scale=1,this._minScale=1,this._angleFactor=1)}apply(e){let{_scale:t,_angleFactor:n,_minScale:r}=this;return e*f(d(t,1,n),r,1)}applyVec2(e,t){e[0]=this.apply(t[0]),e[1]=this.apply(t[1])}},Nt=class{constructor(){this.evaluator=new Mt,this.alignmentEvaluator=new Mt}update(e,t,n,r,i,a){this.evaluator.update(e,t,n,r),this.alignmentEvaluator.update(e,t,i??n,(i?a:null)??r)}};function Pt(e){return Math.abs(e)**3}function Ft(e){return!!e&&!0}function It(e,t,n,r,i,a){let o=n.screenLength*e.pixelRatio;i!=null&&(Bt.update(r,t,i,a),o=Bt.apply(o));let s=o*Math.tan(.5*e.fovY)/(e.fullHeight*.5);return f(s*t,n.minWorldLength,n.maxWorldLength)}var Lt=n();function Rt(e,t){let n=!1;for(let r in t){let i=t[r];i!==void 0&&(Array.isArray(i)?Array.isArray(e[r])&&Lt(i,e[r])||(e[r]=i.slice(),n=!0):e[r]!==i&&(n=!0,e[r]=i))}return n}var zt={multiply:1,ignore:2,replace:3,tint:4},Bt=new Mt;function Vt(e,t=!1){return e<=1024?t?Array(e).fill(0):Array(e):new Float32Array(e)}function Ht(e){return(Array.isArray(e)?e.length:e.byteLength/8)<=1024?Array.from(e):new Float32Array(e)}function Ut(e,t,n){return Array.isArray(e)?e.slice(t,t+n):e.subarray(t,t+n)}function Wt(e){if(e.length<1024)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);if(!(`BYTES_PER_ELEMENT`in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return r(e)?Float16Array.from(e):i(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return a(e)?Float32Array.from(e):Uint32Array.from(e);default:case 8:return Float64Array.from(e)}}var Gt=class e{constructor(e,t,n){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this._readPosition=n,this._children=void 0,Ge(e.length>=1);let r=e.length;U.clear();let i=ye();for(let a=0;a<r;++a){let r=t*e[a];for(let e=0;e<t;++e){let t=r+e;U.push(t),ve(i,n(Kt,t))}}this.box=i;let a=new We,o=Se(i,a.center),s=.5*Math.max(we(i),be(i),Ce(i)),c=s*s;for(let e=0;e<U.length;++e){let t=n(Kt,U.at(e)),r=D(t,t,o),i=fe(r);if(i<=c)continue;let a=Math.sqrt(i),l=(a-s)*.5;s+=l,c=s*s;let u=l/a;k(o,o,r,u)}a.radius=s,this.sphere=a,U.clear()}get children(){if(this._children)return this._children;let t=this.box;if(xe(t)<=1)return;let{_readPosition:n,_numIndexPerPrimitive:r,primitiveIndices:i}=this,a=Se(t,Kt),o=i.length,s=new Uint8Array(o),c=[0,0,0,0,0,0,0,0];for(let e=0;e<o;++e){let t=r*i[e],o=n(qt,t);for(let e=1;e<r;++e)de(o,o,n(Jt,t+e));let l=+(o[0]<a[0])|(o[1]<a[1]?2:0)|(o[2]<a[2]?4:0);s[e]=l,++c[l]}let l=0;for(let e=0;e<8;++e)c[e]>0&&++l;if(l<2)return;let u=[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0];for(let e=0;e<8;++e)c[e]>0&&(u[e]=new Uint32Array(c[e]));c.fill(0);for(let e=0;e<o;++e){let t=s[e];u[t][c[t]++]=i[e]}let d=[];for(let t=0;t<8;++t){let i=u[t];i!==void 0&&d.push(new e(i,r,n))}return this._children=d,this._children}static prune(){U.prune()}},Kt=y(),qt=y(),Jt=y(),U=new u({deallocator:null}),Yt=class{constructor(e){this.id=o(),this.type=0,this._attributes=new Map;for(let[t,n]of e)this._attributes.set(t,{...n,indices:Ne(n.indices)})}get attributes(){return this._attributes}};function Xt(e,t){let{data:n,indices:r,size:i,stride:a}=e;return Ge(i===2||i===3||i===4,`Position attribute must have 2, 3 or 4 components`),i===2?t==null?(e,t)=>{let i=r[t]*a;return e[0]=n[i],e[1]=n[i+1],e[2]=-2,e}:(e,i)=>{let o=r[t[i]]*a;return e[0]=n[o],e[1]=n[o+1],e[2]=-2,e}:t==null?Zt(n,r,a):(e,i)=>{let o=r[t[i]]*a;return e[0]=n[o],e[1]=n[o+1],e[2]=n[o+2],e}}function Zt(e,t,n){return(r,i)=>{let a=t[i]*n;return r[0]=e[a],r[1]=e[a+1],r[2]=e[a+2],r}}var Qt=class e extends Yt{constructor(e,t,n=null,r=-1,i,a){super(t),this.material=e,this.mapPositions=n,this.edgeIndicesLength=r,this.baseGeometry=i,this.drawIndices=a,this._readPrimitivePosition=null,this._vertexPositionIndicesCache=void 0,this._transformation=void 0,this.localOrigin=void 0,this._highlights=null,this._highlightOptionsCounts=null,this.occludees=void 0,this.visible=!0,this._boundingInfo=null,Ge((e?.useIndexing??!1)===(a!=null),`Material index requirement and Geometry must match`),this.edgeIndicesLength<0&&(this.edgeIndicesLength=this.indexCount)}get readPrimitivePosition(){return this._readPrimitivePosition??=Xt(this.positionAttribute,this.drawIndices),this._readPrimitivePosition}_invalidateReadPrimitivePosition(){this._readPrimitivePosition=null}instantiate(t={}){let n=new e(t.material||this.material,[],this.mapPositions,this.edgeIndicesLength,this.baseGeometry,this.drawIndices);return this._attributes.forEach((e,t)=>{e.exclusive=!1,n._attributes.set(t,e)}),n._boundingInfo=this._boundingInfo,n.transformation=t.transformation||this.transformation,n}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Wt(t.data)},this._attributes.set(e,t),e===`position`&&this._invalidateReadPrimitivePosition()),t}setAttributeData(e,t){let n=this._attributes.get(e);n?(this._attributes.set(e,{...n,exclusive:!0,data:t}),e===`position`&&this._invalidateReadPrimitivePosition()):je()&&console.warn(`Setting undefined attribute ${e} data`)}get primitivePositionIndices(){return this._vertexPositionIndicesCache===void 0&&(this._vertexPositionIndicesCache=this._computePrimitivePositionIndices()),this._vertexPositionIndicesCache}_computePrimitivePositionIndices(){let{drawIndices:e}=this,t=this.positionAttribute;if(e!=null&&t!=null){let n=[];for(let r of e)n.push(t.indices[r]);return n}return t?.indices??null}get positionAttribute(){return this.attributes.get(`position`)??this.baseGeometry?.attributes.get(`position`)}get indexCount(){return(this.drawIndices??this.positionAttribute?.indices)?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo??=this._calculateBoundingInfo(),this._boundingInfo}computeAttachmentOrigin(e){return this.material.computeAttachmentOrigin(e,this.readPrimitivePosition,this.indexCount)?(this._transformation!=null&&me(e,e,this._transformation),!0):!1}invalidateBoundingInfo(){this._boundingInfo=null,this._vertexPositionIndicesCache=void 0}_calculateBoundingInfo(){let e=this.positionAttribute,t=this.indexCount;if(!e||t===0)return null;let n=this.material.primitiveVertexCount;return Ge(t%n===0,`Indexing error: `+t+` not divisible by `+n),new Gt(Pe(t/n),n,this.readPrimitivePosition)}get transformation(){return this._transformation??_e}set transformation(e){this._transformation=e&&e!==_e?ge(e):null}get highlights(){return this._highlights||$t}get hasHighlights(){return(this._highlightOptionsCounts?.size??0)>0}forEachHighlightOption(e){this._highlightOptionsCounts?.forEach((t,n)=>e(n))}allocateIdAndHighlight(e){let t=new st(e);return this.addHighlight(t)}addHighlight(e){this._ensureHighlights().add(e);let{highlightName:t}=e,n=(this._highlightOptionsCounts?.get(t)??0)+1;return this._ensureHighlightOptionsCounts().set(t,n),e}_ensureHighlights(){let e=this._highlights;return e||(e=new Set,this._highlights=e),e}_ensureHighlightOptionsCounts(){let e=this._highlightOptionsCounts;return e||(e=new Map,this._highlightOptionsCounts=e),e}removeHighlight(e){if(this._highlights?.delete(e)){let{highlightName:t}=e,n=this._highlightOptionsCounts?.get(t)??0;n<=1?this._highlightOptionsCounts?.delete(t):this._ensureHighlightOptionsCounts().set(t,n-1)}}},$t=new Set;function en(){return!!t(`enable-feature:objectAndLayerId-rendering`)}var tn=Xe(1,0,1,771);Oe();function nn(e,t=!1,n=!1){if(n)return Je;switch(e){case 0:return t?Qe:Ye;case 1:return tn;default:return null}}function rn(e){if(e.draped)return null;switch(e.output){case 0:case 2:default:return e.writeDepth?Ze:null;case 1:return null}}function an(e,t=513){return{func:He(e)?515:t}}var on=pn(-1),sn=pn(1),cn={factor:0,units:-10},ln=on,W=[];W[0]=null,W[1]=sn,W[2]=on,W[3]=pn(-2),W[4]=pn(-3);var un=W.map(e=>fn(ln,e));W[1]=sn;function dn({output:e,enableOITOffset:t,polygonOffset:n}){return He(e)&&t?un[n]:W[n]}function fn(e,t){return t?{factor:e.factor+t.factor,units:e.units+t.units}:e}function pn(e){return{factor:1*e,units:2*e}}function mn(e){let t=dn(e)??{factor:0,units:0};return{factor:t.factor+on.factor*e.polygonOffsetIndex,units:t.units+on.units*e.polygonOffsetIndex}}var hn=class extends Ve{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}},gn=class extends hn{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}};e([M()],gn.prototype,`hasSlicePlane`,void 0);function _n(e,t){bn(e,t,...xn(t))}function vn(e,t){yn(e,t,...xn(t))}function yn(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(F`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function bn(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),yn(e,t,...n),t.hasSlicePlane?e.code.add(`
    void discardBySlice(vec3 pos) {
      if (rejectBySlice(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):e.code.add(F`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function xn(e){return[new N(`slicePlaneOrigin`,(t,n)=>Tn(e,t,n)),new N(`slicePlaneBasis1`,(t,n)=>En(e,t,n,n.slicePlane?.basis1)),new N(`slicePlaneBasis2`,(t,n)=>En(e,t,n,n.slicePlane?.basis2))]}function Sn(e,t,n){return e.instancedDoublePrecision?T(Dn,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Cn(e,t){return e==null?t.origin:D(On,t.origin,e)}function wn(e,t,n){return e.hasSliceTranslatedView?t==null?n.camera.viewMatrix:S(kn,n.camera.viewMatrix,t):null}function Tn(e,t,n){if(n.slicePlane==null)return v;let r=Sn(e,t,n),i=Cn(r,n.slicePlane),a=wn(e,r,n);return a==null?i:me(On,i,a)}function En(e,t,n,r){if(r==null||n.slicePlane==null)return v;let i=Sn(e,t,n),a=Cn(i,n.slicePlane),o=wn(e,i,n);return o==null?r:(ue(G,r,a),me(On,a,o),me(G,G,o),D(G,G,On))}var Dn=y(),On=y(),G=y(),kn=A();function An(e,t){if(t.output!==11){e.vertex.code.add(F`void forwardObjectAndLayerIdColor() {}`),e.fragment.code.add(F`void outputObjectAndLayerIdColor() {}`);return}let n=t.instanced;e.varyings.add(`objectAndLayerIdColorVarying`,`vec4`);let r=n?`instanceOlidColor`:`olidColor`;e.attributes.add(r,`vec4`),e.vertex.code.add(F`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r} * 0.003921568627451;
    }`),e.fragment.code.add(F`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}var jn=class extends I{constructor(e,t){super(e,`bool`,0,(n,r)=>n.setUniform1b(e,t(r)))}};function Mn(e){e.vertex.code.add(F`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(F`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(F`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),e.vertex.code.add(F`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(F`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return size * clamp(mix(factor.x, 1.0, factor.y), factor.z, 1.0);
}`),e.vertex.code.add(F`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Nn(e){e.uniforms.add(new j(`screenSizePerspective`,e=>Fn(e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize)))}function Pn(e){e.uniforms.add(new j(`screenSizePerspectiveAlignment`,e=>Fn(e.screenSizePerspectiveAlignment||e.screenSizePerspective,e.screenSizePerspectiveAlignment?null:e.screenSizePerspectiveMinPixelReferenceSize)))}function Fn(e,t){let n=t!=null&&e!=null?Math.min(e.minPixelSize/t,1):0;return e?T(In,e.divisor,e.offset,n):T(In,0,0,0)}var In=y(),Ln=class extends I{constructor(e,t,n){super(e,`mat4`,2,(r,i,a)=>r.setUniformMatrix4fv(e,t(i,a),n))}};function Rn(e,t){t.instancedDoublePrecision?e.constants.add(`cameraPosition`,`vec3`,v):e.uniforms.add(new N(`cameraPosition`,({origin:e},{camera:t})=>T(Vn,t.viewInverseTransposeMatrix[3]-e[0],t.viewInverseTransposeMatrix[7]-e[1],t.viewInverseTransposeMatrix[11]-e[2])))}function zn(e,t){if(!t.instancedDoublePrecision){e.uniforms.add(vt,new Ln(`view`,(e,t)=>S(Bn,t.camera.viewMatrix,e.origin)),new N(`localOrigin`,e=>e.origin));return}let n=({camera:e})=>T(Vn,e.viewInverseTransposeMatrix[3],e.viewInverseTransposeMatrix[7],e.viewInverseTransposeMatrix[11]);e.uniforms.add(vt,new V(`view`,e=>S(Bn,e.camera.viewMatrix,n(e))),new Ot(`localOrigin`,e=>n(e)))}var Bn=A(),Vn=y();function Hn(e){e.uniforms.add(new B(`pixelRatio`,e=>e.camera.pixelRatio/e.overlayStretch))}var Un=class{constructor(e){this.screenLength=x(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}};function Wn(e,t){let n=e.vertex;t.hasVerticalOffset?(Kn(n),t.hasScreenSizePerspective&&(e.include(Mn),Pn(n),Rn(e.vertex,t)),n.code.add(F`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?F`vec3 worldNormal = normalize(worldPos + localOrigin);`:F`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?F`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:F`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):n.code.add(F`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var Gn=ke();function Kn(e){e.uniforms.add(new kt(`verticalOffset`,(e,t)=>{let{minWorldLength:n,maxWorldLength:r,screenLength:i}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(t.camera.fullViewport[3]*.5),o=t.camera.pixelRatio||1;return De(Gn,i*o,a,n,r)}))}function qn(e){let{fragment:t}=e;t.code.add(F`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(uvec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return texel[lic];
}
uint readLevelBits(uvec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}var Jn=class extends I{constructor(e,t){super(e,`ivec2`,0,(n,r)=>n.setUniform2iv(e,t(r)))}},Yn=class extends I{constructor(e,t){super(e,`int`,0,(n,r)=>n.setUniform1i(e,t(r)))}},Xn=class extends I{constructor(e,t){super(e,`usampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}};function Zn(e,t){let{fragment:n}=e,{output:r,draped:i,hasHighlightMixTexture:a}=t;r===10?(n.uniforms.add(new Yn(`highlightLevel`,e=>e.highlightLevel??0),new Jn(`highlightMixOrigin`,e=>e.highlightMixOrigin)),e.outputs.add(`fragHighlight`,`uvec2`,0),e.include(qn),a?n.uniforms.add(new Xn(`highlightMixTexture`,e=>e.highlightMixTexture)).code.add(F`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):n.code.add(F`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),i?n.code.add(F`bool isHighlightOccluded() {
return false;
}`):n.uniforms.add(new ht(`depthTexture`,e=>e.mainDepth)).code.add(F`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),n.code.add(F`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):n.code.add(F`void calculateOcclusionAndOutputHighlight() {}`)}function K(e){e.code.add(F`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function Qn(e){e.include(K),e.code.add(F`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${F.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function $n(e){e.include(K),e.code.add(F`vec4 maskedColorSelectOrOne(MaskedColor color) {
return vec4(
color.mask.r ? 1.0 : color.color.r,
color.mask.g ? 1.0 : color.color.g,
color.mask.b ? 1.0 : color.color.b,
color.mask.a ? 1.0 : color.color.a
);
}
MaskedColor multiplyMaskedColors(MaskedColor color1, MaskedColor color2) {
vec4 masked1 = maskedColorSelectOrOne(color1);
vec4 masked2 = maskedColorSelectOrOne(color2);
return MaskedColor(masked1 * masked2, bvec4(ivec4(color1.mask) & ivec4(color2.mask)));
}`)}function er(e){e.include(K),e.code.add(F`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}var tr=class extends I{constructor(e,t,n,r){super(e,`vec4`,1,(t,i,a)=>t.setUniform4fv(e,n(i,a),r),t)}},nr=class extends I{constructor(e,t,n,r){super(e,`float`,1,(t,i,a)=>t.setUniform1fv(e,n(i,a),r),t)}},rr=class extends I{constructor(e,t,n){super(e,`mat3`,1,(r,i,a)=>r.setUniformMatrix3fv(e,t(i,a),n))}},ir=class{constructor(e){this.source=e}},ar=class extends ir{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.variables=[null,null,null],this.type=[0,0,0],this.fallback=[0,0,0],this.symbolRotationMatrix=h(),this.symbolAnchor=y()}},or=class extends ir{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0],this.fallback=[0,0,0,0]}},sr=class extends ir{constructor(e,t=0){super(e),this.fallback=t,this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}},cr=class{};function q(e){return e!=null}function J(e,t){e&&e.push(t)}function lr(e,t,n,r=A()){let i=e||0,a=t||0,o=n||0;return i!==0&&ae(r,r,-i/180*Math.PI),a!==0&&re(r,r,a/180*Math.PI),o!==0&&ie(r,r,o/180*Math.PI),r}function Y(e,t,n,r,i){let a=e.minSize,o=e.maxSize;if(t.variables[n]=e,e.useSymbolValue){let e=r.symbolSize[n];return t.minSize[n]=e,t.maxSize[n]=e,t.offset[n]=t.minSize[n],t.factor[n]=0,t.type[n]=1,!0}return q(e.field)||q(e.valueExpression)?q(e.stops)?e.stops.length===2&&C(e.stops[0].size)&&C(e.stops[1].size)?(ur(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,n),t.type[n]=1,!0):(J(i,`Could not convert size info: stops only supported with 2 elements`),!1):C(a)&&C(o)&&q(e.minDataValue)&&q(e.maxDataValue)?(ur(a,o,e.minDataValue,e.maxDataValue,t,n),t.type[n]=1,!0):e.valueUnit===`unknown`?(J(i,`Could not convert size info: proportional size not supported`),!1):Te[e.valueUnit]==null?(J(i,`Could not convert size info: scale-dependent size not supported`),!1):(t.minSize[n]=-1/0,t.maxSize[n]=1/0,t.offset[n]=0,t.factor[n]=1/Te[e.valueUnit],t.type[n]=1,!0):e.stops?.[0]&&C(e.stops[0].size)?(t.minSize[n]=e.stops[0].size,t.maxSize[n]=e.stops[0].size,t.offset[n]=t.minSize[n],t.factor[n]=0,t.type[n]=1,!0):C(a)?(t.minSize[n]=a,t.maxSize[n]=a,t.offset[n]=a,t.factor[n]=0,t.type[n]=1,!0):(J(i,`Could not convert size info: unsupported variant of sizeInfo`),!1)}function ur(e,t,n,r,i,a){let o=Math.abs(r-n)>0?(t-e)/(r-n):0;i.minSize[a]=o>0?e:t,i.maxSize[a]=o>0?t:e,i.offset[a]=e-n*o,i.factor[a]=o}function dr(e,t,n,r){if(e.normalizationField||e.valueRepresentation)return J(r,`Could not convert size info: unsupported property`),null;if(!ce(e.field)&&!ce(e.valueExpression))return J(r,`Could not convert size info: field is not a string`),null;let i=_r(e);if(!t.size)t.size=new ar(i),w(t.size.fallback,n.fallbackSize);else if(i){if(!t.size.source)t.size.source=i;else if(i!==t.size.source)return J(r,`Could not convert size info: multiple fields in use`),null}let a;switch(e.axis){case`width`:return a=Y(e,t.size,0,n,r),a?t:null;case`height`:return a=Y(e,t.size,2,n,r),a?t:null;case`depth`:return a=Y(e,t.size,1,n,r),a?t:null;case`width-and-depth`:return a=Y(e,t.size,0,n,r),a&&Y(e,t.size,1,n,r),a?t:null;case null:case void 0:case`all`:return a=Y(e,t.size,0,n,r),a&&=Y(e,t.size,1,n,r),a&&=Y(e,t.size,2,n,r),a?t:null;default:return J(r,`Could not convert size info: unknown axis "${e.axis}""`),null}}function fr(e,t,n){for(let n=0;n<3;++n){let r=t.unitInMeters;e.type[n]===1&&(r*=t.modelSize[n],e.type[n]=2),e.minSize[n]=e.minSize[n]/r,e.maxSize[n]=e.maxSize[n]/r,e.offset[n]=e.offset[n]/r,e.factor[n]=e.factor[n]/r}let r;if(e.type[0]!==0)r=0;else if(e.type[1]!==0)r=1;else if(e.type[2]!==0)r=2;else return J(n,`No size axis contains a valid size or scale`),!1;for(let t=0;t<3;++t)e.type[t]===0&&(e.minSize[t]=e.minSize[r],e.maxSize[t]=e.maxSize[r],e.offset[t]=e.offset[r],e.factor[t]=e.factor[r],e.type[t]=e.type[r],e.variables[t]=e.variables[r]);return!0}function pr(e,t,n){e[4*t]=n.r/255,e[4*t+1]=n.g/255,e[4*t+2]=n.b/255,e[4*t+3]=n.a}function mr(e,t,n,r){if(e.normalizationField)return J(r,`Could not convert color info: unsupported property`),null;let i=_r(e);if(i){if(e.stops){if(e.stops.length>8)return J(r,`Could not convert color info: too many color stops`),null;t.color=new or(i);let a=e.stops;for(let e=0;e<8;++e){let n=a[Math.min(e,a.length-1)];t.color.values[e]=n.value,pr(t.color.colors,e,n.color)}Ee(t.color.fallback,n.fallbackColor)}else return J(r,`Could not convert color info: missing stops or colors`),null}else if(e.stops&&e.stops.length>=0){let r=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color=new or(null);for(let e=0;e<8;e++)t.color.values[e]=1/0,pr(t.color.colors,e,r);Ee(t.color.fallback,n.fallbackColor)}else return J(r,`Could not convert color info: no field and no colors/stops`),null;return t}function hr(e,t,n,r){if(e.normalizationField)return J(r,`Could not convert opacity info: unsupported property`),null;let i=_r(e);if(i){if(e.stops){if(e.stops.length>8)return J(r,`Could not convert opacity info: too many opacity stops`),null;t.opacity=new sr(i,n.fallbackColor[3]);let a=e.stops;for(let e=0;e<8;++e){let n=a[Math.min(e,a.length-1)];t.opacity.values[e]=n.value,t.opacity.opacityValues[e]=n.opacity}}else return J(r,`Could not convert opacity info: missing stops or opacities`),null}else if(e.stops&&e.stops.length>=0){let r=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={source:``,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0],fallback:n.fallbackColor[3]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=r}else return J(r,`Could not convert opacity info: no field and no opacities/stops`),null;return t}function gr(e,t,n){let r=n===2&&e.rotationType===`arithmetic`;t.offset[n]=r?90:0,t.factor[n]=r?-1:1,t.type[n]=1}function _r(e){return(e.cache.hasExpression?e.valueExpression:e.field)||``}function vr(e,t,n){let r=_r(e);if(!t.rotation)t.rotation={source:r,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(r){if(!t.rotation.source)t.rotation.source=r;else if(r!==t.rotation.source)return J(n,`Could not convert rotation info: multiple fields in use`),null}switch(e.axis){case`tilt`:return gr(e,t.rotation,0),t;case`roll`:return gr(e,t.rotation,1),t;case null:case void 0:case`heading`:return gr(e,t.rotation,2),t;default:return J(n,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}var yr=class{constructor({supports:e,modelSize:t,symbolSize:n,unitInMeters:r,anchor:i,scale:a,rotation:o,fallbackColor:s,fallbackSize:c}){this.supports=e,this.modelSize=t??g(),this.symbolSize=n??g(),this.unitInMeters=r??1,this.anchor=i??b(),this.scale=a??g(),this.rotation=o??b(),this.fallbackColor=s??Ae(),this.fallbackSize=c??g()}};function br(e,t,n){if(!e)return null;let r=e.reduce((e,r)=>{if(!e)return e;switch(r.type){case`size`:return t.supports.size?dr(r,e,t,n):e;case`color`:return t.supports.color?mr(r,e,t,n):e;case`opacity`:return t.supports.opacity?hr(r,e,t,n):null;case`rotation`:return t.supports.rotation?vr(r,e,n):e;default:return null}},new cr);return e.length>0&&r&&!r.size&&!r.color&&!r.opacity&&!r.rotation||r?.size&&!fr(r.size,t,n)?null:r}var xr=class{constructor(e,t,n){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=n}};function Sr(e,t){if(!e||en()||At.TESTS_DISABLE_FAST_UPDATES)return null;let n=br(e.visualVariables,t);return n?new xr(n,Er(n,t),!!n.size):null}function Cr(e,t,n){if(!t||!e)return!1;let r=e.visualVariables,i=br(t.visualVariables,n);return!i||!wr(r.size,i.size,`size`)||!wr(r.color,i.color,`color`)||!wr(r.rotation,i.rotation,`rotation`)||!wr(r.opacity,i.opacity,`opacity`)?!1:(e.visualVariables=i,e.materialParameters=Er(i,n),e.requiresShaderTransformation=!!i.size,!0)}function wr(e,t,n){if(!!e!=!!t||e&&e.source!==t?.source)return!1;if(e&&n===`rotation`){let n=e,r=t;for(let e=0;e<3;e++)if(n.type[e]!==r.type[e]||n.offset[e]!==r.offset[e]||n.factor[e]!==r.factor[e])return!1}return!0}var Tr=class extends Ue{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};function Er(e,t){let n=new Tr(e);return n.vvSize&&(w(n.vvSize.symbolAnchor,t.anchor),ne(Z),lr(t.rotation[2],t.rotation[0],t.rotation[1],Z),m(n.vvSize.symbolRotationMatrix,Z)),n}function Dr(e,t,n){if(!e.vvSize)return n;se(X,n);let r=e.vvSize.symbolRotationMatrix;return te(Z,r[0],r[1],r[2],0,r[3],r[4],r[5],0,r[6],r[7],r[8],0,0,0,0,1),ee(X,X,Z),Or(Mr,e,t),oe(X,X,Mr),S(X,X,e.vvSize.symbolAnchor),X}function Or(e,t,n){if(!t.vvSize)return T(e,1,1,1),e;if(Number.isNaN(n[0]))return w(e,t.vvSize.fallback);for(let r=0;r<3;++r){let i=t.vvSize.offset[r]+n[0]*t.vvSize.factor[r];e[r]=f(i,t.vvSize.minSize[r],t.vvSize.maxSize[r])}return e}function kr(e,t){return e?.source?jr(t?.input):0}function Ar(e,t){if(!e?.source)return 0;for(let e=0;e<3;e++)if(t?.input[e]!=null)return jr(t.input[e]);return jr(void 0)}function jr(e){return typeof e!=`number`||!isFinite(e)?NaN:e}var X=A(),Mr=y(),Z=A(),Nr=class extends Tr{constructor(){super(...arguments),this.renderOccluded=1,this.emissiveStrength=0,this.testsTransparentRenderOrder=0,this.isDecoration=!1}},Q=8;function Pr(e,t){let{vertex:n,attributes:r}=e;t.hasVVInstancing&&(t.hasVVSize||t.hasVVColor)&&r.add(`instanceFeatureAttribute`,`vec4`),t.hasVVSize?(n.uniforms.add(new j(`vvSizeMinSize`,e=>e.vvSize.minSize)),n.uniforms.add(new j(`vvSizeMaxSize`,e=>e.vvSize.maxSize)),n.uniforms.add(new j(`vvSizeOffset`,e=>e.vvSize.offset)),n.uniforms.add(new j(`vvSizeFactor`,e=>e.vvSize.factor)),n.uniforms.add(new j(`vvSizeFallback`,e=>e.vvSize.fallback)),n.uniforms.add(new rr(`vvSymbolRotationMatrix`,e=>e.vvSize.symbolRotationMatrix)),n.uniforms.add(new j(`vvSymbolAnchor`,e=>e.vvSize.symbolAnchor)),n.code.add(F`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),n.code.add(F`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${t.hasVVInstancing?F`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(${n.inputs.get(`position`)}, instanceFeatureAttribute);
      }`:``}
    `)):n.code.add(F`
      vec4 localPosition() { return vec4(${n.inputs.get(`position`)}, 1.0); }
      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),e.vertex.include(K),t.hasVVColor?(n.constants.add(`vvColorNumber`,`int`,Q),n.uniforms.add(new nr(`vvColorValues`,Q,e=>e.vvColor.values),new tr(`vvColorColors`,Q,e=>e.vvColor.colors),new kt(`vvColorFallback`,e=>e.vvColor.fallback,{supportsNaN:!0})),t.hasVVInstancing&&(e.vertex.include($n),e.vertex.include(er)),n.code.add(F`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVVInstancing?F`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return multiplyMaskedColors(color, createMaskedFromNaNColor(vvColor()));
            }
            `:F`
            vec4 vvColor() {
              return vec4(1.0);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return color;
            }
            `}
    `)):n.code.add(F`vec4 vvColor() {
return vec4(1.0);
}
MaskedColor applyVVColor(MaskedColor color) {
return color;
}`)}function Fr(e){e.code.add(F`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var Ir=class extends I{constructor(e,t){super(e,`int`,1,(n,r,i)=>n.setUniform1i(e,t(r,i)))}};function Lr(e){e.constants.add(`alphaCutoff`,`float`,qe),e.constants.add(`opacityCutoff`,`float`,Ke)}function Rr(e){e.code.add(`
    vec3 emissionFilter(in vec3 srcColor, float srcAlpha) {
      vec3 color = min(srcColor + vec3(1.0 - srcAlpha), 1.0);
      float m = max(color.r, max(color.g, color.b));
      return m > 0.0 ? color / m : vec3(1.0);
    }
  `)}function zr(e,t){t.useFloatBlend?e.code.add(`float ditherNoise(vec4 color) { return 0.0; }`):e.code.add(`
      float ditherNoise(vec4 color) {
        vec2 seed = color.rg + color.ba + gl_FragCoord.xy + gl_FragCoord.z;
        return (fract(52.9829189 * fract(dot(seed, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
      }`)}function Br(e,t){e.include(Zn,t),e.include(Be,t);let{fragment:n,outputs:r}=e;n.include(Fr);let{output:i,hasEmission:a,oitPremultipliedAlpha:o,snowCover:s,emissionDimmingPass:c,renderOccluded:l}=t,u=i===11,d=He(i),f=Re(i),p=Le(i)&&!d,m=i!==0||l,h=0;(p||d)&&r.add(`fragColor`,`vec4`,h++),d&&r.add(`fragAlpha`,`float`,h++),a&&r.add(`fragEmission`,`vec4`,h++),n.include(Fr),n.include(Lr),n.include(ze,t),n.include(zr,t),c&&n.include(Rr),n.code.add(F`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${P(s,`, float snow`)}) {
      ${P(u,`finalColor.a = 1.0;`)}
      ${P(m,`if (finalColor.a < alphaCutoff) discard;`)}

      ${P(d,`float noise = ditherNoise(finalColor);
         fragColor = ${P(o,`finalColor`,`premultiplyAlpha(finalColor)`)};
         fragColor.rgb = fragColor.rgb * floatBlendOutputScale + noise;
         fragAlpha = finalColor.a * floatBlendOutputScale + noise;
        `)}
      ${P(f&&o,`finalColor.rgb /= finalColor.a;`)}
      ${P(p,`fragColor = finalColor;`)}
      ${P(a,c?`fragEmission = vec4(emissionFilter(premultiplyAlpha(finalColor).rgb, finalColor.a), 0.0);`:`fragEmission = ${P(s,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}
            float emissionNoise = ditherNoise(fragEmission);
            fragEmission.rgb = fragEmission.rgb * floatBlendOutputScale + emissionNoise;
            fragEmission.a = finalColor.a;
            fragEmission = premultiplyAlpha(fragEmission);
            `)}
      calculateOcclusionAndOutputHighlight();
      ${P(u,`outputObjectAndLayerIdColor();`)}
    }
  `)}var Vr=class extends Ve{constructor(e){super(),this.spherical=e,this.draped=!1}};function Hr(e){e.varyings.add(`linearDepth`,`float`,{invariant:!0})}function Ur(e){Hr(e),e.vertex.code.add(`void forwardLinearDepth(float _linearDepth) { linearDepth = _linearDepth; }`)}var $=class extends gn{constructor(){super(...arguments),this.hasHighlightMixTexture=!1,this.emissionDimmingPass=!1,this.bindType=1,this.instanced=!1,this.writeDepth=!0,this.oitPremultipliedAlpha=!1}};e([M()],$.prototype,`hasHighlightMixTexture`,void 0),e([M()],$.prototype,`emissionDimmingPass`,void 0);var Wr=class extends ${constructor(){super(...arguments),this.polygonOffset=0,this.transparent=!1,this.enableOITOffset=!0}};e([M({count:5})],Wr.prototype,`polygonOffset`,void 0),e([M()],Wr.prototype,`transparent`,void 0),e([M()],Wr.prototype,`enableOITOffset`,void 0);function Gr(e){e.uniforms.add(new B(`dpDummy`,()=>1)).code.add(F`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var Kr=class extends Ue{constructor(){super(...arguments),this.transformWorldFromViewTH=y(),this.transformWorldFromViewTL=y(),this.transformViewFromCameraRelativeRS=h()}},qr=class extends Ue{constructor(){super(...arguments),this.transformWorldFromModelRS=h(),this.transformWorldFromModelTH=y(),this.transformWorldFromModelTL=y(),this.transformationDrawId=0}};function Jr(e){e.vertex.code.add(F`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Yr(e){Jr(e),e.vertex.code.add(F`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(F`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Xr(e,t){t.hasVertexColors?(e.attributes.add(`color`,`vec4`),e.varyings.add(`vColor`,`vec4`),e.vertex.code.add(F`void forwardVertexColor() { vColor = color; }`)):e.vertex.code.add(F`void forwardVertexColor() {}`)}export{rn as $,$n as A,ht as At,Ln as B,nt as Bt,kr as C,yt as Ct,tr as D,V as Dt,nr as E,bt as Et,Kn as F,st as Ft,An as G,Mn as H,Wn as I,ct as It,cn as J,_n as K,Rn as L,at as Lt,Zn as M,pt as Mt,Yn as N,ut as Nt,er as O,B as Ot,Un as P,lt as Pt,nn as Q,zn as R,it as Rt,Or as S,wt as St,rr as T,_t as Tt,Pn as U,Nn as V,et as Vt,jn as W,mn as X,dn as Y,an as Z,yr as _,Dt as _t,Gr as a,Ht as at,Sr as b,St as bt,Ur as c,zt as ct,Lr as d,Mt as dt,en as et,Ir as f,Nt as ft,Q as g,Ot as gt,Nr as h,kt as ht,Kr as i,Ut as it,K as j,mt as jt,Qn as k,gt as kt,Vr as l,It as lt,Pr as m,At as mt,Yr as n,Zt as nt,Wr as o,Vt as ot,Fr as p,jt as pt,vn as q,qr as r,Yt as rt,$ as s,Rt as st,Xr as t,Qt as tt,Br as u,Ft as ut,Dr as v,vt,Ar as w,Ct as wt,Cr as x,Tt as xt,Tr as y,xt as yt,Hn as z,rt as zt};