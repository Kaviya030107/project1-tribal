
const products = document.querySelectorAll(".pro");
const display = document.querySelector(".display");
const payBtn = document.querySelector(".pay-btn");
const tray = document.querySelector(".tray");

let selectedItems = [];

products.forEach((product) => {
  product.addEventListener("click", () => {
    const itemName = product.querySelector("h5").innerText;
    const itemPriceText = product.querySelector("h4").innerText;

    // Extract price as number (remove Rs. and unit)
    const itemPrice = parseInt(itemPriceText.replace(/[^0-9]/g, ""));

    selectedItems.push({ name: itemName, price: itemPrice });

    // Update display with all items + total
    updateDisplay();
  });
});


payBtn.addEventListener("click", () => {
  if (selectedItems.length > 0) {
    let trayItems = selectedItems.map(item => item.name).join(", ");
    let total = selectedItems.reduce((sum, item) => sum + item.price, 0);

    tray.innerText = `Dispensed: ${trayItems} | Total: Rs.${total}`;
    display.innerText = "Select an item...";

    // Clear after dispensing
    selectedItems = [];
  } else {
    display.innerText = "⚠ Please select at least one item!";
  }
});

// Function to update display
function updateDisplay() {
  let itemList = selectedItems.map(item => `${item.name} (Rs.${item.price})`).join(", ");
  let total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  display.innerText = `Selected: ${itemList} | Total: Rs.${total}`;
}

