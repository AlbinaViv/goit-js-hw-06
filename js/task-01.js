const navItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", navItemEl.length);

navItemEl.forEach((item) => {
    const textEl = item.querySelector("h2").textContent;
    const numberEl = item.querySelectorAll("li").length;
    console.log("Category:", textEl);
    console.log("Elements:", numberEl);


});