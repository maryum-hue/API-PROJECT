let main = document.getElementById('main');

let getdata = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response =>{
      productsArray = response
      console.log(productsArray)
      data(productsArray); 

    })
    
}

let productsArray = [];

let data = (cb) =>{
main.innerHTML = "";

cb.forEach(products => {
    main.innerHTML +=
    `<div class="card mt-5 cards" style="width: 18rem;"; >
  <img src="${products.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.category}</p>
    <p class="card-text">${products.description.slice(0, 70)}...</p>
    <button class="btn btn-primary btn-sm buy" data-id="${products.id}">Go somewhere</button>

  </div>
</div>`
;


})
}

getdata();
let buyButtons = document.querySelectorAll('.buy');

buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'page.html';
  });
});

  

//SERACH BAR WORKING

let searchBar = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');





let searched = ()=> {
  let searchVal = searchBar.value.toLowerCase().trim();
  let result = productsArray.filter((cardsInfo)=>{
    return cardsInfo.title.toLowerCase().includes(searchVal)
    ||cardsInfo.category.toLowerCase().includes(searchVal)
  })
  data(result)
}
searchBtn.addEventListener("click", searched);

searchBar.addEventListener("keyup", (e) =>{
  if(e.key === "Enter"){
      searched();
  }
});


let filter = (category) => {
  if (category === "all") {
    data(productsArray);
    return;
  }

  let resulty = productsArray.filter(item =>
    item.category.toLowerCase() === category.toLowerCase()
  );

  if(resulty.length === 0){
    main.innerHTML = `<h3 class="text-center mt-5">No products found 🔍</h3>`;
    return;
  }

  data(resulty);
};


//product page.html

let buyPage = document.getElementsByClassName('buy');
buyPage.addEventListener('click',()=>{
window.location.href ='page.html'
});

//product redirected

let productImg = document.getElementsByClassName('product-image');

let selected = (id) => {
console.log(productsArray.id);

id.forEach(productsArray => {
  console.log(id)

});


}

let idfind = (ProductId) => {
  let idOfCard = productsArray.find(p => p.id === ProductId);
  console.log(idOfCard);
  return idOfCard;
};


if(products.id === selected){
productImg.src === selected.src 
}


document.querySelectorAll('.buy').forEach(btn => {
  btn.addEventListener('click', (e) => {
    let productId = e.target.dataset.id;
    console.log("Clicked product id:", productId);
  });
});