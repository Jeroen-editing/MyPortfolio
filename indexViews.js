//________________ VARIABLES ____________________________________________________________
//---------------------------------------------------------------------------------------
let grayBg = "rgba(121,121,121,.48)";
let whiteBg = "rgba(242, 242, 242, .6)";
let white = "rgb(255,255,255)";
let borderGray = "2px solid rgb(121, 121, 121)";
let borderWhite = "2px solid rgb(255, 255, 255)";
let red = "#550600";
let green = "#006a66";
let darkgreen = "#093030";
let brown = "#6B4505";
let orange = "#f09a06";
let black = "#000000";

let greenGradient = "linear-gradient(180deg, rgba(0,78,101,1) 0%, rgba(0,72,93,1) 12%, rgba(0,66,85,1) 24%, rgba(1,62,80,1) 36%, rgba(1,62,80,1) 64%, rgba(0,66,85,1) 76%, rgba(0,72,93,1) 88%, rgba(0,78,101,1) 100%)";
let transparent = "transparent";

let educations = ["web", "science", "film", "cad", "architect"];
let les_arrows = ["webArrow", "scienceArrow", "filmArrow", "cadArrow", "architectArrow"];
let hide_les_arrows = ["webHideArrow", "scienceHideArrow", "filmHideArrow", "cadHideArrow", "architectHideArrow"];

let skills = ["htmlCss", "sass", "javascript", "frameworks", "databases", "design"];
let skill_arrows = ["htmlCssSkillsArrow", "sassSkillsArrow", "scriptSkillsArrow", "frameworksSkillsArrow", 
                "databasesSkillsArrow", "designSkillsArrow"];

let proj_groups = ["htmlCssProjects", "jsProjects", "fetchProjects", "fwsProjects", 
                "serverProjects", "rubyProjects", "phytonProjects"];
let proj_groups_arrows = ["htmlCssArrow", "jsArrow", "fetchArrow", "fwsArrow",
                "serverArrow", "rubyArrow", "phytonArrow"];
let hide_proj_groups_arrows = ["htmlCssHideArrow", "jsHideArrow", "fetchHideArrow", "fwsHideArrow",
                "serverHideArrow", "rubyHideArrow", "phytonHideArrow"];

let projects = ["htmlCssOne", "jsOne", "fetchOne", "frameworksOne", 
                "serverOne", "rubyOne", "phytonOne"];
let projects_arrows = ["htmlCssOneArrow", "jsOneArrow", "fetchOneArrow", "frameworksOneArrow", 
                "serverOneArrow", "rubyOneArrow", "phytonOneArrow"];

let htmlCss_projects = ["htmlCssOne", "htmlCssTwo"];
let htmlCss_arrows = ["htmlCssOneArrow", "htmlCssTwoArrow"];
let hide_htmlCss_arrows = ["htmlCssOneHideArrow", "htmlCssTwoHideArrow"];

let js_projects = ["jsOne", "jsTwo", "jsThree"];
let js_arrows = ["jsOneArrow", "jsTwoArrow", "jsThreeArrow"];
let hide_js_arrows = ["jsOneHideArrow", "jsTwoHideArrow", "jsThreeHideArrow"];

let fetch_projects = ["fetchOne", "fetchTwo", "fetchThree"];
let fetch_arrows = ["fetchOneArrow", "fetchTwoArrow", "fetchThreeArrow"];
let hide_fetch_arrows = ["fetchOneHideArrow", "fetchTwoHideArrow", "fetchThreeHideArrow"];

let fw_projects = ["fwOne"];
let fw_arrows = ["fwOneArrow"];
let hide_fw_arrows = ["fwOneHideArrow"]

const getById = (id) => (document.getElementById(id));

//**************** INDEX PAGE ***********************************************************

//________________ NAV FUNCTIONS ________________________________________________________
//---------------------------------------------------------------------------------------
let bird = getById("bird");
const playBird = () => {
    bird.play();
}
getById("twit").addEventListener('click', playBird);

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

