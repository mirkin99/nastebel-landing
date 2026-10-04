/* NASTEBEL Landing — carousel only (admin is inline in HTML) */

const IDS = {
  "w1": "1fABGZzu3eJLPoIndfhqpQmVnbjiyq6v0",
  "w2": "1vR-Ua4RFnlWv-R7MqKpBgq3OLdyT6WtO",
  "w3": "1_vzvFlyucWW6fNLTjT-qwcFxulwvFOxe",
  "w4": "17CJvEtsE-YqJhzWuaITJcs-zPoRFvUGr",
  "w5": "117LwpEXWImQpUm0U4LT6NUww7tAhugcX",
  "w6": "1PBhKCISih171rQtwVgChIphKKp8-gkP_",
  "w7": "1gz4CWDRWDIIfmKkMllgWfnWWB_aN77kL",
  "w8": "1ZI2uTrbvihp4srpybNIQmb_FT-clhMcv",
  "w9": "1D8DM61DhZ6lAgVtWzHcfFlcQnlloV_Gh",
  "w10": "1-CAC3BmtxfLMDQ4ND97vb2GPQd2oLf9p",
  "w11": "13V_DM3Ikjfi-zOKTQtuq6ZfsMCS4wBN4",
  "w12": "1dfGiK_evpEKIFeLKTOxnBZDrbtjD3YZn",
  "w13": "1uK2IrByM5z1290UktA1A2H0bk5Seys-7",
  "w14": "1d_AibP9P_W4kULRmSIL7-5Yxyy-iSL0S",
  "w15": "1D7mbF2FL-hBybg2nuMtbvnTPkqHG2Wed",
  "w16": "1xX6cXZs3ls4-WnPCqhtvBGRRu8qQOzk4",
  "w17": "1Yrf2045Ce7LpTTSXBTBmy0HUSB33e1n-",
  "w18": "1AfYARi1WJJ7MIBLPjsG1phflqgJeBumu",
  "w19": "12RxhZXk4gcIvim2XLci822J5XFyRcBJ1",
  "w20": "1hXwNh6QIIqY9RTC5rphLTA-A3SOXlwD1",
  "w21": "1C6yFO0kUmqur1JqIMwuL0ekrzUjGI6Sc",
  "w22": "1dyLptuPNx6BZaZZuz6RMPAo6nc6UgRrn"
};

function imgSrc(key, size) {
  var id = IDS[key];
  return id ? "https://lh3.googleusercontent.com/d/" + id + "=s" + (size || 800) : "";
}

function imgFallback(key, size) {
  var id = IDS[key];
  return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + (size || 800) : "";
}

var KEYS = [
  "w1","w2","w3","w4","w5","w6","w7","w8","w9","w10","w11",
  "w12","w13","w14","w15","w16","w17","w18","w19","w20","w21","w22"
];

document.addEventListener("DOMContentLoaded", function () {
  var track = document.getElementById("carouselTrack");
  if (!track) return;

  KEYS.forEach(function (key) {
    var item = document.createElement("div");
    item.className = "carousel-item";

    var img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.src = imgSrc(key, 400);

    img.onerror = function () {
      if (img.dataset.fb) return;
      img.dataset.fb = "1";
      img.src = imgFallback(key, 400);
    };

    item.appendChild(img);
    track.appendChild(item);
  });

  var isDown = false, startX = 0, scrollLeft = 0;

  track.addEventListener("mousedown", function (e) {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mouseleave", function () {
    isDown = false;
    track.classList.remove("dragging");
  });

  track.addEventListener("mouseup", function () {
    isDown = false;
    track.classList.remove("dragging");
  });

  track.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.4;
  });
});
