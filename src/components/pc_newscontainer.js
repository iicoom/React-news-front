/**
 * Created by mxj on 2017/7/19.
 */
import React from 'react';
import {Row, Col,Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';

export default class PCNewsContainer extends React.Component{
    render(){

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay:true
        };

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div className="leftContainer">
                            <Carousel {...settings}>
                                <div><img src="../images/carousel_1.jpg" alt=""/></div>
                                <div><img src="../images/carousel_2.jpg" alt=""/></div>
                                <div><img src="../images/carousel_3.jpg" alt=""/></div>
                                <div><img src="../images/carousel_4.jpg" alt=""/></div>
                            </Carousel>
                            <PCNewsImageBlock count={6} type="top" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={21} type="top" width="80%" bordered="true" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={21} type="guoji" width="80%" bordered="true" />
                            </TabPane>
                        </Tabs>
                        <Tabs className="tabs_product">
                            <TabPane tab="侧边填充" key="1">
                                <PCProduct bordered="true"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}