import React, {Component} from "react";
import MovieListView from "./MovieListView";
class Scheduled extends Component{

    render() {
        return <MovieListView type={2}></MovieListView>
    }
}

export default Scheduled;