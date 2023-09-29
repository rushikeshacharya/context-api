import React, {useState} from "react";

const Child = (props) => {
  return(
    <div>
      <h2>
        Child: {props.brand}
      </h2>
    </div>
  )
}

const GrandChild = (props) => {
  return(
    <div>
      <h2>GrandChild: </h2>
      <Child brand={props.brand} />
    </div>
  )
}
const App = () => {
 const [brandname] = useState("Amazon");
  return (
    <div>
      <h1> Hello</h1>
      {/* <Child brand={brandname} /> */}
      <GrandChild brand={brandname}/>
    </div>
  )
}

export default App;