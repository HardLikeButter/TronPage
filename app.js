const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {


    links.classList.toggle("show-links");
    
    
});



const gridImg = [
    {
        img: "https://i.postimg.cc/HLVckp7p/the-grid-copy.webp"
    },

    {
        img: "the-grid-6.jpg"
    },

    {
        img: "the-grid-5.jpg"
    },

    {
        img: "the-grid-4.jpg"
    },

    {
        img: "the-grid-3.jpg"
    },

    {
        img: "the-grid-2.jpg"
    },

    {
        img: "the-grid-7.jpg"
    },

    {
        img: "the-grid-8.jpg"
    }

]



const img = document.getElementById("grid-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");



let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
    showImg(currentItem);

});


function showImg() {
    let item = gridImg[currentItem];
    img.src = item.img;
};

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = gridImg.length - 1;
    }
    showImg(currentItem);
});


nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > gridImg.length - 1) {
        currentItem = 0;
    }
    showImg(currentItem);
});
