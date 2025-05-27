const calculate = (n) => ({
  squre: n ** 2,
  cube: n ** 3,
});
console.log(calculate(5));

const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const result = people.map(
  ({
    name,
    address: {
      city,
      street: { name: streetName },
    },
  }) => `${name} lives in ${city} on ${streetName}`
);

console.log(result);



// globle execution 

// Step 1: Declare a global variable
let age = 25;

// Step 2: Function to display the value of age
function displayAge() {
  console.log("Current age is:", age);
}

// Step 3: Function to change the value of age
function changeAge() {
  age = 30;
  console.log("Updated age is:", age);
}

// Step 4: Call the functions
displayAge();  // Output: Current age is: 25
changeAge();   // Output: Updated age is: 30