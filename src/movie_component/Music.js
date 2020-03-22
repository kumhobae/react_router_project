import React, {Component} from "react";
import Axios from "axios";

const realDataUrl = "http://localhost:3000/music.json"

class Music extends Component{
    state={
        music:[],
        detail:{}
    }

    componentDidMount() {
        Axios.get(realDataUrl).then((res)=>{
            this.setState({music:res.data})
        })
    }

    constructor(props) {
        super(props);
    }

    onTrClick(m){
        this.setState({detail:m})
    }

    render() {
        const html = this.state.music.map((m,index)=>
            <tr onClick={this.onTrClick.bind(this,m)} >
                <td>{m.rank}</td>
                <td>
                    {
                        m.state==='상승' && <span style={{"color":"red"}} >▲{m.idcrement}</span>
                    }
                    {
                        m.state==='하강' && <span style={{"color":"blue"}} >▼{m.idcrement}</span>
                    }
                    {
                        m.state==='유지' && <span style={{"color":"gray"}} >-</span>
                    }
                </td>
                <td><img src={m.poster} alt={m.title}/></td>
                <td>{m.title}</td>
                <td>{m.singer}</td>
            </tr>
        );

        return (
            <div className={"row"}>
                <h1 className={"text-center"}>Music Top 50</h1>
                <div className={"col-md-8"}>
                    <table className={"table"}>
                        <thead>
                        <tr className={"danger"}>
                            <th className={"text-center"}>순위</th>
                            <th className={"text-center"}>등폭</th>
                            <th className={"text-center"}></th>
                            <th className={"text-center"}>곡명</th>
                            <th className={"text-center"}>가수명</th>
                        </tr>
                        </thead>
                        <tbody>
                        {html}
                        </tbody>
                    </table>
                </div>
                <div className={"col-md-4"}>
                    <MusicDetail music={this.state.detail} ></MusicDetail>
                </div>

            </div>
        );
    }
}

class MusicDetail extends Component{
    render() {
        return (
            <iframe title={this.props.music.title} src={"http://youtube.com/embed/"+this.props.music.key} width={"350px"}/>
        )
    }
}

export default Music