//________________ INTRO FUNCTIONS ______________________________________________________
//---------------------------------------------------------------------------------------
let close_intro_message = getById("closeIntro");
let intro_message = getById("introMessage");
let content_menu = getById("contentMenu");

close_intro_message.addEventListener('click', () => {
    getById("introMessage").classList.replace("text_visible", "text_hidden");
    getById("contentMenu").classList.replace("index_hidden", "index_visible");
})

//________________ PAGE FUNCTIONS _______________________________________________________
//---------------------------------------------------------------------------------------
let infoBtn = getById("info_btn");
let left_slide = getById("leftSlideIn");
let info_close_btn = getById("infoCloseBtn");

let projectsBtn = getById("projects_btn");
let right_slide = getById("rightSlideIn");
let proj_close_btn = getById("projCloseBtn");

let hide_arrows = ["topArrowLeft", "botArrowLeft", "topArrowRight", "botArrowRight"]

//let info_new_window = document.querySelector("#infoNewWindow .new_window_box");
//let proj_new_window = document.querySelector("#projNewWindow .new_window_box");
let info_new_window = getById("infoNewWindow");
let info_window_link = getById("info_window_link");
let proj_new_window = getById("projNewWindow");
let proj_window_link = getById("proj_window_link");
let window_icons = ["info_icon", "proj_icon"]

const effect = (window) => {
    setTimeout(function() {
        window.classList.add("icon_effect");
    }, 2000);
}
const switchArrowLeft = (btn, arrowOne, arrowTwo) => {
    btn.addEventListener("mouseover", () => {
        getById(arrowOne).src = "assets/icons/left_arrow_yellow2.png";
        getById(arrowTwo).src = "assets/icons/left_arrow_yellow2.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrowOne).src = "assets/icons/left_arrow2_green.png";
        getById(arrowTwo).src = "assets/icons/left_arrow2_green.png";
    });
}
const switchArrowRight = (btn, arrowOne, arrowTwo) => {
    btn.addEventListener("mouseover", () => {
        getById(arrowOne).src = "assets/icons/right_arrow_yellow2.png";
        getById(arrowTwo).src = "assets/icons/right_arrow_yellow2.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrowOne).src = "assets/icons/right_arrow2_green.png";
        getById(arrowTwo).src = "assets/icons/right_arrow2_green.png";
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
    info_close_btn.classList.replace("btn_hidden", "btn_visible");
    effect(info_new_window);
    switchWindowIcon(info_window_link, window_icons[0]);
    switchArrowLeft(info_close_btn, hide_arrows[0], hide_arrows[1]);
    showJsSkills();
    showDesignSkills();

    info_close_btn.addEventListener("click", () => {
        left_slide.classList.replace("L_slide_in", "left_slide");
        info_close_btn.classList.replace("btn_visible", "btn_hidden");
        info_new_window.classList.remove("icon_effect");
        hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
        hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
        hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
        hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
        hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
    });
});
projectsBtn.addEventListener("click", () => {
    right_slide.classList.replace("right_slide", "R_slide_in");
    proj_close_btn.classList.replace("btn_hidden", "btn_visible");
    effect(proj_new_window);
    switchWindowIcon(proj_window_link, window_icons[1]);
    switchArrowRight(proj_close_btn, hide_arrows[2], hide_arrows[3])

    proj_close_btn.addEventListener("click", () => {
        right_slide.classList.replace("R_slide_in", "right_slide");
        proj_close_btn.classList.replace("btn_visible", "btn_hidden");
        proj_new_window.classList.remove("icon_effect");
    });
});

//**************** PAGES ****************************************************************

//________________ SECTIONS FUNCTIONS ___________________________________________________
//---------------------------------------------------------------------------------------
const showSection = (section, hide_btn, show_btn, arrow) => {
    getById(section).classList.replace("text_hidden", "text_visible");
    hide_btn.classList.replace("btn_hidden", "btn_visible");
    show_btn.style.color = darkgreen;
    show_btn.classList.remove("subtitle_hover");
    getById(arrow).style.opacity = "0";
}
const hideSection = (section, hide_btn, show_btn, arrow) => {
    getById(section).classList.replace("text_visible", "text_hidden");
    hide_btn.classList.replace("btn_visible", "btn_hidden");
    show_btn.style.color = red;
    show_btn.classList.add("subtitle_hover");
    getById(arrow).style.opacity = "1";
}

//________________ ARROW FUNCTIONS _______________________________________________________
//---------------------------------------------------------------------------------------
const switchArrowDown = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/arrow_down_yellow.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/arrow_down_1b.png";
    });
}
const switchArrowUp = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/arrow_up_yellow.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/arrow_up_1b.png";
    });
}

