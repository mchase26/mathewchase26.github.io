/* ==========================================
   CYBERSECURITY PORTFOLIO JAVASCRIPT
========================================== */


/*
   Fade-in animation when sections
   enter the viewport
*/


const observer = new IntersectionObserver(

(entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


        }


    });


},


{
    threshold:0.15
}



);



/*
   Apply animation to sections
*/


document
.querySelectorAll(".section, .project-card, .stats div, .skill, .certifications div")
.forEach(element => {


    element.classList.add("hidden");


    observer.observe(element);


});






/*
   Highlight navigation links
   based on current section
*/


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){


            current = section.getAttribute("id");


        }


    });





    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });



});








/*
   Smooth scrolling
   for navigation links
*/


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        e.preventDefault();



        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});







/*
   Project card interaction
*/


const cards = document.querySelectorAll(".project-card");



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transform =
        "translateY(-12px) scale(1.02)";


    });




    card.addEventListener("mouseleave",()=>{


        card.style.transform =
        "translateY(0) scale(1)";


    });



});








/*
   Dynamic footer year
*/


const footerYear =
document.querySelector("footer p");



if(footerYear){


    const year = new Date().getFullYear();


    footerYear.innerHTML =
    `© ${year} Mathew Chase | Cybersecurity Portfolio`;


}


/* ==========================================
   HERO IMAGE SLIDER
========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.media-slider .slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
