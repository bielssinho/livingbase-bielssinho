export function getLocalStorage(){
    const user = JSON.parse(localStorage.getItem("@postId:"))

    return user
}