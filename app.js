const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll(".blog_box")[0];
arrowIcons = document.querySelectorAll('.icon-container i');

let isDragStart = false, prevPageX, prevScrolleft;
let firstImgWidth = firstImg.clientWidth + 600;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrolleft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("draggling");
    let positionDiff = e.pageX -prevPageX
    carousel.scrollLeft = prevScrolleft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("draggling");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);



function PageTransitions(){
    document.addEventListener('DOMContentLoaded', function() {
        const sectBtn = document.querySelectorAll('.control');
    
        for (let i = 0; i < sectBtn.length; i++) {
            sectBtn[i].addEventListener('click', function() {
                let currentBtn = document.querySelector(".active-btn");
                currentBtn.className = currentBtn.className.replace('active-btn', '');
                this.className += ' active-btn';
            });
        }
    });

    //Section Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

// PageTransitions

PageTransitions();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();