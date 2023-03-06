//Navigation bar responsiveness on scroll

if (window.matchMedia("(min-width:769px)").matches) {
    window.onscroll = function () {
        scrollFunction();
    };


    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("nav-bar").style.cssText = "height: 7rem;background-color: whitesmoke;";
            document.getElementById("nav-logo").style.cssText = "width:120px;height:80px;";
            document.getElementById("cloud-scale").style.cssText = "transition:2s ease-in; transform:scale(2) translateY(-10rem);opacity:.2;"
        } else {
            document.getElementById("nav-bar").style.cssText = "height: 15vh;background-color: transparent;";
            document.getElementById("nav-logo").style.cssText = "width:150px;height:100px;"
            document.getElementById("cloud-scale").style.cssText = "transition:2s ease-out;transform:scale(1) translateY(10rem);opacity:.7;"
        }

    }
}

/* Burger Menu for Mobile Devices*/
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('#nav-bar');
const burgerLinkList = document.querySelector('.navigation');
const burgerLinks = document.querySelector('.nav-link');
const burgerLogo = document.querySelector('.logo')

burgerIcon.addEventListener('click', function () {
    burgerMenu.classList.toggle('mobile-nav');
    burgerLinkList.classList.toggle('burger-links');
    burgerLogo.classList.toggle('active-logo');
    document.body.classList.toggle('active-mobile-nav');
});

/*
 Gallery Scroller function
 */
let scrollAmount = 350;
let scrollContainer = document.getElementById('destination-scroller-gal');
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

/*
On click of the right span button scroll the container smoothly by amount set in scrollAmount
*/
rightArrow.addEventListener('click', function () {
    scrollContainer.scrollLeft = 0;
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
    //Add first card to the mix
    let firstCard = document.querySelector('.card:first-child');
    scrollContainer.appendChild(firstCard);
});
/*
On click of the left span button scroll the container
*/
leftArrow.addEventListener('click', function () {
    scrollContainer.scrollLeft = 0;
    //Insert card before first child to achieve carousel effect
    let lastCard = document.querySelector('.card:last-child');
    scrollContainer.insertBefore(lastCard, scrollContainer.firstChild);
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

