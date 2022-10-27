import { getNewsNotice } from "./request.js";

let page = 1

const renderNewNotice = async () => {
    const dados = await getNewsNotice(page);
    const ul = document.querySelector(".list-post");

    

    if(dados.nextPage <= 3){
        dados.news.forEach(element => {
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
        page++;
    }
}


const observer = new IntersectionObserver((entries) => {
    if(entries.some((entry) => entry.isIntersecting)){
        renderNewNotice()
    }
})

export default observer