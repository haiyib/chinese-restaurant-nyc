import{$a as e,$i as t,A as n,Aa as r,Ar as i,B as a,Bs as o,Bt as s,Cn as c,Ct as l,Dr as u,Eo as d,Et as f,Fi as p,G as m,Ho as h,Jn as g,Mi as _,Mt as v,Oa as y,Oi as b,Qo as x,Qt as S,R as C,Ri as ee,Ro as w,Rt as T,Sr as E,St as D,Ui as O,Us as k,Ut as A,X as j,Xi as M,_i as N,bs as P,cn as te,d as F,f as I,fa as ne,fs as re,gn as L,go as R,ht as ie,i as z,ia as ae,is as B,it as oe,jr as se,ks as ce,kt as V,li as le,ln as H,lo as ue,lr as de,mt as U,nr as fe,oo as pe,pr as me,qa as he,r as W,un as ge,va as _e,wo as ve,wt as ye,yn as be,zi as xe}from"./moCMGDO7.js";import{A as G,C as K,M as Se,O as Ce,a as we,b as Te,f as q,g as J,j as Ee,k as Y,o as De,t as Oe,w as X}from"./Dj8jT6dQ.js";import{n as ke,t as Ae}from"./DlCe-189.js";import"./DAfMl3tg.js";var je=new Float32Array(me([])),Me=[0,0,0],Ne=(e,t,n,r,i,o,s,c,l,u,d,f,p,m=[0,0,0],h,_,v,y=1,b=!1)=>{let x=Me,S=0,C=Me;if(!b){let e=i.style.light,t=e.properties.get(`position`);if(x=[-t.x,-t.y,t.z],e.properties.get(`anchor`)===`viewport`){let e=te();ve(e,-i.transform.angle),a(x,x,e)}let n=e.properties.get(`color`).toNonPremultipliedRenderColor(null);S=e.properties.get(`intensity`),C=[n.r,n.g,n.b]}let ee=d.alphaMode===`MASK`,w=p.paint.get(`model-ambient-occlusion-intensity`),T=p.paint.get(`model-color`).constantOr(g.white).toNonPremultipliedRenderColor(null);return T.a=p.paint.get(`model-color-mix-intensity`).constantOr(0),v&&(T.r=v[0],T.g=v[1],T.b=v[2],T.a=v[3]),_&&(T.r=_.color.r,T.g=_.color.g,T.b=_.color.b,T.a=_.colorMix,f=_.emissionStrength,o*=_.opacity),{u_matrix:e,u_lighting_matrix:t,u_normal_matrix:n,u_node_matrix:r||je,u_lightpos:x,u_lightintensity:S,u_lightcolor:C,u_camera_pos:m,u_opacity:o,u_baseTextureIsAlpha:0,u_alphaMask:+ee,u_alphaCutoff:d.alphaCutoff,u_baseColorFactor:s.toNonPremultipliedRenderColor(null).toArray01(),u_emissiveFactor:c.toNonPremultipliedRenderColor(null).toArray01(),u_metallicFactor:l,u_roughnessFactor:u,u_baseColorTexture:X.BaseColor,u_metallicRoughnessTexture:X.MetallicRoughness,u_normalTexture:X.Normal,u_occlusionTexture:X.Occlusion,u_emissionTexture:X.Emission,u_lutTexture:X.LUT,u_color_mix:T.toArray01(),u_aoIntensity:w,u_emissive_strength:f,u_occlusionTextureTransform:h||[0,0,0,0],u_dithered_discard_threshold:y}},Pe=(e,t=je,n=je)=>({u_matrix:e,u_instance:t,u_node_matrix:n}),Z=new Float64Array(16),Q=new Float64Array(16),Fe=new Float64Array(16),Ie=new Float64Array(16),Le=new Float64Array(16),Re=new Float64Array(16),ze=new Float64Array(16),Be=[0,0,0],Ve=new Float32Array(16),He=[0,0,0],Ue=[0,0,0],We=[];function Ge(e,t,n){let r=n.cameraWorldSizeForFog/n.worldSize;return p(e,n.worldToFogMatrix,[r,r,1]),D(e,e,t),e}function Ke(e,t,n,r){return c(e,t,n),fe(r,_e)||p(e,e,r),e}function qe(t,n,r,i,a){let o=r.material,s=i.context,{baseColorTexture:c,metallicRoughnessTexture:l}=o.pbrMetallicRoughness,{normalTexture:u,occlusionTexture:d,emissionTexture:f}=o;function p(e,n,r){if(e&&(t.push(n),s.activeTexture.set(s.gl.TEXTURE0+r),e.gfxTexture)){let{minFilter:t,magFilter:n,wrapS:r,wrapT:i}=e.sampler;e.gfxTexture.bindExtraParam(t,n,r,i)}}p(c,`HAS_TEXTURE_u_baseColorTexture`,X.BaseColor),p(l,`HAS_TEXTURE_u_metallicRoughnessTexture`,X.MetallicRoughness),p(u,`HAS_TEXTURE_u_normalTexture`,X.Normal),p(d,`HAS_TEXTURE_u_occlusionTexture`,X.Occlusion),p(f,`HAS_TEXTURE_u_emissionTexture`,X.Emission),a&&(a.texture||=new e(i.context,a.image,[a.image.height,a.image.height,a.image.height],s.gl.RGBA8),s.activeTexture.set(s.gl.TEXTURE0+X.LUT),a.texture&&a.texture.bind(s.gl.LINEAR,s.gl.CLAMP_TO_EDGE),t.push(`APPLY_LUT_ON_GPU`)),r.texcoordBuffer&&(t.push(`HAS_ATTRIBUTE_a_uv_2f`),n.push(r.texcoordBuffer)),r.colorBuffer&&(t.push(r.colorBuffer.itemSize===12?`HAS_ATTRIBUTE_a_color_3f`:`HAS_ATTRIBUTE_a_color_4f`),n.push(r.colorBuffer)),r.normalBuffer&&(t.push(`HAS_ATTRIBUTE_a_normal_3f`),n.push(r.normalBuffer)),r.pbrBuffer&&(t.push(`HAS_ATTRIBUTE_a_pbr`),t.push(`HAS_ATTRIBUTE_a_heightBasedEmissiveStrength`),n.push(r.pbrBuffer)),o.alphaMode!==`OPAQUE`&&o.alphaMode!==`MASK`||t.push(`UNPREMULT_TEXTURE_IN_SHADER`),o.defined||t.push(`DIFFUSE_SHADED`);let m=i.shadowRenderer;m&&(t.push(`RENDER_SHADOWS`),m.useNormalOffset&&t.push(`NORMAL_OFFSET`))}function Je(e,t,n,r,a,o){let s=e.modelOpacity,c=t.context,l=new J(t.context.gl.LEQUAL,e.isLightMesh?J.ReadOnly:J.ReadWrite,t.depthRangeFor3D),u=t.transform,d=e.mesh,f=d.material,p=f.pbrMetallicRoughness,m=t.style.fog;t.transform.projection.zAxisUnit===`pixels`?Z.set(e.nodeModelMatrix):D(Z,r.zScaleMatrix,e.nodeModelMatrix),D(Z,r.negCameraPosMatrix,Z),V(Q,Z),i(Q,Q);let h=n.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`,g=n.paint.get(`model-emissive-strength`).constantOr(0),_={defines:[]},v=[],y=t.shadowRenderer;y&&(y.useNormalOffset=!1),qe(_.defines,v,d,t,h?null:n.lut);let b=null;if(m&&(b=Ge(Fe,e.nodeModelMatrix,t.transform),u.projection.name!==`globe`)){let e=d.aabb.min,t=d.aabb.max,[n,r]=m.getOpacityForBounds(b,e[0],e[1],t[0],t[1]);_.overrideFog=n>=.05||r>=.05}let x=Ee(t,n.paint.get(`model-cutoff-fade-range`));x.shouldRenderCutoff&&_.defines.push(`RENDER_CUTOFF`);let S=t.getOrCreateProgram(`model`,_),C=Ne(e.worldViewProjection,Z,Q,null,t,s,p.baseColorFactor,f.emissiveFactor,p.metallicFactor,p.roughnessFactor,f,g,n,void 0,void 0,e.materialOverride,e.modelColor,1,S.fixedDefines.includes(`LIGHTING_3D_MODE`));t.uploadCommonUniforms(c,S,null,b,x,e.lightOverrides),t.renderPass!==`shadow`&&y&&y.setupShadowsFromMatrix(e.nodeModelMatrix,S),S.draw(t,c.gl.TRIANGLES,l,a,o,d.material.doubleSided?Y.disabled:Y.backCCW,C,n.id,d.vertexBuffer,d.indexBuffer,d.segments,n.paint,t.transform.zoom,void 0,v)}function Ye(e,t){return e.style._importedAsBasemap?`basemap`:t.scope}function Xe(e,t,n,r,i,a,o,s,c,l,u){let d=e.transform,f=!!t.isGeometryBloom&&t.isGeometryBloom;if(t.minZoom!==void 0&&e.transform.zoom<t.minZoom||t.maxZoom!==void 0&&e.transform.zoom>t.maxZoom||f&&e.renderPass===`shadow`)return;let p=d.projection.name===`globe`?xe(n,d):[...n];D(p,p,t.globalMatrix);let m=D([],r,p);if(t.meshes)for(let e of t.meshes){let r=s.get(e.material.name);if(r&&r.opacity<=0)continue;if(e.material.alphaMode!==`BLEND`){o.push({mesh:e,depth:0,modelIndex:i,worldViewProjection:m,nodeModelMatrix:p,isLightMesh:f,materialOverride:r,modelOpacity:c,modelColor:l,lightOverrides:u,node:t,modelMatrix:n});continue}let h=j([],e.centroid,m);!d.isOrthographic&&h[2]<=0||a.push({mesh:e,depth:h[2],modelIndex:i,worldViewProjection:m,nodeModelMatrix:p,isLightMesh:f,materialOverride:r,modelOpacity:c,modelColor:l,lightOverrides:u,node:t,modelMatrix:n})}if(t.children)for(let d of t.children)Xe(e,d,n,r,i,a,o,s,c,l,u)}function Ze(e,t,n,r,i){let a=n.shadowRenderer;if(!a)return;let o=a.getShadowPassDepthMode(),s=Pe(i||a.calculateShadowPassMatrixFromMatrix(t));n.getOrCreateProgram(`modelDepth`).draw(n,n.context.gl.TRIANGLES,o,K.disabled,G.disabled,Y.disabled,s,r.id,e.vertexBuffer,e.indexBuffer,e.segments,r.paint,n.transform.zoom,void 0,void 0)}function Qe(e,t,n,r){let i=function(e,t){if(t.footprintDebugMesh)return t.footprintDebugMesh;if(!t.footprint)return null;let n=e.context,r=t.footprint.vertices,i=t.footprint.indices,a=new S;a.reserve(r.length);for(let e of r)a.emplaceBack(e.x,e.y);let o=new u;o.reserve(i.length);for(let e=0;e<i.length;e+=3)o.emplaceBack(i[e],i[e+1],i[e+2]);let s=n.createVertexBuffer(a,b.members),c=n.createIndexBuffer(o),l=F.simpleSegment(0,0,r.length,i.length),d=t.id||t.name||`footprint`,f,p=parseInt(d,10);return f=isNaN(p)?function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(d):p,t.footprintDebugMesh={vertexBuffer:s,indexBuffer:c,segments:l,color:new g(A(f),A(f+1),A(f+2),.5)},t.footprintDebugMesh}(e,n);if(!i)return;let a=e.context,o=a.gl,s=e.getOrCreateProgram(`debug`),c=i.color,l=J.disabled;a.activeTexture.set(o.TEXTURE0),e.emptyTexture.bind(o.LINEAR,o.CLAMP_TO_EDGE),s.draw(e,o.TRIANGLES,l,K.disabled,G.alphaBlended,Y.disabled,we(r,c.toPremultipliedRenderColor(null)),`$debug`,i.vertexBuffer,i.indexBuffer,i.segments)}function $e(e,t,n,r,i,a){for(let o of i){let i={...r};i.part=o;let s={type:`Unknown`,id:t,properties:i},c={orientation:e.paint.get(`model-rotation`).evaluate(s,n)};a.set(o,c)}}function et(e,t,n,r,i,a){for(let o of i){let i={...r};i.part=o;let s={type:`Unknown`,id:t,properties:i},c={color:e.paint.get(`model-color`).evaluate(s,n),colorMix:e.paint.get(`model-color-mix-intensity`).evaluate(s,n),opacity:e.paint.get(`model-opacity`).evaluate(s,n),emissionStrength:e.paint.get(`model-emissive-strength`).evaluate(s,n)};a.set(o,c)}}function tt(e,t,n,r,i){let a=!1;for(let n of r)n.modelOpacity!==1&&(Je(n,e,t,i[n.modelIndex],K.disabled,G.disabled),a=!0);for(let n of r)Je(n,e,t,i[n.modelIndex],n.modelOpacity===1?K.disabled:e.stencilModeFor3D(),e.colorModeForRenderPass());a&&e.resetStencilClippingMasks();let o=G.additive;for(let r of n)Je(r,e,t,i[r.modelIndex],K.disabled,r.isLightMesh?o:e.colorModeForRenderPass())}function nt(e,t,n){let r=t.updateZoomBasedPaintProperties(),i=function(e,t,n){let r,i,a,o=e.terrain?e.terrain.exaggeration():0;if(e.terrain&&o>0){let t=e.terrain,i=t.findDEMTileFor(n);i&&i.dem?r=T.create(t,n,i):o=0}if(o===0&&(t.terrainElevationMin=0,t.terrainElevationMax=0),o===t.validForExaggeration&&(o===0||r&&r._demTile&&r._demTile.tileID===t.validForDEMTile.id&&r._dem._timestamp===t.validForDEMTile.timestamp))return!1;for(let e in t.instancesPerModel){let n=t.instancesPerModel[e];for(let e=0;e<n.instancedDataArray.length;++e){let s=(r?o*r.getElevationAt(0|n.instancedDataArray.float32[16*e],0|n.instancedDataArray.float32[16*e+1],!0,!0):0)+n.instancesEvaluatedElevation[e];n.instancedDataArray.float32[16*e+6]=s,i=i?Math.min(t.terrainElevationMin,s):s,a=a?Math.max(t.terrainElevationMax,s):s}}return t.terrainElevationMin=i||0,t.terrainElevationMax=a||0,t.validForExaggeration=o,t.validForDEMTile=r&&r._demTile?{id:r._demTile.tileID,timestamp:r._dem._timestamp}:{id:void 0,timestamp:0},!0}(e,t,n);(r||i)&&(t.uploaded=!1,t.upload(e.context))}var $={shadowUniformsInitialized:!1,useSingleShadowCascade:!1,tileMatrix:new Float64Array(16),shadowTileMatrix:new Float32Array(16),aabb:new m([0,0,0],[z,z,0])};function rt(e,t){let n=1<<e.canonical.z,r=t.getFreeCameraOptions().position,i=t.elevation,a=e.canonical.x/n,o=(e.canonical.x+1)/n,s=e.canonical.y/n,c=(e.canonical.y+1)/n,l=t._centerAltitude;if(i){let t=i.getMinMaxForTile(e);t&&t.max>l&&(l=t.max)}let u=f(r.x,a,o)-r.x,d=f(r.y,s,c)-r.y,p=le(l,t.center.lat)-r.z;return t._zoomFromMercatorZ(Math.sqrt(u*u+d*d+p*p))}function it(e,t,n,r,i,a,o){let s=e.context,c=e.renderPass===`shadow`,l=e.shadowRenderer,u=c&&l?l.getShadowPassDepthMode():new J(s.gl.LEQUAL,J.ReadWrite,e.depthRangeFor3D),d=e.isTileAffectedByFog(a),f=e.transform.projection.name===`globe`;if(n.meshes)for(let p of n.meshes){let m=f?[]:[`MODEL_POSITION_ON_GPU`],h=[],g,_,v,y=!f&&r.instancedDataArray.length>20;y&&m.push(`INSTANCED_ARRAYS`);let b=Ee(e,t.paint.get(`model-cutoff-fade-range`));if(b.shouldRenderCutoff&&m.push(`RENDER_CUTOFF`),c&&l)g=e.getOrCreateProgram(`modelDepth`,{defines:m}),_=Pe(o.shadowTileMatrix,o.shadowTileMatrix,n.globalMatrix),v=G.disabled;else{qe(m,h,p,e,t.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`?null:t.lut),g=e.getOrCreateProgram(`model`,{defines:m,overrideFog:d});let r=p.material,c=r.pbrMetallicRoughness,u=t.paint.get(`model-opacity`).constantOr(1),f=t.paint.get(`model-emissive-strength`).constantOr(0);_=Ne(a.expandedProjMatrix,n.globalMatrix,Ve,null,e,u,c.baseColorFactor,r.emissiveFactor,c.metallicFactor,c.roughnessFactor,r,f,t,i,void 0,void 0,void 0,1,g.fixedDefines.includes(`LIGHTING_3D_MODE`)),l&&(o.shadowUniformsInitialized?g.setShadowUniformValues(s,l.getShadowUniformValues()):(l.setupShadows(a.toUnwrapped(),g,`model-tile`),o.shadowUniformsInitialized=!0)),v=b.shouldRenderCutoff||u<1||r.alphaMode!==`OPAQUE`?G.alphaBlended:G.unblended}e.uploadCommonUniforms(s,g,a.toUnwrapped(),null,b);let x=p.material.doubleSided?Y.disabled:Y.backCCW;if(y)h.push(r.instancedDataBuffer),g.draw(e,s.gl.TRIANGLES,u,K.disabled,v,x,_,t.id,p.vertexBuffer,p.indexBuffer,p.segments,t.paint,e.transform.zoom,void 0,h,r.instancedDataArray.length);else{let n=c?`u_instance`:`u_normal_matrix`;for(let i=0;i<r.instancedDataArray.length;++i)_[n]=new Float32Array(r.instancedDataArray.arrayBuffer,64*i,16),g.draw(e,s.gl.TRIANGLES,u,K.disabled,v,x,_,t.id,p.vertexBuffer,p.indexBuffer,p.segments,t.paint,e.transform.zoom,void 0,h)}}if(n.children)for(let s of n.children)it(e,t,s,r,i,a,o)}function at(e,t,n,r,i){let a=e.node;if(a.lodMeshes&&a.lodMeshes.length>0)if(e.targetLod<0)e.targetLod=+(t>r);else{let a=i>0?n/1e3/i:1;e.targetLod=f(t>r?e.targetLod+a:e.targetLod-a,0,1)}else e.targetLod=0}function ot(e,t,n,r){if(!n.modelManager)return!0;let i=n.modelManager;if(!n.shadowRenderer)return!0;let a=n.shadowRenderer,o=t.aabb,s=!0,c=e.maxHeight;if(c===0){let t=0;for(let n in e.instancesPerModel){let e=i.getModel(n,r);e?t=Math.max(t,Math.max(Math.max(e.aabb.max[0],e.aabb.max[1]),e.aabb.max[2])):s=!1}c=e.maxScale*t*1.41+e.maxVerticalOffset,s&&(e.maxHeight=c)}o.max[2]=c,o.min[2]+=e.terrainElevationMin,o.max[2]+=e.terrainElevationMax,j(o.min,o.min,t.tileMatrix),j(o.max,o.max,t.tileMatrix);let l=o.intersects(a.getCurrentCascadeFrustum());return n.currentShadowCascade===0&&(e.isInsideFirstShadowMapFrustum=l===2),l===0}function st(e,t){let n=e.uniformValues.u_cutoff_params[0],r=e.uniformValues.u_cutoff_params[1],i=e.uniformValues.u_cutoff_params[2],a=e.uniformValues.u_cutoff_params[3];return r===n||a===i?1:f(((t-n)/(r-n)-i)/(a-i),0,1)}function ct(e,t,n,r){if(t.pitch<20)return 1;let i=t.getWorldToCameraMatrix();D(i,i,e);let a=d(n.min[0],n.min[1],n.min[2],1),o=v(W(),a,i),s=o,c=o;a[1]=n.max[1],o=v(W(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c,a[0]=n.max[0],o=v(W(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c,a[1]=n.min[1],o=v(W(),a,i),s=o[1]<s[1]?o:s,c=o[1]>c[1]?o:c;let l=f(r[0],0,1),u=100*t.pixelsPerMeter*f(r[1],0,1),p=f(r[2],0,1),m=se(W(),s,c,l),h=Math.tan(.5*t.fovX),g=-m[2]*h;return u===0?m[1]<-Math.abs(g)?p:1:k(1,f(k(1,p,(-Math.abs(g)-m[1])/u),p,1),f((t.pitch-20)/20,0,1))}var lt={model:q(`#include "_prelude_fog.fragment.glsl"
#include "_prelude_shadow.fragment.glsl"
#include "_prelude_lighting.glsl"
uniform float u_opacity;
#ifdef DITHERED_DISCARD
uniform float u_dithered_discard_threshold;
#endif
#ifndef LIGHTING_3D_MODE
uniform vec3 u_lightcolor;uniform vec3 u_lightpos;uniform float u_lightintensity;
#endif
uniform vec4 u_baseColorFactor;uniform vec4 u_emissiveFactor;uniform float u_metallicFactor;uniform float u_roughnessFactor;uniform float u_emissive_strength;in highp vec4 v_position_height;in lowp vec4 v_color_mix;
#ifdef RENDER_SHADOWS
in highp vec4 v_pos_light_view_0;in highp vec4 v_pos_light_view_1;in float v_depth_shadows;
#endif
#ifdef OCCLUSION_TEXTURE_TRANSFORM
uniform vec4 u_occlusionTextureTransform;
#endif
#pragma mapbox: define-attribute highp vec3 normal_3f
#pragma mapbox: define-attribute highp vec3 color_3f
#pragma mapbox: define-attribute highp vec4 color_4f
#pragma mapbox: define-attribute highp vec2 uv_2f
#pragma mapbox: initialize-attribute highp vec3 normal_3f
#pragma mapbox: initialize-attribute highp vec3 color_3f
#pragma mapbox: initialize-attribute highp vec4 color_4f
#pragma mapbox: initialize-attribute highp vec2 uv_2f
#ifdef HAS_ATTRIBUTE_a_pbr
in lowp vec4 v_roughness_metallic_emissive_alpha;in mediump vec4 v_height_based_emission_params;
#endif
#ifdef HAS_TEXTURE_u_baseColorTexture
uniform sampler2D u_baseColorTexture;uniform bool u_baseTextureIsAlpha;uniform bool u_alphaMask;uniform float u_alphaCutoff;
#endif
#ifdef HAS_TEXTURE_u_metallicRoughnessTexture
uniform sampler2D u_metallicRoughnessTexture;
#endif
#ifdef HAS_TEXTURE_u_occlusionTexture
uniform sampler2D u_occlusionTexture;uniform float u_aoIntensity;
#endif
#ifdef HAS_TEXTURE_u_normalTexture
uniform sampler2D u_normalTexture;
#endif
#ifdef HAS_TEXTURE_u_emissionTexture
uniform sampler2D u_emissionTexture;
#endif
#ifdef APPLY_LUT_ON_GPU
uniform highp sampler3D u_lutTexture;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
in highp float v_cutout_factor;
#endif
#ifdef TERRAIN_FRAGMENT_OCCLUSION
in highp float v_depth;uniform highp sampler2D u_depthTexture;uniform highp vec2 u_inv_depth_size;uniform highp vec2 u_depth_range_unpack;
#ifdef DEPTH_D24
highp float unpack_depth(highp float depth) {return  depth*u_depth_range_unpack.x+u_depth_range_unpack.y;}
#else
highp float unpack_depth_rgba(highp vec4 rgba_depth)
{const highp vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(rgba_depth,bit_shift)*2.0-1.0;}
#endif
bool isOccluded() {highp vec2 coord=gl_FragCoord.xy*u_inv_depth_size;
#ifdef FLIP_Y
coord.y=1.0-coord.y;
#endif
#ifdef DEPTH_D24
highp float depth=unpack_depth(texture(u_depthTexture,coord).r);
#else
highp float depth=unpack_depth_rgba(texture(u_depthTexture,coord));
#endif
return v_depth > depth+0.0005;}
#endif
#define saturate(_x) clamp(_x,0.,1.)
vec3 linearTosRGB(vec3 color) {return pow(color,vec3(1./2.2));}vec3 sRGBToLinear(vec3 srgbIn) {return pow(srgbIn,vec3(2.2));}float calculate_NdotL(vec3 normal,vec3 lightDir) {const float ext=0.70710678118;return (clamp(dot(normal,lightDir),-ext,1.0)+ext)/(1.0+ext);}vec3 getDiffuseShadedColor(vec3 albedo,vec3 normal,vec3 lightDir,vec3 lightColor)
{
#ifdef LIGHTING_3D_MODE
vec3 transformed_normal=vec3(-normal.xy,normal.z);float lighting_factor;
#ifdef RENDER_SHADOWS
lighting_factor=shadowed_light_factor_normal(transformed_normal,v_pos_light_view_0,v_pos_light_view_1,v_depth_shadows);
#else
lighting_factor=saturate(dot(transformed_normal,u_lighting_directional_dir));
#endif
return apply_lighting(albedo,transformed_normal,lighting_factor);
#else
vec3 n=normal;float colorvalue=((albedo.x*0.2126)+(albedo.y*0.7152))+(albedo.z*0.0722);vec3 c=vec3(0.03,0.03,0.03);float directional=clamp(dot(n,vec3(lightDir)),0.0,1.0);directional=mix(1.0-u_lightintensity,max((1.0-colorvalue)+u_lightintensity,1.0),directional);vec3 c3=c+clamp((albedo*directional)*lightColor,mix(vec3(0.0),vec3(0.3),vec3(1.0)-lightColor),vec3(1.0));return c3;
#endif
}vec4 getBaseColor() {vec4 albedo=u_baseColorFactor;
#ifdef HAS_ATTRIBUTE_a_color_3f
albedo*=vec4(color_3f,1.0);
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
#else
#ifdef HAS_ATTRIBUTE_a_color_4f
albedo*=color_4f;
#endif
#endif
#if defined (HAS_TEXTURE_u_baseColorTexture) && defined (HAS_ATTRIBUTE_a_uv_2f)
vec4 texColor=texture(u_baseColorTexture,uv_2f);if(u_alphaMask) {if (texColor.w < u_alphaCutoff) {discard;}}
#ifdef UNPREMULT_TEXTURE_IN_SHADER
texColor=vec4(unpremultiplyColor(texColor),1.0);
#endif
if(u_baseTextureIsAlpha) {if (texColor.r < 0.5) {discard;}} else {texColor.rgb=sRGBToLinear(texColor.rgb);albedo*=texColor;}
#endif
vec4 color=vec4(mix(albedo.rgb,v_color_mix.rgb,v_color_mix.a),albedo.a);
#ifdef APPLY_LUT_ON_GPU
color=applyLUT(u_lutTexture,color);
#endif
return color;}highp mat3 cotangentFrame(highp vec3 N,highp vec3 p,highp vec2 uv ) {
#ifdef HAS_TEXTURE_u_normalTexture
highp vec3 dp1=vec3(dFdx(p.x),dFdx(p.y),dFdx(p.z));highp vec3 dp2=vec3(dFdy(p.x),dFdy(p.y),dFdy(p.z));highp vec2 duv1=vec2(dFdx(uv.x),dFdx(uv.y));highp vec2 duv2=vec2(dFdy(uv.x),dFdy(uv.y));highp vec3 dp2perp=cross( dp2,N );highp vec3 dp1perp=cross( N,dp1 );highp vec3 T=dp2perp*duv1.x+dp1perp*duv2.x;highp vec3 B=dp2perp*duv1.y+dp1perp*duv2.y;
#ifdef FLIP_Y
T=-T;B=-B;
#endif
highp float lengthT=dot(T,T);highp float lengthB=dot(B,B);highp float maxLength=max(lengthT,lengthB);highp float invmax=inversesqrt( maxLength );highp mat3 res=mat3( T*invmax,B*invmax,N );return res;
#else
return mat3(1.0);
#endif
}highp vec3 getNormal(){highp vec3 n;
#ifdef HAS_ATTRIBUTE_a_normal_3f
n=normalize(normal_3f);
#else
highp vec3 fdx=vec3(dFdx(v_position_height.x),dFdx(v_position_height.y),dFdx(v_position_height.z));highp vec3 fdy=vec3(dFdy(v_position_height.x),dFdy(v_position_height.y),dFdy(v_position_height.z));
#ifdef FLIP_Y
n=normalize(cross(fdx,fdy));
#else
n=normalize(cross(fdx,fdy))*-1.0;
#endif
#endif
#if defined(HAS_TEXTURE_u_normalTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
vec3 nMap=texture( u_normalTexture,uv_2f).xyz;nMap=normalize(2.0*nMap-vec3(1.0));highp vec3 v=normalize(-v_position_height.xyz);highp mat3 TBN=cotangentFrame(n,v,uv_2f);n=normalize(TBN*nMap);
#endif
return n;}struct Material {float perceptualRoughness;float alphaRoughness;float metallic;vec3 f90;vec4 baseColor;vec3 diffuseColor;vec3 specularColor;highp vec3 normal;};Material getPBRMaterial() {Material mat;mat.baseColor=getBaseColor();mat.perceptualRoughness=u_roughnessFactor;mat.metallic=u_metallicFactor;
#ifdef HAS_ATTRIBUTE_a_pbr
mat.perceptualRoughness=v_roughness_metallic_emissive_alpha.x;mat.metallic=v_roughness_metallic_emissive_alpha.y;mat.baseColor.w*=v_roughness_metallic_emissive_alpha.w;
#endif
#if defined(HAS_TEXTURE_u_metallicRoughnessTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
vec4 mrSample=texture(u_metallicRoughnessTexture,uv_2f);mat.perceptualRoughness*=mrSample.g;mat.metallic*=mrSample.b;
#endif
const float c_minRoughness=0.04;mat.perceptualRoughness=clamp(mat.perceptualRoughness,c_minRoughness,1.0);mat.metallic=saturate(mat.metallic);mat.alphaRoughness=mat.perceptualRoughness*mat.perceptualRoughness;const vec3 f0=vec3(0.04);mat.diffuseColor=mat.baseColor.rgb*(vec3(1.0)-f0);mat.diffuseColor*=1.0-mat.metallic;mat.specularColor=mix(f0,mat.baseColor.rgb,mat.metallic);highp float reflectance=max(max(mat.specularColor.r,mat.specularColor.g),mat.specularColor.b);highp float reflectance90=saturate(reflectance*25.0);mat.f90=vec3(reflectance90);mat.normal=getNormal();return mat;}float V_GGX(float NdotL,float NdotV,float roughness)
{float a2=roughness*roughness;float GGXV=NdotL*sqrt(NdotV*NdotV*(1.0-a2)+a2);float GGXL=NdotV*sqrt(NdotL*NdotL*(1.0-a2)+a2);return 0.5/(GGXV+GGXL);}float V_GGXFast(float NdotL,float NdotV,float roughness) {float a=roughness;float GGXV=NdotL*(NdotV*(1.0-a)+a);float GGXL=NdotV*(NdotL*(1.0-a)+a);return 0.5/(GGXV+GGXL);}vec3 F_Schlick(vec3 specularColor,vec3 f90,float VdotH)
{return specularColor+(f90-specularColor)*pow(clamp(1.0-VdotH,0.0,1.0),5.0);}vec3 F_SchlickFast(vec3 specularColor,float VdotH)
{float x=1.0-VdotH;float x4=x*x*x*x;return specularColor+(1.0-specularColor)*x4*x;}float D_GGX(highp float NdotH,float alphaRoughness)
{highp float a4=alphaRoughness*alphaRoughness;highp float f=(NdotH*a4-NdotH)*NdotH+1.0;return a4/(PI*f*f);}vec3 diffuseBurley(Material mat,float LdotH,float NdotL,float NdotV)
{float f90=2.0*LdotH*LdotH*mat.alphaRoughness-0.5;return (mat.diffuseColor/PI)*(1.0+f90*pow((1.0-NdotL),5.0))*(1.0+f90*pow((1.0-NdotV),5.0));}vec3 diffuseLambertian(Material mat)
{
#ifdef LIGHTING_3D_MODE
return mat.diffuseColor;
#else
return mat.diffuseColor/PI;
#endif
}vec3 EnvBRDFApprox(vec3 specularColor,float roughness,highp float NdotV)
{vec4 c0=vec4(-1,-0.0275,-0.572,0.022);vec4 c1=vec4(1,0.0425,1.04,-0.04);highp vec4 r=roughness*c0+c1;highp float a004=min(r.x*r.x,exp2(-9.28*NdotV))*r.x+r.y;vec2 AB=vec2(-1.04,1.04)*a004+r.zw;return specularColor*AB.x+AB.y;}vec3 computeIndirectLightContribution(Material mat,float NdotV,vec3 normal)
{vec3 env_light=vec3(0.65,0.65,0.65);
#ifdef LIGHTING_3D_MODE
float ambient_factor=calculate_ambient_directional_factor(normal);env_light=u_lighting_ambient_color*ambient_factor;
#endif
vec3 envBRDF=EnvBRDFApprox(mat.specularColor,mat.perceptualRoughness,NdotV);vec3 indirectSpecular= envBRDF*env_light;vec3 indirectDiffuse=mat.diffuseColor*env_light;return indirectSpecular+indirectDiffuse;}vec3 computeLightContribution(Material mat,vec3 lightPosition,vec3 lightColor)
{highp vec3 n=mat.normal;highp vec3 v=normalize(-v_position_height.xyz);highp vec3 l=normalize(lightPosition);highp vec3 h=normalize(v+l);float NdotV=clamp(abs(dot(n,v)),0.001,1.0);float NdotL=saturate(dot(n,l));highp float NdotH=saturate(dot(n,h));float VdotH=saturate(dot(v,h));vec3 f=F_SchlickFast(mat.specularColor,VdotH);float g=V_GGXFast(NdotL,NdotV,mat.alphaRoughness);float d=D_GGX(NdotH,mat.alphaRoughness);vec3 diffuseTerm=(1.0-f)*diffuseLambertian(mat);vec3 specularTerm=f*g*d;vec3 transformed_normal=vec3(-n.xy,n.z);float lighting_factor;
#ifdef RENDER_SHADOWS
lighting_factor=shadowed_light_factor_normal(transformed_normal,v_pos_light_view_0,v_pos_light_view_1,v_depth_shadows);
#else
lighting_factor=NdotL;
#endif
vec3 directLightColor=(specularTerm+diffuseTerm)*lighting_factor*lightColor;vec3 indirectLightColor=computeIndirectLightContribution(mat,NdotV,transformed_normal);vec3 color=(saturate(directLightColor)+indirectLightColor);float intensityFactor=1.0;
#if !defined(LIGHTING_3D_MODE)
const vec3 luminosityFactor=vec3(0.2126,0.7152,0.0722);float luminance=dot(diffuseTerm,luminosityFactor);intensityFactor=mix((1.0-u_lightintensity),max((1.0-luminance+u_lightintensity),1.0),NdotL);
#endif
color*=intensityFactor;return color;}void main() {
#ifdef TERRAIN_FRAGMENT_OCCLUSION
if (isOccluded()) {discard;}
#endif
vec3 lightDir;vec3 lightColor;
#ifdef LIGHTING_3D_MODE
lightDir=u_lighting_directional_dir;lightDir.xy=-lightDir.xy;lightColor=u_lighting_directional_color;
#else
lightDir=u_lightpos;lightColor=u_lightcolor;
#endif
vec4 finalColor;
#ifdef DIFFUSE_SHADED
vec3 N=getNormal();vec3 baseColor=getBaseColor().rgb;vec3 diffuse=getDiffuseShadedColor(baseColor,N,lightDir,lightColor);
#ifdef HAS_TEXTURE_u_occlusionTexture
float ao=(texture(u_occlusionTexture,uv_2f).r-1.0)*u_aoIntensity+1.0;diffuse*=ao;
#endif
finalColor=vec4(mix(diffuse,baseColor,u_emissive_strength),1.0)*u_opacity;
#else
Material mat=getPBRMaterial();vec3 color=computeLightContribution(mat,lightDir,lightColor);float ao=1.0;
#if defined (HAS_TEXTURE_u_occlusionTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
#ifdef OCCLUSION_TEXTURE_TRANSFORM
vec2 uv=uv_2f.xy*u_occlusionTextureTransform.zw+u_occlusionTextureTransform.xy;
#else
vec2 uv=uv_2f;
#endif
ao=(texture(u_occlusionTexture,uv).x-1.0)*u_aoIntensity+1.0;color*=ao;
#endif
vec4 emissive=u_emissiveFactor;
#if defined(HAS_TEXTURE_u_emissionTexture) && defined(HAS_ATTRIBUTE_a_uv_2f)
emissive.rgb*=sRGBToLinear(texture(u_emissionTexture,uv_2f).rgb);
#endif
#ifdef APPLY_LUT_ON_GPU
float emissiveFactorLength=max(length(u_emissiveFactor.rgb),0.001);emissive.rgb=sRGBToLinear(applyLUT(u_lutTexture,linearTosRGB(emissive.rgb/emissiveFactorLength).rbg))*emissiveFactorLength;
#endif
color+=emissive.rgb;float opacity=mat.baseColor.w*u_opacity;
#ifdef HAS_ATTRIBUTE_a_pbr
float resEmission=v_roughness_metallic_emissive_alpha.z;resEmission*=v_height_based_emission_params.z+v_height_based_emission_params.w*pow(clamp(v_height_based_emission_params.x,0.0,1.0),v_height_based_emission_params.y);vec3 color_mix=v_color_mix.rgb;
#ifdef APPLY_LUT_ON_GPU
color_mix=applyLUT(u_lutTexture,color_mix);
#endif
color=mix(color,color_mix,min(1.0,resEmission));
#ifdef HAS_ATTRIBUTE_a_color_4f
float distance=length(vec2(1.3*max(0.0,abs(color_4f.x)-color_4f.z),color_4f.y));distance+= mix(0.5,0.0,clamp(resEmission-1.0,0.0,1.0));opacity*=v_roughness_metallic_emissive_alpha.w*saturate(1.0-distance*distance);
#endif
#endif
vec3 unlitColor=mat.baseColor.rgb*ao+emissive.rgb;color=mix(color,unlitColor,u_emissive_strength);color=linearTosRGB(color);color*=opacity;finalColor=vec4(color,opacity);
#endif
#ifdef DITHERED_DISCARD
if (abs(u_dithered_discard_threshold) < 1.0) {float ditherValue=fract(52.9829189*fract(0.06711056*gl_FragCoord.x+0.00583715*gl_FragCoord.y));float compareValue=mix(1.0-ditherValue,ditherValue,step(0.0,u_dithered_discard_threshold));if (abs(u_dithered_discard_threshold) < compareValue) {discard;}}
#endif
#ifdef FOG
finalColor=fog_dither(fog_apply_premultiplied(finalColor,v_fog_pos,v_position_height.w));
#endif
#ifdef RENDER_CUTOFF
finalColor*=v_cutoff_opacity;
#endif
#ifdef INDICATOR_CUTOUT
finalColor=applyCutout(finalColor,v_position_height.w);
#endif
#ifdef FEATURE_CUTOUT_VERTEX
apply_feature_cutout_dither(gl_FragCoord,v_cutout_factor);
#else
#ifdef FEATURE_CUTOUT
finalColor=apply_feature_cutout(finalColor,gl_FragCoord,get_cutout_factors(gl_FragCoord).x,0.0);
#endif
#endif
glFragColor=finalColor;
#ifdef OVERDRAW_INSPECTOR
glFragColor=vec4(1.0);
#endif
HANDLE_WIREFRAME_DEBUG;}`,`#include "_prelude_fog.vertex.glsl"
#include "_prelude_shadow.vertex.glsl"
in vec3 a_pos_3f;
#pragma mapbox: define-attribute highp vec3 normal_3f
#pragma mapbox: define-attribute highp vec2 uv_2f
#pragma mapbox: define-attribute highp vec3 color_3f
#pragma mapbox: define-attribute highp vec4 color_4f
#pragma mapbox: define-attribute-vertex-shader-only highp uvec4 pbr
#pragma mapbox: define-attribute-vertex-shader-only highp vec3 heightBasedEmissiveStrength
uniform mat4 u_matrix;uniform mat4 u_node_matrix;uniform mat4 u_lighting_matrix;uniform vec3 u_camera_pos;uniform vec4 u_color_mix;
#ifdef INSTANCED_ARRAYS
in vec4 a_normal_matrix0;in vec4 a_normal_matrix1;in vec4 a_normal_matrix2;in vec4 a_normal_matrix3;
#else
uniform highp mat4 u_normal_matrix;
#endif
#ifdef RENDER_SHADOWS
uniform mat4 u_light_matrix_0;uniform mat4 u_light_matrix_1;out highp vec4 v_pos_light_view_0;out highp vec4 v_pos_light_view_1;out float v_depth_shadows;
#endif
out vec4 v_position_height;out lowp vec4 v_color_mix;
#ifdef TERRAIN_FRAGMENT_OCCLUSION
out highp float v_depth;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
out highp float v_cutout_factor;
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
out lowp vec4 v_roughness_metallic_emissive_alpha;out mediump vec4 v_height_based_emission_params;
#endif
vec3 sRGBToLinear(vec3 srgbIn) {return pow(srgbIn,vec3(2.2));}void main() {
#pragma mapbox: initialize-attribute highp vec3 normal_3f
#pragma mapbox: initialize-attribute highp vec2 uv_2f
#pragma mapbox: initialize-attribute highp vec3 color_3f
#pragma mapbox: initialize-attribute highp vec4 color_4f
#pragma mapbox: initialize-attribute-custom highp uvec4 pbr
#pragma mapbox: initialize-attribute-custom highp vec3 heightBasedEmissiveStrength
highp mat4 normal_matrix;
#ifdef INSTANCED_ARRAYS
normal_matrix=mat4(a_normal_matrix0,a_normal_matrix1,a_normal_matrix2,a_normal_matrix3);
#else
normal_matrix=u_normal_matrix;
#endif
#ifdef FEATURE_CUTOUT_VERTEX
v_cutout_factor=1.0;
#endif
vec3 local_pos;mat3 rs;
#ifdef MODEL_POSITION_ON_GPU
vec3 pos_color=normal_matrix[0].xyz;vec4 translate=normal_matrix[1];vec3 pos_a=floor(pos_color);vec3 rgb=1.05*(pos_color-pos_a);float hidden=float(pos_a.x > EXTENT);float color_mix=pos_a.z/100.0;v_color_mix=vec4(sRGBToLinear(rgb),color_mix);float meter_to_tile=normal_matrix[0].w;vec4 pos=vec4(pos_a.xy,translate.z,1.0);rs[0].x=normal_matrix[1].w;rs[0].yz=normal_matrix[2].xy;rs[1].xy=normal_matrix[2].zw;rs[1].z=normal_matrix[3].x;rs[2].xyz=normal_matrix[3].yzw;vec4 pos_node=u_lighting_matrix*vec4(a_pos_3f,1.0);vec3 rotated_pos_node=rs*pos_node.xyz;vec3 pos_model_tile=(rotated_pos_node+vec3(translate.xy,0.0))*vec3(meter_to_tile,meter_to_tile,1.0);pos.xyz+=pos_model_tile;local_pos=pos.xyz;gl_Position=mix(u_matrix*pos,AWAY,hidden);pos.z*=meter_to_tile;v_position_height.xyz=pos.xyz-u_camera_pos;
#ifdef FEATURE_CUTOUT_VERTEX
highp vec4 ground_pos=vec4(pos_a.xy,0.0,1.0);highp vec4 cutout_clip_pos=mix(u_matrix*ground_pos,AWAY,hidden);highp vec3 cutout_ndc=cutout_clip_pos.xyz/cutout_clip_pos.w;vec2 uv=cutout_ndc.xy*0.5+0.5;highp float fragDepthNDC=cutout_ndc.z*0.5+0.5;
#ifdef FLIP_Y
fragDepthNDC=cutout_ndc.z;
#endif
highp float cutoutFactor=get_cutout_factors_vert(uv).x;highp float cutoutDepthNDC=sample_cutout_depth(u_cutout_depth_image,uv);highp float groundThreshold=0.001;highp float groundLimit=clamp((fragDepthNDC+groundThreshold-cutoutDepthNDC)/groundThreshold+0.5,0.0,1.0);v_cutout_factor=mix(1.0-cutoutFactor,1.0,groundLimit);
#endif
#else
local_pos=a_pos_3f;gl_Position=u_matrix*vec4(a_pos_3f,1);v_position_height.xyz=vec3(u_lighting_matrix*vec4(a_pos_3f,1));v_color_mix=vec4(sRGBToLinear(u_color_mix.rgb),u_color_mix.a);
#endif
v_position_height.w=a_pos_3f.z;
#ifdef HAS_ATTRIBUTE_a_pbr
vec4 albedo_c=decode_color(vec2(pbr.xy));vec2 e_r_m=unpack_float(float(pbr.z));vec2 r_m= unpack_float(e_r_m.y*16.0);r_m.r=r_m.r*16.0;v_color_mix=vec4(albedo_c.rgb,1.0);v_roughness_metallic_emissive_alpha=vec4(vec3(r_m,e_r_m.x)/255.0,albedo_c.a);v_roughness_metallic_emissive_alpha.z*=2.0;float heightBasedRelativeIntepolation=a_pos_3f.z*heightBasedEmissiveStrength.x+heightBasedEmissiveStrength.y;v_height_based_emission_params.x=heightBasedRelativeIntepolation;v_height_based_emission_params.y=heightBasedEmissiveStrength.z;vec2 emissionMultiplierValues=unpack_float(float(pbr.w))/256.0;v_height_based_emission_params.z=emissionMultiplierValues.x;v_height_based_emission_params.w=emissionMultiplierValues.y-emissionMultiplierValues.x;
#endif
#ifdef FOG
v_fog_pos=fog_position(local_pos);
#endif
#ifdef RENDER_CUTOFF
v_cutoff_opacity=cutoff_opacity(u_cutoff_params,gl_Position.z);
#endif
#ifdef TERRAIN_FRAGMENT_OCCLUSION
v_depth=gl_Position.z/gl_Position.w;
#ifdef CLIP_ZERO_TO_ONE
v_depth=-1.0+2.0*v_depth; 
#endif
#endif
#ifdef HAS_ATTRIBUTE_a_normal_3f
#ifdef MODEL_POSITION_ON_GPU
float x_squared_scale=dot(rs[0],rs[0]);float y_squared_scale=dot(rs[1],rs[1]);float z_squared_scale=dot(rs[2],rs[2]);vec3 squared_scale=vec3(x_squared_scale,y_squared_scale,z_squared_scale);normal_3f=rs*((u_lighting_matrix*vec4(normal_3f,0.0)).xyz/squared_scale);normal_3f=normalize(normal_3f);
#else
normal_3f=vec3(normal_matrix*vec4(normal_3f,0));
#endif
#endif
#ifdef HAS_ATTRIBUTE_a_pbr
#ifdef HAS_ATTRIBUTE_a_color_4f
v_roughness_metallic_emissive_alpha.w=clamp(color_4f.a*v_roughness_metallic_emissive_alpha.w*(v_roughness_metallic_emissive_alpha.z-1.0),0.0,1.0);
#endif
#endif
#ifdef RENDER_SHADOWS
vec4 shadow_pos=u_node_matrix*vec4(local_pos,1.0);
#ifdef NORMAL_OFFSET
#ifdef HAS_ATTRIBUTE_a_normal_3f
#ifdef MODEL_POSITION_ON_GPU
vec3 offset=shadow_normal_offset(vec3(-normal_3f.xy,normal_3f.z));shadow_pos.xyz+=offset*shadow_normal_offset_multiplier0();
#else
vec3 offset=shadow_normal_offset_model(normal_3f);shadow_pos.xyz+=offset*shadow_normal_offset_multiplier0();
#endif
#endif
#endif
v_pos_light_view_0=u_light_matrix_0*shadow_pos;v_pos_light_view_1=u_light_matrix_1*shadow_pos;v_depth_shadows=gl_Position.w;
#endif
}`),modelDepth:q(`void main() {}`,`in vec3 a_pos_3f;uniform mat4 u_matrix;
#ifdef MODEL_POSITION_ON_GPU
#ifdef INSTANCED_ARRAYS
in vec4 a_normal_matrix0;in vec4 a_normal_matrix1;in vec4 a_normal_matrix2;in vec4 a_normal_matrix3;
#else
uniform highp mat4 u_instance;
#endif
uniform highp mat4 u_node_matrix;
#endif
void main() {
#ifdef MODEL_POSITION_ON_GPU
highp mat4 instance;
#ifdef INSTANCED_ARRAYS
instance=mat4(a_normal_matrix0,a_normal_matrix1,a_normal_matrix2,a_normal_matrix3);
#else
instance=u_instance;
#endif
vec3 pos_color=instance[0].xyz;vec4 translate=instance[1];vec3 pos_a=floor(pos_color);float hidden=float(pos_a.x > EXTENT);float meter_to_tile=instance[0].w;vec4 pos=vec4(pos_a.xy,translate.z,1.0);mat3 rs;rs[0].x=instance[1].w;rs[0].yz=instance[2].xy;rs[1].xy=instance[2].zw;rs[1].z=instance[3].x;rs[2].xyz=instance[3].yzw;vec4 pos_node=u_node_matrix*vec4(a_pos_3f,1.0);vec3 rotated_pos_node=rs*pos_node.xyz;vec3 pos_model_tile=(rotated_pos_node+vec3(translate.xy,0.0))*vec3(meter_to_tile,meter_to_tile,1.0);pos.xyz+=pos_model_tile;gl_Position=mix(u_matrix*pos,AWAY,hidden);
#else
gl_Position=u_matrix*vec4(a_pos_3f,1);
#endif
}`),fillExtrusionDepth:q(`void main() {}`,`#include "_prelude_terrain.vertex.glsl"
#include "_prelude_material_table.vertex.glsl"
uniform mat4 u_matrix;uniform float u_edge_radius;uniform float u_width_scale;uniform float u_vertical_scale;
#ifdef TERRAIN
uniform int u_height_type;uniform int u_base_type;
#endif
in ivec4 a_pos_normal_ed;
#if defined(HAS_CENTROID) || defined(TERRAIN)
in uvec2 a_centroid_pos;
#endif
#ifdef RENDER_WALL_MODE
in ivec4 a_join_normal_inside;
#endif
#pragma mapbox: define highp float base
#pragma mapbox: define highp float height
#pragma mapbox: define highp float line_width
#pragma mapbox: define highp vec4 color
void main() {DECLARE_MATERIAL_TABLE_INFO
#pragma mapbox: initialize highp float base
#pragma mapbox: initialize highp float height
#pragma mapbox: initialize highp float line_width
#pragma mapbox: initialize highp vec4 color
base*=u_vertical_scale;height*=u_vertical_scale;vec3 top_up_ny=vec3(a_pos_normal_ed.xyz & 1);vec3 pos_nx=vec3(a_pos_normal_ed.xyz >> 1);base=max(0.0,base);height=max(0.0,top_up_ny.y==0.0 && top_up_ny.x==1.0 ? height-u_edge_radius : height);float t=top_up_ny.x;vec2 centroid_pos=vec2(0.0);
#if defined(HAS_CENTROID) || defined(TERRAIN)
centroid_pos=vec2(a_centroid_pos);
#endif
vec3 pos;
#ifdef TERRAIN
bool is_flat_height=centroid_pos.x !=0.0 && u_height_type==1;bool is_flat_base=centroid_pos.x !=0.0 && u_base_type==1;float ele=elevation(pos_nx.xy);bool is_elevation_encoded=centroid_pos.y==0.0 || (centroid_pos.y > 0.0 && int(centroid_pos.y)-(int(centroid_pos.y)/8)*8==7);float c_ele=is_flat_height || is_flat_base ? (is_elevation_encoded ? elevationFromUint16(centroid_pos.x) : flatElevation(centroid_pos)) : ele;float h_height=is_flat_height ? max(c_ele+height,ele+base+2.0) : ele+height;float h_base=is_flat_base ? max(c_ele+base,ele+base) : ele+(base==0.0 ?-5.0 : base);float h=t > 0.0 ? max(h_base,h_height) : h_base;pos=vec3(pos_nx.xy,h);
#else
pos=vec3(pos_nx.xy,t > 0.0 ? height : base);
#endif
#ifdef RENDER_WALL_MODE
vec3 join_normal_inside=vec3(a_join_normal_inside);vec2 wall_offset=u_width_scale*line_width*(join_normal_inside.xy/EXTENT);pos.xy+=(1.0-join_normal_inside.z)*wall_offset*0.5;pos.xy-=join_normal_inside.z*wall_offset*0.5;
#endif
float hidden=float((centroid_pos.x==0.0 && centroid_pos.y==1.0) || (color.a==0.0));gl_Position=mix(u_matrix*vec4(pos,1),AWAY,hidden);}`),fillExtrusionGroundEffect:q(`uniform highp float u_ao_pass;uniform highp float u_opacity;uniform highp float u_flood_light_intensity;uniform highp vec3 u_flood_light_color;uniform highp float u_attenuation;uniform sampler2D u_fb;uniform float u_fb_size;
#ifdef SDF_SUBPASS
in highp vec2 v_pos;in highp vec4 v_line_segment;in highp float v_flood_light_radius_tile;in highp vec2 v_ao;float line_df(highp vec2 a,highp vec2 b,highp vec2 p) {highp vec2 ba=b-a;highp vec2 pa=p-a;highp float r=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-r*ba);}
#ifdef FOG
in highp float v_fog;
#endif
#endif
void main() {
#ifdef CLEAR_SUBPASS
vec4 color=vec4(1.0);
#ifdef CLEAR_FROM_TEXTURE
color=texture(u_fb,gl_FragCoord.xy/vec2(u_fb_size));
#endif
glFragColor=color;
#else
#ifdef SDF_SUBPASS
highp float d=line_df(v_line_segment.xy,v_line_segment.zw,v_pos);highp float effect_radius=mix(v_flood_light_radius_tile,v_ao.y,u_ao_pass);d/=effect_radius;d=min(d,1.0);d=1.0-pow(1.0-d,u_attenuation);highp float effect_intensity=mix(u_flood_light_intensity,v_ao.x,u_ao_pass);highp float fog=1.0;
#ifdef FOG
fog=v_fog;
#endif
#ifdef RENDER_CUTOFF
fog*=v_cutoff_opacity;
#endif
glFragColor=vec4(vec3(0.0),mix(1.0,d,effect_intensity*u_opacity*fog));
#else
#ifdef USE_MRT1
out_Target1=vec4(1.0-texture(u_fb,gl_FragCoord.xy/vec2(u_fb_size)).a,0.0,0.0,0.0);
#else
vec4 color=mix(vec4(u_flood_light_color,1.0),vec4(vec3(0.0),1.0),u_ao_pass);
#ifdef OVERDRAW_INSPECTOR
color=vec4(1.0);
#endif
glFragColor=color;
#endif
#endif
HANDLE_WIREFRAME_DEBUG;
#endif
}`,`#include "_prelude_fog.vertex.glsl"
in highp ivec4 a_pos_end;in highp int a_angular_offset_factor;in highp uint a_hidden_by_landmark;
#ifdef SDF_SUBPASS
out highp vec2 v_pos;out highp vec4 v_line_segment;out highp float v_flood_light_radius_tile;out highp vec2 v_ao;
#ifdef FOG
out highp float v_fog;
#endif
#endif
uniform highp float u_flood_light_intensity;uniform highp mat4 u_matrix;uniform highp float u_ao_pass;uniform highp float u_meter_to_tile;uniform highp float u_edge_radius;uniform highp float u_dynamic_offset;uniform highp vec2 u_ao;
#pragma mapbox: define highp float flood_light_ground_radius
const float TANGENT_CUTOFF=4.0;const float NORM=32767.0;void main() {
#pragma mapbox: initialize highp float flood_light_ground_radius
vec4 pos_end=vec4(a_pos_end);vec2 p=pos_end.xy;vec2 q=floor(pos_end.zw*0.5);vec2 start_bottom=pos_end.zw-q*2.0;float fl_ground_radius=abs(flood_light_ground_radius);float direction=flood_light_ground_radius < 0.0 ?-1.0 : 1.0;float flood_radius_tile=fl_ground_radius*u_meter_to_tile;vec2 v=normalize(q-p);float ao_radius=u_ao.y/3.5;float effect_radius=mix(flood_radius_tile,ao_radius,u_ao_pass)+u_edge_radius;float angular_offset_factor=float(a_angular_offset_factor)/NORM*TANGENT_CUTOFF;float angular_offset=direction*angular_offset_factor*effect_radius;float top=1.0-start_bottom.y;float side=(0.5-start_bottom.x)*2.0;vec2 extrusion_parallel=v*side*mix(u_dynamic_offset,angular_offset,top);vec2 perp=vec2(v.y,-v.x);vec2 extrusion_perp=direction*perp*effect_radius*top;vec3 pos=vec3(mix(q,p,start_bottom.x),0.0);pos.xy+=extrusion_parallel+extrusion_perp;
#ifdef SDF_SUBPASS
v_pos=pos.xy;v_line_segment=vec4(p,q)+perp.xyxy*u_edge_radius;v_flood_light_radius_tile=flood_radius_tile;v_ao=vec2(u_ao.x,ao_radius);
#ifdef FOG
v_fog_pos=fog_position(pos);v_fog=1.0-fog(v_fog_pos);
#endif
#endif
float hidden_by_landmark=0.0;
#ifdef HAS_CENTROID
hidden_by_landmark=float(a_hidden_by_landmark);
#endif
float isFloodlit=float(fl_ground_radius > 0.0 && u_flood_light_intensity > 0.0);float hidden=mix(1.0-isFloodlit,isFloodlit,u_ao_pass);hidden+=hidden_by_landmark;gl_Position=mix(u_matrix*vec4(pos,1.0),AWAY,float(hidden > 0.0));
#ifdef RENDER_CUTOFF
v_cutoff_opacity=cutoff_opacity(u_cutoff_params,gl_Position.z);
#endif
}`),groundShadow:q(`#include "_prelude_shadow.fragment.glsl"
precision highp float;uniform vec3 u_ground_shadow_factor;in vec4 v_pos_light_view_0;in vec4 v_pos_light_view_1;
#ifdef FOG
in float v_fog_opacity;
#endif
void main() {float light=shadowed_light_factor_plane_bias(v_pos_light_view_0,v_pos_light_view_1,1.0/gl_FragCoord.w);vec3 shadow=mix(u_ground_shadow_factor,vec3(1.0),light);
#ifdef RENDER_CUTOFF
shadow=mix(vec3(1.0),shadow,cutoff_opacity(u_cutoff_params,1.0/gl_FragCoord.w));
#endif
#ifdef FOG
shadow=mix(shadow,vec3(1.0),v_fog_opacity);
#endif
#ifdef INDICATOR_CUTOUT
shadow=mix(shadow,vec3(1.0),1.0-applyCutout(vec4(1.0),0.0).r);
#endif
#ifdef FEATURE_CUTOUT
vec2 uv=gl_FragCoord.xy*u_inv_viewport_size.xy;
#ifdef FLIP_Y
uv.y=1.0-uv.y;
#endif
highp float cutoutFactor=get_cutout_factors(gl_FragCoord).y;highp float cutoutDepthNDC=sample_cutout_depth_bilinear(u_cutout_depth_image,uv);highp float fragDepthNDC=gl_FragCoord.z/u_feature_cutout_params.w;highp float groundThreshold=-0.001;highp float groundLimit=clamp((fragDepthNDC+groundThreshold-cutoutDepthNDC)/groundThreshold+0.5,0.0,1.0);cutoutFactor=mix(0.0,cutoutFactor,groundLimit);shadow=mix(shadow,vec3(1.0),cutoutFactor);
#endif
glFragColor=vec4(shadow,1.0);}`,`#include "_prelude_fog.vertex.glsl"
uniform mat4 u_matrix;uniform mat4 u_light_matrix_0;uniform mat4 u_light_matrix_1;in ivec2 a_pos;out vec4 v_pos_light_view_0;out vec4 v_pos_light_view_1;
#ifdef FOG
out float v_fog_opacity;
#endif
void main() {gl_Position=u_matrix*vec4(a_pos,0.0,1.0);v_pos_light_view_0=u_light_matrix_0*vec4(a_pos,0.0,1.0);v_pos_light_view_1=u_light_matrix_1*vec4(a_pos,0.0,1.0);
#ifdef FOG
v_fog_pos=fog_position(vec2(a_pos));v_fog_opacity=fog(v_fog_pos);
#endif
}`)},ut=(e,t)=>({u_matrix:e,u_ground_shadow_factor:t}),dt={model:e=>({u_matrix:new H(e),u_lighting_matrix:new H(e),u_normal_matrix:new H(e),u_node_matrix:new H(e),u_lightpos:new C(e),u_lightintensity:new n(e),u_lightcolor:new C(e),u_camera_pos:new C(e),u_opacity:new n(e),u_baseColorFactor:new s(e),u_emissiveFactor:new s(e),u_metallicFactor:new n(e),u_roughnessFactor:new n(e),u_baseTextureIsAlpha:new y(e),u_alphaMask:new y(e),u_alphaCutoff:new n(e),u_baseColorTexture:new y(e),u_metallicRoughnessTexture:new y(e),u_normalTexture:new y(e),u_occlusionTexture:new y(e),u_emissionTexture:new y(e),u_lutTexture:new y(e),u_color_mix:new s(e),u_aoIntensity:new n(e),u_emissive_strength:new n(e),u_occlusionTextureTransform:new s(e),u_dithered_discard_threshold:new n(e)}),modelDepth:e=>({u_matrix:new H(e),u_instance:new H(e),u_node_matrix:new H(e)}),groundShadow:e=>({u_matrix:new H(e),u_ground_shadow_factor:new C(e)}),fillExtrusionDepth:Oe,fillExtrusionGroundEffect:ke},ft=[];function pt(e){return ft[e]=ft[e]||new Float64Array(16)}var mt=[],ht=new Float32Array(16),gt=class{constructor(e,t){this.aabb=e,this.lastCascade=t}},_t=class{add(e,t){let n=this.receivers[e.key];n===void 0?this.receivers[e.key]=new gt(t,null):(n.aabb.min[0]=Math.min(n.aabb.min[0],t.min[0]),n.aabb.min[1]=Math.min(n.aabb.min[1],t.min[1]),n.aabb.min[2]=Math.min(n.aabb.min[2],t.min[2]),n.aabb.max[0]=Math.max(n.aabb.max[0],t.max[0]),n.aabb.max[1]=Math.max(n.aabb.max[1],t.max[1]),n.aabb.max[2]=Math.max(n.aabb.max[2],t.max[2]))}clear(){this.receivers={}}get(e){return this.receivers[e.key]}computeRequiredCascades(e,t,n){let r=m.fromPoints(e.points),i=0;for(let e in this.receivers){let a=this.receivers[e];if(!a||!r.intersectsAabb(a.aabb))continue;a.aabb.min=r.closestPoint(a.aabb.min),a.aabb.max=r.closestPoint(a.aabb.max);let o=a.aabb.getCorners();for(let e=0;e<n.length;e++){let r=!0;for(let i of o){let a=[i[0]*t,i[1]*t,i[2]];if(j(a,a,n[e].matrix),a[0]<-1||a[0]>1||a[1]<-1||a[1]>1){r=!1;break}}if(a.lastCascade=e,i=Math.max(i,e),r)break}}return i+1}};function vt(e,n,i){let a=r([],ge([],i,n),ge([],e,n)),o=t(a);return o===0?[0,0,1,0]:(U(a,a,1/o),[a[0],a[1],a[2],-de(a,n)])}function yt(e,t,n,r,i,a){let o=e.zoom,s=e.scale,l=e.worldSize,u=1/l,d=e.aspect,f=Math.sqrt(1+d*d)*Math.tan(.5*e.fovX),p=f*f,m=r-n,h=r+n,g,_;p>m/h?(g=r,_=r*f):(g=.5*h*(1+p),_=.5*Math.sqrt(m*m+2*(r*r+n*n)*p+h*h*p*p));let v=e.projection.pixelsPerMeter(e.center.lat,l),y=e._camera.getCameraToWorldMercator(),b=[0,0,-g*u];j(b,b,y);let x=_*u,S=function(t){return t[0]/=s,t[1]/=s,t[2]=le(t[2],e._center.lat),t},C=e._edgeInsets;if(!(C.left===0&&C.top===0&&C.right===0&&C.bottom===0||C.left===C.right&&C.top===C.bottom)){let t=e._camera.getWorldToCamera(e.worldSize,e.projection.zAxisUnit===`meters`?v:1),i=e._camera.getCameraToClipPerspective(e._fov,e.width/e.height,n,r);i[8]=2*-e.centerOffset.x/e.width,i[9]=2*e.centerOffset.y/e.height;let a=new Float64Array(16);O(a,i,t);let s=new Float64Array(16);V(s,a);let c=be.fromInvProjectionMatrix(s,l,o,!0);for(let e of c.points){let t=S(e);x=Math.max(x,oe(re([],b,t)))}}x*=i/(i-1);let ee=Math.acos(t[2]),w=Math.atan2(-t[0],-t[1]),T=new Te;T.position=b,T.setPitchBearing(ee,w);let E=T.getWorldToCamera(l,v),k=x*l,A=Math.min(e._mercatorZfromZoom(17)*l*-2,-2*k),M=T.getCameraToClipOrthographic(-k,k,-k,k,A,(k+a*v)/t[2]),N=new Float64Array(16);D(N,M,E);let te=P(Math.floor(1e6*b[0])/1e6*l,Math.floor(1e6*b[1])/1e6*l,0),F=.5*i,I=[0,0,0];j(I,te,N),U(I,I,F);let ne=[Math.floor(I[0]),Math.floor(I[1]),Math.floor(I[2])],L=[0,0,0];ge(L,I,ne),U(L,L,-1/F);let R=new Float64Array(16);return me(R),c(R,R,L),D(N,R,N),[N,k]}var bt={loaded:!0,drawModels:function(e,t,n,r){if(e.renderPass===`opaque`)return;let a=n.paint.get(`model-opacity`).constantOr(1),s=n.paint.get(`model-elevation-reference`),c=s===`ground`,u=s===`ground`;if(a===0)return;let d=n.paint.get(`model-cast-shadows`);if(e.renderPass===`shadow`&&(!d||e.terrain&&a<.65&&n._transitionablePaint._values[`model-opacity`].value.expression instanceof pe))return;let f=e.shadowRenderer,g=n.paint.get(`model-receive-shadows`);f&&(f.useNormalOffset=!0,g||(f.enabled=!1));let v=()=>{f&&(f.useNormalOffset=!0,g||(f.enabled=!0))},y=t.getSource();if(e.renderPass===`light-beam`&&y.type!==`batched-model`)return;if(y.type===`vector`||y.type===`geojson`)return function(e,t,n,r,i){let a=e.transform,o=a.projection.name===`globe`,s=a.getFreeCameraOptions().position;if(!e.modelManager)return;let c=e.modelManager;n.modelManager=c;let u=e.shadowRenderer;if(!Object.hasOwn(n._unevaluatedLayout._values,`model-id`))return;let d=n._unevaluatedLayout._values[`model-id`],f={...n.layout.get(`model-id`).parameters},p=e.style.order.indexOf(n.fqid),m=n.paint.get(`model-opacity`).constantOr(1);for(let g of r){let r=t.getTile(g).getBucket(n);if(!r||r.projection.name!==a.projection.name)continue;let _=r.getModelUris();_&&!r.modelsRequested&&(c.addModelsFromBucket(_,i),r.modelsRequested=!0),o?f.zoom=g.overscaledZ:f.zoom=rt(g,a);let v=d.possiblyEvaluate(f);if(nt(e,r,g),$.shadowUniformsInitialized=!1,$.useSingleShadowCascade=!!u&&u.getMaxCascadeForTile(g.toUnwrapped())===0,e.renderPass===`shadow`&&u){if(e.currentShadowCascade===1&&r.isInsideFirstShadowMapFrustum)continue;let t=a.calculatePosMatrix(g.toUnwrapped(),a.worldSize);if($.tileMatrix.set(t),$.shadowTileMatrix.set(u.calculateShadowPassMatrixFromMatrix(t)),$.aabb.min=[0,0,0],$.aabb.max[0]=$.aabb.max[1]=8192,$.aabb.max[2]=0,ot(r,$,e,n.scope))continue}let y=1<<g.canonical.z,b=[((s.x-g.wrap)*y-g.canonical.x)*z,(s.y*y-g.canonical.y)*z,s.z*y*z];e.conflationActive&&Object.keys(r.instancesPerModel).length>0&&e.style.isLayerClipped(n,t.getSource())&&r.updateReplacement(g,e.replacementSource,p,n.scope)&&(r.uploaded=!1,r.upload(e.context));let S=0,C=[],T=[],D=[];for(let t in r.instancesPerModel){let a=r.instancesPerModel[t];a.features.length>0&&!o&&(t=v.evaluate(a.features[0].feature,{}));let u=c.getModel(t,i);if(u||c.hasURLBeenRequested(t)||r.modelUris.includes(t)||(r.modelUris.push(t),r.modelsRequested=!1),u&&u.uploaded)if(o){let t=U([],[s.x,s.y,s.z],e.transform.worldSize);L(t,t);for(let n=0;n<a.instancedDataArray.length;++n){let i=[0,0,0],o=[1,1,1],s=l(),c=a.tileCoordinatesForInstance(n),d=a.transformForInstance(n);x(o,d),N(s,d),ee(i,s);let f=a.translationForInstance(n),p=new ce(0,0);R(r.canonical,p,c.x,c.y);let g=E();h(g,u,e.transform,p,i,o,f,!0,!1,!1);let _=a.colorForInstance(n),v=ne([],t),y=w([],[1,1,1/I(p.lat,e.transform.zoom)]);D.push({zScaleMatrix:y,negCameraPosMatrix:v});for(let t of u.nodes)Xe(e,t,g,e.transform.expandedFarZProjMatrix,S,C,T,u.materialOverrides,m,_);++S}}else for(let t of u.nodes)it(e,n,t,a,b,g,$)}if(o)if(e.renderPass===`shadow`){for(let t of T)Ze(t.mesh,t.nodeModelMatrix,e,n);for(let t of C)Ze(t.mesh,t.nodeModelMatrix,e,n)}else tt(e,n,C,T,D)}}(e,t,n,r,Ye(e,n)),void v();if(!y.loaded())return;if(y.type===`batched-model`)return function(e,t,n,r){n.resetLayerRenderingStats(e);let a=e.context,s=e.transform,c=e.style.fog,l=e.shadowRenderer;if(s.projection.name!==`mercator`)return void ae(`Drawing 3D landmark models for ${s.projection.name} projection is not yet implemented`);let u=e.transform.getFreeCameraOptions().position,d=U([],[u.x,u.y,u.z],e.transform.worldSize),f=ne([],L([],d)),h=I(s.center.lat,s.zoom),g=D([],f,w([],[1,1,1/h])),v=n.paint.get(`model-opacity`).constantOr(1),y=new J(a.gl.LEQUAL,J.ReadWrite,e.depthRangeFor3D),b=new J(a.gl.LEQUAL,J.ReadOnly,e.depthRangeFor3D),x=new m([1/0,1/0,1/0],[-1/0,-1/0,-1/0]),S=e.renderPass===`shadow`,C=e.renderPass===`light-beam`,ee=n.paint.get(`model-color-use-theme`).constantOr(`default`)===`none`,T=S&&l?l.getCurrentCascadeFrustum():s.getFrustum(s.scaleZoom(s.worldSize)),E=n.paint.get(`model-front-cutoff`),O=E[2]<1,k=Ee(e,n.paint.get(`model-cutoff-fade-range`)),A=n.getLayerRenderingStats();(function(e,t,n,r){let i=e.terrain?e.terrain.exaggeration():0,a=e.transform.zoom;for(let o of r){let r=t.getTile(o).getBucket(n);r&&(r.setFilter(n.filter),e.conflationActive&&r.updateReplacement(o,e.replacementSource),r.evaluateTransform(e,n),e.terrain&&i>0&&r.elevationUpdate(e.terrain,i,o,n.source),r.needsReEvaluation(e,a,n)&&r.evaluate(n))}})(e,t,n,r),function(){let u=new Map,f,m,w;O?(f=r.length-1,m=-1,w=-1):(f=0,m=r.length,w=1);let M=he(),N=new _(0,0);for(let _=f;_!==m;_+=w){let f=r[_],m=t.getTile(f).getBucket(n);if(!m||!m.uploaded)continue;let w=!1;l&&(w=l.getMaxCascadeForTile(f.toUnwrapped())===0);let P=s.calculatePosMatrix(f.toUnwrapped(),s.worldSize),te=!!(m.modelTraits&ue.HasMapboxMeshFeatures);D(Ie,g,P),D(Le,s.expandedFarZProjMatrix,P),V(Re,Ie),i(Re,Re);let F=!S&&l&&l.enabled?l.computeCascadeTileMatrices(P):null;!S&&O&&(V(Q,P),j(M,d,Q),N.x=M[0],N.y=M[1]);let I=[];m.setFilter(n.filter);for(let t of m.getNodesInfo()){if(t.hiddenByReplacement||!t.node.meshes)continue;let n=t.node,r=0;e.terrain&&n.elevation&&(r=n.elevation*e.terrain.exaggeration());let i=(()=>{let e=t.aabb,n=x.min,i=x.max;return n[0]=e.min[0],n[1]=e.min[1],n[2]=e.min[2]+r,i[0]=e.max[0],i[1]=e.max[1],i[2]=e.max[2]+r,j(n,n,P),j(i,i,P),x})(),a=t.evaluatedScale;if(a[0]<=1&&a[1]<=1&&a[2]<=1&&i.intersects(T)===0)continue;if(!S){let n=i.min,r=i.max;He[0]=.5*(n[0]+r[0]),He[1]=.5*(n[1]+r[1]),He[2]=.5*(n[2]+r[2]);let s=o(d,He)*h,c=e._debugParams.lodSwitchDistance,l=c>=0;if(l&&c>=9999)t.targetLod=0;else{let i;if(l)i=c;else{let e=(r[2]-n[2])*h*a[2],t=Math.max(r[0]-n[0],r[1]-n[1])*h*Math.max(a[0],a[1]),o;o=e>=30?1:t>=80?.5:Math.max(e,t)>=20?.25:0,i=2e3+3e3*o}at(t,s,Math.min(e.frameTimeDelta,1e3/30),i,e._debugParams.lodSwitchFadeDuration)}}if(!S&&O){let e=1/6;t.cameraCollisionOpacity=d[0]>i.min[0]&&d[0]<i.max[0]&&d[1]>i.min[1]&&d[1]<i.max[1]&&d[2]*h<i.max[2]&&n.footprint&&ye(N,n.footprint)?Math.max(t.cameraCollisionOpacity-e,0):Math.min(1,t.cameraCollisionOpacity+e)}let c=1/ie(f.canonical),l=n.anchor?n.anchor[0]:0,u=n.anchor?n.anchor[1]:0,p=[l*(a[0]-1)+t.evaluatedTranslation[0]*c,u*(a[1]-1)+t.evaluatedTranslation[1]*c,r+t.evaluatedTranslation[2]],m=Ke(new Float64Array(16),P,p,a),g=D([],m,n.globalMatrix),_=D([],s.expandedFarZProjMatrix,g),y=_[2]*l+_[6]*u+_[10]*r+_[14];n.hidden=!1;let b=v;S||(O&&(b*=t.cameraCollisionOpacity,b*=ct(m,s,t.aabb,E)),b*=st(k,y)),b===0?n.hidden=!0:I.push({nodeInfo:t,depth:y,opacity:b,wvpForNode:_,nodeModelMatrix:g,tileModelMatrix:m,tileTranslation:p})}S||I.sort((e,t)=>!O||e.opacity===1&&t.opacity===1?e.depth<t.depth?-1:1:e.opacity===1?-1:t.opacity===1?1:e.depth>t.depth?-1:1);for(let t of I){let r=t.nodeInfo,i=r.node,o=null;if(e._debugParams.show3DModelFootprints&&i.footprint){let e=i.id||i.name||`footprint`;if(!u.has(e)){let n=Ke(new Float64Array(16),Le,t.tileTranslation,t.nodeInfo.evaluatedScale);u.set(e,{node:i,mvp:n})}}let d=t.nodeInfo.evaluatedScale;Ke(Z,Ie,t.tileTranslation,d),Be[0]=1/d[0],Be[1]=-1/d[1],Be[2]=1/d[2],p(Q,Re,Be),D(Z,Z,i.globalMatrix);let f=te?0:r.evaluatedRMEA[0][2],m=r.targetLod,h=i.lodMeshes&&i.lodMeshes.length>0,g=h&&m>0&&m<1;if(S&&h&&Math.round(m)===1)continue;let _=!S&&c?Ge(Fe,t.nodeModelMatrix,e.transform):null,v=S&&l?l.calculateShadowPassMatrixFromMatrix(t.nodeModelMatrix):null,x=g?2:1,T=h&&Math.round(m)===1;for(let u=0;u<x;++u){let d=g?u===1:T,p=d?i.lodMeshes:i.meshes,h=g?d?-m:1-m:1;for(let u=0;u<p.length;++u){let m=p[u],x=!d&&u===i.lightMeshIndex,T=t.wvpForNode;if(x){if(!C&&!e.terrain&&e.shadowRenderer){e.currentLayer<e.firstLightBeamLayer&&(e.firstLightBeamLayer=e.currentLayer);continue}T=Ke(ze,Le,t.tileTranslation,t.nodeInfo.evaluatedScale)}else if(C)continue;let E={defines:[]},D=[],O=!!m.normalBuffer;if(!S&&l&&(l.useNormalOffset=O),qe(E.defines,D,m,e,ee?null:n.lut),te||E.defines.push(`DIFFUSE_SHADED`),w&&E.defines.push(`SHADOWS_SINGLE_CASCADE`),A&&(S?A.numRenderedVerticesInShadowPass+=m.vertexArray.length:A.numRenderedVerticesInTransparentPass+=m.vertexArray.length),S){Ze(m,t.nodeModelMatrix,e,n,v);continue}if(c&&s.projection.name!==`globe`){let e=m.aabb.min,t=m.aabb.max,[n,r]=c.getOpacityForBounds(_,e[0],e[1],t[0],t[1]);E.overrideFog=n>=.05||r>=.05}let k=m.material,j;k.occlusionTexture&&k.occlusionTexture.offsetScale&&(j=k.occlusionTexture.offsetScale,E.defines.push(`OCCLUSION_TEXTURE_TRANSFORM`)),g&&E.defines.push(`DITHERED_DISCARD`);let M=e.getOrCreateProgram(`model`,E);if(!S&&l&&l.enabled)if(o!==O){for(let e=0;e<F.length;e++)Ke(We[e]=We[e]||new Float64Array(16),F[e],t.tileTranslation,t.nodeInfo.evaluatedScale);l.setupShadowsFromCascadeMatrices(We,M,O),o=O}else M.setShadowUniformValues(a,l.getShadowUniformValues());e.uploadCommonUniforms(a,M,null,_);let N=k.pbrMetallicRoughness;N.metallicFactor=.9,N.roughnessFactor=.5;let P=Ne(T,Z,Q,i.globalMatrix,e,t.opacity,N.baseColorFactor,k.emissiveFactor,N.metallicFactor,N.roughnessFactor,k,f,n,Ue,j,void 0,void 0,h,M.fixedDefines.includes(`LIGHTING_3D_MODE`));!x&&(r.hasTranslucentParts||t.opacity<1)&&M.draw(e,a.gl.TRIANGLES,y,K.disabled,G.disabled,Y.backCCW,P,n.id,m.vertexBuffer,m.indexBuffer,m.segments,n.paint,e.transform.zoom,void 0,D),M.draw(e,a.gl.TRIANGLES,x?b:y,K.disabled,x||t.opacity<1||r.hasTranslucentParts?G.alphaBlended:G.unblended,Y.backCCW,P,n.id,m.vertexBuffer,m.indexBuffer,m.segments,n.paint,e.transform.zoom,void 0,D)}}}}if(e._debugParams.show3DModelFootprints&&u.size>0){let t=Array.from(u.keys()).sort();for(let n of t){let{node:t,mvp:r}=u.get(n);Qe(e,0,t,r)}}}()}(e,t,n,r),void v();if(y.type!==`model`)return;let b=y.getModels(),S=[],C=e.transform.getFreeCameraOptions().position,T=U([],[C.x,C.y,C.z],e.transform.worldSize);L(T,T);let O=[],k=[],A=0;for(let r of b){let i=t.getFeatureState(``,r.id),a={type:`Unknown`,id:r.id,properties:r.featureProperties},o=n.paint.get(`model-rotation`).evaluate(a,i),s=n.paint.get(`model-scale`).evaluate(a,i),l=n.paint.get(`model-translation`).evaluate(a,i),d=n.paint.get(`model-opacity`).evaluate(a,i);$e(n,r.id,i,r.featureProperties,r.nodeOverrideNames,r.nodeOverrides),et(n,r.id,i,r.featureProperties,r.materialOverrideNames,r.materialOverrides),r.nodeOverrides.size>0&&r.computeBoundsAndApplyParent(),r.computeModelMatrix(e,o,s,l,u,c,!1);let f=ne([],T),p=w([],[1,1,1/I(r.position.lat,e.transform.zoom)]);S.push({zScaleMatrix:p,negCameraPosMatrix:f});for(let t of r.nodes)Xe(e,t,r.matrix,e.transform.expandedFarZProjMatrix,A,O,k,r.materialOverrides,d,void 0,r.lightOverrides);A++}if(O.sort((e,t)=>t.depth-e.depth),e.renderPass!==`shadow`){if(e._debugParams.show3DModelFootprints){let t=e.transform.projMatrix,n=new Map,r=(e,r)=>{if(e.footprint){let i=e.id||e.name||`footprint`;if(!n.has(i)){let a=D([],t,r);n.set(i,{node:e,mvp:a})}}};for(let e of k)r(e.node,e.modelMatrix);for(let e of O)r(e.node,e.modelMatrix);let i=Array.from(n.keys()).sort();for(let t of i){let{node:r,mvp:i}=n.get(t);Qe(e,0,r,i)}}tt(e,n,O,k,S),v()}else{for(let t of k)Ze(t.mesh,t.nodeModelMatrix,e,n);for(let t of O)Ze(t.mesh,t.nodeModelMatrix,e,n);v()}},prepare:function(e,t,n){let r=t.getSource();if(!r.loaded())return;if(r.type===`vector`||r.type===`geojson`)return void(n.modelManager&&n.modelManager.upload(n,Ye(n,e)));if(r.type===`batched-model`||r.type!==`model`)return;let i=r.getModels();for(let e of i)e.upload(n.context)},shaders:lt,programUniforms:dt,ShadowRenderer:class{constructor(e){this.painter=e,this._enabled=!1,this._drawShadowAfterLayer=-1,this._numCascadesToRender=0,this._cascades=[],this._groundShadowTiles=[],this._receivers=new _t,this._depthMode=new J(e.context.gl.LEQUAL,J.ReadWrite,[0,1]),this._uniformValues=De(),this._forceDisable=!1,this._devtoolsFolder=null,this.useNormalOffset=!1,this._shadowParameters={cascadeCount:2,normalOffset:3,shadowMapResolution:2048}}destroy(){for(let e of this._cascades)e.texture.destroy(),e.framebuffer.destroy();this._cascades=[]}updateShadowParameters(e,t){let n=this.painter;if(this._enabled=!1,this._drawShadowAfterLayer=-1,this._receivers.clear(),!t||!t.properties)return;let r=t.properties.get(`shadow-intensity`),i=t.properties.get(`shadow-draw-before-layer`);if(!t.shadowsEnabled()||r<=0)return;let a=-1,o=0;for(let t of n.style.order){let r=n.style._mergedLayers[t];r.hasShadowPass()&&!r.isHidden(e.zoom)&&(a=o),!i||i!==t&&i!==r.slot||(this._drawShadowAfterLayer=o>0?o-1:0),o+=1}if(this._enabled=a>=0,!this.enabled)return;this._drawShadowAfterLayer<0&&(this._drawShadowAfterLayer=a);let s=n.context,c=this._shadowParameters.shadowMapResolution,l=this._shadowParameters.shadowMapResolution;if(this._cascades.length===0||this._shadowParameters.shadowMapResolution!==this._cascades[0].texture.size[0]){this._cascades=[];for(let e=0;e<this._shadowParameters.cascadeCount;++e){let e=s.gl,t=s.createFramebuffer(c,l,0,`texture`),n=new M(s,{width:c,height:l,data:null},e.DEPTH_COMPONENT16);t.depthAttachment.set(n.texture),this._cascades.push({framebuffer:t,texture:n,matrix:[],far:0,boundingSphereRadius:0,frustum:new be,scale:0})}}this.shadowDirection=Ce(t);let u=0;if(e.elevation){let t=e.elevation,n=[1e4,-1e4];t.visibleDemTiles.filter(e=>e.dem).forEach(e=>{let t=e.dem.tree;n[0]=Math.min(n[0],t.minimums[0]),n[1]=Math.max(n[1],t.maximums[0])}),n[0]!==1e4&&(u=(n[1]-n[0])*t.exaggeration())}let d=1.5*e.cameraToCenterDistance,f=3*d,p=new Float64Array(16);for(let t=0;t<this._cascades.length;++t){let n=this._cascades[t],r=e.height/50,i=1;this._shadowParameters.cascadeCount===1?i=f:t===0?i=d:(r=d,i=f);let[a,o]=yt(e,this.shadowDirection,r,i,this._shadowParameters.shadowMapResolution,u);n.scale=e.scale,n.matrix=a,n.boundingSphereRadius=o,V(p,n.matrix),n.frustum=be.fromInvProjectionMatrix(p,1,0,!0),n.far=i}let m=this._cascades.length-1;this._uniformValues.u_fade_range=[.75*this._cascades[m].far,this._cascades[m].far],this._uniformValues.u_shadow_intensity=r,this._uniformValues.u_shadow_direction=[this.shadowDirection[0],this.shadowDirection[1],this.shadowDirection[2]],this._uniformValues.u_shadow_texel_size=1/this._shadowParameters.shadowMapResolution,this._uniformValues.u_shadow_map_resolution=this._shadowParameters.shadowMapResolution,this._uniformValues.u_shadowmap_0=X.ShadowMap0,this._uniformValues.u_shadowmap_1=X.ShadowMap0+1,this._groundShadowTiles=n.transform.coveringTiles({tileSize:512,renderWorldCopies:!0});let h=n.transform.elevation;for(let e of this._groundShadowTiles){let t={min:0,max:0};if(h){let n=h.getMinMaxForTile(e);n&&(t=n)}this.addShadowReceiver(e.toUnwrapped(),t.min,t.max)}}get enabled(){return this._enabled&&!this._forceDisable}set enabled(e){this._enabled=e}drawShadowPass(e,t){if(!this.enabled)return;let n=this.painter,r=n.context;this._numCascadesToRender=this._receivers.computeRequiredCascades(n.transform.getFrustum(0),n.transform.worldSize,this._cascades),r.viewport.set([0,0,this._shadowParameters.shadowMapResolution,this._shadowParameters.shadowMapResolution]);for(let i=0;i<this._numCascadesToRender;++i){n.currentShadowCascade=i,r.bindFramebuffer.set(this._cascades[i].framebuffer.framebuffer),r.clear({color:g.white,depth:1});for(let r of e.order){let i=e._mergedLayers[r];if(!i.hasShadowPass()||i.isHidden(n.transform.zoom))continue;let a=e.getLayerSourceCache(i),o=a?t[a.id]:void 0;(i.type===`model`||o&&o.length)&&n.renderLayer(n,a,i,o)}}n.currentShadowCascade=0}drawGroundShadows(){if(!this.enabled)return;let e=this.painter,t=e.style,n=e.context,r=n.gl,i=t.directionalLight,a=t.ambientLight;if(!i||!a)return;let o=[],s=Ee(e,e.longestCutoffRange);s.shouldRenderCutoff&&o.push(`RENDER_CUTOFF`),o.push(`RENDER_SHADOWS`),this.useNormalOffset&&o.push(`NORMAL_OFFSET`);let c=Se(t,i,a),l=new J(r.LEQUAL,J.ReadOnly,e.depthRangeFor3D),u=new K({func:r.EQUAL,mask:255},0,255,r.KEEP,r.KEEP,r.KEEP);for(let t of this._groundShadowTiles){let i=t.toUnwrapped(),a=e.isTileAffectedByFog(t),d=e.getOrCreateProgram(`groundShadow`,{defines:o,overrideFog:a});this.setupShadows(i,d),e.uploadCommonUniforms(n,d,i,null,s);let f=ut(e.transform.calculateProjMatrix(i),c);d.draw(e,r.TRIANGLES,l,u,G.multiply,Y.disabled,f,`ground_shadow`,e.tileExtentBuffer,e.quadTriangleIndexBuffer,e.tileExtentSegments,null,e.transform.zoom,null,null)}}getShadowPassDepthMode(){return this._depthMode}getGroundShadowLayerIndex(){return this._drawShadowAfterLayer}calculateShadowPassMatrixFromTile(e){let t=this.painter.transform,n=t.calculatePosMatrix(e,t.worldSize);return D(n,this._cascades[this.painter.currentShadowCascade].matrix,n),Float32Array.from(n)}calculateShadowPassMatrixFromMatrix(e){return D(ht,this._cascades[this.painter.currentShadowCascade].matrix,e)}setupShadows(e,t,n){if(!this.enabled)return;let r=this.painter.transform,i=this.painter.context,a=i.gl,o=this._uniformValues,s=r.calculatePosMatrix(e,r.worldSize);for(let e=0;e<this._cascades.length;e++){let t=pt(e);D(t,this._cascades[e].matrix,s),o[e===0?`u_light_matrix_0`:`u_light_matrix_1`]=t,i.activeTexture.set(a.TEXTURE0+X.ShadowMap0+e),this._cascades[e].texture.bindExtraParam(a.LINEAR,a.LINEAR,a.CLAMP_TO_EDGE,a.CLAMP_TO_EDGE,a.GREATER)}if(this.useNormalOffset=!!n,this.useNormalOffset){let t=ie(e.canonical),i=2/r.tileSize*z/this._shadowParameters.shadowMapResolution,a=i*this._cascades[0].boundingSphereRadius,s=i*this._cascades.at(-1).boundingSphereRadius,c=(n===`vector-tile`?1:3)*function(e){let t=f((e-22)/-22,0,1);return .125*(1-t)+4*t}(r.zoom);o.u_shadow_normal_offset=[t,a*c,s*c],o.u_shadow_bias=[1e-4,.0012,.012]}else o.u_shadow_bias=[36e-5,.0012,.012];t.setShadowUniformValues(i,o)}computeCascadeTileMatrices(e){let t=this._shadowParameters.cascadeCount;for(let n=0;n<t;n++)D(mt[n]=mt[n]||new Float64Array(16),this._cascades[n].matrix,e);return mt.length=t,mt}setupShadowsFromMatrix(e,t,n=!1){if(!this.enabled)return;let r=this._shadowParameters.cascadeCount;for(let t=0;t<r;t++)D(pt(t),this._cascades[t].matrix,e);ft.length=r,this.setupShadowsFromCascadeMatrices(ft,t,n)}setupShadowsFromCascadeMatrices(e,t,n=!1){if(!this.enabled)return;let r=this.painter.context,i=r.gl,a=this._uniformValues;for(let t=0;t<this._shadowParameters.cascadeCount;t++)a[t===0?`u_light_matrix_0`:`u_light_matrix_1`]=e[t],r.activeTexture.set(i.TEXTURE0+X.ShadowMap0+t),this._cascades[t].texture.bindExtraParam(i.LINEAR,i.LINEAR,i.CLAMP_TO_EDGE,i.CLAMP_TO_EDGE,i.GREATER);if(this.useNormalOffset=n,n){let e=this._shadowParameters.normalOffset;a.u_shadow_normal_offset=[1,e,e],a.u_shadow_bias=[6e-5,.0012,.012]}else a.u_shadow_bias=[36e-5,.0012,.012];t.setShadowUniformValues(r,a)}getShadowUniformValues(){return this._uniformValues}getCurrentCascadeFrustum(){return this._cascades[this.painter.currentShadowCascade].frustum}computeSimplifiedTileShadowVolume(e,t,n,r){if(r[2]>=0)return{};let i=function(e,t,n){let r=n/(1<<e.canonical.z);return new m([e.canonical.x*r+e.wrap*n,e.canonical.y*r+e.wrap*n,0],[(e.canonical.x+1)*r+e.wrap*n,(e.canonical.y+1)*r+e.wrap*n,t])}(e,t,n).getCorners(),a=t/-r[2];r[0]<0?(B(i[0],i[0],[r[0]*a,0,0]),B(i[3],i[3],[r[0]*a,0,0])):r[0]>0&&(B(i[1],i[1],[r[0]*a,0,0]),B(i[2],i[2],[r[0]*a,0,0])),r[1]<0?(B(i[0],i[0],[0,r[1]*a,0]),B(i[1],i[1],[0,r[1]*a,0])):r[1]>0&&(B(i[2],i[2],[0,r[1]*a,0]),B(i[3],i[3],[0,r[1]*a,0]));let o={};return o.vertices=i,o.planes=[vt(i[1],i[0],i[4]),vt(i[2],i[1],i[5]),vt(i[3],i[2],i[6]),vt(i[0],i[3],i[7])],o}addShadowReceiver(e,t,n){this._receivers.add(e,m.fromTileIdAndHeight(e,t,n))}getMaxCascadeForTile(e){let t=this._receivers.get(e);return t&&t.lastCascade?t.lastCascade:0}},drawGroundEffect:Ae};export{bt as Standard};