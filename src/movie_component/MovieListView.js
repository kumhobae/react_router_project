import React, {Component} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const realDataUrl = "http://localhost:3355/real_data"
const realDataTotalUrl = "http://localhost:3355/movie_total"

class MovieListView extends Component{

    constructor(props) {
        super(props);
        this.state ={
            movie_data:[],
            page:1,
            totalPage:0,
            type:props.type,
            title:""
        }

        if(props.type === 1){
            this.state.title = "Released"
        } else if(props.type === 2){
            this.state.title = "Scheduled"
        } else if(props.type === 3){
            this.state.title = "Box Office"
        }

        this.handlePrev=this.handlePrev.bind(this)
        this.handleNext=this.handleNext.bind(this)
    }

    handlePrev(){
        //this.state.page = this.state.page > 1?this.state.page-1:this.state.page
        let currentPage = this.state.page > 1?this.state.page-1:this.state.page
        this.sendData(currentPage)
    }

    handleNext(){
        //console.log("handleNext ==>"+this.state.page < this.state.totalPage?this.state.page+1:this.state.page)
        //this.state.page =  this.state.page < this.state.totalPage?this.state.page+1:this.state.page
        let currentPage =  this.state.page < this.state.totalPage?this.state.page+1:this.state.page

        this.sendData(currentPage)
    }

    sendData(currentPage){

        axios.get(realDataUrl, {
            params:{
                page:currentPage,
                type:this.state.type
            }
        }).then((res) => {
            this.setState({movie_data:res.data, page:currentPage})
        })

        axios.get(realDataTotalUrl, {
            params:{
                type:this.state.type
            }
        }).then((res) => {
            this.setState({totalPage:res.data.totalPage })
        })
    }

    componentDidMount() {
        this.sendData(this.state.page)
    }

    render() {
        const html=this.state.movie_data.map((movie,index)=>
            <div key={index} className={"col-md-4"}>
                <div className="panel panel-default">
                    <div className="panel-heading">{movie.title}</div>
                    <div className="panel-body">
                        <NavLink to={"/movie-detail/"+movie.mno}>
                            <img alt={movie.title} src={movie.poster} width={"100%"} />
                        </NavLink>
                    </div>
                </div>
            </div>
        )

        return (
            <React.Fragment>
                <div className={"row"}>
                    <h1 className={"text-center"}>{this.state.title}</h1>
                    {html}
                </div>
                <div className={"row text-center"}>
                    <input type={"button"} value={"이전"} className={"btn btn-sm"} onClick={this.handlePrev} />
                    {this.state.page} page / {this.state.totalPage} pages
                    <input type={"button"} value={"다음"} className={"btn btn-sm"} onClick={this.handleNext} />
                </div>
            </React.Fragment>
        );
    }
}


export default MovieListView;