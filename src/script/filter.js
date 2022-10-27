
import { getNewsNotice } from "./request.js";

const renderNewNoticeFilter = async (filter) => {
    let page = 0
    const dados = await getNewsNotice(page);
    const ul = document.querySelector(".list-post");

    
    ul.innerHTML = ""
    if(dados.nextPage <= 3){
        dados.news.forEach(element => {
            if(filter == "Todos"){
                // page = 0;
                window.location.reload("../../index.html")
                // renderList();
            }else if(element.category == filter){
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
            }
            
        });
        page++;
    }
}

export{
    renderNewNoticeFilter
}