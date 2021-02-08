const getById = (id) => (document.getElementById(id));

let bird = getById("bird");
const playBird = () => {
    bird.play();
}
getById("twit").addEventListener('click', playBird);

//**** PAGES Hide btns ********************************

//let infoBtn = document.getElementById("info_btn");
let infoBtn = getById("info_btn");
let left_slide = getById("leftSlideIn");
let info_close_btn_one = getById("infoCloseBtnOne");
let info_close_btn_two = getById("infoCloseBtnTwo");

let projectsBtn = getById("projects_btn");
let right_slide = getById("rightSlideIn");
let proj_close_btn_one = getById("projCloseBtnOne");
let proj_close_btn_two = getById("projCloseBtnTwo");

let hide_arrows = ["topArrowLeft", "botArrowLeft", "topArrowRight", "botArrowRight"]

let info_new_window = document.querySelector("#infoNewWindow .new_window_box");
let proj_new_window = document.querySelector("#projNewWindow .new_window_box");
let icon = "window_icon";

const effect = (window) => {
    setTimeout(function() {
        window.classList.add("icon_effect");
    }, 2000);
}
const switchArrowLeft = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/left_arrow_yellow2.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/left_arrow2.png";
    });
}
const switchArrowRight = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/right_arrow_yellow2.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/right_arrow2.png";
    });
}
const switchWindowIcon = (btn, icon) => {
    btn.addEventListener("mouseover", () => {
        document.querySelector(`.${icon}`).src = "assets/icons/window_yellow.png";
    });
    btn.addEventListener("mouseout", () => {
        document.querySelector(`.${icon}`).src = "assets/icons/window_green.png";
    });
}

infoBtn.addEventListener("click", () => {
    left_slide.classList.replace("left_slide", "L_slide_in");
    info_close_btn_one.classList.replace("btn_hidden", "btn_visible");
    info_close_btn_two.classList.replace("btn_hidden", "btn_visible");
    effect(info_new_window);
    switchWindowIcon(info_new_window, icon);
    switchArrowLeft(info_close_btn_one, hide_arrows[0]);
    switchArrowLeft(info_close_btn_two, hide_arrows[1]);

    info_close_btn_one.addEventListener("click", () => {
        left_slide.classList.replace("L_slide_in", "left_slide");
        info_close_btn_one.classList.replace("btn_visible", "btn_hidden");
        info_close_btn_two.classList.replace("btn_visible", "btn_hidden");
        info_new_window.classList.remove("icon_effect");
    });
    info_close_btn_two.addEventListener("click", () => {
        left_slide.classList.replace("L_slide_in", "left_slide");
        info_close_btn_one.classList.replace("btn_visible", "btn_hidden");
        info_close_btn_two.classList.replace("btn_visible", "btn_hidden");
        info_new_window.classList.remove("icon_effect");
    });
});
projectsBtn.addEventListener("click", () => {
    right_slide.classList.replace("right_slide", "R_slide_in");
    proj_close_btn_one.classList.replace("btn_hidden", "btn_visible");
    proj_close_btn_two.classList.replace("btn_hidden", "btn_visible");
    effect(proj_new_window);
    switchWindowIcon(proj_new_window, icon);
    switchArrowRight(proj_close_btn_one, hide_arrows[2]);
    switchArrowRight(proj_close_btn_two, hide_arrows[3]);

    proj_close_btn_one.addEventListener("click", () => {
        right_slide.classList.replace("R_slide_in", "right_slide");
        proj_close_btn_one.classList.replace("btn_visible", "btn_hidden");
        proj_close_btn_two.classList.replace("btn_visible", "btn_hidden");
        proj_new_window.classList.remove("icon_effect");
    });
    proj_close_btn_two.addEventListener("click", () => {
        right_slide.classList.replace("R_slide_in", "right_slide");
        proj_close_btn_one.classList.replace("btn_visible", "btn_hidden");
        proj_close_btn_two.classList.replace("btn_visible", "btn_hidden");
        proj_new_window.classList.remove("icon_effect");
    });
});

//**** NAV Follow drops ********************************

const triggers = document.querySelectorAll('.selectdrop > .drop');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.navbar');

function handleEnter() {
    this.classList.add('trigger-enter');

    setTimeout(() =>
        this.classList.contains('trigger-enter')
        && this.classList.add('trigger-enter-active'), 50);

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter');
    setTimeout(() => this.classList.remove('trigger-enter-active'), 50);
    
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));