import { getNews } from "./request.js";
import  observer  from "./observerScroll.js";
import { renderNewNoticeFilter } from "./filter.js";
import { getLocalStorageButton } from "./localStorage.js";


const renderList = async () =>{
    const listPost = await getNews()
    
    const ul = document.querySelector(".list-post");
    const section = document.querySelector(".posts");
    const footer = document.querySelector(".description-footer")

    ul.innerHTML = "";
    // <li class="post">
    // <img src="./src/img/Rectangle 1.png" alt="imagem post">
    // <h2>Cuidados para manter com plantas dentro de apartamentos </h2>
    // <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quos rerum delectus porro repellendus maxime voluptate corrupti, possimus commodi tenetur pariatur iusto laboriosam labore consectetur facilis minima nisi vitae autem.</p>
    // <span data-patch="id-do-post">Acessar conteúdo</span>
    // </li>
    listPost.news.forEach(element => {
        const li = document.createElement("li");
        li.classList.add("post");
    
        const img = document.createElement("img");
        img.src = `${element.image}`;
        img.alt = "imagem post"
        
        const h2 = document.createElement("h2");
        h2.innerText = `${element.title}`;
    
        const p = document.createElement("p");
        p.innerText = `${element.description}`;
    
        const span = document.createElement("span");
        span.id =`${element.id}`;
        span.innerText = "Acessar conteúdo";

        span.addEventListener("click", (e) => {
            e.preventDefault();

            localStorage.setItem("@postId:", JSON.stringify(`${e.target.id}`));
            window.location.replace("../../src/pages/post.html")
        })
        
        li.append(img, h2, p, span);
        ul.append(li)
    });
    const divObserver = document.createElement("div");
    divObserver.classList.add("observer")
    footer.append(divObserver)
    
    observer.observe(divObserver);
}
renderList()

const eventFilter = async () => {
    const botoes = document.querySelectorAll(".btn-filter");

    botoes.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault()
            const ul = document.querySelector(".list-post");
            ul.innerHTML = "";

            const valueBotao = botao.value
            localStorage.setItem("@botao:",valueBotao)
            console.log(valueBotao)
            renderNewNoticeFilter(valueBotao)
        })
        
        
    })
}

eventFilter()

const filterByPostArea = () => {
    const filter = getLocalStorageButton()
    console.log(filter)
    const botoes = document.querySelectorAll(".btn-filter");
    
    botoes.forEach(botao => {
        console.log(botao.value)
        if(botao.value == filter){
            
            botao.click();

            renderNewNoticeFilter(botao.value)
        }
    })
}

filterByPostArea()

export{
    renderList
}
