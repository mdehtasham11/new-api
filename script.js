function selectCat(event) {
    event.preventDefault();
    const search = document.getElementById('search');
    const searchInput = search.value;
    search.value = "";
    getdata(searchInput);  
}

const main = document.getElementById("main");
async function getdata(searchInput) {
    
    const url = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=07bee57536b24e9eb07c0665b9edb5d9`;
    const promise = await fetch(url);
    const data = await promise.json();
    // const art_title = data.articles[0].title;
    console.log(data);
    // title.innerText = art_title;
    data.articles.forEach(ele => {
        const art_title = ele.title;
        const divEle = document.createElement("div");
        const elem = `<div id="comp1" class="card" style="width: 18rem;">
    <img src=${ele.urlToImage} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="title" class="card-title">${art_title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`;
        divEle.innerHTML = elem;
        main.appendChild(divEle);
    });
}

const main2 = document.getElementById("main2");

async function getDataForHome() {
    
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=07bee57536b24e9eb07c0665b9edb5d9`;
    const promise = await fetch(url);
    const data = await promise.json();
    // const art_title = data.articles[0].title;
    // title.innerText = art_title;
    data.articles.forEach(ele => {
        const art_title = ele.title;
        const divEle = document.createElement("div");
        const elem = `<div id="comp1" class="card" style="width: 18rem;">
    <img src=${ele.urlToImage} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="title" class="card-title">${art_title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`;
        divEle.innerHTML = elem;
        main2.appendChild(divEle);
    });
}

getDataForHome()
