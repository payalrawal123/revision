const userProfile = {
    name: "Alice",
    age: 28,
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;
      console.log(this.details());
    }
  };
  
  // Test
  userProfile.updateAge(30);                  // Logs: "Alice is 30 years old."
  console.log(userProfile.details());         // Logs: "Alice is 30 years old."
  



//   2


const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      const price = parseFloat(item.price);
  
      if (isNaN(price) || price < 0) {
        console.log("Invalid price.");
        return;
      }
  
      this.items.push({ ...item, price }); // Ensure stored price is a number
      this.total += price;
    },
  
    getTotal() {
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  // Test cases
  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Handles string price correctly
  checkout.addItem({ name: "Milk", price: 3.50 });             // Handles number price
  
  console.log(checkout.getTotal()); // Output: "Total: $103.45"
  