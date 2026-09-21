(function(){
  var b64="PLACEHOLDER";
  var bin=atob(b64),arr=new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);
  var url=URL.createObjectURL(new Blob([arr],{type:"image/jpeg"}));
  var img=document.querySelector(".hero-lily-photo");
  if(img)img.src=url;
})();
