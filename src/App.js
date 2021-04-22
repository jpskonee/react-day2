import React, {useState} from "react";
import Github from "./Components/Github";

const App = () => {

  const [name, setName] = useState("");


  const handleChange = (event) => {
    //setState(event.target.value)
  }



  return (
    <div style={{
      margin: "50px",
    }}>
      <div >
      <label style={{
          marginRight:"20px"
        }}> Enter your name</label>
        <input
          placeholder="Enter your Name"
          name="name"
          value={name}
          autoComplete="off"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        
        <button onClick={handleChange}> Enter </button>
      </div>
      
      <div>
        <h1> Welcome {name}</h1>
      </div>

        <Github />    
      
    </div>
    
  )
}

export default App;