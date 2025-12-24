# Lab: DOM Testing and User Behavior Simulation

## Introduction

As a junior developer on a web development team, you are tasked with ensuring the functionality of a web application by validating DOM interactions and user behaviors. This involves simulating user actions, such as button clicks and form submissions, and verifying that these interactions update the DOM as expected. Mastering DOM testing techniques is crucial for maintaining application quality.

## Challenge

1. Simulate User Behavior
2. Test DOM Elements and Interactions
3. Validate DOM Manipulation Logic
4. Debug DOM Interactions

## Bonus Challenge

5. Handle Edge Cases and Optimize Tests

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Simulate User Behavior**
   - Add event listeners to simulate user actions such as button clicks and form submissions.
   - Write functions to process user input and dynamically update the DOM.

3. **Test DOM Elements and Interactions**
   - Use Jest with jsdom to write unit tests for DOM elements and interactions.
   - Validate that DOM updates occur correctly after simulated user actions.

4. **Validate DOM Manipulation Logic**
   - Test functions that modify the DOM dynamically (e.g., adding, updating, or removing elements).
   - Ensure each function handles different scenarios reliably.

5. **Debug DOM Interactions**
   - Use Browser Developer Tools to inspect DOM updates and identify issues.
   - Refine the code and resolve any errors.

6. **BONUS CHALLENGE: Handle Edge Cases and Optimize Tests**
   - Test for edge cases such as invalid inputs or missing elements.
   - Refactor tests and functions to improve readability and maintainability.

## BONUS: Additional Techniques

Explore additional techniques to improve testing and debugging:

### Modular Utility Functions

Create reusable utility functions for DOM manipulations:

```js
function createElementWithAttributes(tag, attributes) {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}
```

### Comprehensive Error Handling

Handle errors gracefully and provide feedback to users:

```js
function displayError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
}
```

## Resources

- [jsdom](https://github.com/jsdom/jsdom)
- [Jest Testing Framework](https://jestjs.io/)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [Browser Developer Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

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


     //STRATEGIC & CONCISE QUESTIONS//
1. when there is a button within my form should i have a submit event listener on my form or a click event listener on my button?
   //answer: a submit listener on the form is the best because it accounts for hitting enter too whereas a click event listener does not
   //if the intent is to submit a form listen for submit on the form
   //if the intent is ui behavior listen for a click on the button

2. how do i actually get my submit to submit?

3. how come putting the variable assigned to the input value doesn't work to clear the input but putting input.value actually works?

4. how do i remove an element from the dom? what is the syntax?
   answer: use element.remove() and first assign the element to a variable using its id so i specifically remove only that element

5. how do i change the text title of a button in js dom manipulation?
   answer: use .textContent

6. how do i get my button to clear my list of inputs when that list is defined in a function?? honestly how do i get it to clear, period? 

7. how should a click event listener be structured?

8. how do i add an element to the DOM
    //answer: by creating an element and then appending it to an existing DOM element. creating is not adding and adding requires the append keyword

9. how do i understand tests so as to meet criterion not by following tem exactly to the letter but by getting the 'logic' and then implementing this?
  1. //- at the moment my test runs, this should be the outcome but how i get there is my choice
  2. //- read one test at a time and rewrite in my own words. logic should hold but path is mine to choose
  3. //- identify the trigger-effect relationship. what action happened(trigger), what changed because of it(effect)
  4. //- learn to spot what the test does not care about
        //variable names
        //helper functions
        //split or inline logic
        //what statements i use
  5. //learn to spot what the test DOES care about
        //DOM state
        //returned values
        //side effects
  6. //group tests into behavior buckets: by doing so i can write code that meets multiple tests' criteria and i avoid coding to fit the test
         //ask myself: "what's the minimum thing i could break that would make this test fail?"
            //this lets me know: what the test depends on & what must be preserved
   7. //implement from outside-in not from inside out: think how will this make most sense to a user, if it makes sense to the user. it will be easier to make it make sense to the test
   8. //checklist
        what event/action is happening?
        what observable thing should change?
        where should that change be visible?
        what does the test not care about?
   9. //if a test makes a call it is mandatory for passing

10. when creating my function, should i give it the exact same parameters as those in my test and if so wouldn't that make it hard-coded and not dynamic enough to be used elsewhere?
   //i feel like here, the best thing to do would be to ask myself what those parameters represent and then use that in my function. like in my addtodom function, the two parameters are an id and a text. so id and text could be my two parameters

11. can i set a parameter to equal something within my function cause chat was calling it overwriting the parameter. what does this mean? what is overwriting a parameter?
    //answer: ooohhh so it is assigning a new value to a parameter within a function. aaahhh got it

12. so for my test to pass, does it have to take in both dynamic content and hello world as parameters but this would make it not dynamic...? how do i get it to be not hardcoded but still return hello world aaand is that really even possible for this test to pass, can i truly have the best of bothworlds in this sense?

13. i am realizing that setting hello world to equal to something inside the function would be assigning it a new value. uuuggghhh
  //answer: actually no. what i was doing was right because i am basically saying that let the textContent of my new element be whatever i have passed in. hardcoding would be going like, this is the test i have let the text in the parameter equal to that and then set this to the element's textContent

14. what if the id doesn't exist. can my function create it??

15. if they're passing in an id, shouldn't the element already be in the dom... if so why does it needed to be added. if not, wouldn't i need to create an element to be added and if i am creating an element wouldn't i need to take a tag instead as a param. what am i missing? pass in a tag as a param and create an element with that tag specifically? LORD?




here's what i am trying to do: "i am trying to get the clicking of the clearinputs button to clear the list of inputs stored in the div that holds the ul that holds the li that holds the actula text of the inputs. but assigning them to empty strings is not working... what gives??
  //answer: thank-YOUUUUUU Jesus!!!!! i used remove to remove the entire list element. at first, i had tried to use empty strings for .textContent but that left me with the bullet points. then .remove() did its thing. yayyyssss!!!

//INTERESTING TO NOTE//
- that input and text.value seem to be doing different things. when i use input in the if statement, it doesn't print the list buttttt when i use text.value, it still does. what actually gives??

//here's what i am trying to do: i have written a conditional statement that basically says if the user's input is empty throw them this error message. if not display the function. butttt i am not seeing the errorMessage at all. what gives??
   //oh my!!! what gives is that i was assigning a value to a const variable because i was using one equal sign instead of three for a comparison operator. gosh. thank-YOU, Jesus

//a ternary operator is shorthand for if...else
//

//GOAL//
  //to submit my lab, i need to get the tests to pass
  //and get them to pass properly.
  //how do i do this?