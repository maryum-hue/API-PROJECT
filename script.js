let main = document.getElementById('main');

let getdata = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response => console.log(response.json()))
}