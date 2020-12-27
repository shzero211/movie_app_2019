import React from 'react';
import PropTypes from "prop-types"
//클래스 컴포넌트는 function 컴포너트와 달리 return 을 할수없으며 render 을 통해 return 해서 결과 출력 가능
class App extends React.Component{
  state={
    count:0
  };
  add=()=>{console.log("add")}
  minus=()=>{console.log("minus")}
  render() {
   return (<div>
     <h1>the number is:{this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button></div>
   );
  }
}
export default App;
