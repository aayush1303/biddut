window.addEventListener("scroll", function() {
    const topBar = document.getElementById("topBar");
    const mainHeader = document.getElementById("mainHeader");

    if (window.scrollY > 10) {
        topBar.style.display = "none";
        mainHeader.style.top = "0";
        mainHeader.classList.add("scrolled-header");
    } else {
        topBar.style.display = "flex";
        mainHeader.style.top = "40px";
        mainHeader.classList.remove("scrolled-header"); 
    }
});

document.getElementById('search').addEventListener('click', function() {
    const searchContainer = document.getElementById('searchContainer');
    
    if (searchContainer.style.top === '0px') {
        searchContainer.style.top = '-100%'; 
    } else {
        searchContainer.style.top = '0'; 
    }
});

document.getElementById('closeSearch').addEventListener('click', function() {
    const searchContainer = document.getElementById('searchContainer');
    searchContainer.style.top = '-100%'; 
});

const menuIcon = document.getElementById("menuIcon");
const menuContainer = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function() {
    menuContainer.classList.remove("translate-x-full");  
});

closeIcon.addEventListener("click", function() {
    menuContainer.classList.add("translate-x-full");  
});

document.addEventListener("click", function(event) {
    const isClickInside = menuContainer.contains(event.target) || menuIcon.contains(event.target);
    if (!isClickInside) {
        menuContainer.classList.add("translate-x-full");
    }
});

document.getElementById("arrowToggle").addEventListener("click", function() {
    const options = document.getElementById("options");
    const icon = this.querySelector("i");

    options.classList.toggle("hidden");

    if (options.classList.contains("hidden")) {
        icon.classList.replace("fa-chevron-down", "fa-chevron-right");
    } else {
        icon.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
});

document.getElementById("arrowToggles").addEventListener("click", function() {
    const options = document.getElementById("servicesOptions");
    const icon = this.querySelector("i");

    options.classList.toggle("hidden");

    if (options.classList.contains("hidden")) {
        icon.classList.replace("fa-chevron-down", "fa-chevron-right");
    } else {
        icon.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
});

var swiper = new Swiper(".default-carousel", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperTestimonial = new Swiper(".testimonial-carousel .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    pagination: {
        el: ".testimonial-carousel .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial-carousel .swiper-button-next",
        prevEl: ".testimonial-carousel .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});

//FAQ
function toggleFaq(id) {
    // Get all FAQ contents, containers, and spans
    const allFaqContents = document.querySelectorAll('.faq-content');
    const allFaqContainers = document.querySelectorAll('.faq-container');
    const allIcons = document.querySelectorAll('.faq-icon i');
    const allIconSpans = document.querySelectorAll('[id^="span-"]');

    // Get specific elements by ID for the clicked FAQ
    const faqContent = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`).querySelector('i');
    const iconSpan = document.getElementById(`span-${id}`);
    const faqContainer = document.getElementById(`faq-container-${id}`);

    // Check if the clicked FAQ item is currently open
    const isCurrentlyOpen = !faqContent.classList.contains('max-h-0');

    // Close all FAQ items and reset styles
    allFaqContents.forEach(content => {
        content.classList.add('max-h-0');
        content.classList.remove('max-h-screen', 'pb-4');
    });

    allFaqContainers.forEach(container => {
        container.classList.remove('bg-secondary', 'text-[#fff]');
    });

    allIcons.forEach(icon => {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        icon.classList.remove('text-black');
    });

    allIconSpans.forEach(span => {
        span.classList.remove('bg-white');
        span.classList.add('bg-secondary');
    });

    // Toggle the current FAQ item only if it was not open
    if (!isCurrentlyOpen) {
        faqContent.classList.remove('max-h-0');
        faqContent.classList.add('max-h-screen', 'pb-4'); // Opens FAQ item
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        icon.classList.remove('text-white');
        icon.classList.add('text-black');
        faqContainer.classList.add('bg-secondary', 'text-[#fff]');
        iconSpan.classList.add('bg-white'); // Sets background to white for active span
    }
}

var projectCarousel = new Swiper(".project-carousel .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: false,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 32,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

var serviceCarousel = new Swiper(".service-carousel .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 28,
    centeredSlides: true,
    loop: true,
    pagination:false,
    navigation: {
        nextEl: ".service-carousel .swiper-button-next",
        prevEl: ".service-carousel .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      issue: document.getElementById('issue').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch('http://localhost:500/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  });