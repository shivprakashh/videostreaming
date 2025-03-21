// 1. Define a function
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

// 2. Define a separate object
const person = {
    name: "Alice"
};

// 3. Bind the greet function to the person object
const boundGreet = greet.bind(person);

// 4. Call the bound function
boundGreet();  // Output: Hello, my name is Alice
// Valid:
function App() {
    return (
      <>
        <h1>Hello, World!</h1>
        <p>This is a React component.</p>
      </>
    );
  }
  function ccc (){
    
  }
  // Invalid (it needs to be wrapped in a single parent):

  