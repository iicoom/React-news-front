/**
 * Created by mxj on 2017/7/19.
 */
import React from 'react';
import {Card} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';



export default class PCNewsBlock extends React.Component{

    constructor(){
        super();
        this.state  = {
            news: ''
        }
    }

    componentWillMount(){
        var myFetchOptions = {
            method: 'GET'
        }

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type
            + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }
    render(){
        const {news} = this.state;
        // console.log(news)
        const newsList = news.length
        ?
        news.map((newsItem,index)=>(
            <li key={index}>
                <NavLink to={`/details/${newsItem.uniquekey}`}>
                    {newsItem.title}
                </NavLink>
            </li>
        ))
        :
        '没有加载的到任何新闻';
        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}

