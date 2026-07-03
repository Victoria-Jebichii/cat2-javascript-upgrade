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
// --- TASK 2: DYNAMIC ADD & REMOVE ELEMENTS ---
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-wishlist-btn");
    const selectEl = document.getElementById("wishlist-select");
    const wishlistContainer = document.getElementById("wishlist-container");

    if (!addBtn || !selectEl || !wishlistContainer) return;

    addBtn.addEventListener("click", () => {
        const selectedValue = selectEl.value;

        if (selectedValue === "") {
            alert("Please select a service first!");
            return;
        }

        // 1. Create the list item element dynamically
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "10px";
        li.style.borderBottom = "1px solid #333";
        li.style.color = "#fff";
        
        // Add text to the list item
        li.textContent = selectedValue;

        // 2. Create its own personal remove button dynamically
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌ Remove";
        removeBtn.style.background = "none";
        removeBtn.style.border = "none";
        removeBtn.style.color = "#ff4d4d";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.fontWeight = "bold";

        // 3. Setup the remove function using .remove()
        removeBtn.addEventListener("click", () => {
            li.remove();
        });

        // 4. Append components together into the DOM
        li.appendChild(removeBtn);
        wishlistContainer.appendChild(li);

        // Reset the selector dropdown choice back to default
        selectEl.value = "";
    });
});