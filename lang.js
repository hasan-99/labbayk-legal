(function(){
  var ar=document.getElementById('ar'), en=document.getElementById('en');
  var bAr=document.getElementById('btn-ar'), bEn=document.getElementById('btn-en');
  if(!ar||!en||!bAr||!bEn) return;
  function show(lang){
    var isAr=lang==='ar';
    ar.hidden=!isAr; en.hidden=isAr;
    bAr.setAttribute('aria-pressed', String(isAr));
    bEn.setAttribute('aria-pressed', String(!isAr));
    try{ document.documentElement.setAttribute('lang', isAr?'ar':'en'); }catch(e){}
    try{ document.documentElement.setAttribute('dir', isAr?'rtl':'ltr'); }catch(e){}
  }
  bAr.addEventListener('click', function(){ show('ar'); });
  bEn.addEventListener('click', function(){ show('en'); });
  show('ar');
})();
