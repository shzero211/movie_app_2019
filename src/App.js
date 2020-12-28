import React from 'react';
import axios from 'axios'; 
import PropTypes from "prop-types"

class App extends React.Component{
state={
  isLoading:true
  movies:[]
};
//axios는 npm i axios 를 통해 다운받았고 url에서 정보를 받을때쓴다. async 와 wait 는 정보가져오는데 시간이 걸린다는 것을 나타냄
getMovies=async()=> {const movies= await axios.get("https://yts-proxy.now.sh/list_movies.json")};
componentDidMount(){
  this.getMovies();
}
render(){
  const {isLoading}=this.state;
  return <div>{isLoading?"Loading...":"we are ready"}</div>;
}
}
export default App;
