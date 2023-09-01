const outputDiv = document.getElementById("output");

function displaySection(title, content) {
    const section = document.createElement("div");
    section.className = "section";
    section.innerHTML = `<h2>${title}</h2>${content}`;
    outputDiv.appendChild(section);
}

// String methods
const string = "Hello, WEB APPS!";
const length = string.length;
const uppercase = string.toUpperCase();
const lowercase = string.toLowerCase();
const trimmed = string.trim();
const indexOfJS = string.indexOf("SIT120");

// Number methods
const num = 42.456;
const fixedDecimal = num.toFixed(2);
const exponentialNotation = num.toExponential(3);
const precision = num.toPrecision(4);
const parsedInt = parseInt("123");
const parsedFloat = parseFloat("3.14");

// Array methods
const array = [1, 2, 3, 4, 5];
const reversedArray = array.slice().reverse();
const slicedArray = array.slice(1, 4);
const joinedArray = array.join("-");
const poppedElement = array.pop();
array.push(6);

// Date methods
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

// Function methods
function greet(name) {
    return "Hello, " + name + "!";
}

function add(a, b) {
    return a + b;
}

// Call function to display the concepts
function displayConcepts() {
    displaySection("String Methods", `
        <p><strong style="color: #e74c3c;">String Length:</strong> ${length}</p>
        <p><strong style="color: #3498db;">Uppercase:</strong> ${uppercase}</p>
        <p><strong style="color: #3498db;">Lowercase:</strong> ${lowercase}</p>
        <p><strong style="color: #2ecc71;">Trimmed:</strong> ${trimmed}</p>
        <p><strong style="color: #e67e22;">Index of 'JavaScript':</strong> ${indexOfJS}</p>
    `);

    displaySection("Number Methods", `
        <p><strong style="color: #e74c3c;">Fixed Decimal:</strong> ${fixedDecimal}</p>
        <p><strong style="color: #3498db;">Exponential Notation:</strong> ${exponentialNotation}</p>
        <p><strong style="color: #3498db;">Precision:</strong> ${precision}</p>
        <p><strong style="color: #2ecc71;">Parsed Int:</strong> ${parsedInt}</p>
        <p><strong style="color: #2ecc71;">Parsed Float:</strong> ${parsedFloat}</p>
    `);

    displaySection("Array Methods", `
        <p><strong style="color: #e74c3c;">Reversed Array:</strong> ${reversedArray}</p>
        <p><strong style="color: #3498db;">Sliced Array:</strong> ${slicedArray}</p>
        <p><strong style="color: #3498db;">Joined Array:</strong> ${joinedArray}</p>
        <p><strong style="color: #2ecc71;">Popped Element:</strong> ${poppedElement}</p>
    `);

    displaySection("Date Methods", `
        <p><strong style="color: #e74c3c;">Year:</strong> ${year}</p>
        <p><strong style="color: #3498db;">Month:</strong> ${month}</p>
        <p><strong style="color: #3498db;">Day:</strong> ${day}</p>
        <p><strong style="color: #2ecc71;">Hours:</strong> ${hours}</p>
        <p><strong style="color: #2ecc71;">Minutes:</strong> ${minutes}</p>
    `);

    displaySection("Function Methods", `
        <p><strong style="color: #e74c3c;">${greet("Dev")}</strong></p>
        <p><strong style="color: #3498db;">Sum:</strong> ${add(5, 7)}</p>
    `);
}

// Call function to display the concepts
displayConcepts();
