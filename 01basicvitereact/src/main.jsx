import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const MyApp = ()=>{
return (
  <>
  <h1>Hello from Main.JS</h1>
  </>
)
}
//we can use React inbuild method to create an element
 
const myVar = "Hello, World"

const reactElement = createElement(
  //we need to follow certain syntax provided by react
  'a',
  {href:'https://google.com', target:'_blank'},
  "Click me to Visit Goolge",
  //it will be js variable expression
  myVar
)
createRoot(document.getElementById('root')).render(
  // <MyApp/>, MyApp();OR WE CAN DO THIS WAY 
  // <App/> 
  reactElement
)
