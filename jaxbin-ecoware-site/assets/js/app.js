
(function(){
 const cfg=window.JAXBIN_CONFIG||{email:'info@jaxbin.com'};
 const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
 const menu=$('.menu-btn'), nav=$('.nav'); if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 $$('.nav a').forEach(a=>{if(location.pathname.endsWith(a.getAttribute('href'))||(location.pathname==='/'&&a.getAttribute('href')==='index.html'))a.classList.add('active')});
 let quote=JSON.parse(localStorage.getItem('jaxbinQuote')||'[]');
 const persist=()=>{localStorage.setItem('jaxbinQuote',JSON.stringify(quote));renderQuote()};
 function renderQuote(){
  $$('.quote-count').forEach(el=>el.textContent=quote.length);
  const list=$('#quoteItems'); if(!list)return;
  list.innerHTML=quote.length?quote.map((p,i)=>`<div class="quote-item"><div><strong>${p.name}</strong><div class="muted">${p.category||''}</div></div><button aria-label="Remove" data-remove="${i}">Remove</button></div>`).join(''):'<p class="muted">No products added yet. Add products from the catalog.</p>';
  $$('[data-remove]',list).forEach(b=>b.onclick=()=>{quote.splice(+b.dataset.remove,1);persist()});
  const field=$('#selectedProducts'); if(field)field.value=quote.map(x=>x.name).join(', ');
 }
 window.addToQuote=function(slug,name,category){if(!quote.some(x=>x.slug===slug))quote.push({slug,name,category});persist();openDrawer();};
 const drawer=$('#quotePanel'),overlay=$('#overlay');
 function openDrawer(){if(drawer){drawer.classList.add('open');overlay?.classList.add('open')}}
 function closeDrawer(){drawer?.classList.remove('open');overlay?.classList.remove('open')}
 $$('.quote-fab,[data-open-quote]').forEach(b=>b.addEventListener('click',openDrawer));
 $$('.drawer-close,#overlay').forEach(b=>b.addEventListener('click',closeDrawer));
 renderQuote();
 // Catalog filters
 const cards=$$('[data-product-card]');
 function applyFilter(){
  const active=$('.filter-btn.active')?.dataset.filter||'All'; const term=($('#productSearch')?.value||'').toLowerCase();
  cards.forEach(c=>{const okCat=active==='All'||c.dataset.category===active; const okTerm=!term||(c.dataset.name+' '+c.dataset.category+' '+c.dataset.material).toLowerCase().includes(term); c.style.display=okCat&&okTerm?'':'none'});
 }
 $$('.filter-btn').forEach(b=>b.addEventListener('click',()=>{$$('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilter()}));
 $('#productSearch')?.addEventListener('input',applyFilter);
 // Forms use email client, with downloadable backup
 $$('.inquiry-form').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault(); const fd=new FormData(form); const parts=[]; for(const [k,v] of fd.entries()) if(String(v).trim()) parts.push(`${k}: ${v}`);
  const subject=encodeURIComponent(`B2B inquiry from ${fd.get('Company')||fd.get('Name')||'website visitor'}`); const body=encodeURIComponent(parts.join('\n'));
  const success=form.querySelector('.success'); if(success){success.style.display='block';success.innerHTML=`Your inquiry is ready. Your email app should open now. You can also email <a href="mailto:${cfg.email}">${cfg.email}</a>.`;}
  window.location.href=`mailto:${cfg.email}?subject=${subject}&body=${body}`;
 }));
 // tabs
 $$('.tab').forEach(t=>t.onclick=()=>{const wrap=t.closest('[data-tabs]');$$('.tab',wrap).forEach(x=>x.classList.remove('active'));$$('.tab-panel',wrap).forEach(x=>x.classList.remove('active'));t.classList.add('active');$('#'+t.dataset.tab,wrap).classList.add('active')});
 // auto year
 $$('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
})();
