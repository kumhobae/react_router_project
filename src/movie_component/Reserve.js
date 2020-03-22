import React, {Component} from "react";
import Axios from "axios";
const realDataUrl = "http://localhost:3355/movie_find"

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state={
            movie:[],
            ss:''
        }

        this.handleUserInput=this.handleUserInput.bind(this);

    }

    handleUserInput(ss){
        this.setState({ss:ss})
    }

    componentDidMount() {
        Axios.get(realDataUrl).then((res) =>{
            this.setState({movie: res.data})
        })

    }

    render() {
        return (
            <div className={"row"}>
                <SearchBar onUserInput={this.handleUserInput} ss={this.state.ss}></SearchBar>
                <MovieTable movie={this.state.movie} ss={this.state.ss} ></MovieTable>
            </div>
        );
    }
}

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.onUserInput(e.target.value)
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} type={"text"} className={"input-sm"} placeholder={"Search"} />
            </form>
        );
    }
}

class MovieTable extends Component{

    render() {
        let row=[]
        this.props.movie.forEach((m) => {


            if(m.title.indexOf(this.props.ss)===-1){
                return;
            }

            row.push(<MovieRow movie={m} />)

        })

        return (
            <table className={"table table-hover"}>
                <thead>
                    <tr className={"danger"}>
                        <th></th>
                        <th>제목</th>
                        <th>감독</th>
                        <th>출연</th>
                        <th>장르</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}

class MovieRow extends Component{

    render() {
        return (
            <tr>
                <td><img alt={this.props.movie.title} src={this.props.movie.poster} width={"35"} height={"35"} /></td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.director}</td>
                <td>{this.props.movie.actor}</td>
                <td>{this.props.movie.genre}</td>
            </tr>
        );
    }
}
export default Reserve