let aboutBtn = document.querySelector(".about");

aboutBtn.addEventListener("click",()=>{
    window.scroll({
        top: 511,
        behavior: "smooth"
    });
    
});

let projectBtn = document.querySelector(".project");

projectBtn.addEventListener("click",()=>{
    window.scroll({
        top: 1191,
        behavior: "smooth"
    });
});

let skillBtn = document.querySelector(".skills");

skillBtn.addEventListener("click",()=>{
    window.scroll({
        top: 2100,
        behavior: "smooth"
    });
});

let contactBtn = document.querySelector(".contact");

contactBtn.addEventListener("click",()=>{
    window.scroll({
        top: 2500,
        behavior: "smooth"
    });
});

let seemoreThree = document.querySelector(".seemore3");
seemoreThree.addEventListener("click",()=>{
    location.href="https://www.linkedin.com/feed/update/urn:li:activity:7213926118976856066/";
});

let seemoreFour = document.querySelector(".seemore4");
seemoreFour.addEventListener("click",()=>{
    location.href="https://www.linkedin.com/feed/update/urn:li:activity:7201831176179822593/";
});

let linkedin = document.querySelector(".linkedinLogo");
linkedin.addEventListener("click",()=>{
    location.href="https://www.linkedin.com/in/ali-akbar-8592b1241/";
});

let github = document.querySelector(".githubLogo");
github.addEventListener("click",()=>{
    location.href="https://github.com/aliakbarr474";
});

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click",()=>{
    document.querySelector(".connectName").value="";
    document.querySelector(".connectEmail").value="";
});
