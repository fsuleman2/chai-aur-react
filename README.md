# chai-aur-react
## React New Way of installation 
```
npm create vite@latest
```

## Best-Practices
1. Always First Letter should be Capitalize of your File name and Function name.
## Video - 4
### creating custom react
## Video-5
used useState hook and created a counter to understand the hook better.
## Video- 6
mostly spend time in understanding about the [React Fiber](https://github.com/acdlite/react-fiber-architecture)

## Video- 7
Created 03 project and added Tailwind for VITE
(For Best free stock photos)['https://www.pexels.com/]
(For UI Components)
talks about tailwind and props, which i already know.

## Video- 8
React Interview Question: suppose if we have counter functionality
```  
const [counter, setCounter] = useState(15);
 const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
```
<p>We think output will be 19 but not! it will be 16 only , Why? because we've read about react Fiber what it basically does, suppose if we have multiple same function is executed multiple times, it will optimize it by collecting together in batch and then send it to UI, this will reduce duplicate calls. though we won't write that much unoptimized code, but if we had a scenario to be resolved like this, then in that case we can use callback funtion provided by useState for our setCounter.</p>

```
 const addValue = () => {
    setCounter((previousCounter) => previousCounter + 1);
    setCounter(previousCounter => previousCounter + 1);
    setCounter(previousCounter => previousCounter + 1);
    setCounter(previousCounter => previousCounter + 1);
    setCounter(previousCounter => previousCounter + 1);
  };
```
<p>Now output will be 19 when you click addValue, because fiber will not take this in batch process and executed separatly</p>

## Video- 9
completed simple bg changer project

## Video- 10
completed the project 05passwordGenerator by using useCallBack, useEffect and UseRef

## Video - 11
06CurrencyConverter Project
custom hooks
useId
In React, the useId hook is useful for generating unique IDs that can be used for accessibility purposes, such as linking labels to form inputs. It ensures that IDs are unique across the entire React component tree. Here's a basic example of how you can use useId:

Installation:
Ensure you have React version 18 or higher, as useId is a part of the React 18 API.

## Video - 12 - React Router
07reactRouter Project
we have used react router and installed it with this commad
```
npm i react-router

```
React Router has Link and NavLink, both are same but it does not, NavLink provides more features.
- Link : will used it inplace of anchor <a></a> tag, Anchor tag causes page to be refreshed, that's why we use Link tag to avoid page refreshed!.
- isActive comes by default in class, based on the route in the url, we can customize to make it colourfull tab.
- UI is not loading properly need to Debug
## Video - 13 - Context API
08miniContext
- context api comes in-built with reactjs no need to install any package.
its solves problem like props drilling

- what is context in reactjs.
 In ReactJS, context is a powerful feature that allows you to pass data through the component tree without having to pass props down manually at every level. This can be very useful for global data that many components need to access, such as the current authenticated user, theme settings, or application settings.
 -- PART-01 37:45 timestamp done

 same video PART-02 - 37:48
 09themeSwitcher
  -  darkMode:'class',//remeber to add theme add in tailwind.config.js
 
The useContext hook in React provides an easy way to share data between components without having to pass props manually at every level. It allows you to access the value of a context in any component,
1. Create a Context: First, you create a context using the React.createContext() method. This provides a way to define a "global" value that can be shared across components.

2. Provide the Context Value: You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

3. Consume the Context Value: Any component can use the useContext hook to access the context's value without passing props

## Video 14 - 10todoContextLocal
Here we are creating an Todo-List App with Context API and Local Storage

- completed Todo Logic at 39:00
- Starting Local Storage Concept 
- completed the project with all the functionality, do look the all the logics

## Video 15 - Redux Tool Kit
https://redux-toolkit.js.org/introduction/getting-started
slice means reducer
nanoid gen random id's
line-12 todoSlice.js
createSlice: A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
name : The slice's name. Used to namespace the generated action types.