/**
 * Created by mxj on 2017/7/19.
 */
import React from 'react';
import {Row,Col} from 'antd';
import {NavLink} from 'react-router-dom';


export default class MobileList extends React.Component{

    constructor(){
        super();
        this.state  = {
            news: '',
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

    loadMore(resolve){
        setTimeout(()=>{
            var count = this.state.count;
            this.setState({
                count: count+5,
            })

            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type
                + "&count=" + this.state.count, myFetchOptions)
                .then(response => response.json())
                .then(json => this.setState({news: json}));

            this.setState({
                hasMore: count>0 && count<50
            });

            resolve();

        },2e3)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                hasMore: 1,
                initializing: 2
            })
        },2e3)
    }

    render(){
        const {news} = this.state;
        const {hasMore,initializing,refreshedAt} = this.state;

        const newsList = news.length
            ?
            news.map((newsItem,index)=>(
                <section key={index} className="m_article list-item special_section clearfix">
                    <NavLink to={`details/${newsItem.uniquekey}`}>
                        <div className="m_article_img">
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.realtype}</span>
                                    <span className="m_article_time">{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </section>
            ))
            :
            '没有加载的到任何新闻';
        return(
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}

                    </Col>
                </Row>
            </div>
        )
    }
}