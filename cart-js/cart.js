//2. parent of cart
const cartWrapper = document.querySelector('.cart-wrapper')

//1. search click on the window
window.addEventListener("click", (event) => {
  // check if clicked the button 'buy now'
  if (event.target.hasAttribute("data-cart")) {
    // console.log(" clicked on button");

    // find clicked card     // CLOSEST - find parent of the card
    const card = event.target.closest(".card");
    console.log(card);

    // collect all info about the card & write together
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerHTML,
      itemInBox: card.querySelector("[data-items-in-box]").innerHTML,
      weight: card.querySelector(".price__weight").innerHTML,
      price: card.querySelector(".price__currency").innerHTML,
      counter: card.querySelector("[data-counter]").innerHTML,
    };
    console.log(productInfo)

    // put all collected data 
    const cartItemHTML = `
    <div class="cart-item" data-id="02">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src=${productInfo.imgSrc} alt="" />
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>
        <!-- <div class="cart-item__weight">6 st. / 205g.</div> -->

        <!-- cart-item__details -->
        <div class="cart-item__details">
          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">
              -
            </div>
            <div class="items__current" data-counter="">1</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price} €</div>
          </div>
        </div>
        <!-- // cart-item__details -->
      </div>
    </div>
  </div>
    `
    // show products in cart
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
  }
});
