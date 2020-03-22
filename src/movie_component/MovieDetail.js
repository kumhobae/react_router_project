import React, {Component} from "react";
import Axios from "axios";
import {NavLink} from "react-router-dom";

const realDataUrl = "http://localhost:3355/detail"

class MovieDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            detail:{},
            mno: props.match.params.mno
        }
    }

    componentDidMount() {
        Axios.get(realDataUrl, {
            params:{
                mno:this.state.mno
            }
        }).then((res) => {
            console.log(res.data)
            console.log(res.data[0])
            this.setState({detail:res.data[0]})
        })
    }

    render() {
        return (
            <div className={"row"}>
                <h1 className={"text-center"}>
                    {this.state.detail.title} 영화 상세보기
                </h1>
                <table className={"table table-hover"}>
                    <tr>
                        <td width={"30%"} className={"text-center"} rowSpan={"7"}>
                            <img alt={this.state.detail.title} src={this.state.detail.poster} width={"250"} />
                        </td>
                        <td colSpan={"2"}>{this.state.detail.title}</td>
                        <tr>
                            <td width={"10%"}>감독</td>
                            <td width={"60%"}>{this.state.detail.director}</td>
                        </tr>
                        <tr>
                            <td width={"10%"}>출연</td>
                            <td width={"60%"}>{this.state.detail.actor}</td>
                        </tr>
                        <tr>
                            <td width={"10%"}>장르</td>
                            <td width={"60%"}>{this.state.detail.genre}</td>
                        </tr>
                        <tr>
                            <td width={"10%"}>등급</td>
                            <td width={"60%"}>{this.state.detail.grade}</td>
                        </tr>
                        <tr>
                            <td width={"10%"}>평점</td>
                            <td width={"60%"}>{this.state.detail.score}</td>
                        </tr>
                        <tr>
                            <td width={"10%"}>상영일</td>
                            <td width={"60%"}>{this.state.detail.regdate}</td>
                        </tr>
                        <tr>
                            <td colSpan={"3"} height={"200"} valign={"top"}>
                                {this.state.detail.story}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={"3"} className={"text-right"}>
                                <NavLink to={"/Released"}>
                                    <span className={"btn btn-lg btn-primary"}>목록</span>
                                </NavLink>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
        )
    }
}

export default MovieDetail