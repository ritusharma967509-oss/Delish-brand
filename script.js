// =========================
// Shop Now Button
// =========================

const shopNowBtn = document.getElementById("shopNow");

shopNowBtn.addEventListener("click", function () {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

});
// =========================
// Search Products
// =========================

const searchInput = document.getElementById("search");

const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        let productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
// =========================
// Category Filter
// =========================

const filterButtons = document.querySelectorAll(".filterBtn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let category = button.dataset.category;

        cards.forEach(function (card) {

            if (category === "all" || card.dataset.category === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
// =========================
// Add To Cart
// =========================

const addCartButtons = document.querySelectorAll(".addcart");
const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

let total = 0;

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName = card.querySelector("h3").textContent;

        const priceText = card.querySelector("h4").textContent;

const productPrice = Number(priceText.replace("₹", ""));
        console.log(card);
           console.log(card.dataset.price);

        const emptyCart = document.querySelector(".empty-cart");

        if (emptyCart) {
            emptyCart.remove();
        }

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `

            <div class="item-info">

                <h4>${productName}</h4>

                <p>₹${productPrice}</p>

            </div>

            <button class="remove-btn">Remove</button>

        `;

        cartItems.appendChild(cartItem);

        total += productPrice;

        totalElement.textContent = total;

        // Remove Button

        const removeBtn = cartItem.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {

            cartItem.remove();

            total -= productPrice;

            totalElement.textContent = total;

            if (cartItems.children.length === 0) {

                cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';

            }

        });

    });

});
// =========================
// Place Order
// =========================

const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    if (name === "" || phone === "" || address === "") {

        alert("Please fill all customer details.");

        return;

    }

    if (cartItems.children.length === 0 || document.querySelector(".empty-cart")) {

        alert("Your cart is empty.");

        return;

    }

    alert("🎉 Order Placed Successfully!");

});
// =========================
// Order Status
// =========================

const steps = document.querySelectorAll(".step");

orderBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    if (name === "" || phone === "" || address === "") return;

    if (cartItems.children.length === 0 || document.querySelector(".empty-cart")) return;

    steps.forEach(step => {

        step.classList.remove("active");

    });

    steps[0].classList.add("active");

    setTimeout(() => {

        steps[1].classList.add("active");

    }, 2000);

    setTimeout(() => {

        steps[2].classList.add("active");

    }, 4000);

    setTimeout(() => {

        steps[3].classList.add("active");

    }, 6000);

});