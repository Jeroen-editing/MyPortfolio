//________________ VARIABLES ____________________________________________________________
//---------------------------------------------------------------------------------------
let globalBg = "rgb(236, 236, 236)";
let grayBg = "rgb(242, 242, 242)";
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

let articles = ["aboutBox", "educationsBox", "skillsBox"];
let main_arrows = ["aboutArrow", "educationArrow", "skillsArrow"];

let educations = ["becode", "encora", "science", "film", "cad", "architect"];
let les_arrows = ["webArrow", "scienceArrow", "filmArrow", "cadArrow", "architectArrow"];

let skills = ["htmlCss", "webdesign", "javascript", "frameworks", "databases", "editing"];
let skil_arrows = ["htmlCssArrow", "designArrow", "scriptArrow", "frameworksArrow", 
                "databasesArrow", "editingArrow"];


//________________ ARTICLE FUNCTIONS ____________________________________________________
//---------------------------------------------------------------------------------------
const openArticle = (article, close_box, open_box, arrow) => {
    document.getElementById(article).classList.replace("text_hidden", "text_visible");
    open_box.classList.remove("title_hover");
    close_box.classList.replace("box_hidden", "box_visible");
    close_box.addEventListener('mouseover', () => {
        close_box.querySelector('.arrow').src = "assets/icons/arrow_up_yellow.png";
    });
    close_box.addEventListener('mouseout', () => {
        close_box.querySelector('.arrow').src = "assets/icons/arrow_up_1a.png";
    });
    document.getElementById(arrow).style.opacity = "0";
}
const closeArticle = (article, close_box, open_box, arrow) => {
    document.getElementById(article).classList.replace("text_visible", "text_hidden");
    open_box.classList.add("title_hover");
    close_box.classList.replace("box_visible", "box_hidden");
    document.getElementById(arrow).style.opacity = "1";
}
const fadeOut_Article = (box, title, bg, color) => {
    box.style.opacity = ".32";
    title.style.background = bg;
    title.style.color = color;
}
const fadeIn_Article = (box, title, bg, color) => {
    box.style.opacity = "1";
    title.style.background = bg;
    title.style.color = color;
}

