
document.querySelectorAll('.links a').forEach(a=>{
  if(a.getAttribute('href')===location.pathname.split('/').pop() || (location.pathname.endsWith('/') && a.getAttribute('href')==='index.html')) a.classList.add('active');
});
