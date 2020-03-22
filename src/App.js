import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import {browserHistory} from "react-router";
import Header from "./movie_component/Header";
import Footer from "./movie_component/Footer";
import Home from "./movie_component/Home";
import Released from "./movie_component/Released";
import Find from "./movie_component/Find";
import BoxOffice from "./movie_component/BoxOffice";
import News from "./movie_component/News";
import Scheduled from "./movie_component/Scheduled";
import config from "./movie_component/config";
import MovieDetail from "./movie_component/MovieDetail";
import Reserve from "./movie_component/Reserve";
import Music from "./movie_component/Music";

class App extends Component{

    constructor(props) {
        super(props);
        config.someProp = 'i am about to get cold'
        //Object.freeze(config)
    }

  render() {
    return (
        // history={browserHistory}
        <Router >
            <React.Fragment>
                <Header></Header>
                    <div className={"jumbotron"}>
                        <Switch>
                            <Route exact path={"/"} component={Home}></Route>
                            <Route path={"/released"} component={Released}></Route>
                            <Route path={"/scheduled"} component={Scheduled}></Route>
                            <Route path={"/box-office"} component={BoxOffice}></Route>
                            <Route path={"/news"} component={News}></Route>
                            <Route path={"/find"} component={Find}></Route>
                            <Route path={"/reserve"} component={Reserve}></Route>
                            <Route path={"/music"} component={Music}></Route>
                            <Route path={"/movie-detail/:mno"} component={MovieDetail}></Route>
                        </Switch>
                    </div>
                <Footer></Footer>
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
