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

//Page 3 - clients testimonial
const viewMoreButton = document.getElementById('view-more');
const hiddenTestimonials = document.querySelector('.hidden-testimonials');

let isHidden = true;
hiddenTestimonials.style.display = 'none';
    viewMoreButton.addEventListener('click', () => {
        if (isHidden) {
            hiddenTestimonials.style.display = 'flex';
            viewMoreButton.classList.add('active');
            viewMoreButton.querySelector('h3').textContent = 'View Less';
        } 
        else {
            hiddenTestimonials.style.display = 'none';
            viewMoreButton.classList.remove('active');
            viewMoreButton.querySelector('h3').textContent = 'View More';
        }

        isHidden = !isHidden;
    });
    

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

// 創建一個 MediaQueryList 對象
/*const mediaQuery = window.matchMedia("(max-width: 600px)");

// 定義處理媒體查詢變化的函數
const handleMediaQueryChange = (event) => {
    const loader = document.querySelector(".rwd-loading");

    if (event.matches) {
        // 在這裡添加 .rwd-loading--visible 的 class
        loader.classList.add("rwd-loading--visible");
    } else {
        // 如果媒體查詢不再生效，你可以執行其他動作，例如移除 .rwd-loading--visible 的 class
        loader.classList.remove("rwd-loading--visible");
    }

    // 在這裡執行其他相應的代碼
    setTimeout(() => {
        loader.classList.remove("rwd-loading--visible");
    }, 3000);
};

// 添加媒體查詢變化的事件監聽器
mediaQuery.addEventListener("change", handleMediaQueryChange);

// 初始狀態下檢查媒體查詢
handleMediaQueryChange(mediaQuery);*/

let previousWidth = window.innerWidth;

const handleResize = () => {
    const currentWidth = window.innerWidth;
    console.log(`當前網頁寬度為: ${currentWidth}px`);
    const loader = document.querySelector(".rwd-loading");

    // 在這裡可以比較 currentWidth 和 previousWidth，執行相應的操作
    if (currentWidth != previousWidth) {
        console.log("寬度改變了！");
        loader.classList.add("rwd-loading--visible");
    } else {
        loader.classList.remove("rwd-loading--visible");
    }
    setTimeout(() => {
        /*loader.classList.remove("rwd-loading--visible");*/
        loader.classList.add("rwd-loading--hidden");
        console.log("移除");
    }, 3000);
    // 更新 previousWidth
    previousWidth = currentWidth;
    loader.classList.remove("rwd-loading--hidden");
};

// 添加螢幕寬度變化的事件監聽器
window.addEventListener("resize", handleResize);

// 初始狀態下檢查螢幕寬度
handleResize();
