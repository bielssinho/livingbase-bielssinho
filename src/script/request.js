const baseUrl = "https://m2-api-living.herokuapp.com/news";

async function getNewsById(id){
    try{
        const request = await fetch(baseUrl + `/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json()

        return response
    }catch(err){
        console.log(err);
    }
}

async function getNewsNotice(page){
    try{
        const request = await fetch(baseUrl + `?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json()
        
        return response
    }catch(err){
        console.log(err)
    }
}

async function getNews(){
    try{
        const request = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json()
        
        return response
    }catch(err){
        console.log(err)
    }
}

export{
    getNews,
    getNewsById,
    getNewsNotice
}