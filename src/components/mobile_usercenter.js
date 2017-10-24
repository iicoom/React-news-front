/**
 * Created by mxj on 2017/7/23.
 */
import React from 'react';
import {Row, Col, Tabs,Card} from 'antd';
const TabPane = Tabs.TabPane;
import MobileFooter from "./mobile_footer";
import MobileHeader from './mobile_header';


export default class MobileUserCenter extends React.Component {

    constructor(){
        super();
        this.state = {
            previewImage: '',
            previewVisible: false,
            usercollection: '',
            usercomments: ''
        }
    }

    componentDidMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        //取收藏数据
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    usercollection: json
                })
            })

        //取评论数据
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    usercomments: json
                })
            })
    }

    render() {

        const {usercollection,usercomments} = this.state;
        const usercollectionList = usercollection.length ?
            usercollection.map((uc,index)=>(
                <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            '您还没有收藏任何的新闻，快去收藏一些新闻吧。';

        //用户评论数据读取
        const usercommentsList = usercomments.length ?
            usercomments.map((comment,index)=>(
                <Card key={index} title={`评论于 ${comment.datetime}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                    <p>`文章uniquekey:{comment.uniquekey}`</p>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '您还没有发表过任何评论。';

        return (
            <div>
                <MobileHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercommentsList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="头像设置" key="3"></TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <MobileFooter/>
            </div>
        );
    }
}