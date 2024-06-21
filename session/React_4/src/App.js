import React from "react";
import axios from "axios";

function App() {
  // POST 예제 (CREATE)
  const onPost = () => {
    axios({
      method: "Post",
      url: "https://reqres.in/api/users",
      data:{
        "name": "morpheus",
        "job": "leader"
    },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  };

  // GET 예제 (1) (LIST USERS)
  const getFirst = () => {
    axios({
      method: "Get",
      url: "https://reqres.in/api/users?apge=2",
      
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  };
  // GET 예제 (2) (SINGLE USER)
  const getSecond = () => {
    axios({
      method: "Get",
      url: "https://reqres.in/api/users/2",
      
    })
    .then((response) => {
      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  };
  // GET 예제 (3) (SINGLE USER NOT FOUND)
  const getThird = () => {
    axios({
      method: "Get",
      url: "https://reqres.in/api/users/23",
      
    })
    .then((response) => {
      console.log(response.data.lastname);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
  };

  return (
    <>
      <h1>POST</h1>
      <button onClick= {onPost}> POST 예제 </button>
      {/* GET */}
      <h1>GET</h1>
      <button onClick= {getFirst}> 예제 1</button>
      {/* GET 예제 2번 */}
      <button onClick= {getSecond}> 예제 2</button>
      {/* GET 예제 3번 */}
      <button onClick= {getThird}> 예제 3</button>
    </>
  );
}

export default App;
