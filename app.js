/* NASTEBEL Landing — carousel only (admin is inline in HTML) */

const IDS = {
  "1.2": "1zr6KOzahcaQfdR-wbJiyPhCGkVajBDNE",
  "1.3": "1yDEXntcJsSB_EnX4WwYsp28G7J2jNAWS",
  "1.4": "133owg7_vh2jlFNLmX7S4Sagek9Nq1BGk",
  "1.5": "1QNcwKw9F_mv11AnGstk6owbCPJ-zhTj1",
  "1.6": "1L1GBfJ2UrnTgGMX17iemub9CfEwJeCwn",
  "1.7": "1D4lAWD9cT8FL9DOzrQ9q7H8cy8VWcVXD",
  "1.8": "1Ul2f-qCH_PSdM91D49MqxLI24Uz4z8OH",
  "1.9": "1l3x4fO3djJE2a0cz3oQOVOyv03AmfaQ6",
  "1.10": "17w0R7UCrOR-sWhI9rjAMlcvJBpdaOC2H",
  "1.11": "1al1sFxl15BqXSJFwsQnGWjI9OiBfzia0",
  "1.12": "1r7ouQGoLWSlEQi28uDB6VO6M_F5fVbE0",
  "1.13": "1GdYpBF0bPkjZqQATp6aa7VeMnvRVUJHT",
  "1.14": "1VIV8bTTsCiU2E33uVTQO2n6KDRL13guu",
  "3": "1buaY5GbomuWC5M6UUeZm9C8ewGvkTj7B",
  "5": "1GR6D_uAa7jW0iptqYyz4eXVHdNOBamYB",
  "9": "1y8ZSmCnYZjl8jfAkKHW1CW3jYkY4l3nq",
  "11": "1-1FerrAz0wNFtcHJAlINg4vfphIQpX5_",
  "14": "1ipCVqgGG5lK5NTKmL1KYZqK-h8DGRXvR",
  "a1": "113dGUD4P1tPnyHMpGDCNIEU89c5RLm6K",
  "a2": "1-3DfYuWH7ZfDrYHPtBFHkou3eAbR56v6",
  "a3": "1tvcizbrvmBVmpks8iy-Qe-THq1B-enwP",
  "a4": "1asrwL87pCYCaZA1L9XIJ1UI6CBVrLaOK",
  "a5": "1yoncXreMqzJG-zQPyo4cReGh0atYpk7G",
  "a6": "1nlB2inSXjA6-IXfKn3VAqiULNZfWsy9C",
  "a7": "18dMoY1rCqH4CXzeO0WqzK4jPt3-sfacm",
  "a8": "1FovqlYyP9NFQmQGznt_or0GRlMUURXEE",
  "a9": "1lFOJzp7xysLqCftOinGRAmvhwmAvp5tv",
  "a10": "1_hiURmkPOLdXBDBanlYVrFGdxBgkspsn",
  "a11": "1nTmIaEB0lkkHDEC-3LSRHo3yOvrc8aL2",
  "a12": "1CxZXPp5sxqj6FxSo9kOLfv-TFHW8UhDi",
  "a13": "1_SWVQQGPzeY6g_QqBEeBsAtp5dRZp43W",
  "a14": "1RsGnWqQUv0aQmfBmkKmjX3grdlqCE0wL",
  "a15": "1RD5yreV1Scrau4jOwvNQQKWWBn5HM10t",
  "a16": "1kLEPkf7BevUiArGdt9PLw32DkosNS9aq",
  "a17": "1zXEWK1aiNhtnp-dtIU_boYl6zdz3VQj5",
  "a18": "1jidc7Z5M5Hxm2ZwAl6e-1kEwsNFLkYo1",
  "a19": "1mfS84njJ4lXhUgsVAPayeyn6_5WvyJo6"
};

function imgSrc(key, size) {
  var id = IDS[key];
  return id ? "https://lh3.googleusercontent.com/d/" + id + "=s" + (size || 800) : "";
}
function imgFallback(key, size) {
  var id = IDS[key];
  return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + (size || 800) : "";
}

var KEYS = ["1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","1.10","1.11","1.12","1.13","1.14","3","5","9","11","14","a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17","a18","a19"];

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
    isDown = true; track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  track.addEventListener("mouseleave", function () { isDown = false; track.classList.remove("dragging"); });
  track.addEventListener("mouseup", function () { isDown = false; track.classList.remove("dragging"); });
  track.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.4;
  });
  var offer = document.getElementById("offerBtn");
  if (offer) offer.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Ссылка на оферту будет добавлена в ближайшее время.");
  });
});
