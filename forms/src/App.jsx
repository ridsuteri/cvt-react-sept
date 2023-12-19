import { useState } from "react"

function App() {
  let [username, setUsername] = useState("");
  let [pwd, setPwd] = useState("");

  const checkValidation = ()=>{
    if(username.length < 3){
      alert('username must be more than 3 characters');
    }
  }
  return (
    <div>
      <h1>forms in react</h1>
      <form action="" onSubmit={checkValidation}>
        Username: <input type="text" onChange={(e) => { setUsername(e.target.value) }} /> <br />
        pwd: <input type="password" onChange={(e)=>{setPwd(e.target.value)}} /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
