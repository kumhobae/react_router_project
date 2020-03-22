import React, {Component} from "react";
import MovieListView from "./MovieListView";

class BoxOffice extends Component{
    render() {
        return <MovieListView type={3}></MovieListView>
    }
}


export default BoxOffice;