// --- TASK 1: LOOP-RENDERED DYNAMIC CONTENT ---
const nailServices = [
    { icon: "💅", name: "Classic Manicure", price: "KSh 800", desc: "Shaping, cuticle care, hand massage and polish of your choice." },
    { icon: "🦶", name: "Classic Pedicure", price: "KSh 1,200", desc: "Foot soak, exfoliation, nail care and a relaxing foot massage." },
    { icon: "✨", name: "Gel Manicure", price: "KSh 1,500", desc: "Long-lasting gel polish, chip-free for up to 3 weeks." },
    { icon: "🌸", name: "Spa Pedicure", price: "KSh 2,200", desc: "An indulgent pedicure with scrub, mask and extended massage." },
    { icon: "🎨", name: "Nail Art", price: "KSh 500", desc: "Custom florals, ombre, gems and hand-painted designs." },
    { icon: "💎", name: "Acrylic Extensions", price: "KSh 2,500", desc: "Full set or infills for added length and strength." }
];

function renderServices() {
    const container = document.getElementById("services-container");
    if (!container) return;
    
    container.innerHTML = "";

    nailServices.forEach(service => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <span class="icon">${service.icon}</span>
            <h3>${service.name}</h3>
            <p>${service.desc}</p>
            <span class="price">From ${service.price}</span>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderServices);
// --- TASK 2 & 4: DYNAMIC WISHLIST WITH LOCALSTORAGE PERSISTENCE ---
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-wishlist-btn");
    const selectEl = document.getElementById("wishlist-select");
    const wishlistContainer = document.getElementById("wishlist-container");

    if (!addBtn || !selectEl || !wishlistContainer) return;

    // Function to save current wishlist array to localStorage
    const saveWishlistToStorage = () => {
        const items = [];
        wishlistContainer.querySelectorAll("li").forEach(li => {
            // Get text content and clean it up (removing the ❌ Remove text)
            const text = li.textContent.replace("❌ Remove", "").trim();
            items.push(text);
        });
        localStorage.setItem("savedWishlist", JSON.stringify(items));
    };

    // Function to dynamically create and append a wishlist item element
    const createWishlistItem = (value) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #333";
        li.style.color = "#fff";
        li.textContent = value;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌ Remove";
        removeBtn.style.background = "none";
        removeBtn.style.border = "none";
        removeBtn.style.color = "#ff4d4d";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.fontWeight = "bold";

        removeBtn.addEventListener("click", () => {
            li.remove();
            saveWishlistToStorage(); // Update storage when an item is removed
        });

        li.appendChild(removeBtn);
        wishlistContainer.appendChild(li);
    };

    // Load existing items from localStorage when the page opens
    const storedItems = JSON.parse(localStorage.getItem("savedWishlist")) || [];
    storedItems.forEach(item => createWishlistItem(item));

    // Event listener for adding new items
    addBtn.addEventListener("click", () => {
        const selectedValue = selectEl.value;

        if (selectedValue === "") {
            alert("Please select a service first!");
            return;
        }

        createWishlistItem(selectedValue);
        saveWishlistToStorage(); // Save to storage when a new item is added

        selectEl.value = "";
    });
});
// --- TASK 3: FORM VALIDATION FEEDBACK ---
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".btn.full-btn");
    const feedbackDiv = document.getElementById("form-feedback");

    if (!submitBtn || !feedbackDiv) return;

    submitBtn.addEventListener("click", () => {
        // Grab fields by their IDs
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const dateInput = document.getElementById("date");

        const nameValue = nameInput ? nameInput.value.trim() : "";
        const phoneValue = phoneInput ? phoneInput.value.trim() : "";
        const dateValue = dateInput ? dateInput.value.trim() : "";

        // 1. Validation Check: Check if fields are empty
        if (nameValue === "" || phoneValue === "" || dateValue === "") {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.backgroundColor = "#ff4d4d"; // Red error style
            feedbackDiv.style.color = "#fff";
            feedbackDiv.textContent = "⚠️ Please fill out your Name, Phone, and Preferred Date.";
            return;
        }

        // 2. Success: Display beautiful custom confirmation message
        feedbackDiv.style.display = "block";
        feedbackDiv.style.backgroundColor = "#2ecc71"; // Green success style
        feedbackDiv.style.color = "#fff";
        feedbackDiv.textContent = `Thank you, ${nameValue}! Your booking for ${dateValue} has been received. Jean will reach out to you at ${phoneValue} soon. ✨`;

        // Clear fields after a successful submission
        if (nameInput) nameInput.value = "";
        if (phoneInput) phoneInput.value = "";
        if (dateInput) dateInput.value = "";
        const notesInput = document.getElementById("notes");
        if (notesInput) notesInput.value = "";
    });
});
// --- TASK 5: CLICK-TO-REVEAL BANNER OVERLAY ---
document.addEventListener("DOMContentLoaded", () => {
    const mainBanner = document.getElementById("main-banner");
    const bannerCaption = document.getElementById("banner-caption");

    if (!mainBanner || !bannerCaption) return;

    mainBanner.addEventListener("click", (event) => {
        // Prevent the click event from triggering if the user is clicking the "Book an Appointment" link button specifically
        if (event.target.tagName === 'A') return;

        // Toggle visual display
        if (bannerCaption.style.display === "none" || bannerCaption.style.display === "") {
            bannerCaption.style.display = "block";
        } else {
            bannerCaption.style.display = "none";
        }
        
        // Satisfies the requirement: toggles a custom active class using classList.toggle
        bannerCaption.classList.toggle("revealed-active");
    });
});