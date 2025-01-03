//USE STATE HOOKS

const { useCallback } = require("react");

// import React from 'react'
// import './App.css'
// import { useState } from 'react';

// function App(){
// const [counter,setCounter] = useState(10);
// console.log(counter);
// console.log(setCounter);

/*
const [color,setColor]= useState('Red')

const changeColor=()=>{
  setColor('Blue');
}

*/

// const[brand,setBrand]= useState('Ferrari');
// const[model,setModel]= useState('Roma');
// const[year,setYear]= useState('2024');
// const[color,setColor]= useState('red');

// creating the object

//  const[car,setCar]= useState({  //in this object we store the data in the key value pair
//     brand:"Ferrari",
//     model:"Roma",
//     year:"2023",
//     color:"red"
//  });

//  const changeColor=()=>{
//   setCar({color:"red"})
//  }

// const changeColor=()=>{
//   setCar((car)=>{
//     return {...car, color:"blue"}
//   })
// }

// const[count,setCount]= useState(0);
// const increaseCount=()=>{
//   setCount(count+1)

// }

//using the state variable we can update the user interface
// const[count,setCount]= useState(0);
// const increaseCount=()=>{
//   setCount(prev=>prev+1)
//   setCount(prev=>prev+1)
//   setCount(prev=>prev+1)
//   setCount(prev=>prev+1)

// }

//first of sll what is to be going on the initial colorname is red assign for the h1 tage inside text
// due to the onclick button when we have to click that button there is the changecolor function is to be call then the using the useState the setcolor is changing the text Red to the Blue

//   return (
//       <>

//         <h1>My {car.brand}</h1>
//        <h2>It is a {car.color} {car.model} from {car.year}</h2>
//       <button onClick={changeColor}>Blue</button>

//       </>
//   )
// }

//     return (
//       <>

//      <h1>Count:{count}</h1>
//      <button onClick={increaseCount}>Increase by 4</button>

//       </>
//   )
// }

// export default App

//   USE EFFECT HOOKS-->

//the useEffect allows you to perform side effect in your components.
//Examples of the side Effect are--> Fetching data from API, Directly updating the DOM,Timer like SetTimeout and setinterval

// import React,{useEffect,useState} from 'react'
// import './App.css'

// function App(){
//   const [count,setCount]= useState(0)

//   //whenever we use the useEffect without any dependincies it will execute this function whenever any state change in the component
//   // but as we have  already know the count component changing after every 2 second the after every 2 second it will call the setTimeout function
//   // when this function executed continuously it will increase the value by one
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count=> count+1);
//     },2000)
//   },[])  //but if here when we have to use the empty array []
// //it will execute only once after the data loaded
// return (
//     <>
// <h1>I've rendered {count} times!</h1>

//     </>
// )
// }

// export default App

//useRefHook--> useRef is a react Hook that allows us to create mutable variables,which will not re-render the component.
//useRef is also used  to accessing the DOM elements.

// import React,{useEffect,useState,useRef} from 'react'
// import './App.css'

// function App(){
// const [value,setValue]= useState(0);
// const count = useRef(0);

// useEffect(()=>{
//   count.current=count.current+1;
// });

// return (
//     <>
// <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
// <h1>{value}</h1>
// <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
// <h1>Render Count:{count.current}</h1>
//     </>
// )
// }

// export default App

//dom use of the useRef hook
// import React,{useEffect,useState,useRef} from 'react'
// import './App.css'

// function App(){
// const inputElem=useRef();

// const btnClicked=()=>{
//   console.log(inputElem.current);
//   inputElem.current.style.background="blue";

// }

// return (
//     <>
// <input type="text" ref={inputElem}/>
// <button onClick={btnClicked}>Click Here</button>
//     </>
// )
// }

// export default App

// useMemo HOOK---> The React useMemo hook return a memorized value,(it's like caching a value so that it doesn't need to be recalculated)
// useMemo hook only runs when one of it's dependicies get updated
//this can improve the performance of the application,there is one more hook in react to improvr performance,that is useCallback hook

// The useMemo and useCallBack HOOKS are similar.The main difference is:
// --> useMemo returns a memorized value
// --> useCallback returns a memorized value

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);

//   function cubeNum(num) {
//     console.log("Calculation done!");
//     return Math.pow(num, 3);
//   }

//   // const result = cubeNum(number);

//   const result=useMemo(()=> cubeNum(number),[number]);
//   return (
//     <>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//       <h1>Cube of the number: {result}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter++
//       </button>
//       <h1>Counter: {counter}</h1>
//     </>
//   );
// }

// export default App;

//USE CALLBACK
// useCallback is a React Hook that lets you cache a function definition between <re-renders  
// it means, when we use the useCallback Hook it doesn't create multiple instance of same function when re-render happens.
//instead of creating new instance of the function,it provides the cached function on re-render of the components.


// import React,{useCallback,useState} from 'react'
// import './App.css'
// import Header from './components/Header';

// function App(){
//   const [count,setCount]= useState(0);
//   // const newFn=()=>{}
//   const newFn = useCallback((count)=>{},[])//use callback hook to store the function in the cache memory

// return (
//     <>
//     <Header newFn ={newFn}/>
// <h1>{count}</h1>
// <button onClick={()=>setCount(prev=>prev+1)}>Click here</button>

//     </>
// )
// }

// export default App

// useContext HOOKS
//useContext is a react hook that allows you access data from any component explicitely passing it down through props at every level
// useContext is used to manage Global data in the React App


import React  from 'react'
import './App.css'
import Profile from './components/Profile';
import Footer from './components/Footer';

function App(){
 
return (
    <>
<Profile/>
<Footer/>

    </>
)
}

export default App