var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #fff";
    crsr.style.backgroundColor = "#fff";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
 // Get the page 4 element
 var page4 = document.querySelector('.page4');

 // Add event listener to detect when page 4 is entered
 page4.addEventListener('mouseenter', function() {
     // Remove cursor and cursor blur styles
     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });

 // Add event listener to detect when page 4 is left
 page4.addEventListener('mouseleave', function() {
     // Restore cursor and cursor blur styles
     document.getElementById('cursor').style.display = 'block'; // Change to your original cursor style
     document.getElementById('cursor-blur').style.display = 'block'; // Change to your original cursor blur style
 });

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

