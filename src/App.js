import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Agents = () => {
  return <Agent1 />;
};

const Agent1 = () => {
  return <Agent2 />;
};

const Agent2 = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Mission Details:</h3>
          <p>Mission Name: {context.data.mname}</p>
          <p>Mission Status: {context.data.accept}</p>
          <button onClick={context.changeAcceptStatus}>Change Status</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};
const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents></Agents>
      </Provider>
    </div>
  );
};

export default App;
