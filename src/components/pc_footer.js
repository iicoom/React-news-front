/**
 * Created by mxj on 2017/7/18.
 */
import React from 'react';
import { Row, Col } from 'antd';


export default class PCFooter extends React.Component{

    render(){

        return(
            <div>
                <Row type="flex"  align="middle">
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 ReactNews. All Right Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </div>
        )
    }
}