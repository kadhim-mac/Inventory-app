function globalFind(e){if(e.key==='Enter'){go('products');productSearch.value=e.target.value;renderProducts()}}
setInterval(()=>clock.textContent=new Date().toLocaleString('ar-IQ',{dateStyle:'short',timeStyle:'short'}),1000);renderHome();renderProducts();renderInvoices();renderCart();
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
