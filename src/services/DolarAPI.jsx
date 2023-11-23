
let getDolarPrice = async(typeOfDolar) =>{
    let url = await fetch(`https://dolarapi.com/v1/dolares/${typeOfDolar}`);
    let data = url.json();
    return data;
}


export {getDolarPrice};