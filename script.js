let cart=JSON.parse(localStorage.getItem("cart")) || [];
let activeCategory="Home";
let searchQuery=" ";

const products=[
    // electronics
    {
        id:1,
        name:"Fashin Design",
        price:199.99,
        image:"./image/habesha.jpg",
        category:"cloths",
        description:"Ethipian Habesha Dress",
    },
    {
        id:2,
        name:"Smart Tv",
        price:199.99,
        image:"./image/tv.webp",
        category:"electronics",
        description:"TCL 32 Inches DLED FHD Television",
    },
    {
        id:3,
        name:"Funki Bluetooth Headphones",
        price:199.99,
        image:"./image/Earpad.webp",
        category:"electronics",
        description:"Funki Bluetooth Headphones SKU: 1029050 Metal/plastic",
    },
    {
        id:4,
        name:"Cloths ",
        price:199.99,
        image:"./image/cloth.jpg",
        category:"cloths",
        description:"The Best Car and Auto Tech of CES 2023",
    },
    {
    id:5,
        name:"MotorCycle",
        price:199.99,
        image:"./image/moter.jpg",
        category:"transports",
        description:"Philips S6310",
    },
    {
        id:6,
        name:"Car ",
        price:199.99,
        image:"./image/car.jpg",
        category:"transports",
        description:"The Best Car and Auto Tech of CES 2023",
    },
    {
        id:7,
        name:"Watch ",
        price:199.99,
        image:"./image/watch.jpg",
        category:"electronics",
        description:"The Best Car and Auto Tech of CES 2023",
    },
    {
        id:8,
        name:"T-shert",
        price:199.99,
        image:"./image/tshert.jpg",
        category:"cloths",
        description:"Philips S6310",
    },
    {
        id:9,
        name:"Women Dress",
        price:199.99,
        image:"./image/dress.jpg",
        category:"cloths",
        description:"women's red and black polka-dot halterdres",
    },
    {
        id:10,
        name:"Bicycle",
        price:199.99,
        image:"./image/cycle.jpg",
        category:"transports",
        description:"Philips S6310",
    },
    {
        id:11,
        name:"Bajaj",
        price:199.99,
        image:"./image/bajaj.jpg",
        category:"transports",
        description:"Philips S6310",
    },
    {
        id:12,
        name:"Extreme Books",
        price:199.99,
        image:"./image/extreme.jpg",
        category:"books",
        description:"Philips S6310",
    },
    {
        id:13,
        name:"Boat",
        price:199.99,
        image:"./image/Boat.jpg",
        category:"transports",
        description:"Rigid Inflatable Boats",
    },
    {
        id:14,
        name:"Smart watch",
        price:199.99,
        image:"./image/Smart watch.jpg",
        category:"electronics",
        description:"Philips S6310",
    },
    {
        id:15,
        name:"Temsalet",
        price:199.99,
        image:"./image/temsalet.png",
        category:"books",
        description:"Phenomenal Ethiopian Women",
    },

    {
        id:16,
        name:"Philips S6310 Smart Phone",
        price:199.99,
        image:"./image/phone.webp",
        category:"electronics",
        description:"Philips mobile phone is built in with a standout 5000mAh battery for seamless",
    },
    {
      id:17,
        name:"Surface Laptop",
        price:400.99,
        image:"./image/pc1.avif",
        category:"electronics",
        description:"The lightest Surface Laptop delivers built-in AI experiences and impressive ",  
    },
    {
      id:18,
        name:"Books",
        price:400.99,
        image:"./image/book1.jpg",
        category:"books",
        description:"Highly Decorative Leather Bound Collection ",  
    }
    ,
    {
      id:19,
        name:"Jacket For Men",
        price:400.99,
        image:"./image/jacket.jpg",
        category:"cloths",
        description:"Men's Lightweight Bomber Jacket with Zip Pockets | Spring Fall Outwear ",  
    }
    ,
    {
      id:20,
        name:"fikir eske mekabir",
        price:400.99,
        image:"./image/fikir.jpg",
        category:"books",
        description:"The lightest Surface Laptop delivers built-in AI experiences and impressive ",  
    },
    {
      id:21,
        name:"Earphone",
        price:7.99,
        image:"./image/earphone.webp",
        category:"electronics",
        description:"2024 M75 Tws Wireless Headphones Bluetooth Earphone with Charging Box LED Sports Stereo ",  
    },
    {
      id:22,
        name:" Men Trouser",
        price:7.99,
        image:"./image/suri.jpg",
        category:"cloths",
        description:"2024 M75 Tws Wireless Headphones Bluetooth Earphone with Charging Box LED Sports Stereo ",  
    },
    {
      id:23,
        name:"Fashion cloths",
        price:7.99,
        image:"./image/fashion.jpg",
        category:"cloths",
        description:"2024 M75 Tws Wireless Headphones Bluetooth Earphone with Charging Box LED Sports Stereo ",  
    },
    {
      id:24,
        name:"Andromeda",
        price:7.99,
        image:"./image/andro.jpg",
        category:"books",
        description:"2024 M75 Tws Wireless Headphones Bluetooth Earphone with Charging Box LED Sports Stereo ",  
    },
    


];

function initProducts(){
    const container=document.getElementById("products-container");
    products.forEach((product) =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML=`
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description} </p>
        <p class="product-price">${product.price} </p>
        <button class="add-to-cart" onclick=addToCart(${product.id})>add to cart</button> 
        `;
        container.appendChild(productCard);
    })
}
function togglecart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("active");
}

function closeCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.remove("active");
}

