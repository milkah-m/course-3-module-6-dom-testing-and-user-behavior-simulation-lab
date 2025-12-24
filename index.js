

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
function addElementToDOM(id, text){
 const element = document.getElementById(id) //passing in id to stand for the string or whatever id we will be using to get the element
 console.log(element) //to check if it is null
 
 if(element === null){ //what to do if no element like that exists
    const newElement = document.createElement("div") //create a new element
    newElement.id = id //give it the id of the 1st param
    newElement.textContent = text //let its text content be the second param
    document.body.append(newElement) // make sure to append this new element to the body cause otherwise, you won't see it on the dom
}
//what to do if that element exists
 else {element.textContent = text  //give it the textContent of the second param
        document.body.append(element) //append it to the body for dom visibility
}}

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
function removeElementFromDOM(id){
const element = document.getElementById(id)
element.remove()
}

//   it('should simulate a button click and update the DOM', () => {
//     simulateClick('dynamic-content', 'Button Clicked!')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Button Clicked!')
//   })

//3. 
//simulate a button click (does this mean no event listener and whatever)

function simulateClick(id, text){
    const element = document.getElementById(id)
    element.textContent = text
}


//   it('should handle form submission and update the DOM', () => {
//     const input = document.getElementById('user-input')
//     input.value = 'Test Input'

//     handleFormSubmit('user-form', 'dynamic-content')
//     const dynamicContent = document.getElementById('dynamic-content')
//     expect(dynamicContent.textContent).toContain('Test Input')
//   })

    //1. how do i sumbit a form##

function handleFormSubmit(formId, containerId){ //define handleFormSubmit function that takes ids as params. these ids represent the input id and the container id
 const dynamicContent = document.getElementById(containerId) //get the container element from the dom for control and manipulation
 const form = document.getElementById(formId) //get the form id from the dom for Godly control and manipulation
 const input = form.querySelector("input") //get the input from the form using query selector
  const value = input.value 
 dynamicContent.textContent = value  //say that the textContent of the container should equal the value of the input field. basically its text as well
   if (value === ""){
      const errorMessage = document.getElementById("error-message")
    errorMessage.classList.remove("hidden")
    errorMessage.textContent = "Input cannot be empty"
   }
}

// handleFormSubmit('user-form', 'dynamic-content')



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
 


module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
handleFormSubmit,
}

// input.value = secondID

