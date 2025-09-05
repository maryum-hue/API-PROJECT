let main = document.getElementById('main');

let getdata = (cb) =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response =>{
        cb(response)
    })
    
}

let data = (cb) =>{
    console.log(cb)
let products = cb;
products.forEach(products => {
    main.innerHTML +=
    `<div class="card mt-5 cards" style="width: 18rem;"; >
  <img src="${products.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}"</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
  </div>
</div>`
;
});

};
getdata(data);
