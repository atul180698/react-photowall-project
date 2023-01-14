import React, {Component} from "react";
import Main from "./Components/Main";

//old import method
//import ReactDOM from "react-dom";

//New import method in React 18
import ReactDOM from "react-dom/client";

//const tasks= ["one","two","three"]

// const element = 
// <div>
//   <h1>Integers</h1>
//   <ul>
//     {tasks.map((task,index) => <li key={index}> {task}</li> )}
//   </ul>
// </div>







// const element = React.createElement("ul",null,tasks.map((task, index) => React.createElement("li",{key: index},task) ));

//old method to render using ReactDOM.render :
//ReactDOM.render(element,document.getElementById("root"))

//New updated method to render using createRoot in React 18 :
ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);