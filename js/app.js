const loadAllProducts = async ()=> {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    // console.log(res);
    const data = await res.json();
    return data ;
    // console.log(data.data);
}
// display the all product 
const dispalyProduct =async () => {
    const myProducts =await loadAllProducts(); 
    const myProduct = myProducts.data.news_category ;
    console.log(myProduct);
    // console.log(myProducts.data.news_category); 
    const menu = document.getElementById('all-menu');

    for (const news of myProduct) {
        // console.log(news.category_name);
        const li = document.createElement('li');
        li.innerHTML = `
            <a class= "text-black-50 text-decoration-none px-4 ">${news.category_name}</a>
        `
        menu.appendChild(li)
    }

    // const uniqueArray = [];
    
    
    }
    

dispalyProduct();
loadAllProducts();