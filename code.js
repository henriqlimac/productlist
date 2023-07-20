fetch("./products.json") /* getting the products information */
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("products").innerHTML = (data)
      .map(
        (item) =>
          `<div class="product">
          <div class="product__details">
            <img src="${item.image}" />
            <div class="product__desc">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
              <h3>$${item.price}</h3>
            </div>
          </div>
          <button class="add">ADD TO CART</button>
        </div>
        `
      )
      .join("");
  });
