/**
 * Created by mxj on 2017/7/15.
 */
var React = require('react');

import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
import PCNewsContainer from '../components/pc_newscontainer';

import 'antd/dist/antd.css';


export default class PcIndex extends React.Component{

    componentWillMount(){
        //定义你的逻辑即可
        console.log("Index - componentWillMount");
    }

    componentDidMount(){
        console.log("Index - componentDidMount");
    }
    render (){
        return (
            <div>
                <PCHeader/>
                <PCNewsContainer/>
                <PCFooter/>

            </div>
        )
    }
}





