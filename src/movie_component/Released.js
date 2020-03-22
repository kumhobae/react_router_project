import React, {Component} from "react";
import MovieListView from "./MovieListView";

class Released extends Component{
    render() {
        return <MovieListView type={1}></MovieListView>
    }
}

export default Released;