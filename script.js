document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded");

    // Smoothie class to store smoothie details and calculate price
    class Smoothie {
        constructor(name, base, fruits, sweetener) {
            this.name = name;
            this.base = base;
            this.fruits = fruits;
            this.sweetener = sweetener;
        }

        // Method to calculate price based on ingredients
        calculatePrice() {
            let price = 5; // Base price for any smoothie

            // Adding price for base
            if (this.base === "Almond Milk" || this.base === "Yogurt") {
                price += 1; // Add $1 for these options
            }

            // Adding price for each fruit
            price += this.fruits.length * 0.5; // Each fruit adds $0.5

            // Adding price for sweetener
            if (this.sweetener === "Honey" || this.sweetener === "Sugar") {
                price += 0.5; // Add $0.5 for sweeteners
            }

            return price.toFixed(2); // Return price as string with 2 decimal points
        }

        // Method to generate a smoothie summary
        getSummary() {
            return `
                <h2>Your Smoothie Order</h2>
                <p><strong>Name:</strong> ${this.name}</p>
                <p><strong>Base:</strong> ${this.base}</p>
                <p><strong>Fruits:</strong> ${this.fruits.join(", ")}</p>
                <p><strong>Sweetener:</strong> ${this.sweetener}</p>
                <p><strong>Price:</strong> $${this.calculatePrice()}</p>
            `;
        }
    }

    // Handle form submission
    document.getElementById("smoothieForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        console.log("Form submitted!");

        // Get smoothie name
        const name = document.getElementById("smoothieName").value;

        // Get base selection
        const base = document.getElementById("base").value;

        // Get selected fruits (checkboxes)
        const fruits = [];
        const fruitCheckboxes = document.querySelectorAll('input[name="fruit"]:checked');
        fruitCheckboxes.forEach(function(checkbox) {
            fruits.push(checkbox.value);
        });

        // Get sweetener selection
        const sweetener = document.getElementById("sweetener").value;

        // Create a new Smoothie object
        const smoothie = new Smoothie(name, base, fruits, sweetener);

        // Display the smoothie summary
        const orderSummary = document.getElementById("orderSummary");
        orderSummary.innerHTML = smoothie.getSummary();
    });
});