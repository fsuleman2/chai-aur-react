import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub() {
//   const [apiData, setApiData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/fsuleman2")
//       .then((resp) => resp.json())
//       .then((data) => setApiData(data));
//   }, []);
const apiData = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-blue-600 e p-4 text-3xl">
      Github followers: {apiData.followers}
      <img src={apiData.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default GitHub;
export const githubInfoLoader = async () => {
    const response =  await fetch("https://api.github.com/users/fsuleman2")
     return response.json();
 }
