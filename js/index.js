//navigation
const closeIcon = document.querySelector(".close-icon");
const navigation = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-icon");
const searchIcon = document.querySelector(".search-icon-md");
const searchBox = document.querySelector("#searchBox");
const li = document.querySelectorAll(".nav-li");
const closeSearch = document.querySelector(".close-search");

closeIcon.addEventListener("click", function () {
    navigation.classList.add("hidden");
    menuIcon.classList.remove("hidden");
});
menuIcon.addEventListener("click", function () {
    navigation.classList.remove("hidden");
    menuIcon.classList.add("hidden");
});
searchIcon.addEventListener("click", function () {
    for (i = 0; i < li.length; i++){
        li[i].classList.add("hidden");
    }
    searchBox.classList.remove("hidden");
    closeSearch.classList.remove("hidden");
    searchBox.focus();
});
closeSearch.addEventListener("click", function () {
    for (i = 0; i < li.length; i++){
        li[i].classList.remove("hidden");
    }
    searchBox.classList.add("hidden");
    closeSearch.classList.add("hidden");
});

// slider
const btnNext = document.querySelector("#arrow-right");
const btnPrevious = document.querySelector("#arrow-left");
const card = document.querySelector("#firstCard");
const slider = document.querySelector(".section-three-slider");
let width = 315;
let i = 0;

btnNext.addEventListener("click", function () {
    i++;
    card.style.marginLeft = `${i*-width}px`; 
});
btnPrevious.addEventListener("click", function () {
    i--;
    card.style.marginLeft = `${i*-width}px`; 
});

//show more button
const showMoreBtn = document.querySelector("#show-more");
const moreContainer = document.querySelector(".more-container");
const showMoreSection = document.querySelector(".show-more-section");

showMoreBtn.addEventListener("click", function () {
    moreContainer.classList.remove("hidden");
    showMoreSection.classList.add("hidden");
    document.querySelector(".show-more-section2").classList.remove("hidden");
});
// cookie section
// customize button
const cookie = document.querySelector(".cookie");
const customizeBtn = document.querySelector("#customize");
const acceptSelected = document.querySelector("#accept-selected");
const cookieContent = document.querySelector(".cookie-content");
const customizeSection = document.querySelector(".customize");

customizeBtn.addEventListener("click", function () {
    cookieContent.classList.add("hidden");
    customizeSection.classList.remove("hidden");
    customizeBtn.classList.add("hidden");
    acceptSelected.classList.remove("hidden");
});
acceptSelected.addEventListener("click", function () {
    cookie.classList.add("hidden");
});
// close customize section
const close = document.querySelector(".customize-close");
close.addEventListener("click", function () {
    cookieContent.classList.remove("hidden");
    customizeSection.classList.add("hidden");
    customizeBtn.classList.remove("hidden");
    acceptSelected.classList.add("hidden");
});
// open and close dropdown
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const paragraph = document.querySelector(".paragraph-opened");
const headingP = document.querySelector(".heading-p");

iconOpen.addEventListener("click", function () {
    paragraph.classList.remove("hidden");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
    headingP.textContent = "Close cookies and options in detail";
});
iconClose.addEventListener("click", function () {
    paragraph.classList.add("hidden");
    iconClose.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    headingP.textContent = "Open cookies and options in detail";
});

//checkbox section in cookie
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const iconOff = document.querySelector(".off");
const iconOn = document.querySelector(".on");
let c = 0;

parent.addEventListener("click", function () {
    if (child.classList.contains("selected")) {
        child.style.left = "35px";
        iconOff.classList.add("hidden");
        iconOn.classList.remove("hidden");
        parent.style.backgroundColor = "#545454";
        child.classList.remove("selected");
    }
    else {
        child.style.left = "0";
        iconOff.classList.remove("hidden");
        iconOn.classList.add("hidden");
        parent.style.backgroundColor = "#8e8e8e";
        child.classList.add("selected");
    }
});
// accept and reject buttons
document.querySelector("#reject").addEventListener("click", function () {
    cookie.classList.add("hidden");
});
document.querySelector("#accept").addEventListener("click", function () {
    cookie.classList.add("hidden");
});
// change video src
const videosource = document.querySelector("#diamond");
window.addEventListener("resize", function () {
    let screenwidth = document.documentElement.clientWidth;
    if (screenwidth < 768) {
        videosource.setAttribute("src", "videos/5-mobile.mp4");
        document.querySelector("#video-diamond").load();
    }
    else {
        videosource.setAttribute("src", "videos/5.mp4");
        document.querySelector("#video-diamond").load();
    }
});