const switchProjArrowDown = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/arrow_down_yellow.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/arrow_down_1c.png";
    });
}
const switchProjArrowUp = (btn, arrow) => {
    btn.addEventListener("mouseover", () => {
        getById(arrow).src = "assets/icons/arrow_up_yellow.png";
    });
    btn.addEventListener("mouseout", () => {
        getById(arrow).src = "assets/icons/arrow_up_1c.png";
    });
}

//**************** PERSONAL SECTION *****************************************************

//================ EDUCATION ARTICLE ===========================================
//---------------- web developer --------------------------------------
let show_web_btn = getById("showWebBtn");
let hide_web_btn = getById("hideWebBtn");

switchArrowDown(show_web_btn, les_arrows[0]);
switchArrowUp(hide_web_btn, hide_les_arrows[0]);
  
show_web_btn.addEventListener('click', () => {     
    showSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
    hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
    hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
    hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
    hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
});
hide_web_btn.addEventListener('click', () => {
    hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
});

//---------------- computer science --------------------------------------
let show_science_btn = getById("showScienceBtn");
let hide_science_btn = getById("hideScienceBtn");

switchArrowDown(show_science_btn, les_arrows[1]);
switchArrowUp(hide_science_btn, hide_les_arrows[1]);

show_science_btn.addEventListener('click', () => {
    showSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
    hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
    hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
    hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
    hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
});
hide_science_btn.addEventListener('click', () => {
    hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
});

//---------------- film and video-art --------------------------------------
let show_film_btn = getById("showFilmBtn");
let hide_film_btn = getById("hideFilmBtn");

switchArrowDown(show_film_btn, les_arrows[2]);
switchArrowUp(hide_film_btn, hide_les_arrows[2]);

show_film_btn.addEventListener('click', () => {
    showSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
    hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
    hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
    hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
    hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
});
hide_film_btn.addEventListener('click', () => {
    hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
});

//---------------- auotcad -----------------------------------------------
let show_cad_btn = getById("showCadBtn");
let hide_cad_btn = getById("hideCadBtn");

switchArrowDown(show_cad_btn, les_arrows[3]);
switchArrowUp(hide_cad_btn, hide_les_arrows[3]);

show_cad_btn.addEventListener('click', () => {
    showSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
    hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
    hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
    hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
    hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
});

hide_cad_btn.addEventListener('click', () => {
    hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
});

//---------------- architecture - graphic art & design ------------------
let show_architect_btn = getById("showArchitectBtn");
let hide_architect_btn = getById("hideArchitectBtn");

switchArrowDown(show_architect_btn, les_arrows[4]);
switchArrowUp(hide_architect_btn, hide_les_arrows[4]);

show_architect_btn.addEventListener('click', () => {
    showSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
    hideSection(educations[0], hide_web_btn, show_web_btn, les_arrows[0]);
    hideSection(educations[1], hide_science_btn, show_science_btn, les_arrows[1]);
    hideSection(educations[2], hide_film_btn, show_film_btn, les_arrows[2]);
    hideSection(educations[3], hide_cad_btn, show_cad_btn, les_arrows[3]);
});
hide_architect_btn.addEventListener('click', () => {
    hideSection(educations[4], hide_architect_btn, show_architect_btn, les_arrows[4]);
});


