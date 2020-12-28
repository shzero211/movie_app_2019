import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}
//propsTypes는 number, string, bool, func, node등 다양하게 존재합니다.
Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.number.isRequired
};
//export해줘야 다른 js에서 Movie라는 component를 사용할 수 있습니다.
export default Movie;