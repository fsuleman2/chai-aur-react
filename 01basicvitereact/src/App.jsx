function App() {
  const myVar = "Hello, Guys!"
  const myFun = ()=> "Hello from mYfUN"
  return (
    <>
      <h1>Hello from VITE {myVar}</h1> 
      {/* we cannot to expression evalution here like */}
      {/* {if(true) "Hello"} */}
      {/* coz it will be passsed as an json object */}
      {/* we cannot write if else in json  */}
      {/* ex: jsonObj = {if(true)}  right we can't that's why: refer main.jsx 'reactElement'*/}
      {/* so the end it will accept only final expression only, if we wannted to it then */}
      {/* you can write function outside of return and call it here, ex: */}
      {myFun()}
    </>
  );
}

export default App;