//================ SKILLS ARTICLE ===========================================
const showJsSkills = () => {
    openSkills(skills[2], show_javascript_skills, skill_arrows[2]);
    closeSkills(skills[0], show_htmlCss_skills, skill_arrows[0]);
    closeSkills(skills[1], show_sass_skills, skill_arrows[1]);
}
const showDesignSkills = () => {
    openSkills(skills[5], show_design_skills, skill_arrows[5]);
    closeSkills(skills[3], show_frameworks_skills, skill_arrows[3]);
    closeSkills(skills[4], show_database_skills, skill_arrows[4]);
}
window.onload = () => {
    showJsSkills();
    showDesignSkills();
}

//________________ Skills Functions ______________________________
const openSkills = (skill, open_btn, arrow) => {
    let box = getById(skill);
    box.classList.replace("row_hidden", "row_visible");
    let innerBox = box.querySelector(".text_box");
    innerBox.style.background = whiteBg;
    open_btn.classList.remove("title_hover");
    open_btn.style.color = darkgreen;    
    open_btn.style.borderBottom = "none";
    getById(arrow).style.opacity = "0";
}

const closeSkills = (skill, open_btn, arrow) => {
    let box = getById(skill)
    box.classList.replace("row_visible", "row_hidden");
    let innerBox = box.querySelector(".text_box");
    innerBox.style.background = grayBg;
    open_btn.classList.add("title_hover");
    open_btn.style.color = red;
    open_btn.style.borderBottom = `1px solid ${darkgreen}`;
    getById(arrow).style.opacity = "1";
}

//-------- html & css ------ web design ------ javascript ----------------
let show_htmlCss_skills = getById("showHtmlCssBtn");
let show_sass_skills = getById("showSassBtn");
let show_javascript_skills = getById("showScriptBtn");

switchArrowDown(show_htmlCss_skills, skill_arrows[0]);
switchArrowDown(show_sass_skills, skill_arrows[1]);
switchArrowDown(show_javascript_skills, skill_arrows[2]);

show_htmlCss_skills.addEventListener('click', () => {
    openSkills(skills[0], show_htmlCss_skills, skill_arrows[0]);
    closeSkills(skills[1], show_sass_skills, skill_arrows[1]);
    closeSkills(skills[2], show_javascript_skills, skill_arrows[2]);
});

show_sass_skills.addEventListener('click', () => {
    openSkills(skills[1], show_sass_skills, skill_arrows[1]);
    closeSkills(skills[0], show_htmlCss_skills, skill_arrows[0]);
    closeSkills(skills[2], show_javascript_skills, skill_arrows[2]);
});

show_javascript_skills.addEventListener('click', showJsSkills);

//-------- js frameworks ------ databases ------ editing ----------------
let show_frameworks_skills = getById("showFrameworksBtn");
let show_database_skills = getById("showDatabasesBtn");
let show_design_skills = getById("showDesignBtn");

switchArrowDown(show_frameworks_skills, skill_arrows[3]);
switchArrowDown(show_database_skills, skill_arrows[4]);
switchArrowDown(show_design_skills, skill_arrows[5]);

show_frameworks_skills.addEventListener('click', () => {
    openSkills(skills[3], show_design_skills, skill_arrows[3]);
    closeSkills(skills[4], show_frameworks_skills, skill_arrows[4]);
    closeSkills(skills[5], show_database_skills, skill_arrows[5]);
});

show_database_skills.addEventListener('click', () => {
    openSkills(skills[4], show_database_skills, skill_arrows[4]);
    closeSkills(skills[3], show_frameworks_skills, skill_arrows[3]);
    closeSkills(skills[5], show_design_skills, skill_arrows[5]);
});      

show_design_skills.addEventListener('click', showDesignSkills);


//**************** PROJECTS SECTION *****************************************************

