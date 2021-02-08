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

let articles = ["projectsBox", "videoBox", "v_cardBox"];
let main_arrows = ["projectsArrow", "videoArrow", "v_cardArrow"];

let proj_groups = ["htmlCssProjects", "jsProjects", "fetchProjects", "phpProjects", 
                "sqlProjects", "dataProjects", "rubyProjects"];
let proj_groups_arrows = ["htmlCssArrow", "jsArrow", "fetchArrow", "phpArrow", "sqlArrow",
                "dataArrow", "rubyArrow"];
let projects = ["htmlCssOne", "jsOne", "fetchOne", "phpOne", 
                "sqlOne", "dataOne", "rubyOne"];
let projects_arrows = ["htmlCssOneArrow", "jsOneArrow", "fetchOneArrow", "phpOneArrow", 
                "sqlOneArrow", "dataOneArrow", "rubyOneArrow"];


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
    open_projects.addEventListener("mouseover", () => {
        open_projects.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_video.addEventListener("mouseover", () => {
        open_video.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_vcard.addEventListener("mouseover", () => {
        open_vcard.querySelector('.arrow').src = "assets/icons/arrow_down_yellow.png";
    });
    open_projects.addEventListener("mouseout", () => {
        open_projects.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
    });
    open_video.addEventListener("mouseout", () => {
        open_video.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
    });
    open_vcard.addEventListener("mouseout", () => {
        open_vcard.querySelector('.arrow').src = "assets/icons/arrow_down_1c.png";
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


//**************** PROJECTS SECTION *****************************************************
let performances = document.getElementById("performances");
let art_two = document.getElementById("artTwo");

//================ PROJECTS ARTICLE ===========================================
let open_projects = document.getElementById("openProjects");
let close_projects = document.getElementById("closeProjects");
let projects_box = document.getElementById("projectsInfoBox");
        
open_projects.addEventListener('click', () => {
    openArticle(articles[0], close_projects, open_projects, main_arrows[0]);
    closeArticle(articles[1], close_video, open_video, main_arrows[1]);
    closeArticle(articles[2], close_vcard, open_vcard, main_arrows[2]);
    performances.style.scrollbarWidth = "thin";
    art_two.style.display = "none";
    fadeIn_Article(projects_box, open_projects, globalBg, brown);
    fadeOut_Article(video_box, open_video, black, green);
    fadeOut_Article(vcard_box, open_vcard, black, green);
});
close_projects.addEventListener('click', () => {
    closeArticle(articles[0], close_projects, open_projects, main_arrows[0]);
    performances.style.scrollbarWidth = "none";
    art_two.style.display = "block";
    art_two.style.animation = "none";
    fadeIn_Article(projects_box, open_projects, greenGradient, white);
    fadeIn_Article(video_box, open_video, greenGradient, white);
    fadeIn_Article(vcard_box, open_vcard, greenGradient, white);
});

//---------------- HTML&CSS projects --------------------------------
const showProject = (project, hide_btn, show_proj, arrow) => {
    document.getElementById(project).classList.replace("proj_hidden", "proj_visible");
    hide_btn.classList.replace("btn_hidden", "btn_visible");
    show_proj.style.color = green;
    show_proj.classList.remove("subtitle_hover");
    document.getElementById(arrow).style.opacity = "0";
}
const hideProject = (project, hide_btn, show_proj, arrow) => {
    document.getElementById(project).classList.replace("proj_visible", "proj_hidden");
    hide_btn.classList.replace("btn_visible", "btn_hidden");
    show_proj.style.color = brown;
    show_proj.classList.add("subtitle_hover");
    document.getElementById(arrow).style.opacity = "1";
}

        // ---------------- HTML&CSS projects --------------------------------
        let show_htmlCss_btn = document.getElementById("showHtmlCssProjBtn");
        let hide_htmlCss_btn = document.getElementById("hideHtmlCssProjBtn");

        show_htmlCss_btn.addEventListener('click', () => {
            showSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_htmlCss_btn.addEventListener('click', () => {
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
        });

                // ---------------- Html Css 1 ---------------- //
                let show_htmlCss_one = document.getElementById("showHtmlCssOne");
                let hide_htmlCss_one = document.getElementById("hideHtmlCssOne");

                show_htmlCss_one.addEventListener('click', () => {
                    showProject(projects[0], hide_htmlCss_one, show_htmlCss_one, projects_arrows[0]);
                    show_htmlCss_one.classList.remove("proj_title_hover");
                    show_htmlCss_one.style.color = brown;
                    //show_htmlCss_one.style.textShadow = "none";
                });
                hide_htmlCss_one.addEventListener('click', () => {
                    hideProject(projects[0], hide_htmlCss_one, show_htmlCss_one, projects_arrows[0]);
                    show_htmlCss_one.classList.add("proj_title_hover");
                    show_htmlCss_one.style.color = "rgb(255,255,255)";
                    //show_htmlCss_one.style.textShadow = "1px 1px 2px rgb(0, 0, 0)";
                });

        // ---------------- JavaScript projects --------------------------------
        let show_Js_btn = document.getElementById("showJsProjBtn");
        let hide_Js_btn = document.getElementById("hideJsProjBtn");

        show_Js_btn.addEventListener('click', () => {
            showSection(proj_groups[1], hide_Js_btn, show_Js_btn, proj_groups_arrows[1]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_Js_btn.addEventListener('click', () => {
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, proj_groups_arrows[1]);
        });

                // ---------------- JavaScript 1 ---------------- //
                let show_Js_one = document.getElementById("showJsOne");
                let hide_Js_one = document.getElementById("hideJsOne");

                show_Js_one.addEventListener('click', () => {
                    showSection(projects[1], hide_Js_one, show_Js_one, projects_arrows[1]);
                    show_Js_one.classList.remove("proj_title_hover");
                    show_Js_one.style.color = brown;
                });
                hide_Js_one.addEventListener('click', () => {
                    hideSection(projects[1], hide_Js_one, show_Js_one, projects_arrows[1]);
                    show_Js_one.classList.add("proj_title_hover");
                    show_Js_one.style.color = "rgb(255,255,255)";
                });

        // ---------------- Fetch projects --------------------------------
        let show_Fetch_btn = document.getElementById("showFetchProjBtn");
        let hide_Fetch_btn = document.getElementById("hideFetchProjBtn");

        show_Fetch_btn.addEventListener('click', () => {
            showSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_Fetch_btn.addEventListener('click', () => {
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
        });

                // ---------------- Fetch API 1 ---------------- //
                let show_Fetch_one = document.getElementById("showFetchOne");
                let hide_Fetch_one = document.getElementById("hideFetchOne");

                show_Fetch_one.addEventListener('click', () => {
                    showSection(projects[2], hide_Fetch_one, show_Fetch_one, projects_arrows[2]);
                    show_Fetch_one.classList.remove("proj_title_hover");
                    show_Fetch_one.style.color = brown;
                });
                hide_Fetch_one.addEventListener('click', () => {
                    hideSection(projects[2], hide_Fetch_one, show_Fetch_one, projects_arrows[2]);
                    show_Fetch_one.classList.add("proj_title_hover");
                    show_Fetch_one.style.color = "rgb(255,255,255)";
                });

        // ---------------- PHP projects --------------------------------
        let show_Php_btn = document.getElementById("showPhpProjBtn");
        let hide_Php_btn = document.getElementById("hidePhpProjBtn");

        show_Php_btn.addEventListener('click', () => {
            showSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_Php_btn.addEventListener('click', () => {
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
        });

                // ---------------- PHP 1 ---------------- //
                let show_Php_one = document.getElementById("showPhpOne");
                let hide_Php_one = document.getElementById("hidePhpOne");

                show_Php_one.addEventListener('click', () => {
                    showSection(projects[3], hide_Php_one, show_Php_one, projects_arrows[3]);
                    show_Php_one.classList.remove("proj_title_hover");
                    show_Php_one.style.color = brown;
                });
                hide_Php_one.addEventListener('click', () => {
                    hideSection(projects[3], hide_Php_one, show_Php_one, projects_arrows[3]);
                    show_Php_one.classList.add("proj_title_hover");
                    show_Php_one.style.color = "rgb(255,255,255)";
                });

        // ---------------- SQL projects --------------------------------
        let show_Sql_btn = document.getElementById("showSqlProjBtn");
        let hide_Sql_btn = document.getElementById("hideSqlProjBtn");

        show_Sql_btn.addEventListener('click', () => {
            showSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_Sql_btn.addEventListener('click', () => {
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
        });

                // ---------------- SQL 1 ---------------- //
                let show_Sql_one = document.getElementById("showSqlOne");
                let hide_Sql_one = document.getElementById("hideSqlOne");

                show_Sql_one.addEventListener('click', () => {
                    showSection(projects[4], hide_Sql_one, show_Sql_one, projects_arrows[4]);
                    show_Sql_one.classList.remove("proj_title_hover");
                    show_Sql_one.style.color = brown;
                });
                hide_Sql_one.addEventListener('click', () => {
                    hideSection(projects[4], hide_Sql_one, show_Sql_one, projects_arrows[4]);
                    show_Sql_one.classList.add("proj_title_hover");
                    show_Sql_one.style.color = "rgb(255,255,255)";
                });

        // ---------------- DATA projects --------------------------------
        let show_Data_btn = document.getElementById("showDataProjBtn");
        let hide_Data_btn = document.getElementById("hideDataProjBtn");

        show_Data_btn.addEventListener('click', () => {
            showSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });
        hide_Data_btn.addEventListener('click', () => {
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
        });

                // ---------------- DATA 1 ---------------- //
                let show_Data_one = document.getElementById("showDataOne");
                let hide_Data_one = document.getElementById("hideDataOne");

                show_Data_one.addEventListener('click', () => {
                    showSection(projects[5], hide_Data_one, show_Data_one, projects_arrows[5]);
                    show_Data_one.classList.remove("proj_title_hover");
                    show_Data_one.style.color = brown;
                });
                hide_Data_one.addEventListener('click', () => {
                    hideSection(projects[5], hide_Data_one, show_Data_one, projects_arrows[5]);
                    show_Data_one.classList.add("proj_title_hover");
                    show_Data_one.style.color = "rgb(255,255,255)";
                });

        // ---------------- Ruby projects --------------------------------
        let show_Ruby_btn = document.getElementById("showRubyProjBtn");
        let hide_Ruby_btn = document.getElementById("hideRubyProjBtn");

        show_Ruby_btn.addEventListener('click', () => {
            showSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
            hideSection(proj_groups[0], hide_htmlCss_btn, show_htmlCss_btn, proj_groups_arrows[0]);
            hideSection(proj_groups[1], hide_Js_btn, show_Js_btn, projects_arrows[1]);
            hideSection(proj_groups[2], hide_Fetch_btn, show_Fetch_btn, proj_groups_arrows[2]);
            hideSection(proj_groups[3], hide_Php_btn, show_Php_btn, proj_groups_arrows[3]);
            hideSection(proj_groups[4], hide_Sql_btn, show_Sql_btn, proj_groups_arrows[4]);
            hideSection(proj_groups[5], hide_Data_btn, show_Data_btn, proj_groups_arrows[5]);
        });
        hide_Ruby_btn.addEventListener('click', () => {
            hideSection(proj_groups[6], hide_Ruby_btn, show_Ruby_btn, proj_groups_arrows[6]);
        });

                // ---------------- RUBY 1 ---------------- //
                let show_Ruby_one = document.getElementById("showRubyOne");
                let hide_Ruby_one = document.getElementById("hideRubyOne");

                show_Ruby_one.addEventListener('click', () => {
                    showSection(projects[6], hide_Ruby_one, show_Ruby_one, proj_groups_arrows[6]);
                    show_Ruby_one.classList.remove("proj_title_hover");
                    show_Ruby_one.style.color = brown;
                });
                hide_Ruby_one.addEventListener('click', () => {
                    hideSection(projects[6], hide_Ruby_one, show_Ruby_one, proj_groups_arrows[6]);
                    show_Ruby_one.classList.add("proj_title_hover");
                    show_Ruby_one.style.color = "rgb(255,255,255)";
                });


// **************** VIDEO article ************************************************
let open_video = document.getElementById("openVideo");
let close_video = document.getElementById("closeVideo");
let video_box = document.getElementById("videoInfoBox");

open_video.addEventListener('click', () => {
    openArticle(articles[1], close_video, open_video, main_arrows[1]);
    closeArticle(articles[0], close_projects, open_projects, main_arrows[0]);
    closeArticle(articles[2], close_vcard, open_vcard, main_arrows[2]);
    performances.style.scrollbarWidth = "thin";
    art_two.style.display = "none";
    fadeIn_Article(video_box, open_video, globalBg, brown);
    fadeOut_Article(projects_box, open_projects, black, green);
    fadeOut_Article(vcard_box, open_vcard, black, green);
});
close_video.addEventListener('click', () => {
    closeArticle(articles[1], close_video, open_video, main_arrows[1]);
    performances.style.scrollbarWidth = "none";
    art_two.style.display = "block";
    art_two.style.animation = "none";
    fadeIn_Article(video_box, open_video, greenGradient, white);
    fadeIn_Article(projects_box, open_projects, greenGradient, white);
    fadeIn_Article(vcard_box, open_vcard, greenGradient, white);
});

// **************** V-CARD article ************************************************
let open_vcard = document.getElementById("openVCard");
let close_vcard = document.getElementById("closeVCard");
let vcard_box = document.getElementById("vcardInfoBox");
        
open_vcard.addEventListener('click', () => {
    openArticle(articles[2], close_vcard, open_vcard, main_arrows[2]);
    closeArticle(articles[0], close_projects, open_projects, main_arrows[0]);
    closeArticle(articles[1], close_video, open_video, main_arrows[1]);
    performances.style.scrollbarWidth = "thin";
    art_two.style.display = "none";
    fadeIn_Article(vcard_box, open_vcard, globalBg, brown);
    fadeOut_Article(projects_box, open_projects, black, green);
    fadeOut_Article(video_box, open_video, black, green);
    vcard_box.scrollIntoView({behavior: "smooth",  block: "end", inline: "center"});
});
close_vcard.addEventListener('click', () => {
    closeArticle(articles[2], close_vcard, open_vcard, main_arrows[2]);
    performances.style.scrollbarWidth = "none";
    art_two.style.display = "block";
    art_two.style.animation = "none";
    fadeIn_Article(vcard_box, open_vcard, greenGradient, white);
    fadeIn_Article(projects_box, open_projects, greenGradient, white);
    fadeIn_Article(video_box, open_video, greenGradient, white);
});


window.onload = openArticlesArrows();