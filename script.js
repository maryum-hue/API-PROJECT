let main = document.getElementById('main');
let productsArray = [];

// Fetch products
let getdata = () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response => {
      productsArray = response;
      console.log(productsArray);
      data(productsArray);
    });
};

// Render products
let data = (cb) => {
  main.innerHTML = "";

  cb.forEach(products => {
    main.innerHTML += `
  <div class="card mt-5 cards" style="width: 18rem;">
    <img src="${products.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${products.title}</h5>
      <p class="card-text">${products.category}</p>
      <p class="card-text">${products.description.slice(0, 70)}...</p>

      <button class="btn btn-success btn-sm buy-now" data-id="${products.id}">
        Buy Now
      </button>
      <button class="btn btn-outline-primary btn-sm buy" data-id="${products.id}">
        View Details
      </button>
    </div>
  </div>`;

  });


  attachBuyEvents();

attachBuyNowEvents();
};

// Attach events to buy buttons
let attachBuyEvents = () => {
  document.querySelectorAll('.buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      let productId = parseInt(e.target.dataset.id);
      let selectedProduct = productsArray.find(p => p.id === productId);

      // Save product to localStorage
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

      // Redirect
      window.location.href = 'page.html';
    });
  });
};

getdata();


// --- SEARCH ---
let searchBar = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');

let searched = () => {
  let searchVal = searchBar.value.toLowerCase().trim();
  let result = productsArray.filter(cardsInfo =>
    cardsInfo.title.toLowerCase().includes(searchVal) ||
    cardsInfo.category.toLowerCase().includes(searchVal)
  );
  data(result);
};

searchBtn.addEventListener("click", searched);
searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searched();
});


// --- FILTER ---
let filter = (category) => {
  if (category === "all") {
    data(productsArray);
    return;
  }

  let resulty = productsArray.filter(item =>
    item.category.toLowerCase() === category.toLowerCase()
  );

  if (resulty.length === 0) {
    main.innerHTML = `<h3 class="text-center mt-5">No products found 🔍</h3>`;
    return;
  }

  data(resulty);
};

let attachBuyNowEvents = () => {
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      let productId = parseInt(e.target.dataset.id);
      let selectedProduct = productsArray.find(p => p.id === productId);

      console.log("Selected product for checkout:", selectedProduct); // Debugging

      if (selectedProduct) {
        localStorage.setItem('checkoutProduct', JSON.stringify(selectedProduct));
        window.location.href = 'checkout.html';  // make sure checkout.html is in same folder
      } else {
        console.error("❌ Product not found for ID:", productId);
      }
    });
  });
};
