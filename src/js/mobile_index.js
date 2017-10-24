/**
 * Created by mxj on 2017/7/18.
 */
var React = require('react');
import { Tabs, Icon,Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
import MobileList from '../components/mobile_list';

import 'antd/dist/antd.css';


export default class MobileIndex extends React.Component{

    componentWillMount(){
        //定义你的逻辑即可
        console.log("Index - componentWillMount");
    }

    componentDidMount(){
        console.log("Index - componentDidMount");
    }
    render (){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay:true
        };

        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab={<span><Icon type="apple" />头条</span>} key="1">
                        <Carousel {...settings}>
                            <div><img src="../images/carousel_1.jpg" alt=""/></div>
                            <div><img src="../images/carousel_2.jpg" alt=""/></div>
                            <div><img src="../images/carousel_3.jpg" alt=""/></div>
                            <div><img src="../images/carousel_4.jpg" alt=""/></div>
                        </Carousel>
                        <MobileList count={10} type="top"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />社会</span>} key="2">
                        <MobileList count={10} type="shehui"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />国内</span>} key="3">
                        <MobileList count={10} type="guonei"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />国际</span>} key="4">
                        <MobileList count={10} type="guoji"/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />娱乐</span>} key="5">
                        <MobileList count={10} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}