//================ PROJECTS ARTICLE ===========================================
//________________ Porjects functions ______________________________
const showProject = (project, hide_proj, show_proj, arrow) => {
    getById(project).classList.replace("proj_hidden", "proj_visible");
    hide_proj.classList.replace("btn_hidden", "btn_visible");
    show_proj.style.background = "url(./assets/backgrounds/bg_03.jpg)";
    show_proj.classList.remove("proj_title_hover");
    getById(arrow).style.opacity = "0";
}
const hideProject = (project, hide_proj, show_proj, arrow) => {
    getById(project).classList.replace("proj_visible", "proj_hidden");
    hide_proj.classList.replace("btn_visible", "btn_hidden");
    show_proj.style.background = "url(./assets/backgrounds/bg_03_green.jpg)";
    show_proj.classList.add("proj_title_hover");
    getById(arrow).style.opacity = "1";
}

//---------------- HTML&CSS projects --------------------------------
let show_htmlCss_btn = getById("showHtmlCssProjBtn");
let hide_htmlCss_btn = getById("hideHtmlCssProjBtn");

switchArrowDown(show_htmlCss_btn, proj_groups_arrows[0]);
switchArrowUp(hide_htmlCss_btn, hide_proj_groups_arrows[0]);

show_htmlCss_btn.addEventListener('click', () => {
    showSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_htmlCss_btn.addEventListener('click', () => {
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
});

        //---------------- Html Css 1 ---------------- //
        let show_htmlCss_one = getById("showHtmlCssOne");
        let hide_htmlCss_one = getById("hideHtmlCssOne");

        switchProjArrowDown(show_htmlCss_one, htmlCss_arrows[0]);
        switchProjArrowUp(hide_htmlCss_one, hide_htmlCss_arrows[0]);

        show_htmlCss_one.addEventListener('click', () => {
            showProject(htmlCss_projects[0], hide_htmlCss_one, show_htmlCss_one, htmlCss_arrows[0]);
            hideProject(htmlCss_projects[1], hide_htmlCss_two, show_htmlCss_two, htmlCss_arrows[1]);
            //show_htmlCss_one.classList.remove("proj_title_hover");
        });
        hide_htmlCss_one.addEventListener('click', () => {
            hideProject(htmlCss_projects[0], hide_htmlCss_one, show_htmlCss_one, htmlCss_arrows[0]);
            //show_htmlCss_one.classList.add("proj_title_hover");
        });

        //---------------- Html Css 2 ---------------- //
        let show_htmlCss_two = getById("showHtmlCssTwo");
        let hide_htmlCss_two = getById("hideHtmlCssTwo");

        switchProjArrowDown(show_htmlCss_two, htmlCss_arrows[1]);
        switchProjArrowUp(hide_htmlCss_two, hide_htmlCss_arrows[1]);

        show_htmlCss_two.addEventListener('click', () => {
            showProject(htmlCss_projects[1], hide_htmlCss_two, show_htmlCss_two, htmlCss_arrows[1]);
            hideProject(htmlCss_projects[0], hide_htmlCss_one, show_htmlCss_one, htmlCss_arrows[0]);
            //show_htmlCss_two.classList.remove("proj_title_hover");
        });
        hide_htmlCss_two.addEventListener('click', () => {
            hideProject(htmlCss_projects[1], hide_htmlCss_two, show_htmlCss_two, htmlCss_arrows[1]);
            //show_htmlCss_two.classList.add("proj_title_hover");
        });

//---------------- JavaScript projects --------------------------------
let show_Js_btn = getById("showJsProjBtn");
let hide_Js_btn = getById("hideJsProjBtn");

switchArrowDown(show_Js_btn, proj_groups_arrows[1]);
switchArrowUp(hide_Js_btn, hide_proj_groups_arrows[1]);

show_Js_btn.addEventListener('click', () => {
    showSection(proj_groups[1], hide_Js_btn, show_Js_btn, proj_groups_arrows[1]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_Js_btn.addEventListener('click', () => {
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, proj_groups_arrows[1]);
});

        //----------------- JavaScript 1 ---------------- //
        let show_Js_one = getById("showJsOne");
        let hide_Js_one = getById("hideJsOne");

        switchProjArrowDown(show_Js_one, js_arrows[0]);
        switchProjArrowUp(hide_Js_one, hide_js_arrows[0]);

        show_Js_one.addEventListener('click', () => {
            showProject(js_projects[0], hide_Js_one, show_Js_one, js_arrows[0]);
            hideProject(js_projects[1], hide_Js_two, show_Js_two, js_arrows[1]);
            hideProject(js_projects[2], hide_Js_three, show_Js_three, js_arrows[2]);
            //show_Js_one.classList.remove("proj_title_hover");
        });
        hide_Js_one.addEventListener('click', () => {
            hideProject(js_projects[0], hide_Js_one, show_Js_one, js_arrows[0]);
            //show_Js_one.classList.add("proj_title_hover");
        });

        //----------------- JavaScript 2 ---------------- //
        let show_Js_two = getById("showJsTwo");
        let hide_Js_two = getById("hideJsTwo");

        switchProjArrowDown(show_Js_two, js_arrows[1]);
        switchProjArrowUp(hide_Js_two, hide_js_arrows[1]);

        show_Js_two.addEventListener('click', () => {
            showProject(js_projects[1], hide_Js_two, show_Js_two, js_arrows[1]);
            hideProject(js_projects[0], hide_Js_one, show_Js_one, js_arrows[0]);
            hideProject(js_projects[2], hide_Js_three, show_Js_three, js_arrows[2]);
            //show_Js_two.classList.remove("proj_title_hover");
        });
        hide_Js_two.addEventListener('click', () => {
            hideProject(js_projects[1], hide_Js_two, show_Js_two, js_arrows[1]);
            //show_Js_two.classList.add("proj_title_hover");
        });

        //----------------- JavaScript 3 ---------------- //
        let show_Js_three = getById("showJsThree");
        let hide_Js_three = getById("hideJsThree");

        switchProjArrowDown(show_Js_three, js_arrows[2]);
        switchProjArrowUp(hide_Js_three, hide_js_arrows[2]);

        show_Js_three.addEventListener('click', () => {
            showProject(js_projects[2], hide_Js_three, show_Js_three, js_arrows[2]);
            hideProject(js_projects[0], hide_Js_one, show_Js_one, js_arrows[0]);
            hideProject(js_projects[1], hide_Js_two, show_Js_two, js_arrows[1]);
            //show_Js_three.classList.remove("proj_title_hover");
        });
        hide_Js_three.addEventListener('click', () => {
            hideProject(js_projects[2], hide_Js_three, show_Js_three, js_arrows[2]);
            //show_Js_three.classList.add("proj_title_hover");
        });

//---------------- Fetch projects --------------------------------
let show_Fetch_btn = getById("showFetchProjBtn");
let hide_Fetch_btn = getById("hideFetchProjBtn");

switchArrowDown(show_Fetch_btn, proj_groups_arrows[2]);
switchArrowUp(hide_Fetch_btn, hide_proj_groups_arrows[2]);

show_Fetch_btn.addEventListener('click', () => {
    showSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_Fetch_btn.addEventListener('click', () => {
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
});

        //---------------- Fetch API 1 ---------------- //
        let show_Fetch_one = getById("showFetchOne");
        let hide_Fetch_one = getById("hideFetchOne");

        switchProjArrowDown(show_Fetch_one, fetch_arrows[0]);
        switchProjArrowUp(hide_Fetch_one, hide_fetch_arrows[0]);

        show_Fetch_one.addEventListener('click', () => {
            showProject(fetch_projects[0], hide_Fetch_one, show_Fetch_one, fetch_arrows[0]);
            hideProject(fetch_projects[1], hide_Fetch_two, show_Fetch_two, fetch_arrows[1]);
            hideProject(fetch_projects[2], hide_Fetch_three, show_Fetch_three, fetch_arrows[2]);
            //show_Fetch_one.classList.remove("proj_title_hover");
        });
        hide_Fetch_one.addEventListener('click', () => {
            hideProject(fetch_projects[0], hide_Fetch_one, show_Fetch_one, fetch_arrows[0]);
            //show_Fetch_one.classList.add("proj_title_hover");
        });

        //---------------- Fetch API 1 ---------------- //
        let show_Fetch_two = getById("showFetchTwo");
        let hide_Fetch_two = getById("hideFetchTwo");

        switchProjArrowDown(show_Fetch_two, fetch_arrows[1]);
        switchProjArrowUp(hide_Fetch_two, hide_fetch_arrows[1]);

        show_Fetch_two.addEventListener('click', () => {
            showProject(fetch_projects[1], hide_Fetch_two, show_Fetch_two, fetch_arrows[1]);
            hideProject(fetch_projects[0], hide_Fetch_one, show_Fetch_one, fetch_arrows[0]);
            hideProject(fetch_projects[2], hide_Fetch_three, show_Fetch_three, fetch_arrows[2]);
            //show_Fetch_two.classList.remove("proj_title_hover");
        });
        hide_Fetch_two.addEventListener('click', () => {
            hideProject(fetch_projects[1], hide_Fetch_two, show_Fetch_two, fetch_arrows[1]);
            //show_Fetch_two.classList.add("proj_title_hover");
        });

        //---------------- Fetch API 1 ---------------- //
        let show_Fetch_three = getById("showFetchThree");
        let hide_Fetch_three = getById("hideFetchThree");

        switchProjArrowDown(show_Fetch_three, fetch_arrows[2]);
        switchProjArrowUp(hide_Fetch_three, hide_fetch_arrows[2]);

        show_Fetch_three.addEventListener('click', () => {
            showProject(fetch_projects[2], hide_Fetch_three, show_Fetch_three, fetch_arrows[2]);
            hideProject(fetch_projects[0], hide_Fetch_one, show_Fetch_one, fetch_arrows[0]);
            hideProject(fetch_projects[1], hide_Fetch_two, show_Fetch_two, fetch_arrows[1]);
            //show_Fetch_three.classList.remove("proj_title_hover");
        });
        hide_Fetch_three.addEventListener('click', () => {
            hideProject(fetch_projects[2], hide_Fetch_three, show_Fetch_three, fetch_arrows[2]);
            //show_Fetch_three.classList.add("proj_title_hover");
        });

//---------------- Frameworks projects --------------------------------
let show_Frameworks_btn = getById("showFwsProjBtn");
let hide_Frameworks_btn = getById("hideFwsProjBtn");

switchArrowDown(show_Frameworks_btn, proj_groups_arrows[3]);
switchArrowUp(hide_Frameworks_btn, hide_proj_groups_arrows[3]);

show_Frameworks_btn.addEventListener('click', () => {
    showSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_Frameworks_btn.addEventListener('click', () => {
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
});

        //---------------- Frameworks 1 ---------------- //
        let show_Frameworks_one = getById("showFwOne");
        let hide_Frameworks_one = getById("hideFwOne");

        switchProjArrowDown(show_Frameworks_one, fw_arrows[0]);
        switchProjArrowUp(hide_Frameworks_one, hide_fw_arrows[0]);

        show_Frameworks_one.addEventListener('click', () => {
            showProject(fw_projects[0], hide_Frameworks_one, show_Frameworks_one, fw_arrows[0]);
            show_Frameworks_one.classList.remove("proj_title_hover");
        });
        hide_Frameworks_one.addEventListener('click', () => {
            hideProject(fw_projects[0], hide_Frameworks_one, show_Frameworks_one, fw_arrows[0]);
            show_Frameworks_one.classList.add("proj_title_hover");
        });

//---------------- SERVER projects --------------------------------
let show_Server_btn = getById("showServerProjBtn");
let hide_Server_btn = getById("hideServerProjBtn");

switchArrowDown(show_Server_btn, proj_groups_arrows[4]);
switchArrowUp(hide_Server_btn, hide_proj_groups_arrows[4]);

show_Server_btn.addEventListener('click', () => {
    showSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_Server_btn.addEventListener('click', () => {
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
});

        //---------------- SERVER 1 ---------------- //
        /*let show_Server_one = getById("showServerOne");
        let hide_Server_one = getById("hideServerOne");

        show_Server_one.addEventListener('click', () => {
            showSection(projects[4], hide_Server_one, show_Server_one, projects_arrows[4]);
            show_Server_one.classList.remove("proj_title_hover");
        });
        hide_Server_one.addEventListener('click', () => {
            hideSection(projects[4], hide_Server_one, show_Server_one, projects_arrows[4]);
            show_Server_one.classList.add("proj_title_hover");
        });*/

//---------------- Ruby projects --------------------------------
let show_Ruby_btn = getById("showRubyProjBtn");
let hide_Ruby_btn = getById("hideRubyProjBtn");

switchArrowDown(show_Ruby_btn, proj_groups_arrows[5]);
switchArrowUp(hide_Ruby_btn, hide_proj_groups_arrows[5]);

show_Ruby_btn.addEventListener('click', () => {
    showSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});
hide_Ruby_btn.addEventListener('click', () => {
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
});

        //---------------- RUBY 1 ---------------- //
        /*let show_Ruby_one = getById("showRubyOne");
        let hide_Ruby_one = getById("hideRubyOne");

        show_Ruby_one.addEventListener('click', () => {
            showSection(projects[6], hide_Ruby_one, show_Ruby_one, proj_groups_arrows[6]);
            show_Ruby_one.classList.remove("proj_title_hover");
        });
        hide_Ruby_one.addEventListener('click', () => {
            hideSection(projects[6], hide_Ruby_one, show_Ruby_one, proj_groups_arrows[6]);
            show_Ruby_one.classList.add("proj_title_hover");
        });*/

//---------------- Phyton projects --------------------------------
let show_Phyton_btn = getById("showPhytonProjBtn");
let hide_Phyton_btn = getById("hidePhytonProjBtn");

switchArrowDown(show_Phyton_btn, proj_groups_arrows[6]);
switchArrowUp(hide_Phyton_btn, hide_proj_groups_arrows[6]);

show_Phyton_btn.addEventListener('click', () => {
    showSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
    hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
    hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
    hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
    hideSection(proj_groups[3], hide_Frameworks_btn, show_Frameworks_btn, proj_groups_arrows[3]);
    hideSection(proj_groups[4], hide_Server_btn, show_Server_btn, proj_groups_arrows[4]);
    hideSection(proj_groups[5], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[5]);
});
hide_Phyton_btn.addEventListener('click', () => {
    hideSection(proj_groups[6], hide_Phyton_btn, show_Phyton_btn, proj_groups_arrows[6]);
});

        //---------------- DATA 1 ---------------- //
        /*let show_Phyton_one = getById("showPhytonOne");
        let hide_Phyton_one = getById("hidePhytonOne");

        show_Phyton_one.addEventListener('click', () => {
            showSection(projects[5], hide_Phyton_one, show_Phyton_one, projects_arrows[5]);
            show_Phyton_one.classList.remove("proj_title_hover");
        });
        hide_Phyton_one.addEventListener('click', () => {
            hideSection(projects[5], hide_Phyton_one, show_Phyton_one, projects_arrows[5]);
            show_Phyton_one.classList.add("proj_title_hover");
        });*/

//================ VCARD ARTICLE ===========================================
let vcard = getById("vcardBtn");

let vcardBG = ["./assets/vcard/vcard_bg_03.jpg", "./assets/vcard/vcard_bg_01.jpg", "./assets/vcard/vcard_bg_04.jpg"];
let bgCounter = 0;

vcard.addEventListener("click", () => {
    vcard.style.background = `url(${vcardBG[bgCounter]}) no-repeat`;
    vcard.style.backgroundSize = "cover";
    (bgCounter < 2) ? bgCounter++ : bgCounter = 0;
})