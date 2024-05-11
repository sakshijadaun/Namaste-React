//hello world using react

// const heading = React.createElement(
//     "h1",
//      {id: "heading",xyz: "abc"}, 
//      "Hello World from react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/* nested tag structure in core react 
let's suppose we have to make these type of structure*/

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

/*                                   ******Notes*****
=> React element is object.If we are creating any element with the createElement() method, this
method creates a object not the heading or div tag like this. 

=> createElement() method takes three argument first the tag to create than the attribute like id 
and classed and the third is for the child which is the child of the tag.this element is from the 
react.

=> render() method convert the object into the tag and then render onto the web browser. this 
element is from the reactDOM.

=>Creating html structure with thar core react thing is very unreadable. 
this is very unreadable so we use something jsx to create html element and sturucture 
this is the just core react things  

=>React can work only small portion for the website or full website. 
  we can create nested html structure also using the react
  
=>if we have to create multiple child elements in react we make a array of the multiple elements
*/

