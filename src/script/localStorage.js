export function getLocalStorage(){
    const user = JSON.parse(localStorage.getItem("@postId:"))

    return user
}

export const getLocalStorageButton = () => {
    const button = JSON.parse(localStorage.getItem("@botao:"));

    return button 
}