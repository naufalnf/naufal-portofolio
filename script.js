    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");


    let sections = document.querySelectorAll(`section`);
    let navLinks = document.querySelectorAll(`header nav a`);

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute(`id`);

            if (top >= offset && top < offset + height){
                navLinks.forEach (links => {
                    links.classList.remove(`active`);
                    document.querySelector(`header nav a[href*=' + id + ']`).classList.add(`active`)
                })
            }
        })
    }

    menuIcon.onclick = () => {
        menuIcon.classList.toggle(`bx-x`);
        navbar.classList.toggle(`active`);
    }


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Ubah ke 2 atau lebih jika ingin menampilkan lebih dari satu slide
        spaceBetween: 30, // Jarak antar slide
        loop: true, // Slider akan loop
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Pada ukuran layar sedang
            },
            1024: {
                slidesPerView: 3, // Pada ukuran layar besar
            }
        }
    });
    
