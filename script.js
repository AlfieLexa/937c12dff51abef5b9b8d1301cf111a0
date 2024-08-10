function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    var overlay = document.getElementById("overlay");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(function() {
            menu.style.display = "none";
        }, 300);
        overlay.classList.remove("show");
        setTimeout(function() {
            overlay.style.display = "none";
        }, 300);
    } else {
        menu.style.display = "block";
        setTimeout(function() {
            menu.classList.add("show");
        }, 10);
        overlay.style.display = "block";
        setTimeout(function() {
            overlay.classList.add("show");
        }, 10);
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.bars') && !event.target.matches('.dropdown-menu') && !event.target.matches('.dropdown-menu a')) {
        var menu = document.getElementById("dropdown-menu");
        var overlay = document.getElementById("overlay");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            setTimeout(function() {
                menu.style.display = "none";
            }, 300);
            overlay.classList.remove("show");
            setTimeout(function() {
                overlay.style.display = "none";
            }, 300);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});

let slideIndex = 0;
	showSlides();

function showSlides() {
  	let i;
	let slides = document.getElementsByClassName("mySlides");
 	let dots = document.getElementsByClassName("dot");
 	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";  
  }
  slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1}    
  	for (i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
  }
  	slides[slideIndex-1].style.display = "block";  
  	dots[slideIndex-1].className += " active";
  		setTimeout(showSlides, 5000);
}
