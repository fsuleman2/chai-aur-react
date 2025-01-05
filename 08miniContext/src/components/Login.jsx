import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    /**Why Use e.preventDefault()?
    Control: It gives you control over the element's behavior, allowing custom logic to be executed.

    UX: Can enhance user experience by handling actions more smoothly and predictably.

    SPA: Essential in single-page applications (SPAs) where form submissions and link navigations often need to be managed without full page reloads.
    **/
   setUser({username,password}); //sending or storing data in context: we defined this in UserContextProvider.tsx
   
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        name=""
        id=""
      />
      {"   "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        name=""
        id=""
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
