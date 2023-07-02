// Get All Products Data And Display Them
const getProducts = async () => {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('hidden');
  try {
    const url = "http://localhost:5000/products";
    const res = await fetch(url);
    const data = await res.json();
    if (!data.length) {
      // Show the error message
      const errorMessageField = document.getElementById(
        "notFoundErrorMessageField"
      );
      errorMessageField.classList.remove("hidden");
      errorMessageField.classList.add("inline-block");
    }
    spinner.classList.add('hidden');
    displayProducts(data);
  } catch (error) {
    // Show the error message
    const errorMessageField = document.getElementById(
      "notFoundErrorMessageField"
    );
    spinner.classList.add('hidden');
    errorMessageField.classList.remove("hidden");
  }
};

// Displaying Products
const displayProducts = (products) => {
  const productContainer = document?.getElementById("product-container");

  for (const product of products) {
    const div = document.createElement("div");
    div.classList.add(
      "p-5",
      "border",
      "border-green-600",
      "rounded-md",
      "shadow-lg",
      "space-y-3"
    );

    const { id, name, image, price } = product;

    div.innerHTML = `
        <img class="rounded-md mx-auto"
        src="${image}"
        alt="Product Image">
        <div class="space-y-2">
            <h3 class="text-xl md:text-2xl font-bold">${name}</h3>
            <p class="text-base lg:text-lg">Price: <span
                    class="text-green-600 font-semibold">$${price}</span></p>
        </div>
        <div
            class="block lg:flex lg:justify-between space-y-2 lg:space-y-0">
            <button onclick="viewProductDetails('${id}')"
                class="bg-green-600 text-white px-3 py-2 rounded-md font-semibold tracking-wide transition ease-in-out delay-150 hover:scale-95 duration-300 block lg:inline w-full lg:w-auto">View
                Details</button>
            <button onclick="updateProductDetails('${id}')"
                class="bg-green-600 text-white px-3 py-2 rounded-md font-semibold tracking-wide transition ease-in-out delay-150 hover:scale-95 duration-300 block lg:inline w-full lg:w-auto">Update</button>
        </div>
    `;

    productContainer?.appendChild(div);
  }
};

getProducts();

// Handling ViewProductDetails which will navigate to another page
const viewProductDetails = (productId) => {
  // Construct the URL
  const url = `product_details.html?id=${productId}`;
  // Navigate to the product_details.html page
  window.location.href = url;
};

// Handling UpdateProductDetails which will navigate to another page
const updateProductDetails = (productId) => {
  // Construct the URL
  const url = `update_product.html?id=${productId}`;
  // Navigate to the product_details.html page
  window.location.href = url;
};
