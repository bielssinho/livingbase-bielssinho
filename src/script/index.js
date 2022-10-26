import { getNews } from "./request.js";

const renderList = async () =>{
    const listPost = await getNews()
    console.log(listPost)
    const ul = document.querySelector(".list-post");

    ul.innerHTML = ""
    // <li class="post">
    // <img src="./src/img/Rectangle 1.png" alt="imagem post">
    // <h2>Cuidados para manter com plantas dentro de apartamentos </h2>
    // <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quos rerum delectus porro repellendus maxime voluptate corrupti, possimus commodi tenetur pariatur iusto laboriosam labore consectetur facilis minima nisi vitae autem.</p>
    // <span data-patch="id-do-post">Acessar conteúdo</span>
    // </li>
    listPost.forEach(element => {
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

            localStorage.setItem("@postId:", `${e.target.id}`);
            window.location.replace("../../src/pages/post.html")
        })
        
        li.append(img, h2, p, span);
        ul.append(li)
    });
    
}
renderList()

