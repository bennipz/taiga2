// NAVBAR 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 


// LOADING SCREEN
document.addEventListener("DOMContentLoaded", function() {
    var loadingVideo = document.getElementById("loadingVideo");
    var mainContent = document.getElementById("mainContent");
    
    loadingVideo.play();

    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        mainContent.style.display = "block";
    }, 1500); //
});
function reloadPage() {
    document.getElementById("preloader").style.display = "flex";
    document.getElementById("mainContent").style.display = "none";
    location.reload();
}



// CLOTHING IMAGE
const clothingImage = document.getElementById('clothing-image');
const scrollStartThreshold = 1000;
const scrollEndThreshold = 4000;
let offsetX = 0;

function handleScroll() {
    let scrollPercentage;

    if (window.scrollY < scrollStartThreshold) {
        scrollPercentage = 0;
    } else if (window.scrollY > scrollEndThreshold) {
        scrollPercentage = 1;
    } else {
        scrollPercentage = (window.scrollY - scrollStartThreshold) / (scrollEndThreshold - scrollStartThreshold);
        scrollPercentage = Math.pow(scrollPercentage, 3);
    }

    offsetX = -scrollPercentage * (clothingImage.offsetWidth - window.innerWidth);

    requestAnimationFrame(updateScroll);
}

function updateScroll() {
    clothingImage.style.transform = `translateX(${offsetX}px)`;
}

// Initial setup
handleScroll();

window.addEventListener('scroll', handleScroll);

