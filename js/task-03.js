const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const list = document.querySelector("ul");
console.log(list);

function createMarkup(arr) {

    const markup = images
        .map(
            ({ url, alt }) => `<li><img scr="${url}" alt="${alt}" class = "foto" width = "300"/></li>`
        )
        .join("");

    list.insertAdjacentHTML("afterbegin", markup);

}

createMarkup(images);

