(function(){
  var b64 = (window.__LILY_A||"")+(window.__LILY_B||"");
  if (!b64) return;
  var el = document.querySelector(".hero-lily-photo");
  if (!el) return;
  el.style.backgroundImage = "url(data:image/jpeg;base64," + b64 + ")";
})();
