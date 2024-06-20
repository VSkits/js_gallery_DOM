"use strict";
const pictersList = document.querySelector(".gallery__list");
pictersList.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    const mainPicture = document.getElementById("largeImg");
    mainPicture.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
