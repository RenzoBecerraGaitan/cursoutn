
let getCategories = async() =>{
    let url = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    let data = await url.json();
    return data;
}

let getProducts = async() =>{
    let url = await fetch(`https://api.escuelajs.co/api/v1/products`);
    let data = await url.json();
    return data;
}

export {getCategories, getProducts};