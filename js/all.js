document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem);
      ScrollTrigger.create({
        trigger: elem.parentElement,
        start: `top`,  
        end: `bottom`,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } 
      });
    });
});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100,
        d = 0;
    
        if (elem.hasAttribute('data-delay-sec')){
          d = elem.getAttribute('data-delay-sec')
        }
        
        if(elem.classList.contains("fromLeft")) {
          x = -100;
          y = 0;
        } else if (elem.classList.contains("fromRight")) {
          x = 100;
          y = 0;
        }
        
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto",
      delay: d
    });
}

function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}