function saveCartToLocalStorge(){
    localStorage.setItem("cart",JSON.stringify(cart));
}
function addToCart(productId){
    const product=products.find((p)=> p.id===productId);
    const existingItem=cart.find((item)=> item.id===productId);
    if (existingItem) {
        existingItem.quantity++;
        
    } else {
       cart.push({...product,quantity:1}) ;
    }
    updateCartDisplay();
    saveCartToLocalStorge();
}
function updateCartDisplay(){
    const cartItems=document.getElementById("cart-items");
    const cartCount=document.getElementById("cart-count");
    const cartTotal=document.getElementById("cart-total");
    cartItems.innerHTML=" ";
    let total=0;

    cart.forEach((item)=>{
        total+=item.price * item.quantity;
        const cartItem=document.createElement("div");
        cartItem.className="cart-item";
        cartItem.innerHTML=`
        <div style="display:flex; align-items:center;">
        <img src="${item.image}" alt="${item.name}">
        <div>
        <h3>${item.name}</h3>
        <p>${item.price} x ${item.quantity}</p>
        </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItems.appendChild(cartItem);
    });
    cartCount.textContent=cart.reduce((sum , item) => sum + item.quantity,0);
    cartTotal.textContent=total.toFixed(2);
}
function removeFromCart(productId){
    cart=cart.filter((item) => item.id !==productId);
    updateCartDisplay();
    saveCartToLocalStorge();
}
document.addEventListener("DOMContentLoaded",()=>{
    initProducts();
    initstore();
});

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}


function showPymentModel(){
    if (cart.length===0) {
      return alert("Your cart is empty");  
    }
    document.getElementById("payment-total").textContent=cart.reduce((sum,item)=>sum + item.price + item.quantity,0).toFixed(2);
    document.getElementById("payment-model").style.display="block";
}
function closePaymentModel(){
    document.getElementById("payment-model").style.display="none"
}

function processPyment(e){
    e.preventDefault();
    // show animation processing
    document.getElementById("payment-form").style.display="none";
    document.getElementById("payment-processing").style.display="block";

    setTimeout(()=>{
        document.getElementById("payment-processing").style.display="none";
        document.getElementById("payment-success").style.display="block";

        setTimeout(() =>{
            cart= []
            localStorage.removeItem("cart")
            updateCartDisplay()
            closePaymentModel()
        },2000

        )
    },3000

    )

    
}

function displayProduct(){
    const container=document.getElementById("products-container");
    container.innerHTML=" ";

    const filterdProduct=products.filter((product) =>{
    const matchCategory=activeCategory ==="Home" || product.category === activeCategory
    const matchSearch=product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery)

    return matchCategory && matchSearch;
    });

    filterdProduct.forEach((product) =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML= `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description} </p>
        <p class="product-price">${product.price} </p>
        <button class="add-to-cart" onclick=addToCart(${product.id})>add to cart</button> 
        `;
        container.appendChild(productCard);

    })

}

// event listner setup
// search functionality
document.getElementById("search-input").addEventListener("input",(e) =>{
    searchQuery=e.target.value.toLowerCase()
    displayProduct();
})
// category filter 
document.querySelectorAll(".category-btn").forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        e.preventDefault();
        document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory=btn.dataset.category;
        displayProduct();
    })
})

function setupEventListners(){
    // event listner setup
// search functionality
document.getElementById("search-input").addEventListener("input",(e) =>{
    searchQuery=e.target.value.toLowerCase()
    displayProduct();
})
// category filter 
document.querySelectorAll(".category-btn").forEach((btn) =>{
    btn.addEventListener("click",() =>{
        document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory=btn.dataset.category;
        displayProduct();
    })
})

}
function initstore(){
    displayProduct();
    setupEventListners();
    updateCartDisplay();
}


// ✅ Customer Feedback Submission and Admin Reply Notification

const feedbackForm = document.getElementById("feedbackForm");
const feedbackSuccess = document.getElementById("feedbackSuccess");
const replyNotification = document.getElementById("replyNotification");
const replyText = document.getElementById("replyText");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("feedback-name").value.trim();
    const email = document.getElementById("feedback-email").value.trim();
    const message = document.getElementById("feedback-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("✅ Feedback response:", data);

      // Show success message
      feedbackSuccess.style.display = "block";
      feedbackSuccess.textContent = "✅ " + (data.message || "Feedback submitted successfully!");
      feedbackForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        feedbackSuccess.style.display = "none";
      }, 5000);

      // Save email locally for reply checks
      localStorage.setItem("userEmail", email);
    } catch (error) {
      console.error("❌ Error submitting feedback:", error);
      alert("Failed to send feedback: " + error.message);
    }
  });
}

// ====== Check for Admin Replies ======
async function checkAdminReplies() {
  const email = localStorage.getItem("userEmail");
  if (!email) return; // no feedback sent yet

  try {
    const res = await fetch("http://localhost:5000/api/feedback");
    if (!res.ok) throw new Error("Failed to fetch feedbacks");
    const allFeedbacks = await res.json();

    const userFeedback = allFeedbacks.find(
      (fb) => fb.email === email && fb.replies && fb.replies.length > 0
    );

    if (userFeedback) {
      const latestReply = userFeedback.replies[userFeedback.replies.length - 1];
      replyText.textContent = latestReply.message;
      replyNotification.style.display = "block";
    }
  } catch (err) {
    console.error("Error checking admin replies:", err);
  }
}

// Check for replies every 30 seconds
document.addEventListener("DOMContentLoaded", checkAdminReplies);
setInterval(checkAdminReplies, 30000);
