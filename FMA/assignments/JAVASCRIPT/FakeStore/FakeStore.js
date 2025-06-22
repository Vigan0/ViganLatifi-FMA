


let products = document.getElementById("productContainer");
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((data) => {
        products.innerHTML = "";
        data.forEach(product => {
            products.innerHTML += `
            <div class="products" key="${product.id}" onclick="showAlert('${product.description}')">
                <img src="${product.image}" alt="${product.title}">
                <div class="content">
                    <h5 class="title">${product.title}</h5>
                    <span class="price">Price: $${product.price}</span>
                    <span class="rating">rating:${product.rating.rate}</span>
                </div>
            </div>`;
        });
    });

function showAlert(productDescription) {
    document.getElementById('item-description-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block'; 
    document.getElementById('item-description').innerHTML = productDescription;
    document.body.style.overflowY = 'hidden';
}
function closeBtn() {
    document.getElementById('item-description-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; 
    document.body.style.overflowY = 'scroll';
}


const themeSwitch = document.getElementById('theme-switch')

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle('darkmode')
})