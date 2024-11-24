import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      Hello
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gp-5 shadow-xl bg-white rounded-xl  px-3 py-3">
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "Red" }}
            onClick={()=> setColor("red")} 
          >
            <span className="text-white">Red</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "black" }}
            onClick={()=> setColor("black")}
          >
            <span className="text-white">Black</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "green" }}
            onClick={()=> setColor("green")}
          >
            <span className="text-white">Green</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "blue" }}
            onClick={()=> setColor("blue")}
          >
            <span className="text-white">Blue</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "yellow" }}
            onClick={()=> setColor("yellow")}
          >
            <span className="text-slate-500">Yellow</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "pink" }}
            onClick={()=> setColor("pink")}
          >
             <span className="text-white">pink</span>
          </button>
          <button
            className="outline-none px-4 py-4 mr-4 rounded-xl"
            style={{ backgroundColor: "olive" }}
            onClick={()=> setColor("olive")}
          >
             <span className="text-white">default</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
