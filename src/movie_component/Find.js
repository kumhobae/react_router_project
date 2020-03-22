import React, {Component} from "react";
import $ from "jquery"
import Axios from "axios";
const realDataUrl = "http://localhost:3355/movie_find"

class Find extends Component{

    state={
        movie:[]
    }

    componentDidMount() {
        Axios.get(realDataUrl).then((res) =>{
            this.setState({movie: res.data})
        })

        $('#keyword').keyup(function () {
            let k= $(this).val()
            $('#user-table > tbody > tr').hide()
            let temp=$('#user-table > tbody > tr > td:nth-child(4n+2):contains("'+k+'")')
            $(temp).parent().show()
        })
    }

    render() {
        const html = this.state.movie.map((m, index) =>
            <tr key={index}>
                <td><img alt={m.title} src={m.poster} width={"35"} height={"35"} /></td>
                <td>{m.title}</td>
                <td>{m.director}</td>
                <td>{m.actor}</td>
            </tr>
        )

        return (
            <div className={"row"}>
                <h1 className={"text-center"}>Find</h1>
                <div style={{"height":"35px"}}></div>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input id={"keyword"} type={"text"} className={"input-sm"} size={"20"} placeholder={"영화검색"} />
                        </td>
                    </tr>
                </table>
                <table className={"table"} id={"user-table"}>
                    <thead>
                    <tr className={"danger"}>
                        <th></th>
                        <th>제목</th>
                        <th>감독</th>
                        <th>출연</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Find;