//________________ ARTICLE HOVER FUNCTIONS ______________________________________________
//---------------------------------------------------------------------------------------
const openArticlesArrows = () => {
    open_about.addEventListener("mouseover", () => {
        open_about.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_educations.addEventListener("mouseover", () => {
        open_educations.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_skills.addEventListener("mouseover", () => {
        open_skills.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_about.addEventListener("mouseout", () => {
        open_about.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
    });
    open_educations.addEventListener("mouseout", () => {
        open_educations.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
    });
    open_skills.addEventListener("mouseout", () => {
        open_skills.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
    });
}

//________________ SECTIONS FUNCTIONS ___________________________________________________
//---------------------------------------------------------------------------------------
const showSection = (section, hide_btn, show_btn, arrow) => {
    document.getElementById(section).classList.replace("text_hidden", "text_visible");
    hide_btn.classList.replace("btn_hidden", "btn_visible");
    show_btn.style.color = green;
    show_btn.classList.remove("subtitle_hover");
    document.getElementById(arrow).style.opacity = "0";
}
const hideSection = (section, hide_btn, show_btn, arrow) => {
    document.getElementById(section).classList.replace("text_visible", "text_hidden");
    hide_btn.classList.replace("btn_visible", "btn_hidden");
    show_btn.style.color = brown;
    document.getElementById(arrow).style.opacity = "1";
}


// **************** NAVBAR DROPDOWN ****************************************************
let dropdown_menu = document.getElementById("dropdown");
let dropdown_btns = document.getElementById("menu_btns");

dropdown_menu.addEventListener('mouseover', () => {
    dropdown_btns.classList.replace("btns_hidden", "btns_visible");
});
dropdown_menu.addEventListener('mouseout', () => {
    dropdown_btns.classList.replace("btns_visible", "btns_hidden");
});


//**************** INFO SECTION *********************************************************
let personal = document.getElementById("personal");
let art_one = document.getElementById("artOne");

//================ ABOUT ARTICLE =============================================
let open_about = document.getElementById("openAbout");
let close_about = document.getElementById("closeAbout");
let about_box = document.getElementById("aboutInfoBox");

open_about.addEventListener('click', () => {
    openArticle(articles[0], close_about, open_about, main_arrows[0]);
    closeArticle(articles[1], close_educations, open_educations, main_arrows[1])
    closeArticle(articles[2], close_skills, open_skills, main_arrows[2]);
    document.getElementById("aboutQuotes").style.display = "flex";
    personal.style.scrollbarWidth = "thin";
    art_one.style.display = "none";
    fadeIn_Article(about_box, open_about, globalBg, brown);
    fadeOut_Article(educations_box, open_educations, black, green);
    fadeOut_Article(skills_box, open_skills, black, green);
});
close_about.addEventListener('click', () => {
    closeArticle(articles[0], close_about, open_about, main_arrows[0]);
    document.getElementById("aboutQuotes").style.display = "none";
    personal.style.scrollbarWidth = "none";
    art_one.style.display = "block";
    art_one.style.animation = "none";
    fadeIn_Article(about_box, open_about, greenGradient, white);
    fadeIn_Article(educations_box, open_educations, greenGradient, white);
    fadeIn_Article(skills_box, open_skills, greenGradient, white);
});


//================ EDUCATION ARTICLE ===========================================
let open_educations = document.getElementById("openEducations");
let close_educations = document.getElementById("closeEducations");
let educations_box = document.getElementById("educationInfoBox");

open_educations.addEventListener('click', () => {
    openArticle(articles[1], close_educations, open_educations, main_arrows[1]);
    closeArticle(articles[0], close_about, open_about, main_arrows[0]);
    closeArticle(articles[2], close_skills, open_skills, main_arrows[2]);
    personal.style.scrollbarWidth = "thin";
    art_one.style.display = "none";
    fadeIn_Article(educations_box, open_educations, globalBg, brown);
    fadeOut_Article(about_box, open_about, black, green);
    fadeOut_Article(skills_box, open_skills, black, green);
});
close_educations.addEventListener('click', () => {
    closeArticle(articles[1], close_educations, open_educations, main_arrows[1]);
    personal.style.scrollbarWidth = "none";
    art_one.style.display = "block";
    art_one.style.animation = "none";
    fadeIn_Article(educations_box, open_educations, greenGradient, white);
    fadeIn_Article(about_box, open_about, greenGradient, white);
    fadeIn_Article(skills_box, open_skills, greenGradient, white);
});

        //---------------- web developer --------------------------------------
        let show_web_btn = document.getElementById("showWebBtn");
        let hide_web_btn1 = document.getElementById("hideWebBtnOne");
        let hide_web_btn2 = document.getElementById("hideWebBtnTwo");

        show_web_btn.addEventListener('click', () => {
            showSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            showSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
            hideSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
            hideSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
            hideSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
            hideSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
            educations_box.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        });
        hide_web_btn1.addEventListener('click', () => {
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
        });
        hide_web_btn2.addEventListener('click', () => {
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
        });

        //---------------- computer science --------------------------------------
        let show_science_btn = document.getElementById("showScienceBtn");
        let hide_science_btn = document.getElementById("hideScienceBtn");

        show_science_btn.addEventListener('click', () => {
            showSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
            hideSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
            hideSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
            hideSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
            educations_box.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        });
        hide_science_btn.addEventListener('click', () => {
            hideSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
        });

        //---------------- film and video-art --------------------------------------
        let show_film_btn = document.getElementById("showFilmBtn");
        let hide_film_btn = document.getElementById("hideFilmBtn");

        show_film_btn.addEventListener('click', () => {
            showSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
            hideSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
            hideSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
            hideSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
            educations_box.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        });
        hide_film_btn.addEventListener('click', () => {
            hideSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
        });

        //---------------- auotcad -----------------------------------------------
        let show_cad_btn = document.getElementById("showCadBtn");
        let hide_cad_btn = document.getElementById("hideCadBtn");

        show_cad_btn.addEventListener('click', () => {
            showSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
            hideSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
            hideSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
            hideSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
            educations_box.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

        });
        hide_cad_btn.addEventListener('click', () => {
            hideSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
        });

        //---------------- architecture - graphic art & design ------------------
        let show_architect_btn = document.getElementById("showArchitectBtn");
        let hide_architect_btn = document.getElementById("hideArchitectBtn");

        show_architect_btn.addEventListener('click', () => {
            showSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
            hideSection(educations[0], hide_web_btn1, show_web_btn, les_arrows[0]);
            hideSection(educations[1], hide_web_btn2, show_web_btn, les_arrows[0]);
            hideSection(educations[2], hide_science_btn, show_science_btn, les_arrows[1]);
            hideSection(educations[3], hide_film_btn, show_film_btn, les_arrows[2]);
            hideSection(educations[4], hide_cad_btn, show_cad_btn, les_arrows[3]);
            educations_box.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
        });
        hide_architect_btn.addEventListener('click', () => {
            hideSection(educations[5], hide_architect_btn, show_architect_btn, les_arrows[4]);
        });

//================ SKILLS ARTICLE ============================================
let open_skills = document.getElementById("openSkills");
let close_skills = document.getElementById("closeSkills");
let skills_box = document.getElementById("skillsInfoBox");

open_skills.addEventListener('click', () => {
    openArticle(articles[2], close_skills, open_skills, main_arrows[2]);
    closeArticle(articles[0], close_about, open_about, main_arrows[0]);
    closeArticle(articles[1], close_educations, open_educations, main_arrows[1]);
    openSkills(skills[2], show_javascript_btn, skil_arrows[2]);
    openSkills(skills[3], show_frameworks_btn, skil_arrows[3]);
    personal.style.scrollbarWidth = "thin";
    art_one.style.display = "none";
    fadeIn_Article(skills_box, open_skills, globalBg, brown);
    fadeOut_Article(about_box, open_about, black, green);
    fadeOut_Article(educations_box, open_educations, black, green);
    skills_box.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
    skills_box.style.marginBottom = `1.4rem`;
});
close_skills.addEventListener('click', () => {
    closeArticle(articles[2], close_skills, open_skills, main_arrows[2]);
    closeSkills(skills[0], show_htmlCss_btn, skil_arrows[0]);
    closeSkills(skills[1], show_webdesign_btn, skil_arrows[1]);
    closeSkills(skills[2], show_javascript_btn, skil_arrows[2]);
    closeSkills(skills[3], show_frameworks_btn, skil_arrows[3]);
    closeSkills(skills[4], show_database_btn, skil_arrows[4]);
    closeSkills(skills[5], show_editing_btn, skil_arrows[5]);
    personal.style.scrollbarWidth = "none";
    art_one.style.display = "block";
    art_one.style.animation = "none";
    fadeIn_Article(skills_box, open_skills, greenGradient, white);
    fadeIn_Article(about_box, open_about, greenGradient, white);
    fadeIn_Article(educations_box, open_educations, greenGradient, white);
    skills_box.style.marginBottom = `0`;
});

        //________________ Skills Functions ______________________________
        const openSkills = (skill, open_btn, arrow) => {
            let box = document.getElementById(skill);
            box.classList.replace("row_hidden", "row_visible");
            let innerBox = box.querySelector(".text_box");
            innerBox.style.background = grayBg;
            open_btn.style.background = grayBg;
            open_btn.style.color = green;
            open_btn.style.borderBottom = "none";
            open_btn.style.boxShadow = "none";
            document.getElementById(arrow).style.opacity = "0";
        }
        const closeSkills = (skill, open_btn, arrow) => {
            let box = document.getElementById(skill)
            box.classList.replace("row_visible", "row_hidden");
            let innerBox = box.querySelector(".text_box");
            innerBox.style.background = "rgb(191, 191, 191)";
            open_btn.style.background = "rgb(191, 191, 191)";
            open_btn.style.color = brown;
            open_btn.style.borderBottom = "1px solid  rgb(111, 111, 111)";
            open_btn.style.boxShadow = "inset 1px 1px 2px rgba(22,22,22,.32),inset -1px -1px 2px rgba(22,22,22,.32)"
            document.getElementById(arrow).style.opacity = "1";
        }

        //-------- html & css ------ web design ------ javascript -----------
        let show_htmlCss_btn = document.getElementById("showHtmlCssBtn");
        let show_webdesign_btn = document.getElementById("showWebdesignBtn");
        let show_javascript_btn = document.getElementById("showScriptBtn");

        show_htmlCss_btn.addEventListener('click', () => {
            openSkills(skills[0], show_htmlCss_btn, skil_arrows[0]);
            closeSkills(skills[1], show_webdesign_btn, skil_arrows[1]);
            closeSkills(skills[2], show_javascript_btn, skil_arrows[2]);
        });

        show_webdesign_btn.addEventListener('click', () => {
            openSkills(skills[1], show_webdesign_btn, skil_arrows[1]);
            closeSkills(skills[0], show_htmlCss_btn, skil_arrows[0]);
            closeSkills(skills[2], show_javascript_btn, skil_arrows[2]);
        });

        show_javascript_btn.addEventListener('click', () => {
            openSkills(skills[2], show_javascript_btn, skil_arrows[2]);
            closeSkills(skills[0], show_htmlCss_btn, skil_arrows[0]);
            closeSkills(skills[1], show_webdesign_btn, skil_arrows[1]);
        });

        //-------- js frameworks ------ databases ------ editing ------------

        let show_frameworks_btn = document.getElementById("showFrameworksBtn");
        let show_database_btn = document.getElementById("showDatabasesBtn");
        let show_editing_btn = document.getElementById("showEditingBtn");

        show_frameworks_btn.addEventListener('click', () => {
            openSkills(skills[3], show_frameworks_btn, skil_arrows[3]);
            closeSkills(skills[4], show_database_btn, skil_arrows[4]);
            closeSkills(skills[5], show_editing_btn, skil_arrows[5]);
        });

        show_database_btn.addEventListener('click', () => {
            openSkills(skills[4], show_database_btn, skil_arrows[4]);
            closeSkills(skills[3], show_frameworks_btn, skil_arrows[3]);
            closeSkills(skills[5], show_editing_btn, skil_arrows[5]);
        });
        
        show_editing_btn.addEventListener('click', () => {
            openSkills(skills[5], show_editing_btn, skil_arrows[5]);
            closeSkills(skills[3], show_frameworks_btn, skil_arrows[3]);
            closeSkills(skills[4], show_database_btn, skil_arrows[4]);
        });

window.onload = openArticlesArrows();