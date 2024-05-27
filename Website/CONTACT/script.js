function splitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
        var text = element.innerText;
        var splitText = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    splitTextIntoSpans(".send h1");
    splitTextIntoSpans(".header-text h1");

    gsap.to(".header-text h1 span", {
        top: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.075
    });

    gsap.from(".cta, .nav, .tagline, .links", {
        opacity: 0,
        duration: 0,
        stagger: 0.1,
        delay: 1
    });

    const toggleButton = document.querySelector("#toggle");
    const toggleButton2 = document.querySelector("#back");
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay", {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "all"
    });
    timeline.to(".send h1 span", {
        top: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
    });

    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    });

    toggleButton2.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    });
});


gsap.to("#here", {
    opacity: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  
gsap.to("#here", {
    color:"	#DE6FA1",
    opacity: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    paddingTop:20,
  });


  


var cursor = document.querySelector('.cursor'),
cursorScale = document.querySelectorAll('.cursor-scale'),
mouseX = 0,
mouseY = 0

gsap.to({}, 0.016, {
repeat: -1,

onRepeat: function () {
    gsap.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    })
}
});

window.addEventListener("mousemove", function (e) {
mouseX = e.clientX;
mouseY = e.clientY
});

cursorScale.forEach(link => {
link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
});
link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
    if(link.classList.contains('small')){
        cursor.classList.remove('grow');
        cursor.classList.add('grow-small');
    }
});
});

