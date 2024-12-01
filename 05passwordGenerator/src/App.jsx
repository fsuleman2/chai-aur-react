import { useCallback, useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  //will return a memoized version of the callback that only changes if one of the inputs has changed.
  const passwordGenerator = useCallback(() => {
    let myPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "@#$%^&*()_+{}|";
    if (numberAllowed) str += num;
    if (characterAllowed) str += char;

    for (let i = 1; i <= length; i++) {
      //Math.floor - Returns the greatest integer less than or equal to its numeric argument.
      let char = Math.floor(Math.random() * str.length + 1); //logic to generate random password index
      myPassword += str.charAt(char);
    }
    setPassword(myPassword);
  }, [length, numberAllowed, characterAllowed, setPassword]); //dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  const notify = () =>
    toast("Text Copied!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const copyPasswordToClipBoard = () => {
    console.log("useRef", passwordRef);
    //to select/highlight password in textbox
    passwordRef.current?.select();
    //inbuild window fn to copy
    window.navigator.clipboard.writeText(password);
  };
  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password).then(
        () => {
          toast.success("Text copied to clipboard!",{
            autoClose:1000
          });
        },
        (err) => {
          toast.error("Failed to copy text.");
        }
      );
    }
  };
  const handleClick = () => {
    copyPasswordToClipBoard();
    notify();
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-orange-500 font-bold text-lg my-4 text-center">
          {"Password Generator"}
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          {/* copy button */}
          <button
            onClick={copyToClipboard}
            type="button"
            className="outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
          <ToastContainer />
        </div>
        {/* length range slider */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <label>
            {"Length:"} {length}{" "}
          </label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>{"Numbers"} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="characterInput"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>{"character"} </label>
          </div>
        </div>
      </div>
    </>
  );
}
