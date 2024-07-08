const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' },
];

// Function to display products
function displayProducts() {
    const productsContainer = document.querySelector('.products');

    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Function to add a product to the cart (example)
function addToCart(productId) {
    // Add your cart functionality here (e.g., updating cart object, displaying confirmation)
    console.log(`Product ${productId} added to cart`);
}

// Initial call to display products
displayProducts();
