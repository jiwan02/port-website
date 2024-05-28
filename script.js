/*==============toggle icon navbar============  */ 

let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

newIcon.onclick = () => {
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*==============scrool section active link============  */ 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) { 
                navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });


    /*============sticky navbar============  */ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*=============remove toggle icon and navbar=============  */ 

    newIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

    /*=============scroll reveal=============  */ 
    ScrollReveal({
        distance: '80px',
        duration:2000,
        delay:200,
    });

    ScrollReveal().reveal('.home-content , heading', {origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


        /*=============typed js=============  */ 
    //  const typed = new Typed('.multiple-text', {
    //     Strings: ['Data Analyst','Web Designer','Freelencer'],
    //     typeSpeed:70,
    //     backSpeed:70,
    //     backDelay:1000,
    //     loop:true,
    //  }); 

     var typed = new Typed(".multiple-text",{
        strings:["web Developer","Graphic Designer","Freelencer"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true,
    });
    // owl carousel  script  // 

   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
   });

