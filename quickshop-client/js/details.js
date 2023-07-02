// Get Single Data
const getSingleProduct = async (id) => {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  try {
    const url = `http://localhost:5000/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    spinner.classList.add("hidden");
    displaySingleProduct(data[0]);
  } catch (error) {
    spinner.classList.add("hidden");
    // Show the error message
    const errorMessageField = document.getElementById(
      "notFoundErrorMessageField"
    );
    errorMessageField.classList.remove("hidden");
  }
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
getSingleProduct(id);

const displaySingleProduct = (product) => {
  const { name, image, price, unitInStock, category, supplier, description } =
    product;

  const productContainer = document.getElementById("product-container");

  const div = document.createElement("div");

  div.classList.add(
    "p-5",
    "border",
    "border-green-600",
    "rounded-md",
    "shadow-lg",
    "space-y-3"
  );

  div.innerHTML = `
    <img class="rounded-md mx-auto w-full"
    src="${image}"
    alt="Product Image">
<div class="space-y-2">
    <h3 class="text-xl md:text-2xl font-bold">${name}</h3>
    <p class="text-base lg:text-lg">Price: <span
            class="text-green-600 font-semibold">$${price}</span></p>
    <p class="text-base lg:text-lg">Unit In Stock:
        <span
            class="text-green-600 font-semibold">${unitInStock}</span></p>
    <p class="text-base lg:text-lg">Category: ${category}</p>
    <p class="text-base lg:text-lg">Supplier: ${supplier}</p>
    <p class="text-base lg:text-lg">${description}</p>

</div>
    `;

  productContainer.appendChild(div);
};
