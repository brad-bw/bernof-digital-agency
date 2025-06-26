import{c as i,r as s}from"./index-NWal7IVW.js";import{g as m}from"./countries-8xavFICh.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),a=()=>{const e="https://bernofco.com",o=new Date().toISOString().split("T")[0],n=[{loc:e,lastmod:o,changefreq:"weekly",priority:1},{loc:`${e}/startup-development`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services/ch`,lastmod:o,changefreq:"weekly",priority:.8},{loc:`${e}/global-services/uk`,lastmod:o,changefreq:"weekly",priority:.8},{loc:`${e}/privacy-policy`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/terms-of-service`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/cookie-policy`,lastmod:o,changefreq:"monthly",priority:.3}],t=m(),l=["web-development","software-development","startup-development"];return t.forEach(r=>{l.forEach(c=>{n.push({loc:`${e}/${r.code}/${c}`,lastmod:o,changefreq:"weekly",priority:.8})})}),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${n.map(r=>`  <url>
    <loc>${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join(`
`)}
</urlset>`},p=()=>{const e=a(),o=new Blob([e],{type:"application/xml"}),n=URL.createObjectURL(o),t=document.createElement("a");t.href=n,t.download="sitemap.xml",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(n)};typeof window<"u"&&(window.generateSitemap=a,window.downloadSitemap=p);const f=()=>(s.useEffect(()=>{},[]),{generateSitemap:a,downloadSitemap:()=>{typeof window<"u"&&window.downloadSitemap&&window.downloadSitemap()}});export{y as E,f as u};
