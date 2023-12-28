
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll(".blog_box")[0];
arrowIcons = document.querySelectorAll('.icon-container i');


let isDragStart = false, prevPageX, prevScrolleft;
var offset = 600;
if (window.innerWidth <= 768) {
    offset = 300;
}
let firstImgWidth = firstImg.clientWidth + offset;

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
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("draggling");
    let positionDiff = e.pageX - prevPageX
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

function PageTransitions() {
    document.addEventListener('DOMContentLoaded', function () {
        const sectBtn = document.querySelectorAll('.control');

        for (let i = 0; i < sectBtn.length; i++) {
            sectBtn[i].addEventListener('click', function () {
                let currentBtn = document.querySelector(".active-btn");
                currentBtn.className = currentBtn.className.replace('active-btn', '');
                this.className += ' active-btn';
            });
        }
    });

    //Section Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
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
        button.addEventListener("click", function () {
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
    }, 3500);
    // 更新 previousWidth
    previousWidth = currentWidth;
    loader.classList.remove("rwd-loading--hidden");
};

// 添加螢幕寬度變化的事件監聽器
window.addEventListener("resize", handleResize);

// 初始狀態下檢查螢幕寬度
handleResize();

function changeCountry(country) {
    document.getElementById('selected-country').innerText = country;
    const telInput = document.getElementById('telInput');
    switch (country.trim()) {
        case 'TW':
            telInput.value = '+886';
            console.log("TT");
            break;
        case 'USA':
            telInput.value = '+1';
            console.log("USAA");
            break;
        case 'UK':
            telInput.value = '+44';
            console.log("UKK");
            break;
        case 'OTHER':
            telInput.value = '';
            break;
    }
}


let ContactData = {
    getName: '',
    getEmail: '',
    getTel: '',
    getSubject: '',
    getMessage: ''
};

/*function changeSubmit() {
    var submitHeading = document.getElementById('Submit');
    submitHeading.innerText = 'Submitted';
    ContactData.getName = document.getElementById('nameInput').value;
    ContactData.getEmail = document.getElementById('emailInput').value;
    ContactData.getTel = document.getElementById('telInput').value;
    ContactData.getSubject = document.getElementById('subjectInput').value;
    ContactData.getMessage = document.getElementById('mesInput').value;
    console.log("前內容：", ContactData);
    setTimeout(function () {
        document.getElementById('nameInput').value = '123';
        document.getElementById('emailInput').value = '455';
        document.getElementById('telInput').value = '789';
        document.getElementById('subjectInput').value = '';
        document.getElementById('mesInput').value = '';
    console.log("SU");
    }, 1000); // 延迟时间为0.5秒（500毫秒）
}*/


//name1
/*const n1 = document.querySelector('.name1');
window.addEventListener('scroll', n1animation);
function n1animation(){
    var rect = n1.getBoundingClientRect();
    // 如果元素的頂部在視窗的底部之上，且元素的底部在視窗的頂部之下
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        console.log("n1 is in the viewport");
        window.removeEventListener('scroll', n1animation); // 移除滾動事件監聽器，避免多次觸發
    }
    console.log("n1");
}
*/
console.log("KK");
let testimonial = {
    getStar: '',
    getName: '',
    getText: '',
};


let testimonial1 = {
    getStar: '',
    getName: '',
    getText: '',
};

let testimonial2 = {
    getStar: '',
    getName: '',
    getText: '',
};

let testimonial3 = {
    getStar: '',
    getName: '',
    getText: '',
};

let testimonial4 = {
    getStar: '',
    getName: '',
    getText: '',
};

let testimonial5 = {
    getStar: '',
    getName: '',
    getText: '',
};

let testimonial6 = {
    getStar: '',
    getName: '',
    getText: '',
};

let starc=0;

function testiS() {
    console.log("GGG");
    var submitHeading = document.getElementById('Submit2');
    submitHeading.innerText = 'Submitted';
    testimonial.getName = document.getElementById('nameInput2').value;
    testimonial.getText = document.getElementById('mesInput2').value;
    console.log(testimonial.getName);
    console.log(testimonial.getText);
    setTimeout(function () {
        var box1Element = document.getElementById('box1nid');
        box1Element.innerHTML = testimonial.getName;
        var box1review = document.getElementById('box1review');
        box1review.innerHTML = testimonial.getText;
        if(starc<5){
            var myElement = document.getElementById("s5");
            myElement.style.opacity = 0;
            if(starc<4) {
                var myElement2 = document.getElementById("s4");
                myElement2.style.opacity = 0;  
                if(starc<3) {
                    var myElement3 = document.getElementById("s3");
                    myElement3.style.opacity = 0;
                }   
                if(starc<2) {
                    var myElement3 = document.getElementById("s2");
                    myElement3.style.opacity = 0;
                }
            }
        }
        document.getElementById('nameInput2').value = '';
        document.getElementById('mesInput2').value = '';
        console.log("FFFTF");
        /*這裡要寫function star(i)*/
    }, 400); // 延迟时间为0.5秒（500毫秒）
}

function rateClicked(value) {
    console.log('Star ' + value + ' clicked');
    starc = value;
    console.log("Count:" + starc);
    // 在这里执行其他操作，根据需要处理被点击的星级
}

function star(starc) {
    if(i<5){
        var myElement = document.getElementById("s5");
        myElement.style.opacity = 0;
        if(i<4) {
            var myElement2 = document.getElementById("s4");
            myElement2.style.opacity = 0;  
            if(i<3) {
                var myElement3 = document.getElementById("s3");
                myElement3.style.opacity = 0;
            }   
            if(i<2) {
                var myElement3 = document.getElementById("s2");
                myElement3.style.opacity = 0;
            }
        }
    }
}




