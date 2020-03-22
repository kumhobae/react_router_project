import React, {useState,useEffect} from 'react';
import axios from 'axios';
import App from "./App";

function App3() {
    const [movie,setMovie] = useState([]);
    const [detail,setDetail] = useState({});
    const [isOpen,setIsOpen] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:3000/movie.json").then((res) => {
            setMovie(res.data);
        });
    });

    const html = movie.map((m, index) =>
        <div key={index} className="col-md-4">
            <div className="thumbnail">
                <a href="#">
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}
                         onClick={()=>setDetail(m)}/>
                    <div className="caption">
                        <p>{m.title.substring(0,20)}</p>
                    </div>
                </a>
            </div>
        </div>
    );

    return (
        <div className={"row"}>
            <div className={"col-md-8"}>
                {html}
            </div>
            <div className={"col-md-4"}>
                <Detail m={detail} />
            </div>
        </div>
    );
}

function Detail(props) {

    return (
        <table className={"table"}>
            <tr>
                <td width={"30%"} className={"text-center"} rowSpan={"6"}>
                    <img alt={props.m.title} src={props.m.poster} width={"100%"} />
                </td>
                <td >{props.m.title}</td>
            </tr>
            <tr>
                <td width={"20%"}>감독</td>
                <td width={"50%"}>{props.m.director}</td>
            </tr>
            <tr>
                <td width={"20%"}>출연</td>
                <td width={"50%"}>{props.m.actor}</td>
            </tr>
            <tr>
                <td width={"20%"}>장르</td>
                <td width={"50%"}>{props.m.genre}</td>
            </tr>
            <tr>
                <td width={"20%"}>등급</td>
                <td width={"50%"}>{props.m.grade}</td>
            </tr>
            <tr>
                <td width={"20%"}>상영일</td>
                <td width={"50%"}>{props.m.regdate}</td>
            </tr>
            <tr>
                <td colSpan={"3"} width={"20%"}>{props.m.story}</td>
            </tr>
        </table>
    );
}

export default App3;