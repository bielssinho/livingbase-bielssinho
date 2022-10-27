import { getLocalStorage } from "./localStorage.js";
import { getNewsById } from "./request.js";

const renderPost = async () => {
    const idPost = getLocalStorage();

    const infoPost = await getNewsById(idPost);

    const h2 = document.querySelector(".title-post-h2");
    h2.innerText = `${infoPost.title}`

    const p = document.querySelector(".title-post-p");
    p.innerText = `${infoPost.description}`;

    const img = document.querySelector(".image-post");
    img.src = `${infoPost.image}`;

    const pPost = document.querySelector(".content-post-p");
    pPost.innerText = `${infoPost.content}`;
}

renderPost()

const eventFilterPost = async () => {
    const botoes = document.querySelectorAll(".btn-filter");

    botoes.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault()
            
            localStorage.setItem("@botao:",JSON.stringify(`${botao.value}`))
            setTimeout(() => {
                window.location.replace("../../index.html");
            },2000)
        })
    })
}

eventFilterPost()