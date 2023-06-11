let products = [
  {
    title: "the atomic habits",
    price: 45,
    newPrice: 28,
    isBestSelling: true,
    image: "img/atomic habits.jpg",
    id: 1,
    url : "atomichabits.html"
  },
  {
    title: "the mountain is you",
    price: 50,
    newPrice: 35,
    isBestSelling: true,
    image: "img/the mountain.jpg",
    id: 2,
    url: "themountain.html"
  },
  {
    title: "master your emotions",
    price: 55,
    newPrice: 30,
    isBestSelling: true,
    image: "img/master your emotions.jpg",
    id: 3,
    url:""
  },
  {
    title: "do it today",
    price: 60,
    newPrice: 60,
    isBestSelling: false,
    image: "img/Do it Today.jpg",
    id: 4,
    url:""
  },
  {
    title: "the power of habits",
    price: 90,
    newPrice: 50,
    isBestSelling: true,
    image: "img/the power of habits .jpg",
    id: 5,
    url:""
  },
  {
    title: "the 48 laws of power",
    price: 100,
    newPrice: 60,
    isBestSelling: true,
    image: "img/power.jpg",
    id: 6,
    url:""
  },
  {
    title: "clever lands",
    price: 35,
    newPrice: 35,
    isBestSelling: false,
    image: "img/clever_lands.jpg",
    id: 7,
    url:""
  },
  {
    title: "Artictural Economics",
    price: 120,
    newPrice: 120,
    isBestSelling: false,
    image: "img/economic.jpg",
    id: 8,
    url:""
  },
  {
    title: "boring girls",
    price: 60,
    newPrice: 60,
    isBestSelling: false,
    image: "img/boring_girls_a_novel.jpg",
    id: 9,
    url:""
  },
  {
    title: "free fall",
    price: 70,
    newPrice: 70,
    isBestSelling: false,
    image: "img/freefall.jpg",
    id: 10,
    url:""
  },
  {
    title: "History of Modern Architecture",
    price: 140,
    newPrice: 140,
    isBestSelling: false,
    image: "img/history_of_modern_architecture.jpg",
    id: 11,
    url:""
  },
  {
    title: "Holy Ghosts",
    price: 70,
    newPrice: 70,
    isBestSelling: false,
    image: "img/holy_ghosts.jpg",
    id: 12,
    url:""
  },
  {
    title: "Night Shade",
    price: 50,
    newPrice: 50,
    isBestSelling: false,
    image: "img/nightshade.jpg",
    id: 13,
    url:""
  },
  {
    title: "The Appocalypse of llyod",
    price: 50,
    newPrice: 50,
    isBestSelling: false,
    image: "img/lloyd.jpg",
    id: 14,
    url:""
  },
  {
    title: "Red Queen",
    price: 80,
    newPrice: 80,
    isBestSelling: false,
    image: "img/red_queen.jpg",
    id: 15,
    url:""
  },
  {
    title: "make it stick",
    price: 50,
    newPrice: 50,
    isBestSelling: false,
    image: "img/make it stick.webp",
    id: 16,
    url:""
  },
  {
    title: "crime and punishment",
    price: 50,
    newPrice: 50,
    isBestSelling: false,
    image: "img/crime and punshment.webp",
    id: 17,
    url:""
  },
  {
    title: "the idiot",
    price: 60,
    newPrice: 60,
    isBestSelling: false,
    image: "img/the idiot.webp",
    id: 18,
    url:""
  },
  {
    title: "do it today",
    price: 60,
    newPrice: 60,
    isBestSelling: false,
    image: "img/Do it Today.jpg",
    id: 19,
    url:""
  },
];
// function products//
function productToUI(product){
  const result = `
  <div class="swiper-slide">
    <div class="book-box" ${
      product.isBestSelling && 'data-aos="fade-up" data-aos-duration="3000"'}>
          <img src="${product.image}" class="book-box-img" />
        <div class="box-text">
          <a href='${product.url}'>
            <h2 class="book-title">${product.title}</h2>
          </a>
          <h3 class ="book-title">${
            product.newPrice !== product.price
              ? product.newPrice + "DT <del>" + product.price + "DT </del>"
              : product.price + "DT"
          }</h3>
          <button onclick='handleNewItem(${product.id})'>add to cart</button>
        </div>
    </div>
  </div>
    `;
  return result;
}

function handleNewItem(productId) {
  const cart = localStorage.getItem("cart");/*lena key cart lmawjoud fi local storage hatitou fi variable*/
  if (!cart) {/*lena fi lcas enou mezl fammech lkey cart lvariable null */
    const newCart = [{ productId, count: 1 }];
    localStorage.setItem("cart", JSON.stringify(newCart));/*table raditou chaine caractere fi wost local storage*/
    return;/*aleh*/
  }

  const existingCart = JSON.parse(cart);
  if (!existingCart.find((item) => item.productId === productId)) {
    localStorage.setItem(
      "cart",
      JSON.stringify([...existingCart, { productId, count: 1 }])
    );
  }
}

