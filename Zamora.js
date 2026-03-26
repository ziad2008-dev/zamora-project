const products = [
  {
    id: 1,
    name: "Black Hoodie",
    price: "1500 EGP",
    image: "prodza1.jpeg"
  },
  {
    id: 2,
    name: "Grey Pants",
    price: "1200 EGP",
    image: "prodza2.jpeg"
  },
  {
    id: 3,
    name: "Hoodie",
    price: "800 EGP",
    image: "prodza1.jpeg"
  }
]

// نجيب ID من URL
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

// نلاقي المنتج
const productId = Number(id)
const product = products.find(p => p.id === productId)

// نحط البيانات
if (product) {
  const nameEl = document.getElementById("name")
  const priceEl = document.getElementById("price")
  const imageEl = document.getElementById("image")

  if (nameEl) nameEl.innerText = product.name
  if (priceEl) priceEl.innerText = product.price
  if (imageEl) imageEl.src = product.image
} else {
  const container = document.querySelector(".view-details")
  if (container) container.innerHTML = "<h1>Product not found</h1><p>Please go back to shop.</p>"
}
const sizeButtons = document.querySelectorAll(".size-btn")

sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // نشيل الاختيار من كله
        sizeButtons.forEach(b => b.classList.remove("active"))

        // نحدد اللي اتضغط عليه
        btn.classList.add("active")
    })
})