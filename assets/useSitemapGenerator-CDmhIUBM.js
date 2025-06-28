import{r as c}from"./index-Dt4s45kz.js";import{g as s}from"./countries-8xavFICh.js";const n=()=>{const e="https://bernofco.com",o=new Date().toISOString().split("T")[0],l=[{loc:e,lastmod:o,changefreq:"weekly",priority:1},{loc:`${e}/startup-development`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services/ch`,lastmod:o,changefreq:"weekly",priority:.85},{loc:`${e}/global-services/uk`,lastmod:o,changefreq:"weekly",priority:.85},{loc:`${e}/global-services/us`,lastmod:o,changefreq:"weekly",priority:.85},{loc:`${e}/global-services/it`,lastmod:o,changefreq:"weekly",priority:.85},{loc:`${e}/privacy-policy`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/terms-of-service`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/cookie-policy`,lastmod:o,changefreq:"monthly",priority:.3}],t=s(),i=["web-development","software-development","startup-development"];return t.forEach(r=>{i.forEach(a=>{l.push({loc:`${e}/${r.code}/${a}`,lastmod:o,changefreq:"weekly",priority:.8})})}),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${l.map(r=>`  <url>
    <loc>${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join(`
`)}
</urlset>`},m=()=>{const e=n(),o=new Blob([e],{type:"application/xml"}),l=URL.createObjectURL(o),t=document.createElement("a");t.href=l,t.download="sitemap.xml",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(l)};typeof window<"u"&&(window.generateSitemap=n,window.downloadSitemap=m);const y=()=>(c.useEffect(()=>{},[]),{generateSitemap:n,downloadSitemap:()=>{typeof window<"u"&&window.downloadSitemap&&window.downloadSitemap()}});export{y as u};
