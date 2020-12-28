import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
function Movie({year, title, summary, poster }) {
    return <div class="movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary" P>{summary}</p>
        </div>
    </div>;
}
//propsTypes는 number, string, bool, func, node등 다양하게 존재합니다.
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.number.isRequired
};
//export해줘야 다른 js에서 Movie라는 component를 사용할 수 있습니다.
export default Movie;