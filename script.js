const products = [
    { id: 1, name: 'Book A', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Book B', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Book C', price: 15, image: 'https://via.placeholder.com/150' },
];
// Carousel Logic
let currentIndex = 0;
const carouselContainer = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    carouselContainer.style.transform = `translateX(-${currentIndex * 320}px)`;
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselContainer.style.transform = `translateX(-${currentIndex * 320}px)`;
});

// Dropdown Filtering (Placeholder logic)
document.getElementById('category-dropdown').addEventListener('change', function () {
    const selectedCategory = this.value;
    alert(`You selected ${selectedCategory} category!`);
});

// Display products dynamically
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <a href="product-details.html?id=${product.id}">View Details</a>
        `;
        productList.appendChild(productDiv);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
});

// Initial display
displayProducts(products);
