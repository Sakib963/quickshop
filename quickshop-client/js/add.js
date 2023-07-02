// Handling SelectCategory
const selectCategory = (category) => {
  document.getElementById("productCategory").value = category;
};

// Handling SelectSupplier
const selectSupplier = (supplier) => {
  document.getElementById("productSupplier").value = supplier;
};

// Get Suppliers Data from Backend
const getSuppliers = async () => {
  const spinner = document.getElementById("spinner-supplier");
  spinner.classList.remove('hidden');
  try {
    const url = "http://localhost:5000/suppliers";
    const res = await fetch(url);
    const data = await res.json();

    spinner.classList.add('hidden');
    displaySuppliers(data);
  } catch (error) {
    spinner.classList.add('hidden');
    const supplierDropDown = document.getElementById("supplierDropDownField");
    const li = document.createElement("li");
    li.innerHTML = `
      <a>Something Went Wrong.</a>
      `;
    supplierDropDown.appendChild(li);
    console.log(error);
  }
};
getSuppliers();

// Displaying Supplier Options in the DropDown
const displaySuppliers = (suppliers) => {
  // Get supplier dropdown ul
  const supplierDropDown = document.getElementById("supplierDropDownField");

  for (const supplier of suppliers) {
    const li = document.createElement("li");
    li.innerHTML = `
      <a
      onclick="selectSupplier('${supplier.supplierName}')">${supplier.supplierName}</a>
      `;
    supplierDropDown.appendChild(li);
  }
};

// Get Suppliers Data from Backend
const getCategories = async () => {
  const spinner = document.getElementById("spinner-category");
  spinner.classList.remove('hidden');
  try {
    const url = "http://localhost:5000/category";
    const res = await fetch(url);
    const data = await res.json();

    spinner.classList.add('hidden');
    displayCategories(data);
  } catch (error) {
    spinner.classList.add('hidden');
    const categoriesDropDown = document.getElementById("categoryDropDownField");
    const li = document.createElement("li");
    li.innerHTML = `
      <a>Something Went Wrong.</a>
      `;
    categoriesDropDown.appendChild(li);
    console.log(error);
  }
};
getCategories();

// Displaying Supplier Options in the DropDown
const displayCategories = (categories) => {
  // Get supplier dropdown ul
  const categoriesDropDown = document.getElementById("categoryDropDownField");

  for (const category of categories) {
    const li = document.createElement("li");
    li.innerHTML = `
      <a
      onclick="selectCategory('${category.categoryName}')">${category.categoryName}</a>
      `;
    categoriesDropDown.appendChild(li);
  }
};

// Add Product Form
const addProductForm = async (event) => {
  event.preventDefault();

  // Get the form field values
  const productName = document.getElementById("productName").value;
  const photoUrl = document.getElementById("productImage").value;
  const productPrice = document.getElementById("productPrice").value;
  const unitInStock = document.getElementById("productUnitInStock").value;
  const category = document.getElementById("productCategory").value;
  const supplier = document.getElementById("productSupplier").value;
  const productDescription =
    document.getElementById("productDescription").value;

  // Check if any field is empty
  if (
    !productName ||
    !photoUrl ||
    !productPrice ||
    !unitInStock ||
    !category ||
    !supplier ||
    !productDescription
  ) {
    // Show the error message
    const errorMessageField = document.getElementById("errorMessageField");
    errorMessageField.classList.remove("hidden");
    console.log("Please fill in all fields");
    return;
  } else {
    // Hide the error message
    const errorMessageField = document.getElementById("errorMessageField");
    errorMessageField.classList.add("hidden");
  }

  const product = {
    name: productName,
    image: photoUrl,
    price: productPrice,
    unitInStock: parseInt(unitInStock),
    supplier,
    category,
    description: productDescription,
  };

  // Log the form details to the console
  console.log("Form submitted!", product);

  try {
    const url = `http://localhost:5000/products`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    console.log(data);

    if (data.insertId) {
      // Show the success message
      const errorMessageField = document.getElementById("successMessageField");
      errorMessageField.classList.remove("hidden");
      window.location.href = "index.html";
    } else {
      // Hide the success message
      const errorMessageField = document.getElementById("successMessageField");
      errorMessageField.classList.add("hidden");
    }
  } catch (error) {
    // Show the error message
    const errorMessageField = document.getElementById(
      "notFoundErrorMessageField"
    );
    errorMessageField.classList.remove("hidden");
  }
};
