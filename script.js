const menuItems = {
  veg: [
    { name: "Paneer Butter Masala", price: "₹200", img: "paneer butter masala.jpg" },
    { name: "Veg Biryani", price: "₹180", img: "veg b.jpg" },
    { name: "Dal Tadka", price: "₹150", img: "dal.jpg" },
    { name: "Mixed Veg Curry", price: "₹170", img: "mvg.jpg" }
  ],
  nonveg: [
    { name: "Chicken Curry", price: "₹250", img: "chicken curry.jpg" },
    { name: "Mutton Rogan Josh", price: "₹320", img: "mutton josh.jpg" },
    { name: "Butter Chicken", price: "₹280", img: "butter chiken.jpg" },
    { name: "Fish Fry", price: "₹240", img: "fish.jpg" }
    
  ],
  juice: [
    { name: "Orange Juice", price: "₹80", img: "orange.jpg" },
    { name: "Mango Shake", price: "₹90", img: "mango.jpeg" },
    { name: "lemon Juice", price: "₹70", img: "lemon.jpg" },
    { name: "Pineapple Juice", price: "₹85", img: "pineapple.jpeg" }
    
  ],
  starter: [
    { name: "Paneer Tikka", price: "₹150", img: "pt.jpg" },
    { name: "Chicken Lollipop", price: "₹200", img: "cl.jpg" },
    { name: "Spring Rolls", price: "₹120", img: "sr.jpg" },
    { name: "Veg Manchurian", price: "₹140", img: "vm.jpg" }
   
  ],
 
  combo: [
    { name: "Veg Combo", price: "₹350", img: "vc.jpg" },
    { name: "Non-Veg Combo", price: "₹450", img: "nvc.jpg" },
    { name: "Burger Combo", price: "₹300", img: "bc.jpg" },
    { name: "Pizza Combo", price: "₹400", img: "pc.jpg" }
   
  ]
};

function showItems(category) {
  const container = document.getElementById('menu-container');
  container.innerHTML = '';

  menuItems[category].forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-content">
        <div class="card-title">${item.name}</div>
        <div class="card-price">${item.price}</div>
      </div>
    `;

    container.appendChild(card);
  });
}
