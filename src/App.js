import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  state={
    count:0
  };
  //setstate를 호출할때마다 react는 새로운 state 와 함께 render function울 호출할것이다.
  add=()=>{this.setState(current=>({count:current.count+1}))};

  minus=()=>{this.setState(current=>({count:current.count-1}))};
  render() {
   return (<div>
     <h1>the number is:{this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button></div>
   );
  }
}
export default App;
