(function() {
    const wrapper2 = document.querySelector(".wrapper2");
    const carousel2 = document.querySelector(".carousel2");
    const firstCardWidth = carousel2.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper2 i");
    const carousel2Childrens = [...carousel2.children];
    
    let isDragging = false, startX, startScrollLeft;
    

    let cardPerView = Math.round(carousel2.offsetWidth / firstCardWidth);
    

    carousel2Childrens.slice(-cardPerView).reverse().forEach(card => {
        carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carousel2Childrens.slice(0, cardPerView).forEach(card => {
        carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    

    carousel2.classList.add("no-transition");
    carousel2.scrollLeft = carousel2.offsetWidth;
    carousel2.classList.remove("no-transition");
    

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel2.scrollLeft += btn.id == "left2" ? -firstCardWidth : firstCardWidth;
        });
    });
    
    const dragStart = (e) => {
        isDragging = true;
        carousel2.classList.add("dragging");

        startX = e.pageX;
        startScrollLeft = carousel2.scrollLeft;
    }
    
    const dragging = (e) => {
        if (!isDragging) return; 

        carousel2.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    
    const dragStop = () => {
        isDragging = false;
        carousel2.classList.remove("dragging");
    }
    
    const infiniteScroll = () => {

        if (carousel2.scrollLeft === 0) {
            carousel2.classList.add("no-transition");
            carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
            carousel2.classList.remove("no-transition");
        }

        else if (Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
            carousel2.classList.add("no-transition");
            carousel2.scrollLeft = carousel2.offsetWidth;
            carousel2.classList.remove("no-transition");
        }
    }
    
    carousel2.addEventListener("mousedown", dragStart);
    carousel2.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel2.addEventListener("scroll", infiniteScroll);
})();
