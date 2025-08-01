export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface PracticeExercise {
  id: number
  title: string
  description: string
  starterCode: string
  solution: string
  hints: string[]
}

export interface Topic {
  id: number
  title: string
  description: string
  icon: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  notes: string
  codeExample: string
  questions: Question[]
  practiceExercises: PracticeExercise[]
}

export const topics: Topic[] = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming language and its role in web development.",
    icon: "BookOpen",
    difficulty: "Beginner",
    duration: "30 min",
    notes: `# Introduction to JavaScript

JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications.

## Key Features:
- **Dynamic typing**: Variables can hold different types of values
- **Interpreted language**: No compilation step required
- **First-class functions**: Functions are treated as values
- **Prototype-based OOP**: Object-oriented programming through prototypes
- **Event-driven**: Responds to user interactions

## Where JavaScript Runs:
- Web browsers (client-side)
- Servers (Node.js)
- Mobile apps (React Native)
- Desktop applications (Electron)

## Basic Syntax:
- Statements end with semicolons (optional but recommended)
- Case-sensitive language
- Uses camelCase naming convention
- Supports both single and double quotes for strings`,
    codeExample: `// Your first JavaScript program
console.log("Hello, JavaScript World!");

// Variables
let message = "Welcome to JavaScript!";
console.log(message);

// Simple function
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Developer"));`,
    questions: [
      {
        id: 1,
        question: "What type of language is JavaScript?",
        options: ["Compiled", "Interpreted", "Assembly", "Machine"],
        correctAnswer: 1,
        explanation:
          "JavaScript is an interpreted language, meaning it's executed directly by the browser or runtime environment without a separate compilation step.",
      },
      {
        id: 2,
        question: "Which of the following is NOT a place where JavaScript can run?",
        options: ["Web browsers", "Servers (Node.js)", "Mobile apps", "Database engines"],
        correctAnswer: 3,
        explanation:
          "While JavaScript can run in browsers, servers, and mobile apps, it doesn't typically run directly in database engines (though some databases do support JavaScript-like scripting).",
      },
      {
        id: 3,
        question: "What naming convention does JavaScript commonly use?",
        options: ["snake_case", "kebab-case", "camelCase", "PascalCase"],
        correctAnswer: 2,
        explanation:
          "JavaScript commonly uses camelCase for variable and function names, where the first letter is lowercase and subsequent words start with uppercase letters.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Hello World",
        description: "Create your first JavaScript program that displays a greeting message.",
        starterCode: `// Write a program that displays "Hello, World!" to the console
`,
        solution: `// Write a program that displays "Hello, World!" to the console
console.log("Hello, World!");`,
        hints: ["Use console.log() to display text", "Don't forget the quotes around the text"],
      },
      {
        id: 2,
        title: "Personal Greeting",
        description: "Create a program that greets a person by name.",
        starterCode: `// Create a variable for a name and display a personalized greeting
let name = "Your Name";
// Your code here
`,
        solution: `// Create a variable for a name and display a personalized greeting
let name = "Your Name";
console.log("Hello, " + name + "!");
// or using template literals:
console.log(\`Hello, \${name}!\`);`,
        hints: ["Use string concatenation with +", "Or try template literals with backticks"],
      },
    ],
  },
  {
    id: 2,
    title: "Variables and Data Types",
    description: "Understand how to declare variables and work with different data types in JavaScript.",
    icon: "Database",
    difficulty: "Beginner",
    duration: "45 min",
    notes: `# Variables and Data Types

Variables are containers for storing data values. JavaScript has several ways to declare variables and supports various data types.

## Variable Declaration:
- **var**: Function-scoped, can be redeclared
- **let**: Block-scoped, cannot be redeclared in same scope
- **const**: Block-scoped, cannot be reassigned

## Primitive Data Types:
1. **Number**: Integers and floating-point numbers
2. **String**: Text data enclosed in quotes
3. **Boolean**: true or false values
4. **Undefined**: Variable declared but not assigned
5. **Null**: Intentional absence of value
6. **Symbol**: Unique identifier (ES6+)
7. **BigInt**: Large integers (ES2020+)

## Non-Primitive Data Types:
- **Object**: Collections of key-value pairs
- **Array**: Ordered lists of values
- **Function**: Reusable blocks of code

## Type Checking:
Use the \`typeof\` operator to check variable types.`,
    codeExample: `// Variable declarations
let name = "JavaScript";
const version = 2024;
var isAwesome = true;

// Data types
let number = 42;
let text = "Hello World";
let boolean = true;
let nothing = null;
let notDefined;

// Type checking
console.log(typeof number);    // "number"
console.log(typeof text);      // "string"
console.log(typeof boolean);   // "boolean"
console.log(typeof nothing);   // "object" (this is a known quirk)
console.log(typeof notDefined); // "undefined"

// Arrays and Objects
let colors = ["red", "green", "blue"];
let person = {
    name: "John",
    age: 30,
    city: "New York"
};`,
    questions: [
      {
        id: 1,
        question: "Which keyword creates a block-scoped variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2,
        explanation:
          "The 'const' keyword creates a block-scoped variable that cannot be reassigned after its initial declaration.",
      },
      {
        id: 2,
        question: "What does 'typeof null' return in JavaScript?",
        options: ["null", "undefined", "object", "boolean"],
        correctAnswer: 2,
        explanation:
          "This is a well-known quirk in JavaScript. 'typeof null' returns 'object', even though null is a primitive type.",
      },
      {
        id: 3,
        question: "Which of these is NOT a primitive data type in JavaScript?",
        options: ["String", "Number", "Array", "Boolean"],
        correctAnswer: 2,
        explanation:
          "Array is not a primitive data type. It's a type of object. The primitive types are: number, string, boolean, undefined, null, symbol, and bigint.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Variable Declaration",
        description: "Practice declaring variables with different keywords.",
        starterCode: `// Declare a variable 'age' using let and assign it the value 25
// Declare a constant 'PI' and assign it the value 3.14159
// Declare a variable 'isStudent' using var and assign it true

`,
        solution: `// Declare a variable 'age' using let and assign it the value 25
let age = 25;

// Declare a constant 'PI' and assign it the value 3.14159
const PI = 3.14159;

// Declare a variable 'isStudent' using var and assign it true
var isStudent = true;

console.log("Age:", age);
console.log("PI:", PI);
console.log("Is Student:", isStudent);`,
        hints: [
          "Use let for variables that can change",
          "Use const for values that won't change",
          "Use var for function-scoped variables",
        ],
      },
      {
        id: 2,
        title: "Type Checking",
        description: "Use typeof to check the data types of different variables.",
        starterCode: `let num = 42;
let str = "Hello";
let bool = false;
let arr = [1, 2, 3];
let obj = {name: "John"};

// Use typeof to check and log the type of each variable
`,
        solution: `let num = 42;
let str = "Hello";
let bool = false;
let arr = [1, 2, 3];
let obj = {name: "John"};

// Use typeof to check and log the type of each variable
console.log("num is:", typeof num);
console.log("str is:", typeof str);
console.log("bool is:", typeof bool);
console.log("arr is:", typeof arr);
console.log("obj is:", typeof obj);`,
        hints: ["Use typeof operator before the variable name", "Arrays and objects both return 'object'"],
      },
    ],
  },
  {
    id: 3,
    title: "Functions",
    description: "Master function declarations, expressions, arrow functions, and scope concepts.",
    icon: "Code",
    difficulty: "Beginner",
    duration: "60 min",
    notes: `# Functions in JavaScript

Functions are reusable blocks of code that perform specific tasks. They are fundamental building blocks in JavaScript programming.

## Function Declaration:
\`\`\`javascript
function functionName(parameters) {
    // code to execute
    return value; // optional
}
\`\`\`

## Function Expression:
\`\`\`javascript
const functionName = function(parameters) {
    // code to execute
};
\`\`\`

## Arrow Functions (ES6+):
\`\`\`javascript
const functionName = (parameters) => {
    // code to execute
};

// Short form for single expressions
const add = (a, b) => a + b;
\`\`\`

## Key Concepts:
- **Parameters**: Input values for functions
- **Arguments**: Actual values passed to functions
- **Return**: Output value from function
- **Scope**: Where variables can be accessed
- **Hoisting**: Function declarations are moved to top

## Function Scope:
Variables declared inside functions are local to that function.`,
    codeExample: `// Function Declaration
function greetUser(name) {
    return \`Hello, \${name}! Welcome to JavaScript!\`;
}

// Function Expression
const calculateArea = function(length, width) {
    return length * width;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Function with default parameters
const greetWithDefault = (name = "Guest") => {
    return \`Hello, \${name}!\`;
};

// Higher-order function
function processNumbers(num1, num2, operation) {
    return operation(num1, num2);
}

// Usage examples
console.log(greetUser("Developer"));
console.log(calculateArea(5, 3));
console.log(multiply(4, 7));
console.log(greetWithDefault());
console.log(processNumbers(10, 5, multiply));`,
    questions: [
      {
        id: 1,
        question: "What is the main difference between function declarations and function expressions?",
        options: [
          "No difference",
          "Function declarations are hoisted, expressions are not",
          "Function expressions are faster",
          "Function declarations cannot have parameters",
        ],
        correctAnswer: 1,
        explanation:
          "Function declarations are hoisted, meaning they can be called before they're defined in the code. Function expressions are not hoisted.",
      },
      {
        id: 2,
        question: "What does this arrow function do: const add = (a, b) => a + b;",
        options: [
          "Declares a variable",
          "Creates a function that adds two numbers",
          "Creates an array",
          "Throws an error",
        ],
        correctAnswer: 1,
        explanation:
          "This is an arrow function that takes two parameters (a and b) and returns their sum. The short syntax automatically returns the expression.",
      },
      {
        id: 3,
        question: "What happens if a function doesn't have a return statement?",
        options: ["It throws an error", "It returns null", "It returns undefined", "It returns 0"],
        correctAnswer: 2,
        explanation: "If a function doesn't explicitly return a value, it automatically returns 'undefined'.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Basic Function",
        description: "Create a function that calculates the square of a number.",
        starterCode: `// Create a function called 'square' that takes a number and returns its square
function square(num) {
    // Your code here
}

// Test your function
console.log(square(5)); // Should output 25
`,
        solution: `// Create a function called 'square' that takes a number and returns its square
function square(num) {
    return num * num;
}

// Test your function
console.log(square(5)); // Should output 25
console.log(square(3)); // Should output 9`,
        hints: ["Multiply the number by itself", "Use the return keyword to send back the result"],
      },
      {
        id: 2,
        title: "Arrow Function",
        description: "Convert a regular function to an arrow function.",
        starterCode: `// Convert this function to an arrow function
function isEven(number) {
    return number % 2 === 0;
}

// Your arrow function here:
const isEvenArrow = 

// Test both functions
console.log(isEven(4));
console.log(isEvenArrow(4));
`,
        solution: `// Convert this function to an arrow function
function isEven(number) {
    return number % 2 === 0;
}

// Your arrow function here:
const isEvenArrow = (number) => number % 2 === 0;

// Test both functions
console.log(isEven(4)); // true
console.log(isEvenArrow(4)); // true
console.log(isEven(3)); // false
console.log(isEvenArrow(3)); // false`,
        hints: ["Use => syntax", "For single expressions, you can omit return and curly braces"],
      },
    ],
  },
  {
    id: 4,
    title: "Objects and Arrays",
    description: "Learn to work with complex data structures and their methods.",
    icon: "Settings",
    difficulty: "Intermediate",
    duration: "75 min",
    notes: `# Objects and Arrays

Objects and arrays are complex data types that allow you to store and organize multiple values.

## Objects:
Objects are collections of key-value pairs, also known as properties.

\`\`\`javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
\`\`\`

## Object Methods:
- **Object.keys()**: Returns array of object keys
- **Object.values()**: Returns array of object values
- **Object.entries()**: Returns array of [key, value] pairs

## Arrays:
Arrays are ordered lists of values, indexed starting from 0.

\`\`\`javascript
const colors = ["red", "green", "blue"];
\`\`\`

## Common Array Methods:
- **push()**: Add to end
- **pop()**: Remove from end
- **shift()**: Remove from beginning
- **unshift()**: Add to beginning
- **slice()**: Extract portion
- **splice()**: Add/remove elements
- **forEach()**: Iterate through elements
- **map()**: Transform elements
- **filter()**: Filter elements
- **find()**: Find first matching element`,
    codeExample: `// Objects
const student = {
    name: "Alice",
    age: 22,
    grades: [85, 92, 78, 96],
    isEnrolled: true,
    
    // Method inside object
    getAverage: function() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
};

// Accessing object properties
console.log(student.name);        // Dot notation
console.log(student["age"]);      // Bracket notation

// Arrays
const fruits = ["apple", "banana", "orange"];

// Array methods
fruits.push("grape");             // Add to end
console.log(fruits.length);       // Get length

// Array iteration
fruits.forEach(fruit => {
    console.log(fruit);
});

// Array transformation
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
const longFruits = fruits.filter(fruit => fruit.length > 5);

// Destructuring
const [first, second] = fruits;
const {name, age} = student;`,
    questions: [
      {
        id: 1,
        question: "How do you access a property called 'name' in an object called 'person'?",
        options: ["person->name", "person.name", "person[name]", "name.person"],
        correctAnswer: 1,
        explanation:
          "You can access object properties using dot notation (person.name) or bracket notation (person['name']).",
      },
      {
        id: 2,
        question: "Which array method adds an element to the end of an array?",
        options: ["unshift()", "push()", "pop()", "shift()"],
        correctAnswer: 1,
        explanation:
          "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
      },
      {
        id: 3,
        question: "What does the map() method do?",
        options: [
          "Removes elements from array",
          "Adds elements to array",
          "Creates a new array with transformed elements",
          "Sorts the array",
        ],
        correctAnswer: 2,
        explanation:
          "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Object Creation",
        description: "Create an object representing a car with properties and methods.",
        starterCode: `// Create a car object with properties: brand, model, year, color
// Add a method called 'getInfo' that returns a string with car details
const car = {
    // Your properties here
    
    // Your method here
};

console.log(car.getInfo());
`,
        solution: `// Create a car object with properties: brand, model, year, color
// Add a method called 'getInfo' that returns a string with car details
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    
    getInfo: function() {
        return \`\${this.year} \${this.brand} \${this.model} in \${this.color}\`;
    }
};

console.log(car.getInfo()); // "2022 Toyota Camry in blue"`,
        hints: [
          "Use key: value pairs for properties",
          "Methods are functions inside objects",
          "Use 'this' to reference object properties",
        ],
      },
      {
        id: 2,
        title: "Array Methods",
        description: "Practice using array methods to manipulate data.",
        starterCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use array methods to:
// 1. Create a new array with only even numbers
const evenNumbers = 

// 2. Create a new array with each number doubled
const doubledNumbers = 

// 3. Find the first number greater than 5
const firstGreaterThanFive = 

console.log("Even numbers:", evenNumbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("First > 5:", firstGreaterThanFive);
`,
        solution: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use array methods to:
// 1. Create a new array with only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 2. Create a new array with each number doubled
const doubledNumbers = numbers.map(num => num * 2);

// 3. Find the first number greater than 5
const firstGreaterThanFive = numbers.find(num => num > 5);

console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]
console.log("Doubled numbers:", doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("First > 5:", firstGreaterThanFive); // 6`,
        hints: [
          "Use filter() to select elements",
          "Use map() to transform elements",
          "Use find() to locate an element",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "DOM Manipulation",
    description: "Discover how to interact with HTML elements and modify web pages dynamically.",
    icon: "Globe",
    difficulty: "Intermediate",
    duration: "90 min",
    notes: `# DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page structure as a tree of objects that can be modified with JavaScript.

## Selecting Elements:
- **getElementById()**: Select by ID
- **getElementsByClassName()**: Select by class name
- **getElementsByTagName()**: Select by tag name
- **querySelector()**: Select first matching CSS selector
- **querySelectorAll()**: Select all matching CSS selectors

## Modifying Elements:
- **innerHTML**: Get/set HTML content
- **textContent**: Get/set text content
- **setAttribute()**: Set attribute value
- **style**: Modify CSS styles
- **classList**: Add/remove CSS classes

## Creating and Removing Elements:
- **createElement()**: Create new element
- **appendChild()**: Add child element
- **removeChild()**: Remove child element
- **remove()**: Remove element (modern browsers)

## Event Handling:
- **addEventListener()**: Attach event listeners
- **removeEventListener()**: Remove event listeners

## Common Events:
- click, mouseover, mouseout
- keydown, keyup, keypress
- load, resize, scroll`,
    codeExample: `// Selecting elements
const title = document.getElementById('main-title');
const buttons = document.querySelectorAll('.btn');
const firstParagraph = document.querySelector('p');

// Modifying content
title.textContent = 'New Title';
title.innerHTML = '<strong>Bold Title</strong>';

// Modifying styles
title.style.color = 'blue';
title.style.fontSize = '24px';

// Working with classes
title.classList.add('highlight');
title.classList.remove('old-style');
title.classList.toggle('active');

// Creating new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
newDiv.className = 'dynamic-content';

// Adding to DOM
document.body.appendChild(newDiv);

// Event handling
const button = document.querySelector('#my-button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Event with arrow function
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightblue';
});`,
    questions: [
      {
        id: 1,
        question: "Which method selects the first element that matches a CSS selector?",
        options: ["getElementById()", "querySelector()", "getElementsByClassName()", "querySelectorAll()"],
        correctAnswer: 1,
        explanation: "querySelector() returns the first element that matches the specified CSS selector.",
      },
      {
        id: 2,
        question: "What's the difference between innerHTML and textContent?",
        options: [
          "No difference",
          "innerHTML includes HTML tags, textContent only includes text",
          "textContent is faster",
          "innerHTML is deprecated",
        ],
        correctAnswer: 1,
        explanation:
          "innerHTML gets/sets the HTML content including tags, while textContent gets/sets only the text content without HTML tags.",
      },
      {
        id: 3,
        question: "Which method is used to add an event listener to an element?",
        options: ["addEvent()", "addEventListener()", "attachEvent()", "onEvent()"],
        correctAnswer: 1,
        explanation:
          "addEventListener() is the standard method to attach event handlers to elements in modern JavaScript.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Element Selection",
        description: "Practice selecting DOM elements using different methods.",
        starterCode: `// Simulate DOM elements (in real browser, these would exist)
// Select element by ID 'header'
const header = document.getElementById('header');

// Select all elements with class 'item'
const items = document.getElementsByClassName('item');

// Select first paragraph element
const firstPara = document.querySelector('p');

// Log the selections (simulated)
console.log('Header:', header ? 'Found' : 'Not found');
console.log('Items count:', items ? items.length : 0);
console.log('First paragraph:', firstPara ? 'Found' : 'Not found');
`,
        solution: `// Simulate DOM elements (in real browser, these would exist)
// Select element by ID 'header'
const header = document.getElementById('header');

// Select all elements with class 'item'
const items = document.getElementsByClassName('item');

// Select first paragraph element
const firstPara = document.querySelector('p');

// Select all divs
const allDivs = document.querySelectorAll('div');

// Log the selections (simulated)
console.log('Header:', header ? 'Found' : 'Not found');
console.log('Items count:', items ? items.length : 0);
console.log('First paragraph:', firstPara ? 'Found' : 'Not found');
console.log('All divs:', allDivs ? allDivs.length : 0);`,
        hints: [
          "Use getElementById() for unique IDs",
          "Use querySelector() for CSS selectors",
          "Use querySelectorAll() for multiple elements",
        ],
      },
      {
        id: 2,
        title: "Dynamic Content",
        description: "Create and modify DOM elements dynamically.",
        starterCode: `// Create a new div element
const newDiv = document.createElement('div');

// Set its content and attributes
newDiv.textContent = 'Hello from JavaScript!';
newDiv.className = 'dynamic-element';
newDiv.style.color = 'blue';
newDiv.style.padding = '10px';
newDiv.style.border = '1px solid #ccc';

// In a real browser, you would append it to the body:
// document.body.appendChild(newDiv);

console.log('Created element:', newDiv.tagName);
console.log('Element content:', newDiv.textContent);
console.log('Element class:', newDiv.className);
`,
        solution: `// Create a new div element
const newDiv = document.createElement('div');

// Set its content and attributes
newDiv.textContent = 'Hello from JavaScript!';
newDiv.className = 'dynamic-element';
newDiv.style.color = 'blue';
newDiv.style.padding = '10px';
newDiv.style.border = '1px solid #ccc';

// Create a button element
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
newButton.onclick = () => alert('Button clicked!');

// In a real browser, you would append them to the body:
// document.body.appendChild(newDiv);
// document.body.appendChild(newButton);

console.log('Created div:', newDiv.tagName);
console.log('Div content:', newDiv.textContent);
console.log('Div class:', newDiv.className);
console.log('Created button:', newButton.tagName);
console.log('Button text:', newButton.textContent);`,
        hints: [
          "Use createElement() to make new elements",
          "Set textContent for text",
          "Use style property for CSS",
          "Use onclick for simple event handling",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Event Handling",
    description: "Learn to respond to user interactions and browser events effectively.",
    icon: "Zap",
    difficulty: "Intermediate",
    duration: "60 min",
    notes: `# Event Handling in JavaScript

Events are actions that happen in the browser, such as clicks, key presses, or page loads. JavaScript can respond to these events to create interactive web pages.

## Types of Events:
- **Mouse Events**: click, dblclick, mousedown, mouseup, mouseover, mouseout
- **Keyboard Events**: keydown, keyup, keypress
- **Form Events**: submit, change, focus, blur
- **Window Events**: load, resize, scroll, unload

## Event Listeners:
The modern way to handle events is using addEventListener():

\`\`\`javascript
element.addEventListener('event', function, options);
\`\`\`

## Event Object:
When an event occurs, an event object is passed to the handler function containing information about the event.

## Event Propagation:
- **Capturing Phase**: Event travels down from root to target
- **Target Phase**: Event reaches the target element
- **Bubbling Phase**: Event bubbles up from target to root

## Preventing Default Behavior:
Use \`preventDefault()\` to stop the default action of an event.

## Event Delegation:
Technique of using a single event listener on a parent element to handle events for multiple child elements.`,
    codeExample: `// Basic event handling
const button = document.querySelector('#click-me');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
    
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});

// Form events
const form = document.querySelector('#my-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
    
    const formData = new FormData(form);
    console.log('Form data:', Object.fromEntries(formData));
});

// Mouse events
const box = document.querySelector('#hover-box');
box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'lightblue';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'white';
});

// Event delegation
const list = document.querySelector('#item-list');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});`,
    questions: [
      {
        id: 1,
        question: "What method is used to prevent the default behavior of an event?",
        options: ["stopPropagation()", "preventDefault()", "cancelEvent()", "stopDefault()"],
        correctAnswer: 1,
        explanation: "preventDefault() is used to prevent the default action associated with an event from occurring.",
      },
      {
        id: 2,
        question: "In which phase does event bubbling occur?",
        options: ["Capturing phase", "Target phase", "Bubbling phase", "All phases"],
        correctAnswer: 2,
        explanation:
          "Event bubbling occurs in the bubbling phase, where the event travels from the target element up to the root of the DOM tree.",
      },
      {
        id: 3,
        question: "What is event delegation?",
        options: [
          "Removing event listeners",
          "Using one listener on a parent to handle events for multiple children",
          "Preventing event bubbling",
          "Creating custom events",
        ],
        correctAnswer: 1,
        explanation:
          "Event delegation is a technique where you use a single event listener on a parent element to handle events for multiple child elements, taking advantage of event bubbling.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Click Counter",
        description: "Create a click counter that increments when a button is clicked.",
        starterCode: `let clickCount = 0;

// Simulate a button click event
function simulateButtonClick() {
    // Your event handler code here
    
    console.log('Button clicked! Count:', clickCount);
}

// Test the function
simulateButtonClick();
simulateButtonClick();
simulateButtonClick();
`,
        solution: `let clickCount = 0;

// Simulate a button click event
function simulateButtonClick() {
    // Your event handler code here
    clickCount++;
    
    console.log('Button clicked! Count:', clickCount);
}

// In a real browser, you would do:
// const button = document.querySelector('#counter-btn');
// button.addEventListener('click', simulateButtonClick);

// Test the function
simulateButtonClick(); // Count: 1
simulateButtonClick(); // Count: 2
simulateButtonClick(); // Count: 3`,
        hints: ["Increment the counter variable", "Log the current count", "In real DOM, use addEventListener()"],
      },
      {
        id: 2,
        title: "Keyboard Event Handler",
        description: "Create a function that responds to different keyboard events.",
        starterCode: `// Simulate keyboard events
function handleKeyPress(key) {
    // Handle different keys:
    // - 'Enter': log "Enter key pressed!"
    // - 'Escape': log "Escape key pressed!"
    // - Any letter: log "Letter pressed: [letter]"
    // - Any number: log "Number pressed: [number]"
    // - Other keys: log "Other key pressed: [key]"
    
}

// Test with different keys
handleKeyPress('Enter');
handleKeyPress('Escape');
handleKeyPress('a');
handleKeyPress('5');
handleKeyPress('Space');
`,
        solution: `// Simulate keyboard events
function handleKeyPress(key) {
    // Handle different keys:
    if (key === 'Enter') {
        console.log("Enter key pressed!");
    } else if (key === 'Escape') {
        console.log("Escape key pressed!");
    } else if (key.length === 1 && key.match(/[a-zA-Z]/)) {
        console.log("Letter pressed:", key);
    } else if (key.length === 1 && key.match(/[0-9]/)) {
        console.log("Number pressed:", key);
    } else {
        console.log("Other key pressed:", key);
    }
}

// In a real browser, you would do:
// document.addEventListener('keydown', (event) => {
//     handleKeyPress(event.key);
// });

// Test with different keys
handleKeyPress('Enter');    // Enter key pressed!
handleKeyPress('Escape');   // Escape key pressed!
handleKeyPress('a');        // Letter pressed: a
handleKeyPress('5');        // Number pressed: 5
handleKeyPress('Space');    // Other key pressed: Space`,
        hints: [
          "Use if-else statements for different conditions",
          "Use regex to check for letters and numbers",
          "Check string length for single characters",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Async/Await & Promises",
    description: "Master asynchronous programming with modern JavaScript techniques.",
    icon: "Cpu",
    difficulty: "Advanced",
    duration: "120 min",
    notes: `# Asynchronous JavaScript

JavaScript is single-threaded, but it can handle asynchronous operations using callbacks, promises, and async/await.

## Promises:
A Promise represents the eventual completion or failure of an asynchronous operation.

**States:**
- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (success) {
        resolve(result);
    } else {
        reject(error);
    }
});
\`\`\`

## Promise Methods:
- **then()**: Handle successful completion
- **catch()**: Handle errors
- **finally()**: Execute code regardless of outcome
- **Promise.all()**: Wait for all promises
- **Promise.race()**: Wait for first promise to settle

## Async/Await:
Modern syntax for handling promises, making asynchronous code look synchronous.

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## Error Handling:
Use try/catch blocks with async/await for error handling.`,
    codeExample: `// Creating a Promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: 'John Doe',
                    email: 'john@example.com'
                });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// Using Promises with then/catch
fetchUserData(1)
    .then(user => {
        console.log('User data:', user);
        return user.name;
    })
    .then(name => {
        console.log('User name:', name);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// Using async/await
async function getUserInfo(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log('User info:', user);
        
        // Simulate another async operation
        const posts = await fetchUserPosts(user.id);
        console.log('User posts:', posts);
        
        return { user, posts };
    } catch (error) {
        console.error('Failed to get user info:', error.message);
        throw error;
    }
}

// Promise.all example
async function fetchMultipleUsers() {
    try {
        const promises = [
            fetchUserData(1),
            fetchUserData(2),
            fetchUserData(3)
        ];
        
        const users = await Promise.all(promises);
        console.log('All users:', users);
    } catch (error) {
        console.error('One or more requests failed:', error);
    }
}

// Fetch API example
async function fetchFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        console.log('API data:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}`,
    questions: [
      {
        id: 1,
        question: "What are the three states of a Promise?",
        options: [
          "Start, Process, End",
          "Pending, Fulfilled, Rejected",
          "Loading, Success, Error",
          "Init, Running, Complete",
        ],
        correctAnswer: 1,
        explanation:
          "A Promise has three states: Pending (initial state), Fulfilled (operation completed successfully), and Rejected (operation failed).",
      },
      {
        id: 2,
        question: "What does the 'await' keyword do?",
        options: [
          "Creates a new Promise",
          "Pauses execution until the Promise resolves",
          "Catches errors",
          "Runs code asynchronously",
        ],
        correctAnswer: 1,
        explanation:
          "The 'await' keyword pauses the execution of an async function until the Promise resolves, then returns the resolved value.",
      },
      {
        id: 3,
        question: "Which method waits for all promises to complete?",
        options: ["Promise.race()", "Promise.all()", "Promise.any()", "Promise.resolve()"],
        correctAnswer: 1,
        explanation:
          "Promise.all() waits for all promises in an array to complete. If any promise rejects, Promise.all() immediately rejects.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Simple Promise",
        description: "Create a promise that resolves after a delay.",
        starterCode: `// Create a function that returns a promise
// The promise should resolve after 2 seconds with the message "Task completed!"
function delayedTask() {
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// Test the promise
delayedTask()
    .then(message => console.log(message))
    .catch(error => console.error(error));
`,
        solution: `// Create a function that returns a promise
// The promise should resolve after 2 seconds with the message "Task completed!"
function delayedTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed!");
        }, 2000);
    });
}

// Alternative with random success/failure
function delayedTaskWithChance() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Task completed successfully!");
            } else {
                reject(new Error("Task failed!"));
            }
        }, 2000);
    });
}

// Test the promise
delayedTask()
    .then(message => console.log(message))
    .catch(error => console.error(error));`,
        hints: ["Use setTimeout for delay", "Call resolve() with the success message", "Use reject() for error cases"],
      },
      {
        id: 2,
        title: "Async/Await Practice",
        description: "Convert promise chains to async/await syntax.",
        starterCode: `// Convert this promise chain to async/await
function fetchUserProfile(userId) {
    return fetch(\`/api/users/\${userId}\`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log('User:', user);
            return fetch(\`/api/users/\${userId}/posts\`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log('Posts:', posts);
            return { user, posts };
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

// Your async/await version:
async function fetchUserProfileAsync(userId) {
    // Your code here
}
`,
        solution: `// Convert this promise chain to async/await
function fetchUserProfile(userId) {
    return fetch(\`/api/users/\${userId}\`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log('User:', user);
            return fetch(\`/api/users/\${userId}/posts\`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log('Posts:', posts);
            return { user, posts };
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

// Your async/await version:
async function fetchUserProfileAsync(userId) {
    try {
        // Fetch user data
        const userResponse = await fetch(\`/api/users/\${userId}\`);
        if (!userResponse.ok) {
            throw new Error('User not found');
        }
        const user = await userResponse.json();
        console.log('User:', user);
        
        // Fetch user posts
        const postsResponse = await fetch(\`/api/users/\${userId}/posts\`);
        const posts = await postsResponse.json();
        console.log('Posts:', posts);
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}`,
        hints: [
          "Use try/catch for error handling",
          "Use await before each async operation",
          "Check response.ok before parsing JSON",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "ES6+ Features",
    description: "Explore modern JavaScript features like destructuring, modules, and more.",
    icon: "Zap",
    difficulty: "Intermediate",
    duration: "90 min",
    notes: `# ES6+ Modern JavaScript Features

ES6 (ECMAScript 2015) and later versions introduced many powerful features that make JavaScript more expressive and easier to work with.

## Key ES6+ Features:

### 1. Let and Const
Block-scoped variable declarations that replace var in most cases.

### 2. Arrow Functions
Shorter syntax for function expressions with lexical 'this' binding.

### 3. Template Literals
String interpolation using backticks and \${} syntax.

### 4. Destructuring
Extract values from arrays and objects into distinct variables.

### 5. Default Parameters
Set default values for function parameters.

### 6. Rest and Spread Operators
- Rest (...): Collect remaining elements
- Spread (...): Expand elements

### 7. Classes
Syntactic sugar over JavaScript's prototype-based inheritance.

### 8. Modules
Import and export functionality between files.

### 9. Enhanced Object Literals
Shorthand property names and computed property names.

### 10. Promises and Async/Await
Better handling of asynchronous operations.`,
    codeExample: `// Template Literals
const name = 'JavaScript';
const version = 'ES6+';
const message = \`Learning \${name} \${version} features!\`;

// Destructuring
const person = { name: 'John', age: 30, city: 'NYC' };
const { name: personName, age } = person;

const colors = ['red', 'green', 'blue'];
const [first, second, ...rest] = colors;

// Arrow Functions
const add = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Default Parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return \`\${greeting}, \${name}!\`;
}

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine');
        this.breed = breed;
    }
    
    speak() {
        return \`\${this.name} barks\`;
    }
}

// Enhanced Object Literals
const x = 10, y = 20;
const point = {
    x, // shorthand for x: x
    y, // shorthand for y: y
    
    // Method shorthand
    distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    },
    
    // Computed property names
    [\`point_\${Date.now()}\`]: 'timestamp'
};`,
    questions: [
      {
        id: 1,
        question: "What does destructuring allow you to do?",
        options: [
          "Delete object properties",
          "Extract values from arrays and objects into variables",
          "Create new objects",
          "Merge arrays",
        ],
        correctAnswer: 1,
        explanation:
          "Destructuring allows you to extract values from arrays and objects and assign them to variables in a single statement.",
      },
      {
        id: 2,
        question: "What is the difference between rest and spread operators?",
        options: [
          "No difference, they're the same",
          "Rest collects elements, spread expands elements",
          "Rest is for objects, spread is for arrays",
          "Rest is older syntax",
        ],
        correctAnswer: 1,
        explanation:
          "Rest operator (...) collects remaining elements into an array, while spread operator (...) expands elements from an array or object.",
      },
      {
        id: 3,
        question: "What are template literals enclosed with?",
        options: ["Single quotes", "Double quotes", "Backticks", "Parentheses"],
        correctAnswer: 2,
        explanation:
          "Template literals are enclosed with backticks (`) and allow for string interpolation using ${} syntax.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Destructuring Practice",
        description: "Practice destructuring arrays and objects.",
        starterCode: `const student = {
    name: 'Alice',
    age: 22,
    grades: [85, 92, 78, 96],
    address: {
        street: '123 Main St',
        city: 'Boston',
        zip: '02101'
    }
};

// Use destructuring to extract:
// 1. name and age from student
// 2. first and last grades from grades array
// 3. city from nested address object

// Your destructuring code here:

`,
        solution: `const student = {
    name: 'Alice',
    age: 22,
    grades: [85, 92, 78, 96],
    address: {
        street: '123 Main St',
        city: 'Boston',
        zip: '02101'
    }
};

// Use destructuring to extract:
// 1. name and age from student
const { name, age } = student;

// 2. first and last grades from grades array
const [firstGrade, , , lastGrade] = student.grades;
// or
const [first, ...restGrades] = student.grades;
const last = restGrades[restGrades.length - 1];

// 3. city from nested address object
const { address: { city } } = student;

console.log('Name:', name);
console.log('Age:', age);
console.log('First grade:', firstGrade);
console.log('Last grade:', lastGrade);
console.log('City:', city);`,
        hints: [
          "Use {} for object destructuring",
          "Use [] for array destructuring",
          "Use nested destructuring for nested objects",
        ],
      },
      {
        id: 2,
        title: "Spread and Rest",
        description: "Practice using spread and rest operators.",
        starterCode: `// 1. Create a function that takes any number of arguments and returns their sum
function sum(/* your parameters here */) {
    // Your code here
}

// 2. Combine these arrays using spread operator
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const dairy = ['milk', 'cheese'];

const groceries = /* your code here */;

// 3. Create a copy of this object and add a new property
const originalUser = { name: 'John', age: 30 };
const updatedUser = /* your code here */;

// Test your functions
console.log(sum(1, 2, 3, 4, 5)); // Should be 15
console.log('Groceries:', groceries);
console.log('Updated user:', updatedUser);
`,
        solution: `// 1. Create a function that takes any number of arguments and returns their sum
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 2. Combine these arrays using spread operator
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const dairy = ['milk', 'cheese'];

const groceries = [...fruits, ...vegetables, ...dairy];

// 3. Create a copy of this object and add a new property
const originalUser = { name: 'John', age: 30 };
const updatedUser = { ...originalUser, email: 'john@example.com', age: 31 };

// Test your functions
console.log(sum(1, 2, 3, 4, 5)); // Should be 15
console.log('Groceries:', groceries);
console.log('Updated user:', updatedUser);
console.log('Original user:', originalUser); // Should be unchanged`,
        hints: [
          "Use ...args for rest parameters",
          "Use ...array to spread array elements",
          "Use ...object to spread object properties",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Error Handling",
    description: "Learn to handle errors gracefully and debug your JavaScript code.",
    icon: "Settings",
    difficulty: "Intermediate",
    duration: "45 min",
    notes: `# Error Handling in JavaScript

Error handling is crucial for creating robust applications that can gracefully handle unexpected situations.

## Types of Errors:

### 1. Syntax Errors
Errors in code structure that prevent execution.

### 2. Runtime Errors
Errors that occur during code execution.

### 3. Logical Errors
Code runs but produces incorrect results.

## Try-Catch-Finally:
The primary mechanism for handling errors in JavaScript.

\`\`\`javascript
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Code that always runs
}
\`\`\`

## Throwing Custom Errors:
You can throw your own errors using the \`throw\` statement.

## Error Object Properties:
- **name**: Type of error
- **message**: Error description
- **stack**: Stack trace (debugging info)

## Common Error Types:
- **ReferenceError**: Variable not defined
- **TypeError**: Wrong data type
- **SyntaxError**: Invalid syntax
- **RangeError**: Number out of range

## Best Practices:
- Always handle potential errors
- Provide meaningful error messages
- Log errors for debugging
- Fail gracefully with fallback options`,
    codeExample: `// Basic try-catch
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    } catch (error) {
        console.error('Error in divideNumbers:', error.message);
        return null;
    } finally {
        console.log('Division operation completed');
    }
}

// Handling different error types
function processUserInput(input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }
        
        if (input.length === 0) {
            throw new RangeError('Input cannot be empty');
        }
        
        const parsed = JSON.parse(input);
        return parsed;
        
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Type error:', error.message);
        } else if (error instanceof RangeError) {
            console.error('Range error:', error.message);
        } else if (error instanceof SyntaxError) {
            console.error('Invalid JSON:', error.message);
        } else {
            console.error('Unknown error:', error.message);
        }
        
        return { error: true, message: error.message };
    }
}

// Async error handling
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        
        const userData = await response.json();
        return userData;
        
    } catch (error) {
        if (error.name === 'TypeError') {
            console.error('Network error:', error.message);
        } else {
            console.error('Fetch error:', error.message);
        }
        
        throw error; // Re-throw to let caller handle
    }
}

// Custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
    return true;
}

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent default browser behavior
});`,
    questions: [
      {
        id: 1,
        question: "Which block always executes regardless of whether an error occurs?",
        options: ["try", "catch", "finally", "throw"],
        correctAnswer: 2,
        explanation:
          "The 'finally' block always executes, whether an error occurs or not, making it useful for cleanup operations.",
      },
      {
        id: 2,
        question: "What keyword is used to manually throw an error?",
        options: ["error", "throw", "catch", "raise"],
        correctAnswer: 1,
        explanation: "The 'throw' keyword is used to manually throw an error or exception in JavaScript.",
      },
      {
        id: 3,
        question: "What type of error occurs when trying to use an undefined variable?",
        options: ["TypeError", "SyntaxError", "ReferenceError", "RangeError"],
        correctAnswer: 2,
        explanation:
          "ReferenceError occurs when trying to access a variable that hasn't been declared or is not in scope.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Basic Error Handling",
        description: "Create a function with proper error handling.",
        starterCode: `// Create a function that safely parses JSON
function safeJsonParse(jsonString) {
    // Use try-catch to handle potential JSON parsing errors
    // Return the parsed object on success, or null on error
    
}

// Test cases
console.log(safeJsonParse('{"name": "John", "age": 30}'));
console.log(safeJsonParse('invalid json'));
console.log(safeJsonParse('{"incomplete": '));
`,
        solution: `// Create a function that safely parses JSON
function safeJsonParse(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        console.log('Successfully parsed JSON');
        return result;
    } catch (error) {
        console.error('JSON parsing failed:', error.message);
        return null;
    } finally {
        console.log('JSON parsing attempt completed');
    }
}

// Test cases
console.log(safeJsonParse('{"name": "John", "age": 30}')); // Returns object
console.log(safeJsonParse('invalid json')); // Returns null
console.log(safeJsonParse('{"incomplete": ')); // Returns null`,
        hints: ["Use JSON.parse() inside try block", "Return null in catch block", "Log appropriate messages"],
      },
      {
        id: 2,
        title: "Custom Error Types",
        description: "Create and throw custom errors with validation.",
        starterCode: `// Create a custom error class for validation
class ValidationError extends Error {
    constructor(message, field) {
        // Your constructor code here
    }
}

// Create a function that validates user data
function validateUser(user) {
    // Validate that user is an object
    // Validate that user has name (string, not empty)
    // Validate that user has age (number, between 0 and 120)
    // Validate that user has email (string, contains @)
    // Throw appropriate ValidationError for each case
    
}

// Test cases
try {
    validateUser({ name: "John", age: 30, email: "john@example.com" });
    console.log("User is valid!");
} catch (error) {
    console.error(\`Validation failed: \${error.message}\`);
}

try {
    validateUser({ name: "", age: 30, email: "john@example.com" });
} catch (error) {
    console.error(\`Validation failed: \${error.message} (field: \${error.field})\`);
}
`,
        solution: `// Create a custom error class for validation
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

// Create a function that validates user data
function validateUser(user) {
    // Validate that user is an object
    if (typeof user !== 'object' || user === null) {
        throw new ValidationError('User must be an object', 'user');
    }
    
    // Validate that user has name (string, not empty)
    if (typeof user.name !== 'string' || user.name.trim() === '') {
        throw new ValidationError('Name must be a non-empty string', 'name');
    }
    
    // Validate that user has age (number, between 0 and 120)
    if (typeof user.age !== 'number' || user.age < 0 || user.age > 120) {
        throw new ValidationError('Age must be a number between 0 and 120', 'age');
    }
    
    // Validate that user has email (string, contains @)
    if (typeof user.email !== 'string' || !user.email.includes('@')) {
        throw new ValidationError('Email must be a valid email address', 'email');
    }
    
    return true;
}

// Test cases
try {
    validateUser({ name: "John", age: 30, email: "john@example.com" });
    console.log("User is valid!");
} catch (error) {
    console.error(\`Validation failed: \${error.message}\`);
}

try {
    validateUser({ name: "", age: 30, email: "john@example.com" });
} catch (error) {
    console.error(\`Validation failed: \${error.message} (field: \${error.field})\`);
}`,
        hints: [
          "Extend Error class with super()",
          "Set this.name and this.field",
          "Use typeof to check data types",
          "Throw ValidationError with appropriate message and field",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "APIs and Fetch",
    description: "Connect to external services and handle HTTP requests in JavaScript.",
    icon: "Globe",
    difficulty: "Advanced",
    duration: "105 min",
    notes: `# APIs and Fetch in JavaScript

APIs (Application Programming Interfaces) allow different software applications to communicate with each other. The Fetch API is the modern way to make HTTP requests in JavaScript.

## What is an API?
An API is a set of protocols and tools for building software applications. Web APIs allow you to interact with external services and retrieve data.

## HTTP Methods:
- **GET**: Retrieve data
- **POST**: Create new data
- **PUT**: Update existing data
- **DELETE**: Remove data
- **PATCH**: Partially update data

## Fetch API:
The Fetch API provides a modern interface for making HTTP requests.

\`\`\`javascript
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
\`\`\`

## Response Object:
- **ok**: Boolean indicating success
- **status**: HTTP status code
- **statusText**: Status message
- **headers**: Response headers
- **json()**: Parse JSON response
- **text()**: Get text response

## Request Options:
- **method**: HTTP method
- **headers**: Request headers
- **body**: Request body data
- **credentials**: Include cookies

## Common Response Formats:
- JSON (most common)
- XML
- Plain text
- HTML`,
    codeExample: `// Basic GET request
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const posts = await response.json();
        console.log('Posts:', posts);
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// POST request with data
async function createPost(postData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const newPost = await response.json();
        console.log('Created post:', newPost);
        return newPost;
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// PUT request to update data
async function updatePost(id, updatedData) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        });
        
        const updatedPost = await response.json();
        console.log('Updated post:', updatedPost);
        return updatedPost;
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

// DELETE request
async function deletePost(id) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            console.log(\`Post \${id} deleted successfully\`);
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

// Handling different response types
async function fetchUserProfile(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}/profile\`);
        
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            return data;
        } else if (contentType && contentType.includes('text/')) {
            const text = await response.text();
            return text;
        } else {
            throw new Error('Unsupported content type');
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

// Using with authentication
async function fetchProtectedData(token) {
    try {
        const response = await fetch('/api/protected', {
            headers: {
                'Authorization': \`Bearer \${token}\`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.status === 401) {
            throw new Error('Unauthorized - invalid token');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching protected data:', error);
    }
}

// Example usage
const newPost = {
    title: 'My New Post',
    body: 'This is the content of my post',
    userId: 1
};

createPost(newPost);`,
    questions: [
      {
        id: 1,
        question: "Which HTTP method is used to retrieve data from an API?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
        explanation:
          "GET is the HTTP method used to retrieve data from a server. It should not modify any data on the server.",
      },
      {
        id: 2,
        question: "What does the response.ok property indicate?",
        options: [
          "The response contains data",
          "The request was successful (status 200-299)",
          "The response is in JSON format",
          "The server is online",
        ],
        correctAnswer: 1,
        explanation:
          "The response.ok property is true if the response status is in the 200-299 range, indicating a successful request.",
      },
      {
        id: 3,
        question: "Which method is used to parse JSON from a fetch response?",
        options: ["response.parse()", "response.json()", "response.data()", "JSON.parse(response)"],
        correctAnswer: 1,
        explanation:
          "The response.json() method is used to parse the response body as JSON. It returns a Promise that resolves with the parsed JSON data.",
      },
    ],
    practiceExercises: [
      {
        id: 1,
        title: "Simple API Call",
        description: "Fetch data from a public API and handle the response.",
        starterCode: `// Create a function that fetches a random joke from an API
async function fetchRandomJoke() {
    // Use this API: https://official-joke-api.appspot.com/random_joke
    // Handle errors appropriately
    // Return the joke object
    
}

// Test the function
fetchRandomJoke()
    .then(joke => {
        if (joke) {
            console.log(\`\${joke.setup} - \${joke.punchline}\`);
        }
    });
`,
        solution: `// Create a function that fetches a random joke from an API
async function fetchRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const joke = await response.json();
        console.log('Fetched joke successfully');
        return joke;
    } catch (error) {
        console.error('Error fetching joke:', error.message);
        return null;
    }
}

// Alternative with .then() syntax
function fetchRandomJokeWithThen() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.json();
        })
        .then(joke => {
            console.log('Fetched joke successfully');
            return joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error.message);
            return null;
        });
}

// Test the function
fetchRandomJoke()
    .then(joke => {
        if (joke) {
            console.log(\`\${joke.setup} - \${joke.punchline}\`);
        }
    });`,
        hints: [
          "Use fetch() with the provided URL",
          "Check response.ok before parsing",
          "Use response.json() to parse the data",
          "Handle errors with try-catch",
        ],
      },
      {
        id: 2,
        title: "POST Request",
        description: "Send data to an API using a POST request.",
        starterCode: `// Create a function that sends user data to an API
async function createUser(userData) {
    // Send POST request to: https://jsonplaceholder.typicode.com/users
    // Include proper headers for JSON data
    // Return the created user data
    
}

// Test data
const newUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '555-1234'
};

// Test the function
createUser(newUser)
    .then(user => {
        if (user) {
            console.log('Created user:', user);
        }
    });
`,
        solution: `// Create a function that sends user data to an API
async function createUser(userData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const createdUser = await response.json();
        console.log('User created successfully');
        return createdUser;
    } catch (error) {
        console.error('Error creating user:', error.message);
        return null;
    }
}

// Alternative function with validation
async function createUserWithValidation(userData) {
    // Validate required fields
    if (!userData.name || !userData.email) {
        throw new Error('Name and email are required');
    }
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const createdUser = await response.json();
        console.log('User created successfully with ID:', createdUser.id);
        return createdUser;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
}

// Test data
const newUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '555-1234'
};

// Test the function
createUser(newUser)
    .then(user => {
        if (user) {
            console.log('Created user:', user);
        }
    });`,
        hints: [
          "Use method: 'POST' in fetch options",
          "Set Content-Type header to 'application/json'",
          "Use JSON.stringify() for the body",
          "Handle both success and error cases",
        ],
      },
    ],
  },
]
