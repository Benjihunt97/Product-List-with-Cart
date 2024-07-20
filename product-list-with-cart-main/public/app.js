const url = 'https://raw.githubusercontent.com/Benjihunt97/Product-List-with-Cart/main/product-list-with-cart-main/data.json';
const productList = document.getElementById('product-list');

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const createCard = (image, name, category, price) => {
      return `
        <div class="product-card group">
          <picture>
            <!-- Desktop Image -->
            <source srcset="${image.desktop}" media="(min-width: 1024px)">
            
            <!-- Tablet Image -->
            <source srcset="${image.tablet}" media="(min-width: 768px)">
            
            <!-- Mobile Image -->
            <img class="rounded-lg border-2 border-transparent transition-all min-h-44 bg-gray-400 group" src="${image.mobile}" alt="${name} group-hover:border-[#c73a0f]r">
          </picture>
          
          <div class="p-3">
            <button class="flex items-center gap-4 py-2 px-6 rounded-full transition-all bg-white text-sm border border-gray-400 shadow-lg mx-auto -translate-y-8 group-hover:border-[#c73a0f]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              Add to Cart
            </button>
            <p class="text-sm">${category}</p>
            <h3 class="font-semibold">${name}</h3>
            <p class="font-bold text-lg">$${price.toFixed(2)}</p>
          </div>
        </div>
      `;
    };

    data.forEach(product => {
      productList.innerHTML += createCard(product.image, product.name, product.category, product.price);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
