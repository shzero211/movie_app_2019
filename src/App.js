import React from 'react';
import axios from 'axios';
import Movie from './Movie'

import PropTypes from "prop-types"
//state를 이용하기위해서 class component를 사용합니다
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  //axios는 npm i axios 를 통해 다운받았고 url에서 정보를 받을때쓴다. async 와 wait 는 정보가져오는데 시간이 걸린다는 것을 나타냄
  getMovies = async () => {
    //ES6에서의 기능으로 오브젝트 안에 있는 값을 불러올 수 있습니다.
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    //this.state를 생략하기위한 const
    const { isLoading, movies } = this.state;
    //object를 풀어줄 때 map함수를 사용하고, 또, jsx에서는 props를 통해서 값을 전달합니다. key는 표현되지 않지만 필수props입니다.
    return <div>{isLoading ? "Loading..." : movies.map( movie => {
      console.log(movie);
      return <Movie 
      key={movie.id}
      id={movie.id} 
      year={movie.year} 
      title={movie.title} 
      summary={movie.summary} 
      poster={movie.medium_cover_image} 
      />
    })}
    </div>;
  }
}
export default App;
