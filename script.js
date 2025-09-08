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
    <a href="#" class="btn btn-primary btn-sm buy" ">Go somewhere</a>
  </div>
</div>`
;


let btn = document.querySelectorAll('.buy')

  btn.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "page.html";
    });
});
  });
};
getdata();


//SERACH BAR WORKING

let searchBar = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');



// let searchit = () => {("click", ()=>{
//      let searchValue = searchBar.value.toLowerCase()
//      let filteredValue = productsArray.filter((products) => {
// return products.title.toLowerCase().includes(searchValue) ||
// products.category.toLowerCase().includes(searchValue)
//   })
//   data(filteredProducts)
// });}


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
searchBar.addEventListener("keyup", (e) =>{
  if(e.key === 13){
      searched();
  }
});



//filter btns

// let one = document.getElementById('one');
// let two = document.getElementById('two');
// let three = document.getElementById('three');
// let four = document.getElementById('four');

// one.addEventListener('click',()=>{
//   let result1 = productsArray.filter(()=>{
//    let kj = products.title.toLowerCase() === "men's clothing"
//     main.innerHTML= kj
//   })
//   return result1

// })  
// console.log(result1)



// let filter = (item)=> {
//   let resulty = productsArray.filter((cardsInfo)=>{
//     return cardsInfo.category.toLowerCase().includes(item)
//   })
//   data(resulty)
// }
// searchBtn.addEventListener("click", searched);

let filter = (category) => {
  if (category === "all") {
    data(productsArray);
  } if (searchVal === "") {
  main.innerHTML = `<h3 class="text-center mt-5">Please type something to search 🔍</h3>`;
  return;
}
  else {
    let resulty = productsArray.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
    data(resulty);
  }
};

//product page.html

let buyPage = document.getElementsByClassName('buy');
buyPage.addEventListener('click',()=>{
window.location.href ='page.html'
});

//product redirecdtd



