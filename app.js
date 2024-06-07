import React from "react";
import ReactDOM from "react-dom/client";
// import './app.css';

// !Episode 1 and Episode 2 

// ***hello world using react***

// const heading = React.createElement(
//     "h1",
//      {id: "heading",xyz: "abc"}, 
//      "Hello World from react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// *nested tag structure in core react let's suppose we have to make these type of structure*/

/* <div id="parent">
    <div id="child">
        <h1>I,m H1 tag</h1>
    </div>
</div>  */

// const parent = React.createElement(
//     "div",{id: "parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"I,m a H1 tag")
// ));
// console.log(parent);

// root.render(parent);

/* if we want the sibiling of the child like that
<div id="parent">
    <div id="child">
        <h1>I,m H1 tag</h1>
        <h2>I,m H1 tag</h2>
    </div>
</div>

Then we convert the child into the array like this */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div",{id:"child"}, [
//     React.createElement("h1",{},"I,m a H1 tag"),
//     React.createElement("h2",{},"I,m a H2 tag"),
//     ])
// );

// console.log(parent);

// root.render(parent);


//If want this type of structure in core react
/* <div id="parent">
    <div id="child">
        <h1>I,m H1 tag</h1>
        <h2>I,m H1 tag</h2>
    </div>
    <div id="child2">
        <h1>I,m H1 tag</h1>
        <h2>I,m H1 tag</h2>
    </div>
</div> */

//we will do something like this 
// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id:"child"}, [
//         React.createElement("h1",{},"I,m a H1 tag"),
//         React.createElement("h2",{},"I,m a H2 tag"),
//     ]),
//     React.createElement("div",{id:"child2"}, [
//         React.createElement("h1",{},"I,m a H1 tag"),
//         React.createElement("h2",{},"I,m a H2 tag"),
//     ]),
// );

// console.log(parent);

// root.render(parent);

/*                                     ******Notes*****
=> React element is object.If we are creating any element with the createElement() method, this
method creates a object not the heading or div tag like this. 

=> createElement() method takes three argument first the tag to create than the attribute like id 
and classed and the third is for the child which is the child of the tag.this element is from the 
react.

=> render() method convert the object into the tag and then render onto the web browser. this 
element is from the reactDOM.

=>Creating html structure with the core react thing is very unreadable. 
this is very unreadable so we use something jsx to create html element and sturucture 
this is the just core react things  

=>React can work only small portion for the website or full website. 
  we can create nested html structure also using the react
  
=>if we have to create multiple child elements in react we make a array of the multiple elements
*/

// !Episode 3

// ***Element 1 without jsx or with core react***
//React.createElement = Object js = HTMLElment(render)
// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React"
//     )
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//***Element 1 with jsx***
// const jsxHeading = <h1 id="heading">Namaste React</h1>

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//***if we have multiple html elements then we wrap up with the paranthesis () 
// const jsxHeading = (
//     <h1 className="head" tabIndex="5"> 
//         Namaste React using jsx 
//     </h1>
// )                                

//  !React component 
//  ***functional component ***
// const HeadingComponent1 = () => {
//     return <h1 id="heading1">Namaste React functional component1</h1>
// }

//short hand of arrow functional component  
// const HeadingComponent2 = () => <h1 className="heading2">Namaste React functional component2</h1>

//or we can return nested
// const HeadingComponent3 = () => (
//     <div id="container">
//         <h1 className="heading3">Namaste react functional component3</h1>
//     </div>
// );

//***how to render functional component on the web browser 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent1 />);

//*** if we want to render one functional component inside another component then we do like this
//* this same thing is called "component composition"
// const HeadingComponent4 = () => (
//     <div id="container">
//         <HeadingComponent1 />  
//         <h1 className="heading4">Namaste react functional component4</h1>
//     </div>
// );
// root.render(<HeadingComponent4 />);

//*** we can also use normal functions to write functional component without arrow function */
// const title = function () {
//     return (                  //we have to write return here in normal function
//         <div id="title">
//             <h1>functional component using normal function</h1>
//         </div>
//     )
// }

//*** we can write pure javascript code inside the functional component and inside jsx code*/
// const number = 1000;
// const HeadingComponent5 = () => (
//     <div id="container">
//         {number}
//         <h2>{100+200}</h2>   
//         <h1 className="heading4">Namaste react functional component4</h1>
//     </div>
// ) //{} in this curly braces we can write pure js code 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent5 />);


//*** How to write react element inside react component
//*react elements at the end of the day is js so we can write them as a pure js inside {}
// const  ReactComponent = () => (
 
//     <h1 className="head" tabIndex="5"> 
//         write react element inside react component
//         {reactElement} 
//     </h1>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ReactComponent />);

//**note-> we can write tag and js code only inside the jsx code not the outside
//*         of the jsx code.

//**note -> we can also write react component inside react element e.g, <HeadingComponent/> */

//** note -> if we get data from an api and suppose the data is malicious and then the data will
//*          execute and the atttacker can run js in our browser and can fetch our laptop and 
//*          browser data but {} these curly braces takes care of these things in which js written*/

//**note -> we can write </title> react component inside the react element and also we can also 
//*         write something like this <title></tiltle>. these both are same and we can write these
//*         multiple times */

//**note -> we can say that functional component are the javascript function at the end of the day
//*         so we can write js code in the jsx code so we can call functional component also in jsx
//*         code because it's the js function basically */ eg {title()}

//**note -> if we write component inside element and then same element with same component nothing
//*         will render in out html. browser will run infinite times and goes to infinite loops */

//  !Assignment - Episode 3 
// const Navbar = () => {
//     return (
//         <h1>hii</h1>,
//         <div>
//         <img src="icon.png" alt="logo-image" className="icon"></img>
//         <input type="search" placeholder="search......"></input>
//         <img src="profile.png" alt="user-image" className="profile"></img>
//     </div>
       
//     );
// };
   
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(<Navbar></Navbar>)

const Header = () => {
    return (
      <header>
        <nav>
          <img src="./icon.png" alt="Logo" className="img-logo" />
          <input type="text" className="input" placeholder="Type something..." />
          <img src="./profile.png" alt="user-image" className="img-profile" />
        </nav>
      </header>
    );
  };


const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Header/>);




