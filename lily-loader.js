(function(){
  var el = document.querySelector(".hero-lily-photo");
  if (!el) return;
  var url = "https://lh3.googleusercontent.com/d/11TmwNrmV8NEkrVwDq9aKsArErONse3tV=s1200";
  var fb = "https://drive.google.com/thumbnail?id=11TmwNrmV8NEkrVwDq9aKsArErONse3tV&sz=w1200";
  el.style.backgroundImage = "url(" + url + ")";
  var test = new Image();
  test.onerror = function(){ el.style.backgroundImage = "url(" + fb + ")"; };
  test.src = url;
})();
