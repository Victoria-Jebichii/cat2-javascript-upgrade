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