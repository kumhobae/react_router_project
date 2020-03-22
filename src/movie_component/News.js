import React, {Component} from "react";
import Axios from "axios";

const realDataUrl = "http://localhost:3355/movie_news"

class News extends Component{

    state={
        movie_news:[]
    }

    componentDidMount() {
        Axios.get(realDataUrl).then((res)=>{
            this.setState({movie_news:res.data})
        })
    }

    render() {
        const html = this.state.movie_news.map((news) =>
            <table className={"table"}>
                <tbody>
                    <tr>
                        <td rowSpan={"3"} width={"30%"} className={"text-center"}>
                            <a href={news.link}><img alt={news.title} src={news.poster} width={"100%"}/></a>
                        </td>
                        <td width={"70%"}>
                            {news.title}
                        </td>
                    </tr>
                    <tr>
                        <td width={"70%"}>
                            {news.content}
                        </td>
                    </tr>
                    <tr>
                        <td width={"70%"} className={"text-right"}>
                            {news.author} ({news.regdate})
                        </td>
                    </tr>
                </tbody>
            </table>
        )

        return (
            <div className={"row"}>
                <h1 className={"text-center"}>News</h1>
                {html}
            </div>
        );
    }
}

export default News;