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
