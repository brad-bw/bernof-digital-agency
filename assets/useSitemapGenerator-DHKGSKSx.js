import{r as c}from"./index-C27xExIH.js";import{g as s}from"./countries-8xavFICh.js";const l=()=>{const e="https://bernofco.com",o=new Date().toISOString().split("T")[0],n=[{loc:e,lastmod:o,changefreq:"weekly",priority:1},{loc:`${e}/startup-development`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services`,lastmod:o,changefreq:"weekly",priority:.9},{loc:`${e}/global-services/ch`,lastmod:o,changefreq:"weekly",priority:.8},{loc:`${e}/global-services/uk`,lastmod:o,changefreq:"weekly",priority:.8},{loc:`${e}/privacy-policy`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/terms-of-service`,lastmod:o,changefreq:"monthly",priority:.3},{loc:`${e}/cookie-policy`,lastmod:o,changefreq:"monthly",priority:.3}],t=s(),i=["web-development","software-development","startup-development"];return t.forEach(r=>{i.forEach(a=>{n.push({loc:`${e}/${r.code}/${a}`,lastmod:o,changefreq:"weekly",priority:.8})})}),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${n.map(r=>`  <url>
    <loc>${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join(`
`)}
</urlset>`},m=()=>{const e=l(),o=new Blob([e],{type:"application/xml"}),n=URL.createObjectURL(o),t=document.createElement("a");t.href=n,t.download="sitemap.xml",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(n)};typeof window<"u"&&(window.generateSitemap=l,window.downloadSitemap=m);const y=()=>(c.useEffect(()=>{},[]),{generateSitemap:l,downloadSitemap:()=>{typeof window<"u"&&window.downloadSitemap&&window.downloadSitemap()}});export{y as u};