function cartToUI(product, count) {
  const result = 
  `<div class = "book-box">
      <img src="${product.image}"class="book-box-img">
     <div class="box-text">
        <h2 class="book-title">${product.title}</h2>
        <div class="close" onclick='deleteFunc(${product.id})'>x</div>
        <input type="text" id="number" placeholder="add" value ="${count}">
        <button class="btn" onclick='incrementProductCount(${product.id})'>upload</button>
      </div>
  </div>`
  return result
}
function deleteFunc(productId) {
  const cart = localStorage.getItem("cart")
  if (!cart) return 
  const productsDetails = JSON.parse(cart)
  const filteredProducts = productsDetails.filter(productsDetail => productsDetail.productId !== productId)

  localStorage.setItem('cart', JSON.stringify(filteredProducts))

  loadCard() 
  globalTotal()

}

function incrementProductCount(productId) {
  const cart = localStorage.getItem("cart")
  if(!cart){
    return
  }
  const productsCart = JSON.parse(cart)
  for (const product of productsCart) {
    if(product.productId === productId){
      product.count+=1
    }
  }
  localStorage.setItem("cart", JSON.stringify(productsCart))
  loadCard() 
  globalTotal()
}
function loadCard() {
  const cart = localStorage.getItem("cart");
  if (!cart) return;/*nheb nrajaa total 0*/
  const productsDetails = JSON.parse(cart);/*tableau mtee lcart*/
  const filteredProducts = products.filter((current) => {/*current najjem naawedha b product*/
    for (const detail of productsDetails) {/*loop lel cart mteei o n9aren cart.productID bel product.id*/
      if (detail.productId === current.id) return true;
    }
    return false;
  });
  const ordredElements = document.querySelector("#ordred-products");
  if (ordredElements) {
    ordredElements.innerHTML = filteredProducts
      .map((current) =>
        cartToUI(
          current,
          productsDetails.find((item) => item.productId === current.id).count
        )
      )
      .join("");
  }
}

loadCard();
const bestSellingsElement = document.querySelector("#best-sellings");
if (bestSellingsElement) {
  bestSellingsElement.innerHTML = products
    .filter((product) => product.isBestSelling)
    .map((product) => productToUI(product))
    .join("");
}

const latestProductsElements = document.querySelector("#latest-product");
if (latestProductsElements) {
  latestProductsElements.innerHTML = products
    .filter((product) => !product.isBestSelling)
    .map((product) => productToUI(product))
    .join("");
}
/*global total*/
function globalTotal(){
  let totalPrice=document.getElementById("total-price")
  if (!totalPrice) return 

  const cart = localStorage.getItem("cart")
  if(!cart){
    totalPrice.innerText="0 Dt"
    return
  }
  const productsDetails = JSON.parse(cart)

  const filteredProducts = products.filter((currentProduct) => {
    for ( const detail of productsDetails){
      if (currentProduct.id === detail.productId) return true
    }
    return false
  })
  let total = 0
  for (const product of filteredProducts) {
    const productsDetail = productsDetails.find((item) => item.productId === product.id)
    total += product.newPrice * productsDetail.count
  }
  totalPrice.innerText = total.toString() + "DT"
}
globalTotal()
/*the chekcout page */
function chekcouttoUI(product,count) {
  const result = ` 
  <div class="check-orders">
    <div class="ordered">
      <span class="title">${product.title}</span>
      <span class="price">(${product.newPrice}/${count})</span>
    </div>
  </div>`
  return result
}
const checkoutElements = document.querySelector("#check-orders")
const cart = localStorage.getItem("cart")
const productsDetails = JSON.parse(cart)
if(checkoutElements){
  const filteredProducts = products
  .filter((currentProduct) => {
    for ( const detail of productsDetails){
      if (currentProduct.id === detail.productId) return true
    }
    return false
  })

  checkoutElements.innerHTML =filteredProducts
  .map((product) => chekcouttoUI(product,productsDetails.find((item) => item.productId === product.id).count))
  .join("");
}
//swiper//
var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
let modal = document.querySelector("#modal");
let button = document.querySelector(".icons");
let buttonClose = document.querySelector(".modal-close");
modal.style.display = "none";
let showModal = false;
button.onclick = () => {
  console.log("hello");
  if (!showModal) {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};

buttonClose.onclick = () => {
  modal.style.display = "none";
};
/*open page*/
function openPage() {
  window.location.href = "atomichabits.html";
}
function openOtherpage() {
  window.location.href = "themountain.html";
}

/*delete orders function*/
/* function en general*/
/* the order button*/
function popFunc() {
  alert("Attention: This forum is currently empty");
}
/* the read less button */
function lessFunc() {
  let suite = document.getElementById("suite");
  let label = document.getElementById("checked");
  let test = suite.style.display === "none";
  if (test) {
    suite.style.display = "block";
    label.innerText = "Read Less";
  } else {
    suite.style.display = "none";
    label.innerText = "Read More";
  }
}
/* the serarch product engine*/
function search() {
  const searchbox = document.getElementById("search-input").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const products = storeitems.getElementsByClassName("product");
  const pname = storeitems.getElementsByTagName("h2");
  for (let i = 0; i < pname.length; i++) {
    let match = pname[i];
    if (match) {
      let textvalue = match.textContent || match.innerText;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        storeitems.style.display = "block";
        storeitems.style.height = "fit-content";
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
}
/* close the search*/
function closeSearch() {
  const storeitems = document.getElementById("product-list");
  storeitems.style.display = "none";
}
/* the contact section */
function contact() {
  window.location.href = "contactUs.html";
}
