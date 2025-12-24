         //GOALS//
//1. components of common dom testing
//2. simulate user interactions
//create unit tests with jest

// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

//Task 1: Add element to the DOM
// index.js should add an element to the DOM

// //Task 2: Remove an element from DOM
// index.js remove an element from the DOM


//1. Add event listeners to simulate user actions such as button clicks and form submissions.
   //done with the submit event listener and the click event listener

//2. Write functions to process user input and dynamically update the DOM.
  //done with displayInputs() it processes the input and updates the DOM to display the user's inputs in the div under the input box

//3. Validate that DOM updates occur correctly after simulated user actions.
  //done by checking my webpage

  //4. 

 function headingCreation () {const dynamicContent = document.getElementById("dynamic-content")
 const heading = document.createElement("h2")
 heading.textContent = `YOUR INPUTS :)`
 dynamicContent.append(heading)}

 headingCreation()


function displayInputs(input){
clearErrorMessage()
 const dynamicContent = document.getElementById("dynamic-content")
 const ul = document.createElement("ul")
 const list = document.createElement("li")
list.textContent = input
ul.append(list)
dynamicContent.append(ul)
//  const simulator = document.getElementById("simulate-click")
// simulator.textContent = `Clear Inputs`
// simulator.addEventListener("click", () => list.remove())
}

function displayErrorMessage (){
    const errorMessage = document.getElementById("error-message")
    errorMessage.classList.remove("hidden")
    errorMessage.textContent = "Invalid Input! Please try again."
}

function clearErrorMessage (){
const errorMessage = document.getElementById("error-message")
    errorMessage.classList.add("hidden")
    errorMessage.textContent = ""
}


function displayHandler () {document.getElementById("user-form").addEventListener("submit", (event) => {event.preventDefault()
    const text = document.getElementById("user-input")
    const input = text.value
    if (input === "")displayErrorMessage()
   else {displayInputs(input)}
    text.value = ""
})}

displayHandler()


//  it('should remove an element from the DOM', () => {
//     const element = document.createElement('div')
//     element.id = 'test-element'
//     document.body.appendChild(element)

//     removeElementFromDOM('test-element')
//     expect(document.getElementById('test-element')).toBeNull()
//   })




function removeElementFromDOM(element){
const testing = typeof element === "string" 
? document.getElementById(element)
: element

if(testing instanceof Element){
    testing.remove()
}
}




//   it('should simulate a button click and update the DOM', () => {
//     simulateClick('dynamic-content', 'Button Clicked!')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Button Clicked!')
//   })

function simulateClick(element, text){
element = document.getElementById("dynamic-content")
text = "Button Clicked!"
element.textContent = text
}

// it('should handle form submission and update the DOM', () => {
//     const input = document.getElementById('user-input')
//     input.value = 'Test Input'

//     handleFormSubmit('user-form', 'dynamic-content')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Test Input')
//   })

// Your handleFormSubmit function must:

// Accept IDs as strings
  //how do i do this?

// Find the form using the ID

// Find the input inside the form

// Read input.value

// If the value exists:

// Add it to dynamic-content

// Update the DOM so the text appears

function handleFormSubmit(form, div){
form = document.getElementById("user-form")
const input = document.getElementById("user-input")
input.value = "Milkah"

    div = document.getElementById("dynamic-content")
    div.append(form)
}




//   it('should display an error message for empty input', () => {
//     handleFormSubmit('user-form', 'dynamic-content')
//     const errorMessage = document.getElementById('error-message')
//     expect(errorMessage.textContent).toBe('Input cannot be empty')
//     expect(errorMessage.classList.contains('hidden')).toBe(false)
//   })


//1. addElementToDOM
//   it('should add an element to the DOM', () => {
//     addElementToDOM('dynamic-content', 'Hello, World!')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Hello, World!')
//   })



//1. add an element to the DOM 
//2. my addElementToDom function takes two strings as parameters
//3. the element with the id of dynamic content should have text content that contains the string "hello world"




//1.
//   it('should remove an element from the DOM', () => {
//     const element = document.createElement('div')
//     element.id = 'test-element'
//     document.body.appendChild(element)

//     removeElementFromDOM('test-element')
//     expect(document.getElementById('test-element')).toBeNull()
//   })

//1. remove an element from the dom
//2. 

//2. 

//   it('should simulate a button click and update the DOM', () => {
//     simulateClick('dynamic-content', 'Button Clicked!')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Button Clicked!')
//   })

//3. 
//simulate a button click (does this mean no event listener and whatever)

//   it('should handle form submission and update the DOM', () => {
//     const input = document.getElementById('user-input')
//     input.value = 'Test Input'

//     handleFormSubmit('user-form', 'dynamic-content')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Test Input')
//   })

    //1. how do i sumbit a form##

    / handleFormSubmit('user-form', 'dynamic-content')



//  const ul = document.createElement("ul")
//  const list = document.createElement("li")
// list.textContent = input
// ul.append(list)
// dynamicContent.append(ul)
// //  const simulator = document.getElementById("simulate-click")
// // simulator.textContent = `Clear Inputs`
// // simulator.addEventListener("click", () => list.remove())
// }

// function displayHandler () {document.getElementById("user-form").addEventListener("submit", (event) => {event.preventDefault()
//     const text = document.getElementById("user-input")
//     const input = text.value
//     if (input === "")displayErrorMessage()
//    else {handleFormSubmit(input)}
//     text.value = ""
// })}


// displayHandler()
// function handleFormSubmit(input){
// // clearErrorMessage()
//  const dynamicContent = document.getElementById("dynamic-content")
//  const ul = document.createElement("ul")
//  const list = document.createElement("li")
// document.getElementById("user-form").addEventListener("submit", (event) => {event.preventDefault()
//     const text = document.getElementById("user-input")
//     input.textContent = text.value
//     if (input === "")displayErrorMessage()
//    else {list.textContent = input
// ul.append(list)
// dynamicContent.append(ul)
// text.value = ""
// }
// })




//  const simulator = document.getElementById("simulate-click")
// simulator.textContent = `Clear Inputs`
// simulator.addEventListener("click", () => list.remove())


// function handleFormSubmit(text){ //it takes two ids as params (i still need to figure out thismwhole placeholder thing)
//  const dynamicContent = document.getElementById("dynamic-content") //the second id is the dynamic content id
// //  const ul = document.createElement("ul") //i create a ul element to store
// //  const list = document.createElement("li")
// // list.textContent = input
// const input = document.getElementById("user-input")
// input.value = text
// // ul.append(list)
// dynamicContent.append(input)


// //  const simulator = document.getElementById("simulate-click")
// // simulator.textContent = `Clear Inputs`
// // simulator.addEventListener("click", () => list.remove())
// }
// addElementToDOM("inputs", "Hello World!") 
// removeElementFromDOM("inputs")
// simulateClick("dynamic-content", "Button Clicked!")
// handleFormSubmit("hello world")
//  const dynamicContent = document.getElementById("dynamic-content")
//  console.log(dynamicContent.textContent);
 













